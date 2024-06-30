

<script lang="ts" setup>

import BackwardButton from '~/components/buttons/BackwardButton.vue';
import ManagerCard from '~/components/cards/ManagerCard.vue';
import {ref, computed} from 'vue';
import { useRoute, useFetch } from 'nuxt/app';
import type { Person, Service, Project } from '~/types/types';
// Retrieve Id of person from url and build the server url for api request
const route = useRoute();
let id = ref(Number(route.params.id)); 
const personDataUrl = `http://localhost:3005/people/${id.value}`;
const countPeopleUrl = "http://localhost:3005/count-people";

// Variable ref<Person> holding all the data for the person with the specified id
let personData = ref();
let peopleCounter = ref();
try {
  const { data: fetchPerson } = await useFetch<Person[]>(personDataUrl);  
  const { data: countPpl } = await useFetch<Number>(countPeopleUrl);
  const people: Person[] | null= fetchPerson.value;
  peopleCounter.value = Number(countPpl.value);
  if(people){
    personData.value = people[0];
  }
  } catch (error) {
    console.error('Error while fetching data for person ${id}', error);
}

// Some computed properties that are extracted from the data
const completeName = computed(()=>{return personData.value.name + " " + personData.value.surname});
const managesProjects = computed(() => {
  return personData.value.project.length > 0;
});
const managesServices = computed(() => {
  return personData.value.responsible_service.length > 0;
});

const previousLink = computed(() => {
  if(id.value > 1){
    const previousId = id.value - 1;
    return "/about-us/people/" + previousId;
  } else {
    return null;
  }
});

const nextLink = computed(() => {
  if(id.value < peopleCounter.value){
    const nextId = id.value + 1;
    return "/about-us/people/" + nextId;
  } else {
    return null;
  }
});


// Build the arrays necessary to create the ManagerCards
let managedProjects: Project[] = personData.value.project;
let managedServices: Service[] = personData.value.responsible_service;
let managedProjectNames = [];
let managedProjectURLs = [];
let managedServiceNames = [];
let managedServiceURLs = [];

if(managesProjects){
  for(let project of managedProjects){
      managedProjectNames.push(project.project_name);
      managedProjectURLs.push(`/activities/projects/${project.project_id}`);
    }
}

let reactive_managedProjectNames = ref(managedProjectNames);
let reactive_managedProjectURLs = ref(managedProjectURLs);

if(managesServices){
  for(let service of managedServices){
    managedServiceNames.push(service.service_name);
    managedServiceURLs.push(`/activities/services/${service.service_id}`);
  }
}

let reactive_managedServiceNames = ref(managedServiceNames);
let reactive_managedServiceURLs = ref(managedServiceURLs);

/* Build links for offered services */

interface offeredService {
  link: string;
  name: string;
}

let offeredServiceList = ref([] as offeredService[]);

for(let service of personData.value.offering_service) {
  offeredServiceList.value.push({link: `/activities/services/${service.service_id}`, name: service.service_name});
}
console.log(offeredServiceList);


</script>


<template>
  <!-- Wrapper for the whole page, reset some styling for a mobile-first design -->
  <div class="page-wrapper">

    <!-- Cover section wrapper-->
    <div class="cover-div">

      <!-- Purple section on the left of the cover with the title -->
      <div class="purple-background-cover-div">

        <!-- TODO: FIX BACKWARD BUTTON FOR MOBILE VERSION -->
          <backward-button-wrapper>
            <BackwardButton button-text="Our People" to="/about-us/people"></BackwardButton>
          </backward-button-wrapper>

          <!-- Text in cover section -->
          <h1 >{{ personData.name }}<br>{{ personData.surname }}</h1>
          <h4 id="job-title-cover-p">{{ personData.job_title }}</h4>
      
      </div>

      <!-- Person image on the right section of the cover -->
      <img class="profile-image-cover-img" :src="personData.profile_image_url" :alt="`Profile image for the employee ${personData.name} ${personData.surname}`"/>
      <div class="purple-overlay-profile-image-div"></div>

    </div>

    <!-- Text section under the cover: know more section about the employee -->
    <div class="horizontal-padding vertical-spacing">
      <h3> Know more about {{ completeName }}</h3>
      <p id="description-text">{{ personData.description }}</p>
    </div>
      
    <!-- Section containing the links to CV and email -->
    <div class="cv-email-div horizontal-padding">
      <a :href="personData.cv_url">Download CV</a>
      <a :href="`mailto:${personData.email}`">{{ personData.email }}</a>
    </div>

    <!-- Conditional rendering of services and projects managed by the employee -->
    <div class="manager-card-container vertical-spacing horizontal-padding" v-if="managesServices || managesProjects">
      <ManagerCard v-if="managesServices" :type="'service'" :managerName="completeName" :text="reactive_managedServiceNames" :to="reactive_managedServiceURLs" ></ManagerCard>
      <ManagerCard v-if="managesProjects" :type="'project'" :managerName="completeName" :text="reactive_managedProjectNames" :to="reactive_managedProjectURLs" ></ManagerCard>
    </div>

    <!-- Circular image and description of the role of the employee -->
    <div class="person-role-div vertical-spacing horizontal-padding">
      <img class="circular-image-img" :src="personData.profile_image_url"></img>
      <div id="role-description">
        <h3>Role at MiLa</h3>
        <p>{{ personData.role_description }}</p>
        <NuxtLink v-for="(service, index) in offeredServiceList" :to="service.link" :key="index" class="offered-service-nuxt-link">
          Discover {{ service.name }} 
          <Icon name="ForwardArrowIcon" size="19"> </Icon>
        </NuxtLink>
      </div>
    </div>

    <!-- Navigation links at the end of the page (enclosed in a nav section) -->
    <nav class="vertical-spacing">
      
      <!-- Backward button  -->
        <button type="button" class="navigation-link" :disabled="previousLink === null" @click="navigateTo(previousLink)">
          <Icon name="NavLeftArrowIcon" size="19" />
          <span> Previous </span>
        </button>

      <!-- Even if the link is static here, a button is used to have consistency in layout -->
      <button class="navigation-link" @click="navigateTo('/about-us/people')">
        <span> All people </span>
      </button>

      <!-- Next button -->
      <button type="button" class="navigation-link" :disabled="nextLink === null" @click="navigateTo(nextLink)" style="margin-right:10px">
        <span> Next </span>
        <Icon name="NavRightArrowIcon" size="19" />
      </button>
    </nav>


  </div>
</template>


<style scoped>


/*
 * Resetting some styles for a mobile-first approach.

 * Font sizes:
 * body -> 16px  |  h1 -> 32px  |  h2 -> 24px
 * The font size of the wrapper is set to the one of the body and the children will inherit with em measurements.
 * Line heights are set with relative measures so that they adjust when scaling.
 *
 * Widths calculated with a border-box approach.
 */
.page-wrapper {
  font-size: 16px;
  box-sizing: border-box;
}
.page-wrapper h1 {
  font-size: 2.4em;    
  line-height: 1.2em;
}
.page-wrapper h2 {
  font-size: 2em; 
  line-height: 1.2em;
}
.page-wrapper h3 {
  font-size: 1.6em;
  line-height: 1.2em;
}
.page-wrapper h4 {
  font-size: 1.2em;
  line-height: 1.2em;
  font-weight: 200;
}
.page-wrapper p, .page-wrapper span {
  font-size: 1em;
}




/* ------------------------General classes for grouping common style -------------------------------------*/
.vertical-spacing {
  margin-top: 6em;
}

.horizontal-padding {
  padding: 0 2.3em;
}




/* ------------------------------STYLING OF THE PAGE--------------------------------------- */


/*-------------------------------Cover section---------------------------------------------*/
.cover-div {
  display: flex;
  flex-direction: row;
  min-height: 50vw;
  position: relative;
}

/* The padding of this div sets the position of the title. 
 * It's calculated in percentages of the width of the parent because it has to stay fixed in some point of the div while resizing.
 */
.purple-background-cover-div{
  min-height: 100%;
  width: 50%;
  background-color: var(--purple);
  padding: 35% 0 12% 8%;
}

#job-title-cover-p{
  color:white;
  margin-top: 5%;
}

.profile-image-cover-img {
  width: 50%;
  object-fit: cover;
  filter: grayscale(1);
}

.purple-overlay-profile-image-div {
  position: absolute;
  width: 50%;
  margin-left: 50%;
  background-color: var(--purple);
  opacity: 0.35;
  min-height: 100%;
}




/*----------------------------Know More section-----------------------------------*/

.cv-email-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  margin-top: 3em;
}

.cv-email-div a {
  border: 2px solid var(--purple); /* Purple border */
  border-radius: 8px;
  padding: 10px;
}




/*-----------------------------------Card Manager section------------------------------*/
.manager-card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3em;
}




/*------------------------------------Person role section--------------------------------*/
.person-role-div{
  display: flex;
  align-items: start;
  gap: 8em;
}

/* Only appears for the tablet and desktop versions for resposiveness */
.circular-image-img {
  border-color: var(--purple-hover);
  border: 15px solid var(--lilac); /* Purple border */
  object-fit: cover;
  border-radius: 100%;
  display: none;
  max-width: 500px;
  width: 40%;
  
}

.offered-service-nuxt-link {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 1.6em;
}




/* ------------------------------Navigation buttons-------------------------------*/
nav {
  display: flex;
  justify-content: center;
  gap: 2.2em;
  margin-bottom: 3.5em;
}

.navigation-link {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: white;
  padding: 0;
  color: var(--purple);
  cursor: pointer;
  font-size: inherit;
}
.navigation-link:disabled {
  color: var(--grey3);
  cursor: not-allowed;

}
.navigation-link:hover:not(:disabled) {
  color: var(--purple-hover);
}
.navigation-link:active {
  color: var(--purple-active);
}
.navigation-link span {
  font-family: var(--font-montserrat);
  font-size: 1em;
}



/*-------------------------------Media queries for responsive design-TABLET-----------------------------*/
@media (min-width: 760px) {

  .page-wrapper {
    font-size: 20px;
  }
  .page-wrapper h1 {
    font-size: 4em;
  }
  .page-wrapper h3 {
    font-size: 2em;
  }
  .page-wrapper h4 {
    font-size: 1.4em;
  }

  .vertical-spacing {
    margin-top: 8em;
  }

  .horizontal-padding {
    padding: 0 6em;
  }

  .cv-email-div {
    flex-direction: row;
  }

  .manager-card-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 3em;
  }
  
  nav.vertical-spacing {
    gap: 4em;
    margin: 15em 0 11em 0;
  }

}

/*-------------------------------Media queries for responsive design-DESKTOP-----------------------------*/
@media (min-width: 1100px) {

  .page-wrapper {
    font-size: 24px;
  }
  .page-wrapper h1 {
    font-size: 4em;    
  }
  .page-wrapper h2 {
    font-size: 1.5em; 
    line-height: 1.2em;
  }
  .page-wrapper h3 {
    font-size: 1.75em;
    line-height: 1.2em;
  }
  .page-wrapper h4 {
    font-size: 1.75em;
  }
  .page-wrapper p, .page-wrapper span {
    font-size: 1em;
  }

  .horizontal-padding {
    padding: 0 11em;
  }

  .vertical-spacing {
    margin-top: 9em;
  }

  .purple-background-cover-div{
    padding: 30% 0 12% 11%;
  }

  .manager-card-container{
    flex-wrap: nowrap;
  }


}

@media (min-width: 1400px) {
  .circular-image-img{
    display: inline;
  }

  
  .person-role-div{
    padding-right: 3.5em;
  }
}




</style>
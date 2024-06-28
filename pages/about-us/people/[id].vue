

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
  if(id.value > 0){
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


</script>


<template>
  <!-- Wrapper for the whole page, reset some styling for a mobile-first design -->
  <div id="page-wrapper">

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
          <p id="job-title-cover-p">{{ personData.job_title }}</p>
      
      </div>

      <!-- Person image on the right section of the cover -->
      <img class="profile-image-cover-img" :src="personData.profile_image_url" :alt="`Profile image for the employee ${personData.name} ${personData.surname}`"/>
      <div class="purple-overlay-profile-image-div"></div>

    </div>

    <!-- Text section under the cover: know more section about the employee -->
    <div class="know-more-div vertical-spacing">
      <h3> Know more about {{ completeName }}</h3>
      <p id="description-text">{{ personData.description }}</p>
    </div>
      
    <!-- Section containing the links to CV and email -->
    <div class="cv-email-div">
      <a :href="personData.cv_url">Download CV</a>
      <a :href="`mailto:${personData.email}`">{{ personData.email }}</a>
    </div>



      <!-- Conditional rendering of services and projects managed by the employee -->
      <div id="manager-card-container" v-if="managesServices || managesProjects">
        <ManagerCard v-if="managesServices" :type="'service'" :managerName="completeName" :text="reactive_managedServiceNames" :to="reactive_managedServiceURLs" ></ManagerCard>
        <ManagerCard v-if="managesProjects" :type="'project'" :managerName="completeName" :text="reactive_managedProjectNames" :to="reactive_managedProjectURLs" ></ManagerCard>
      </div>
      
      <!-- Circular image and description of the role -->
      <div id="person-role-container">
        <div id="circular-image" :style="{ backgroundImage: `url('${personData.profile_image_url}')` }"></div>
        <div id="role-description">
          <h3>Role at MiLa</h3>
          <p>{{ personData.role_description }}</p>
        </div>
      </div>
        
    <!-- Navigation buttons for pagination -->
    <div id="navigation-button">
      <!-- Backward button element -->
      <router-link :to="previousLink">
        <button class="nav-button" :disabled="id <= 1">
          <Icon id="left-icon" name="NavLeftArrowIcon" size="19" />
          <p> Previous </p>
        </button>
      </router-link>

      <router-link :to="'/about-us/people'" >
        <button class="nav-button">
          <p> All People </p>
        </button>
      </router-link>

      <!-- Next button element -->
      <router-link :to="nextLink">
        <button class="nav-button" :disabled="id >= peopleCounter">
          <p> Next </p>
          <Icon id="right-icon" name="NavRightArrowIcon" size="19" />
        </button>
      </router-link>
    </div>
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
 * Widths calculated with a border-box approach
 */
#page-wrapper *,
#page-wrapper *::before,
#page-wrapper *::after {
  font-size: 16px;
  box-sizing: border-box;
}
#page-wrapper h1 {
  font-size: 2em;
  line-height: 1.2em;
}
#page-wrapper h2 {
  font-size: 1.5em;
  line-height: 1.2em;
}
#page-wrapper h3 {
  font-size: 1.2em;
  line-height: 1.2em;
}

.vertical-spacing {
  margin-top: 5em;
}

.cover-div {
  display: flex;
  flex-direction: row;
  min-height: 50vw;
  position: relative;
}

.purple-background-cover-div{
  min-height: 100%;
  width: 50%;
  background-color: var(--purple);
  padding: 10.5em 0 2em 1.5em;
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

.know-more-div {
  padding: 0 2.3em;
}

.cv-email-div{
  display: flex;
  flex-direction: column;
  align-items: center;;
  gap: 2em;
  margin-top: 3em;
}

.cv-email-div a {
  border: 2px solid var(--purple); /* Purple border */
  border-radius: 8px;
  padding: 10px;


}







#manager-card-container{
  display: flex;
  flex-direction: row;
  gap: 10%;
  margin-top: 20%
}

#person-role-container{
  display: flex;
  gap: 10%;
  margin-top: 27%;
}

#circular-image{
  border-radius: 50%;
  border-color: var(--purple-hover);
  border: 15px solid var(--lilac); /* Purple border */
  background-position: center;
  background-size: cover;
  min-width: 40vh;
  min-height: 40vh;
  max-width: 50vh;
  max-height: 50vh;

}

#role-description{
  display: flex; 
  flex-direction: column; 
  justify-content: center;
}

#next-previous-container{
  display: flex;
  flex-direction: row;
  justify-content: center;

}

#navigation-button{
  display: flex;
  justify-content: center;
  gap: 6%;
  margin-top: 20%;
  margin-bottom: 15%;

}

/* Overriding some styling from the page-title class to adjust it to the person page */
.page-title{
  position: static;
  width: auto;
  height: auto;
  text-align: left;
  margin-top: 5%;
}

.purple-overlay{
  position: absolute;
  background-color: var(--purple-hover);
  opacity: 40%;
  min-height: 100%;
  min-width: 100%;
}


.nav-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  font-family: var(--font-montserrat);
  color: var(--black);
  font-size: var(--body3);
  font-weight: var(--regular);
  cursor: pointer;
  border: none;
  transition: background-color var(--transition);
}

.nav-button:hover {
  color: var(--purple-hover);
}

.nav-button:active {
  color: var(--purple-active);
}

.nav-button[disabled] {
  color: var(--grey3);
  cursor: not-allowed;
}

.nav-button[disabled]:hover {
  color: var(--grey3);
  cursor: not-allowed;
}


</style>
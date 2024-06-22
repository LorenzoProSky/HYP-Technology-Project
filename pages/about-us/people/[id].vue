

<script lang="ts" setup>

import BackwardButton from '~/components/buttons/BackwardButton.vue';
import ManagerCard from '~/components/cards/ManagerCard.vue';
import ForwardButton from '~/components/buttons/ForwardButton.vue';

import {ref, computed} from 'vue';
import { useRoute, useFetch } from 'nuxt/app';
import type { Person, Service, Project } from '~/types/types';

// Retrieve Id of person from url and build the server url for api request
const route = useRoute();
const id = route.params.id; 
const personDataUrl = `http://localhost:3005/people/${id}`;
const countPeopleUrl = "http://localhost:3005/count-people";

// Variable ref<Person> holding all the data for the person with the specified id
let personData = ref();
let peopleCounter = ref();
try {
  const { data: fetchPerson } = await useFetch<Person[]>(personDataUrl);  
  const { data: countPpl } = await useFetch<Number>(countPeopleUrl);
  const people: Person[] | null= fetchPerson.value;
  peopleCounter.value = Number(countPpl.value);
  console.log(peopleCounter.value);
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

// Build the arrays necessary to create the ManagerCards
let managedProjects: Project[] = personData.value.project;
let managedServices: Service[] = personData.value.responsible_service;
let managedProjectNames = [];
let managedProjectIds = [];
let managedServiceNames = [];
let managedServiceIds = [];

if(managesProjects){

  let regex = /project\_(\d+)/
  for(let project of managedProjects){
    managedProjectNames.push(project.project_name);

    // Extract the id of the project
    let match = project.project_id.match(regex);
    if(match){
      managedProjectIds.push("/activities/projects/" + match[1]);
    }
  }

}
let reactive_managedProjectNames = ref(managedProjectNames);
let reactive_managedProjectIds = ref(managedProjectIds);

if(managesServices){

  let regex = /service\_(\d+)/
  for(let service of managedServices){
    managedServiceNames.push(service.service_name);

    // Extract the id of the service
    let match = service.service_id.match(regex);
    if(match){
      managedServiceIds.push("/activities/services/" + match[1]);
    }
  }
}

let reactive_managedServiceNames = ref(managedServiceNames);
let reactive_managedServiceIds = ref(managedServiceIds);


</script>


<template>
  <!-- container for the whole page -->
  <div id="page-container">

    <!-- Top section (cover) -->
    <div id="cover">

      <!-- Purple section on the left -->
      <div id="purple-background">
        <div id="align-text" >
          <backward-button-wrapper>
          <BackwardButton id="back-button" button-text="Our People" to="/about-us/people"></BackwardButton>
          </backward-button-wrapper>
          <h1 class="page-title">{{ personData.name }}<br>{{ personData.surname }}</h1>
          <p id="job-title">{{ personData.job_title }}</p>
        </div>
      </div>

      <!-- Image on the right -->
       <div id="profile-image" :style= "{ backgroundImage: `url('${personData.profile_image_url}')` }">
          <!-- Purple overlay -->
          <div class="purple-overlay"></div>
       </div>
    </div>

    <!-- Text section under the cover -->
    <div class="central-flow">

        <!-- Initial description -->
        <h3>Know more about {{ completeName }}</h3>
        <p id="description-text">{{ personData.description }}</p>
        
        <!-- Buttons for CV and email -->
        <div id="button-container">
          <a :href="personData.cv_url" class="cv-email-buttons">Download CV</a>
          <a :href="`mailto:${personData.email}`" class="cv-email-buttons">{{ personData.email }}</a>
        </div>

        <!-- Conditional rendering of services and projects managed by the employee -->
        <div id="manager-card-container" v-if="managesServices || managesProjects">
          <ManagerCard v-if="managesServices" :type="'service'" :managerName="completeName" :text="reactive_managedServiceNames" :to="reactive_managedServiceIds" ></ManagerCard>
          <ManagerCard v-if="managesProjects" :type="'project'" :managerName="completeName" :text="reactive_managedProjectNames" :to="reactive_managedProjectIds" ></ManagerCard>
        </div>
        
        <!-- Circular image and description of the role -->
        <div id="person-role-container">
          <div id="circular-image" :style="{ backgroundImage: `url('${personData.profile_image_url}')` }"></div>
          <div id="role-description">
            <h3>Role at MiLa</h3>
            <p>{{ personData.role_description }}</p>
          </div>
        </div>

        



    </div>



  </div>
</template>


<style scoped>

#page-container{
  display: flex;
  flex-direction: column;
  width: 100vw;

}

#cover{
  display: flex;
  flex-direction: row;
  min-height: 50vh;
}

#purple-background{
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 50%;
  background-color: var(--purple);
  gap: 20vh;
}

#back-button{
  margin-top: 20%;
}

/* Aligning the text of the title with the backward button */
#align-text{
  display: flex;
  flex-direction: column;
  margin-left: 9.79vw;
  margin-top: 40%;
}

#job-title{
  color:white;
  margin-top: 5%;
  margin-bottom: 20%;
}

#profile-image{
  position: relative;
  width: 50%;
  background-size: cover;
  background-position: center;
}

#description-text{
  margin-bottom: 5%
}

#button-container{
  display: flex;
  flex-direction: row;
  gap: 5%;
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

.central-flow{
  display: flex;
  flex-direction: column;
  padding-left: 15%;
  padding-right: 20%;
  padding-top: 10%;
}

.cv-email-buttons{
  border: 2px solid var(--purple); /* Purple border */
  border-radius: 8px;
  text-align: center;
  padding: 10px;
}


</style>
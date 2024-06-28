<script lang="ts" setup>

import { useRoute, useFetch } from 'nuxt/app';

// Import interfaces for handling data conversion from json server response
import type { Project, Manager, Image, Sponsor } from '~/types/types';

// Reactive variable containing all the data coming from the server
const projectData = ref() as Ref<Project>;


// Extract project id from url and build api server call
const projectID = useRoute().params.id as string;
const projectURL = "http://localhost:3005/projects/" + projectID;

// Fetch data of the current project from the server
const { data, error } = await useFetch(projectURL);
if(data.value){
  const projects = data.value as Project[];
  console.log(projects);
  projectData.value = projects[0];
  console.log(projectData.value)
} else {
  console.log(error);
}

// Objects for dynamic styling of elements
const coverStyling = ref({
  backgroundImage: `url(${projectData.value.image[0].image_url})`,
  minHeight: '50vw',
  backgroundSize: 'cover',
  backgroundPosition: 'top right',
  backgroundRepeat: 'no-repeat',
  fontSize: '1em',
});


// Computed values based on the fetched data
const idNumber = computed(() => {
  const regex = /project\_(\d+)/;
  const match = projectID.match(regex);
  if(match){
    return Number(match[1]);
  } else {
    return 1;
  }
});

const hasNext = computed(() => {
  if(idNumber.value < 8){
    return true;
  } else {
    return false;
  }
});

const hasPrevious = computed(() => {
  if(idNumber.value > 1){
    return true;
  } else {
    return false;
  }
});

const nextProjectURL = computed(() => { 
  if(idNumber.value < 9 ) {
    const nextProjectIdNumber = idNumber.value + 1;
    return "project_" + nextProjectIdNumber;
  } else {
    return "project_" + idNumber.value;
  }
  
});

const previousProjectURL = computed(() => { 
  if(idNumber.value > 0){
    const previousProjectIdNumber = idNumber.value - 1;
    return "project_" + previousProjectIdNumber;
  } else {
    return "project_" + idNumber.value;
  }
});

const managerFullName = computed(() => { return projectData.value.person?.name + ' ' + projectData.value.person?.surname});



</script>


<template>

  <!-- Wrapper for the whole page -->
  <div class="flex-column-layout" id="page-wrapper">

    <!-- Cover section -->
    <div class="flex-column-layout"  :style="coverStyling">
      
      <!-- Title  and manager of the project-->
       <h1 id="page-title"> {{ projectData.project_name }} </h1>
       <p id="manager"> Manager: {{ managerFullName }}</p>

    </div>


    <!-- Body of the page -->
    <div id="page-body">

      <!-- Project description section -->
      <div id="project-description-section">
        <h4 class="sub-titles"> {{ projectData.project_name }} </h4>
        <p class="project-description-text"> {{ projectData.description }}</p>
      </div> 

      <!-- Purple border section with info on location and date -->
      <div id="event-info-section" class="flex-column-layout">
        <div id="info-container" class="flex-column-layout">
          <h4 id="event-description-title" class="sub-titles"> Event Description</h4>
          <div id="flex-no-wrap">
          <!-- Icon and icon title -->
          <div class="icon-info" >
            <Icon class="icon" name="ph:map-pin-fill" color="var(--purple)" size="1em"></Icon>
            <strong class="icon-description"> Where  </strong>
            <span class="info"> {{ projectData.location_info }} </span>
          </div>
     
          

          <div class="icon-info" >
            <Icon class="icon" name="mingcute:time-fill" color="var(--purple)" size="1em"></Icon>
            <strong class="icon-description"> When  </strong>
            <span class="info"> {{ projectData.date_info }} </span>
          </div>
          

          <div class="icon-info" >
            <Icon class="icon" name="mdi:people" color="var(--purple)" size="1em"></Icon>
            <strong class="icon-description"> Participants  </strong>
            <span class="info"> {{ projectData.participants_info }} </span>
          </div>

        </div>
          

        </div>
      </div>
      </div>

      
      <!-- Additional Information section with purple background -->
      <div id="additional-information-section" class="flex-column-layout">
        <h4 class="sub-titles"> Additional Information </h4>
        <p class="project-description-text"> {{ projectData.additional_info }}</p>
      </div>

      <h4 id="sponsor-title" class="sub-titles"> This project was possible thanks to </h4>
      <!-- Sponsor section -->
      <div id="sponsor-section" class="flex-column-layout">
        
        <img class="sponsor-images" v-for="(sponsor, index) in projectData.sponsor" :key="index" :src="sponsor.logo_url" :alt="sponsor.sponsor_name">
      </div>

      <!-- Final section with descriptive images -->
      <div id="final-images">
        <img v-for="(image, index) in projectData.image.slice(1)" :key="index" :src="image.image_url" :alt="'Descriptive project image number ' + index" >
      </div>


      <!-- Navigation buttons bottom page -->
      <div id="nav-button-section">
        <nuxt-link :to="previousProjectURL">
          <button type="button" class="nav-buttons" :disabled="!hasPrevious">
            <Icon name="NavLeftArrowIcon" class="link-icon" size="1em"/>
            <span class="nav-links-text">Previous</span>
          </button>
        </nuxt-link>


        <nuxt-link to="/activities/projects">
          <button type="button" class="nav-buttons" >
            <span class="nav-links-text">All Projects</span>
          </button>
        </nuxt-link>

        <nuxt-link :to="nextProjectURL" @click="!hasNext && $event.preventDefault()" >
          <button type="button" class="nav-buttons" >
            <span class="nav-links-text">Next</span>
            <Icon name="NavRightArrowIcon" class="link-icon" size="1em"/>
          </button>
        </nuxt-link>

      </div>


  </div>
</template> 



<style scoped>

  #page-wrapper{
    width: 100vw;
    font-size: 32px;    /* TODO: Font size for mobile, to adjust and propagate to the rest of the project */
    
  }

  #page-title {
    font-size: 1em;
    line-height: 1em;
    padding-top: 25%;
    padding-left: 0.6em;
  }

  #manager {
    color: white;
    font-size: 0.5em;
    line-height: 3em;
    padding-left: 1.2em;    /* Relative units calculated from element because set font-size */
    margin-block-start: 0;
  }


  #page-body {
    padding-inline: 1.2em;
  }

  #project-description-section {
    margin-top: 2em;    /* division of elements fixed, change with ranges of screen resolution */
  }



  .project-description-text{
    font-size: 0.5em;
    line-height: 1.7em;
  }

  #event-info-section {
    align-items: center;
  }

  #info-container {
    box-sizing: border-box;
    flex-wrap: wrap;
    max-width: 70%;
    border: 1.5px solid var(--purple);
    border-radius: 15px;
    margin-top: 4em;
    align-items: center;
    padding: 1em;
    gap: 0.5em;
    text-align: center;
    padding-bottom: 2em;
    padding-top: 2em;
  }

  #event-description-title {
    flex-basis: 100%;
  }

  #flex-no-wrap {
    display: flex;
    flex-direction: column;
  }

  #additional-information-section {
    text-align: center;
    background-color: var(--lilac);
    margin-top: 4em;
    padding-top: 1.5em;
    padding-bottom: 1.5em;
    padding-inline: 1.2em;
  }

  #sponsor-section {
    align-items: center;
  }

  #sponsor-section img {
    margin-top: 2.3em;
    width:30%
  }

  #final-images {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5em;
    padding-inline: 0.7em;

  }

  #final-images img {
    width: 100%;
    height: auto;
  }

  #final-images img:nth-child(1) {
    grid-column: span 2;
    margin-top: 4em;
  }

  #nav-button-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5em;
    margin-top: 30%;
    margin-bottom: 30% ;
    font-size: 0.45em;
  }

  #sponsor-title {
    text-align: center;
    margin-top: 4em;
  }
  




  .flex-column-layout {
    display: flex;
    flex-direction: column;
  }

  .sub-titles {
    font-size: 0.65em;
    line-height: 1em;
  }

  .icon-info {
    display: flex;
    justify-content: center;
    align-items: end;
    flex-wrap: wrap;
    margin-top: 1.5em;
    gap: 0.3em;
    margin-right:0.4em;
  }

  .icon {
    vertical-align: middle;
  }

  .icon-description {
    font-size: 0.7em;
    display: block;
    line-height: 1em;
    

  }

  .info {
    font-size: 0.45em;
    flex-basis: 100%;
    line-height: 1.7em;
  }

  .nav-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  font-family: var(--font-montserrat);
  color: var(--black);
  font-size: 1em;
  font-weight: var(--regular);
  cursor: pointer;
  border: none;
  transition: background-color var(--transition);
}

.nav-buttons:hover {
  color: var(--purple-hover);
}

.nav-buttons:active {
  color: var(--purple-active);
}

.nav-buttons[disabled] {
  color: var(--grey3);
  cursor: not-allowed;
}

.nav-buttons[disabled]:hover {
  color: var(--grey3);
  cursor: not-allowed;
}


/* Media queries for tablets, resolution over 768px */
@media screen and (min-width: 850px){
  #page-wrapper{
    font-size: 64px;  
  }

  #info-container {
    max-width: 80%;
  }

  #page-body {
    padding-inline: 1.7em;
  }

  #additional-information-section {
    padding-inline: 1.5em;
  }

  #sponsor-section img {
    width:35%
  }

  #final-images {
    padding-inline: 1em;

  }


}

@media screen and (min-width: 1400px) {
  #page-wrapper {
    font-size: 96px;
  }

  #info-container {
    max-width: 90%;
  
  }

  #sponsor-section {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2em;
    margin-top: 2em;
  }

  #sponsor-section img{
    margin-top: 0;
    
  }

  #page-body {
    padding-inline: 1.5em;
  }

}


@media screen and (min-width: 1800px) {
  #info-container {
    flex-direction: row;
    border-width: 3px;
  }

  #flex-no-wrap {
    font-size: 0.5em;
    flex-direction: row;
    justify-content: center;
  }

  .icon-info {
    margin: 0;
  } 
  
  #page-body {
    padding-inline: 1.5em;
  }



}


</style>
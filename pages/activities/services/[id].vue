<script lang="ts" setup>
import BackwardButton from '~/components/buttons/BackwardButton.vue';
import { onMounted } from 'vue';
import type { Person, Service } from '~/types/types';

// service id from url
const serviceId = useRoute().params.id as string;
const serviceUrl = "http://localhost:3005/services/" + serviceId;
const regex = /service\_(\d+)/;
const find_id = serviceUrl.match(regex);
let id: number = 0;
if(find_id){
  id = +find_id[1];
}

const totalServices = 6;
let previousUrl = '';
let nextUrl = '';
if (id!=1) {previousUrl = `/activities/services/service_${id-1}`;}
if (id != totalServices){nextUrl = `/activities/services/service_${id+1}`;}

/**general information about the service */
const {data, error} = await useFetch(serviceUrl);
const service = ref() as Ref<Service>;
if(data.value){
  const services = data.value as Service[];
  service.value = services[0];
} else {
  console.log(error);
}

const name_service = service.value.service_name;
const description_service = service.value.description;
const additional_info = service.value.additional_info;
const manager = service.value.manager;

/**information about the images */
const service_images = service.value.image;
const cover_image = service_images[0].image_url;

/**information about people offering the service */
const offering_people = service.value.offering_person;
const offers = service.value.offers;
const offering_bovisa: Person[] = [];
const bovisa_links: string[] = [];
const offering_farini: Person[] = [];
const farini_links: string[] = [];

for (let i = 0; i<offering_people.length; i++){
  for (let j = 0; j<offers.length; j++){
    if(offering_people[i].person_id == offers[j].person_id && offers[j].location_id == 1){
      offering_farini.push(offering_people[i]);
      farini_links.push("/about-us/people/"+offering_people[i].name+"_"+offering_people[i].surname);
    } else if(offering_people[i].person_id == offers[j].person_id && offers[j].location_id == 2) {
      offering_bovisa.push(offering_people[i]);
      bovisa_links.push("/about-us/people/"+offering_people[i].name+"_"+offering_people[i].surname);
    }
  }  
}

/**information about the schedule of the service */
let schedule_farini: string = '';
let schedule_bovisa: string = '';

for (let i = 0; i<offers.length; i++){
  if (offers[i].location_id == 1) {
    schedule_farini = offers[i].schedule;
  } else {
    schedule_bovisa = offers[i].schedule;
  }
}

/**information about the testimonials */
const service_testimonial = service.value.testimonial;

onMounted(async ()=>{
  console.log(id);  
});
</script>

<template>
  <div id="service-cover" :style="{ backgroundImage: `url('${cover_image}')` }">
    <backward-button-wrapper>
      <BackwardButton buttonText="Our Services" to="/activities/services" />
    </backward-button-wrapper>
    <div class="page-title" >
      <h1 >{{name_service}}</h1>
      <h3>Manager: {{ manager.name }} {{ manager.surname }}</h3>
    </div>
  </div>

  <div id="service-intro" >
    <h3>{{ name_service }}</h3>
    <p class="dynamic-p">{{ description_service }}</p>
  </div>

  <div id="service-location" >
    <div class="centre-container" >
      <h3>Centro MiLA Farini</h3>
      <p class="semiboldText" style="margin-top: 40px;" >Provided By</p>
      <div class="offering-container" >
        <NuxtLink v-for="(person, index) in offering_farini" :to=farini_links[index] >
          <p>{{ person.name }} {{ person.surname }}</p>
        </NuxtLink>
      </div>
      <p class="semiboldText" style="margin-top: 50px;">Opening Hours</p>
      <p>{{ schedule_farini }}</p>
    </div>
    <div class="centre-container" >
      <h3>Centro MiLA Bovisa</h3>
      <p class="semiboldText" style="margin-top: 40px;" >Provided By</p>
      <div class="offering-container" >
        <NuxtLink v-for="(person, index) in offering_bovisa" :to="bovisa_links[index]" >
          <p>{{ person.name }} {{ person.surname }}</p>
        </NuxtLink>
      </div>
      <p class="semiboldText" style="margin-top: 50px;">Opening Hours</p>
      <p>{{ schedule_bovisa }}</p>
    </div>
  </div>

  <div id="service-additional">
    <h3 style="text-align: center;" >Additional Information</h3>
    <p style="margin-top: 32px; text-align: center; max-width: 55.7vw;" class="dynamic-p" >{{ additional_info }}</p>
  </div>
  
  <img src="/assets/images/fiori-e-cuori.svg" alt="" style="position: absolute; opacity: 0.25; right: 0px; margin-top: -200px; z-index: 0;">
  <div id="service-images" >
    <img v-for="(image, index) in service_images.slice(1)" :key="index" :src="image.image_url" >
  </div>

  <div id="service-voices" >
    <h3 style="text-align: center;">Voices That Matter</h3>
    <div id="quotes" >
      <div class="quote-container" v-for="(testimonial, index) in service_testimonial" >
        <Icon name="QuoteIcon" size="70px" style="margin-top: -30px; color: var(--purple); min-width: 70px;" />
        <div>
          <p>{{ testimonial.description }}</p>
          <p style="font-style: italic; font-size: var(--body3);">{{ testimonial.name }}</p>
        </div>
      </div>
    </div>
  </div>

  <div id="service-navigation">
    <NuxtLink :to=previousUrl style="color: var(--black);" :disabled=!(id-1) >
      <Icon name="NavLeftArrowIcon" size="19" />
      <p> Previous </p>
    </NuxtLink>

    <NuxtLink to="/activities/services">
      <p> All Services </p>
    </NuxtLink>

    <NuxtLink :to=nextUrl style="color: var(--black);" :disabled=!(totalServices-id) >
      <p> Next </p>
      <Icon name="NavRightArrowIcon" size="19" />
    </NuxtLink>
  </div>
</template>

<style scoped>
#service-cover{
  background-size: cover;
  width: 100%;
  height: calc(100vw / 2);
}
#service-cover h3{
  color: var(--white);
  font-weight: var(--semibold);
  max-width: 892px;
}
@media(max-width:1400px){
  #service-cover h3{
    font-size: 3.4vw;
    line-height: 3.5vw;
    max-width: 60vw;
  }
}

#service-intro{
  margin: 160px 0;
  margin-left: 13.7vw;
  max-width: 55.7vw;
}

#service-location{
  font-size: var(--body3);
  line-height: var(--l-height3);
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5.2vw;
}
#service-location p{
  margin: 0;
}
#service-location .centre-container{
  border: 2px solid var(--purple);
  border-radius: 24px;
  width: calc(35.3vw - 64*2px);
  max-width: 678px;
  padding: 64px;
}
#service-location .offering-container{
  width: inherit;
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
}
.offering-container a{
  text-decoration: underline;
}

#service-additional{
  background-color: var(--lilac);
  padding: 116px 0;
  margin: 216px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#service-images{
  position: relative;
  text-align: center;
  z-index: 1;
}
#service-images img{
  max-width: 40%;
  margin: 45px;
}

#service-voices{
  margin-top: 412px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 92px;
}
#quotes{
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8.3vw;
}
.quote-container{
  display: flex;
  flex-direction: row;
  max-width: 29vw;
}

#service-navigation{
  margin-top: 260px;
  margin-bottom: 340px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 72px;
  font-size: var(--body3);
}
#service-navigation a{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
}
#service-navigation a:hover {
  color: var(--purple-hover) !important;
}
#service-navigation a:active {
  color: var(--purple-active) !important;
}
#service-navigation a[disabled = true] {
  color: var(--grey3) !important;
  cursor: not-allowed;
}
#service-navigation a[disabled = true]:hover {
  color: var(--grey3) !important;
  cursor: not-allowed;
}

@media(max-width: 1000px){
  #service-location{
    flex-direction: column;
    align-items: center;
  }
  #service-location .centre-container{
    width: calc(90vw - 64*2px);
  }
  #quotes{
    flex-direction: column;
  }
  .quote-container{
    max-width: 80vw;
  }
}
@media(max-width: 900px){
  #service-intro{
    margin-left: 5vw;
  }
  .dynamic-p{
    width: 90vw;
    max-width: 90vw !important;
  }
  #service-images img{
    max-width: 90%;
    margin: 20px 5vw;
  }
  #service-navigation{
    font-size: var(--body2);
    gap: 40px;
  }
}
@media(max-width: 430px){
  #service-location{
    font-size: var(--body1);
    line-height: var(--l-height1);
  }
  #service-location .centre-container{
    padding: 32px;
  }
  .quote-container{
    max-width: 95%;
  }
  #service-navigation{
    font-size: var(--body1);
    gap: 20px;
  }
}
</style>
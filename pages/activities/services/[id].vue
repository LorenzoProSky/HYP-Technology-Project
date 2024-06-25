<script lang="ts" setup>
import BackwardButton from '~/components/buttons/BackwardButton.vue';
</script>

<template>
  <div id="service-cover">
    <backward-button-wrapper>
      <BackwardButton buttonText="Our Services" to="/activities/services" />
    </backward-button-wrapper>
    <div class="page-title" >
      <h1 >{Nome servizio}</h1>
      <h3>Manager: {Nome manager}</h3>
    </div>
  </div>

  <div id="service-intro" >
    <!--Dati da prendere dal db-->
    <h3>Welcome Interviews</h3>
    <p class="dynamic-p">At Centro MiLA, our Welcome Interviews Service is the first step towards a path of healing and empowerment 
      for women affected by domestic violence. During your initial visit, you will meet with a dedicated counselor 
      who will provide a safe, confidential, and compassionate environment for you to share your story. Together with your 
      counselor, we will assess your individual needs and circumstances, creating a personalized plan that addresses your specific 
      situation. This plan may include psychological counseling, legal assistance, educational programs, or other services that 
      can help you rebuild your life and regain independence. Our holistic approach ensures that all aspects of your well-being 
      are considered, helping you set out on a path out of violence.</p>
  </div>

  <div id="service-location" >
    <div>
      <h3>Centro MiLA Farini</h3>
      <p class="semiboldText" style="margin-top: 40px;" >Provided By</p>
      <p>nome cognome</p> <!--prendere dal db-->
      <p class="semiboldText" style="margin-top: 50px;">Opening Hours</p>
      <p>Monday to Friday - 07:00 - 19:00</p>
    </div>
    <div>
      <h3>Centro MiLA Bovisa</h3>
      <p class="semiboldText" style="margin-top: 40px;" >Provided By</p>
      <p>nome cognome</p> <!--prendere dal db-->
      <p class="semiboldText" style="margin-top: 50px;">Opening Hours</p>
      <p>Monday to Friday - 07:00 - 19:00</p>
    </div>
  </div>

  <div id="service-additional">
    <h3 style="text-align: center;" >Additional Information</h3>
    <!--prendere dal db-->
    <p style="margin-top: 32px; text-align: center; max-width: 55.7vw;" class="dynamic-p" >To schedule a Welcome Interview, please call our or send an email. Walk-ins are also welcome, but we recommend making an appointment to ensure a counselor is 
      available to meet with you. If possible, bring any relevant documents, such as identification, legal papers, or medical records, to help us better understand your 
      situation. However, do not worry if you cannot provide these documents immediately. After the initial interview, we will schedule follow-up appointments and connect 
      you with the appropriate services to support your ongoing journey towards safety and recovery.</p>
  </div>
  
  <img src="/assets/images/fiori-e-cuori.svg" alt="" style="position: absolute; opacity: 0.25; right: 0px; margin-top: -200px; z-index: 0;">
  <div id="service-images" >
    <!--prendere immagini dal db-->
    <img src="/assets/images/volunteer-pic1.jpeg" alt="">
    <img src="/assets/images/volunteer-pic2.jpeg" alt="">
  </div>

  <div id="service-voices" >
    <h3 style="text-align: center;">Voices That Matter</h3>
    <!--prendere quotes da db-->
    <div id="quotes" >
      <div class="quote-container">
        <Icon name="QuoteIcon" size="70px" style="margin-top: -30px; color: var(--purple); min-width: 70px;" />
        <div>
          <p>Volunteering at Centro MiLA has been one of the most rewarding experiences of my life. The love, strength, and resilience I see every day 
            inspire me to be a better person. Centro MiLA is truly a place where we all grow together.</p>
          <p style="font-style: italic; font-size: var(--body3);">Elena, MiLA volunteer</p>
        </div>
      </div>
      <div class="quote-container">
        <Icon name="QuoteIcon" size="70px" style="margin-top: -30px; color: var(--purple); min-width: 70px;" />
        <div>
          <p>Volunteering at Centro MiLA has been one of the most rewarding experiences of my life. The love, strength, and resilience I see every day 
            inspire me to be a better person. Centro MiLA is truly a place where we all grow together.</p>
          <p style="font-style: italic; font-size: var(--body3);">Elena, MiLA volunteer</p>
        </div>
      </div>
    </div>
  </div>

  <div id="service-navigation">
    <NuxtLink to="/activities/services/0" style="color: var(--black);" >
      <Icon name="NavLeftArrowIcon" size="19" />
      <p> Previous </p>
    </NuxtLink>

    <NuxtLink to="/activities/services">
      <p> All Services </p>
    </NuxtLink>

    <NuxtLink to="/activities/services/2" style="color: var(--black);">
      <p> Next </p>
      <Icon name="NavRightArrowIcon" size="19" />
    </NuxtLink>
  </div>
</template>

<style scoped>
#service-cover{
  background-image: url('/assets/images/cover-contact-us.png'); /**prendere dal db */
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
#service-location div{
  border: 2px solid var(--purple);
  border-radius: 24px;
  width: calc(35.3vw - 64*2px);
  max-width: 678px;
  padding: 64px;
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
#service-navigation a[disabled] {
  color: var(--grey3) !important;
  cursor: not-allowed;
}
#service-navigation a[disabled]:hover {
  color: var(--grey3) !important;
  cursor: not-allowed;
}

@media(max-width: 1000px){
  #service-location{
    flex-direction: column;
    align-items: center;
  }
  #service-location div{
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
  #service-location div{
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
<script lang="ts" setup>
  import BackwardButton from '~/components/buttons/BackwardButton.vue';
</script>

<template>
  <div id="locations-cover">
    <backward-button-wrapper>
      <BackwardButton buttonText="About Us" to="/about-us" />
    </backward-button-wrapper>
    <h1 class="page-title">Where to Find <br>Us in Milan</h1>
  </div>
  
  <div id="locations-intro" >
    <h3>One Centre, Two Locations</h3>
    <p class="dynamic-p">You can find us in Bovisa and in Zona Farini, choose the location closest to you. We are to help you.</p>
  </div>

  <div id="container">
  <div class="location-container" >
    <div class="location-flex" >
      <div>
        <h4 style="margin-bottom: 22px;" >Centro MiLA Farini</h4>
        <p style="margin-bottom: 60px;" >Via Valtellina 20, 20159 Milano (MI)</p>
        <p class="semiboldText" style="margin-bottom: 16px;" >Contact Us</p>
        <div style="display: flex; flex-direction: row; gap: 5px; margin-bottom:8px; font-size: var(--body3);" ><p class="semiboldText">Phone: </p><p>+39 344677462</p></div>
        <p class="semiboldText" style="margin-bottom: 50px; font-size: var(--body3);" >Email: centromila.farini@gmail.com</p>
        <p class="semiboldText" style="margin-bottom: 16px;" >Opening Hours</p>
        <p class="semiboldText" style=" font-size: var(--body3);">07:00 - 19:00 daily</p>
      </div>
      <img src="/assets/images/location-farini.png" alt="location-farini" style="border-radius: 12px; width: 600px; height: auto;">
    </div>
    <div class="flex-purple">
      <div>
        <p class="semiboldText">Welcome Interviews</p>
        <hr style="width: 100%; border-top: 2px solid var(--black); border-bottom: 0px;">        
        <p style=" font-size: var(--body3);">Monday to Friday</p>
        <p style=" font-size: var(--body3);">07:00 - 19:00</p>

        <p class="semiboldText" style="margin-top: 70px;" >Psychological Counselling</p>        
        <hr style="width: 100%; border-top: 2px solid var(--black); border-bottom: 0px;">
        <p style=" font-size: var(--body3);">Monday to Friday</p>
        <p style=" font-size: var(--body3);">09:00 - 17:00</p>
      </div>
      <div>
        <p class="semiboldText">Hospitality in Shelters</p>        
        <hr style="width: 100%; border-top: 2px solid var(--black); border-bottom: 0px;">
        <p style=" font-size: var(--body3);">Monday - Wednesday - Friday</p>
        <p style=" font-size: var(--body3);">10:00 - 17:00</p>

        <p class="semiboldText" style="margin-top: 70px;" >Job Counter</p>        
        <hr style="width: 100%; border-top: 2px solid var(--black); border-bottom: 0px;">
        <p style=" font-size: var(--body3);">Monday - Wednesday - Friday</p>
        <p style=" font-size: var(--body3);">10:00 - 16:00</p></div>
      <div>
        <p class="semiboldText">Legal Counselling</p>        
        <hr style="width: 100%; border-top: 2px solid var(--black); border-bottom: 0px;">
        <p style=" font-size: var(--body3);">Monday to Friday</p>
        <p style=" font-size: var(--body3);">09:00 - 17:00</p>

        <p class="semiboldText" style="margin-top: 70px;" >Intercultural Mediation</p>        
        <hr style="width: 100%; border-top: 2px solid var(--black); border-bottom: 0px;">
        <p style=" font-size: var(--body3);">Monday - Tuesday - Friday</p>
        <p style=" font-size: var(--body3);">09:00 - 13:00</p></div>
    </div>
  </div>
  
  <div class="location-container" >
    <div class="location-flex" >
      <div>
        <h4 style="margin-bottom: 22px;" >Centro MiLA Bovisa</h4>
        <p style="margin-bottom: 60px;" >Via Candiani 72, 20158 Milano (MI)</p>
        <p class="semiboldText" style="margin-bottom: 16px;" >Contact Us</p>
        <div style="display: flex; flex-direction: row; gap: 5px; margin-bottom:8px; font-size: var(--body3);" ><p class="semiboldText">Phone: </p><p>+39 345697365</p></div>
        <p class="semiboldText" style="margin-bottom: 50px; font-size: var(--body3);" >Email: centromila.bovisa@gmail.com</p>
        <p class="semiboldText" style="margin-bottom: 16px;" >Opening Hours</p>
        <p class="semiboldText" style=" font-size: var(--body3);">07:00 - 19:00 daily</p>
      </div>
      <img src="/assets/images/location-bovisa.png" alt="location-bovisa" style="border-radius: 12px; width: 600px; height: auto;">
    </div>
    <div class="flex-purple">
      <div>
        <p class="semiboldText">Welcome Interviews</p>
        <hr style="width: 100%; border-top: 2px solid var(--black); border-bottom: 0px;">        
        <p style=" font-size: var(--body3);">Monday to Friday</p>
        <p style=" font-size: var(--body3);">07:00 - 19:00</p>

        <p class="semiboldText" style="margin-top: 70px;" >Psychological Counselling</p>        
        <hr style="width: 100%; border-top: 2px solid var(--black); border-bottom: 0px;">
        <p style=" font-size: var(--body3);">Monday to Friday</p>
        <p style=" font-size: var(--body3);">09:00 - 18:00</p>
      </div>
      <div>
        <p class="semiboldText">Hospitality in Shelters</p>        
        <hr style="width: 100%; border-top: 2px solid var(--black); border-bottom: 0px;">
        <p style=" font-size: var(--body3);">Tuesday - Thursday - Friday</p>
        <p style=" font-size: var(--body3);">10:00 - 17:00</p>

        <p class="semiboldText" style="margin-top: 70px;" >Job Counter</p>        
        <hr style="width: 100%; border-top: 2px solid var(--black); border-bottom: 0px;">
        <p style=" font-size: var(--body3);">Tuesday - Thursday - Friday</p>
        <p style=" font-size: var(--body3);">10:00 - 16:00</p></div>
      <div>
        <p class="semiboldText">Legal Counselling</p>        
        <hr style="width: 100%; border-top: 2px solid var(--black); border-bottom: 0px;">
        <p style=" font-size: var(--body3);">Tuesday to Friday</p>
        <p style=" font-size: var(--body3);">09:00 - 18:00</p>

        <p class="semiboldText" style="margin-top: 70px;" >Intercultural Mediation</p>        
        <hr style="width: 100%; border-top: 2px solid var(--black); border-bottom: 0px;">
        <p style=" font-size: var(--body3);">Wednesday - Thursday</p>
        <p style=" font-size: var(--body3);">14:00 - 18:00</p></div>
    </div>
  </div>
  
  <div id="locations-help" >
    <div class="needHelp" >
      <p class="semiboldText" >Do you need help?</p>
      <p>Our crisis line is open everyday, at every hour.</p>
      <p class="semiboldText dynamic-help" style="font-size: var(--h3); line-height: 44px;">0521 248886</p>
    </div>
    <div class="needHelp" >
      <p class="semiboldText" >Are you unable to call?</p>
      <p>You can write us an email. Your privacy is safe.</p>
      <p class="semiboldText dynamic-help" style="font-size: var(--h4); line-height: 39px;">centromila@gmail.com</p>
    </div>
    <img src="/assets/images/fiori-e-cuori.svg" alt="" style="position: absolute; opacity: 0.25; right: 0px; z-index: 0; margin-top: -500px;">
  </div>
  </div>
</template>

<style scoped>
#container{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#locations-cover{
  background-image: url('/assets/images/cover-our-location.png');
  background-size: cover;
  width: 100%;
  height: calc(100vw / 2);
}

#locations-intro{
  text-align: center;
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-top: 160px;
  margin-bottom: 180px;
}
.dynamic-p{
  width: 41%;
  text-align: center;
  padding: 20px;
}

.location-container{
  width: 66.9vw;
  margin-bottom: 260px;
}
.location-flex{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.location-container p{
  margin: 0;
  width:fit-content ;
}
.flex-purple{
  margin-top: 77px;
  border-radius: 24px;
  background-color: var(--lilac);
  padding: 55px 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
}

#locations-help{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 400px;
  position: relative;
  z-index: 0;
}


@media(max-width: 1400px){
  .location-container{
    width: 80vw;
  }
}

@media(max-width: 1200px){
  .location-container{
    width: 90vw;
  }
}

@media(max-width: 1000px){
  .location-flex img{
    width: 400px !important;
  }
}

@media(max-width:940px){
  #locations-help{
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
  .dynamic-help{
    font-size: var(--body3) !important; 
    line-height: 24px;
  }
}

@media(max-width: 800px){
  .location-flex{
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
  .flex-purple{
    padding: 20px;
  }
  .flex-purple p{
    font-size: var(--body1) !important;
  }
  .dynamic-p{
    width: 80vw;
  }
}

@media(max-width: 450px){
  .flex-purple{
    flex-direction: column;
    align-items: start;
    gap: 50px;
  }
  .location-flex img{
    width: 90vw !important;
  }
  .needHelp{
    padding: 10px;
  }
}
</style>
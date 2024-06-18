<script lang="ts" setup>
import MapCardBig from '~/components/cards/MapCardBig.vue';
</script>

<template>
  <div id="contacts-cover">
    <h1 class="page-title">Contact <br>Centro MiLA</h1>
  </div>

  <img src="/assets/images/fiori-e-cuori.svg" alt="" style="position: absolute; opacity: 0.25; right: 0px; z-index: 0;">

  <div id="contacts-help" >
    <div class="needHelp" >
      <p class="semiboldText" >Do you need help?</p>
      <p>Our crisis line is open everyday, at every hour.</p>
      <p class="semiboldText dynamic-p" style="font-size: var(--h3); line-height: 44px;">0521 248886</p>
    </div>
    <div class="needHelp" >
      <p class="semiboldText" >Are you unable to call?</p>
      <p>You can write us an email. Your privacy is safe.</p>
      <p class="semiboldText dynamic-p" style="font-size: var(--h4); line-height: 39px;">centromila@gmail.com</p>
    </div>
  </div>

  <div id="contacts-maps" >
    <MapCardBig imageSrc="https://plus.unsplash.com/premium_photo-1669863280125-7789ef60adc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    name="Centro MiLA Farini" to="https://maps.google.com/?q=Via+Valtellina+20,+20159+Milano"
    address="Via Valtellina 20, 20159 Milano" email="centromila.farini@gmail.com" phone="+39 344677462" hours="07:00 - 19:00 daily" />
    <MapCardBig imageSrc="https://plus.unsplash.com/premium_photo-1669863280125-7789ef60adc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    name="Centro MiLA Bovisa" to="https://maps.google.com/?q=Via+Candiani+72,+20158+Milano" title="Centro MiLA Bovisa"
    address="Via Candiani 72, 20158 Milano" email="centromila.bovisa@gmail.com" phone="+39 345697365" hours="07:00 - 19:00 daily" />
  </div>

  <div id="contacts-services" >
    <h4 style="margin-bottom: 58px;">The Services We Offer</h4>
    <div class="offers-container" >
      <div> <Icon name="HeartIcon" color=var(--purple) size="24" style="margin-top: 18px;" /> <p>Welcome Interviews</p> </div>
      <div> <Icon name="HeartIcon" color=var(--purple) size="24" style="margin-top: 18px;" /> <p>Hospitality in Shelters</p> </div>
      <div> <Icon name="HeartIcon" color=var(--purple) size="24" style="margin-top: 18px;" /> <p>Legal Counselling</p> </div>
    </div>
    <div class="offers-container" >
      <div> <Icon name="HeartIcon" color=var(--purple) size="24" style="margin-top: 18px;" /> <p>Psychological Counselling</p> </div>
      <div> <Icon name="HeartIcon" color=var(--purple) size="24" style="margin-top: 18px;" /> <p>Job Counter</p> </div>
      <div> <Icon name="HeartIcon" color=var(--purple) size="24" style="margin-top: 18px;" /> <p>Intercultural Mediation</p> </div>
    </div>
  </div>

  <div id="contacts-form">
    <h4>Send us a message, <br>
      we will get in touch soon!</h4>
    <!--Cambiare action-->  
    <form action="/" style="width: 800px; margin-top: 92px;">
      <input type="text" name="name" placeholder="Name and Surname" required>
      <input type="text" name="age" placeholder="Your age" required>
      <input type="text" name="e-mail" placeholder="E-mail address" required>
      <input type="text" name="phone" placeholder="Phone number" required>
      <textarea name="comment" placeholder="Write us a message." style="height: 282px;" required></textarea>
      <button type="submit" 
      style="width: 163px; height: 64px; background-color: var(--purple); border: 0; border-radius: 12px; font-size: var(--body4); color: white;
       font-family: 'Montserrat', serif; font-weight: var(--regular); margin-top: 92px"> Send</button>
    </form>
  </div>
</template>

<style>
#contacts-cover{
  background-image: url('/assets/images/cover-contact-us.png');
  background-size: cover;
  width: 100%;
  height: calc(100vw / 2);
}

#contacts-help{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 264px 0;
  position: relative;
  z-index: 1;
}

#contacts-maps{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  z-index: 1;
}

#contacts-services{
  margin: 260px 0;
  padding: 30px;
  background-color: var(--lilac);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 303px;
}
.offers-container{
  width: 52.6vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: var(--body3);
  line-height: var(--l-height3);
}
.offers-container div{
  display: flex;
  flex-direction: row;
  gap: 5px;
}

#contacts-form{
  margin: 260px 0 400px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

@media(max-width:1250px){
  #contacts-maps{
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }

  .offers-container{
    width: 70vw;
  }
}

@media(max-width:940px){
  #contacts-help{
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
  .dynamic-p{
    font-size: var(--body3) !important; 
    line-height: 24px;
  }
  
  .offers-container{
    width: 90vw;
  font-size: var(--body1);
  line-height: var(--l-height1);
  }

  form{
    width: 90vw !important;
  }
}

@media(max-width:450px){
  .needHelp{
    padding: 10px;
  }
  .offers-container{
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}

</style>
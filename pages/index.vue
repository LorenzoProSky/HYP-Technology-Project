<script lang="ts" setup>
import SecondaryButton from '~/components/buttons/SecondaryButton.vue';
import MainButton from '~/components/buttons/MainButton.vue';
import ActivityCard from '~/components/cards/ActivityCard.vue';
import MapCardSmall from '~/components/cards/MapCardSmall.vue';
</script>

<template>
  <div id="homediv">
    <div>
      <h1>Centro MiLA</h1>
      <h2>Empowering women on their journey beyond abuse, towards healing and renewal.</h2>
    </div>
  </div>

  <div id="home-intro">
    <h3>Empowering Survivors</h3>
    <p>Empowering individuals, families, and communities to break the cycle of violence through support, education, and advocacy.</p>
    <NuxtLink to="contacts">Do you need help? Contact Us</NuxtLink>
  </div>

  <div id="home-services" class="activity-container">
    <h3>Our Services</h3>
    <div class="grid-3-2">
      <ActivityCard imageSrc="https://plus.unsplash.com/premium_photo-1669863280125-7789ef60adc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      title="Titolo" text="testo" to="/activities/services" class="item1" />
      <ActivityCard imageSrc="https://plus.unsplash.com/premium_photo-1669863280125-7789ef60adc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      title="Titolo" text="testo" to="/activities/services" class="item2" />
      <ActivityCard imageSrc="https://plus.unsplash.com/premium_photo-1669863280125-7789ef60adc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      title="Titolo" text="testo" to="/activities/services" class="item3" />
      <ActivityCard imageSrc="https://plus.unsplash.com/premium_photo-1669863280125-7789ef60adc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      title="Titolo" text="testo" to="/activities/services" class="item1" />
      <ActivityCard imageSrc="https://plus.unsplash.com/premium_photo-1669863280125-7789ef60adc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      title="Titolo" text="testo" to="/activities/services" class="item2" />
      <ActivityCard imageSrc="https://plus.unsplash.com/premium_photo-1669863280125-7789ef60adc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      title="Titolo" text="testo" to="/activities/services" class="item3" />
    </div>
  </div>

  <div id="home-projects" class="activity-container">
    <h3>Our Projects</h3>
    <div class="grid-3-1">
      <ActivityCard imageSrc="https://plus.unsplash.com/premium_photo-1669863280125-7789ef60adc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      title="Titolo" text="testo" to="/activities/services" class="item1" />
      <ActivityCard imageSrc="https://plus.unsplash.com/premium_photo-1669863280125-7789ef60adc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      title="Titolo" text="testo" to="/activities/services" class="item2" />
      <ActivityCard imageSrc="https://plus.unsplash.com/premium_photo-1669863280125-7789ef60adc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      title="Titolo" text="testo" to="/activities/services" class="item3" />
    </div>
    <MainButton buttonText="Discover All Projects" buttonLength="long" to="/activities/projects"
    style="margin-top: 75px;"/>
  </div>

  <div id="home-about" >
    <h2 style="color: var(--white);" >Centro MiLA <br>
      a safe place since 2004</h2>
    <div>
      <h3 style="color: var(--white);" >Our Centre</h3>
      <p>Since opening our doors in 2004, Centro MiLA has been a steadfast ally for women and children facing domestic violence. <br><br>
          From our humble beginnings, we've expanded to offer a wide range of services and initiatives, all rooted in our commitment to empowerment and advocacy. 
          Today, MiLA stands as a testament to the resilience of survivors and the power of collective action.</p>
          <SecondaryButton buttonText="About Us" buttonLength="small" to="about-us"/>
    </div>
  </div>
  
  <div style="z-index: 1; position: relative;">
    <img src="/assets/images/Group.jpg" alt="" id="image-group">
    <div id="home-locations" >
      <h3>One Centre, Two Locations</h3>
      <p id="home-locations-p">You can find us in Bovisa and in Zona Farini, choose the location closest to you. We are to help you.</p>
      <div id="home-locations-cards">
        <MapCardSmall title="Centro MiLA Bovisa" address="Via Candiani 72, 20158 Milano" email="centromila.bovisa@gmail.com" phone="+39 345697365" to="/about-us/locations" />
        <MapCardSmall title="Centro MiLA Farini" address="Via Valtellina 20, 20159 Milano" email="centromila.farini@gmail.com" phone="+39 344677462" to="/about-us/locations" />
      </div>
    </div>

    <div id="home-help" >
      <div id="needHelp" >
        <p class="semiboldText" >Do you need help?</p>
        <p>Our crisis line is open everyday, at every hour.</p>
        <p class="semiboldText" style="font-size: var(--h3);">0521 248886</p>
      </div>
      <div>
        <p class="semiboldText" style="font-size: var(--h3);">Call 1522</p>
        <p>To contact an anti-violence centre</p>
      </div>
      <hr style="height: 150px; border-left: 4px solid var(--purple); border-bottom: 0px;">
      <div>
        <p class="semiboldText" style="font-size: var(--h3);">Call 112</p>
        <p>To request police intervention</p>
      </div>
    </div>
  </div>  
</template>


<style scoped>
main p, main a{
  font-size: var(--body4);
  line-height: var(--l-height4);
}
#homediv{
  background-image: url(/assets/images/cover-homepage.png);
  background-size: cover;
  width: 100%;
  height: calc(100vw / 2);
}
#homediv div{
  position: relative;
  bottom: -50%;
  left: 10%;
  z-index: 1;
  width: fit-content;
}
#homediv h1{
  width: fit-content;
}
#homediv h2{
  color: var(--white);
  font-weight: var(--semibold);
  width: 892px;
}

#home-intro{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 160px 0;
}
#home-intro p{
  width: 41%;
  text-align: center;
  padding: 20px;
}
#home-intro a{
  text-decoration: underline;
}

.activity-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 156px 0 212px 0;
}
.item1{
  grid-column: 1;
}
.item2{
  grid-column: 2;
}
.item3{
  grid-column: 3;
}

#home-about{
  background-image: url(/assets/images/homepage-about-us.png);
  width: 100%;
  min-height: calc(100vw * 868 / 1920);
  color: var(--white);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
}
#home-about h2{
  margin-bottom: 150px;
  margin-left: 5vw;
}
#home-about div{
  margin-top: 50px;
  margin-bottom: 150px;
  margin-right: 5vw;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
#home-about div p{
  width: 27.2vw;
}

/**Our Locations section */
#home-locations{
  margin-top: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}
#image-group{
  margin-top: 150px;
  position: absolute;
  right: 0;
  width: 55vw;
  height: auto;
  z-index: -1;
}
#home-locations-p{
  max-width: 36.8vw;
  text-align: center;
}
#home-locations-cards{
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8vw;
  margin-top: 86px;
}

#home-help{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5vw;
  width: 65vw;
  margin-left: 17.5vw;
  margin-top: 400px;
  margin-bottom: 400px;
}
#needHelp{
  background-color: var(--lilac);
  border-radius: var(--border-radius-card);
  padding: 35px 50px;
  text-align: center;
  max-width: 363px;
}
</style>

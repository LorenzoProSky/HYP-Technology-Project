<script lang="ts">
import { defineComponent } from 'vue';
import MainButton from '~/components/buttons/MainButton.vue';
import SecondaryButton from '~/components/buttons/SecondaryButton.vue';
import ExitButton from '~/components/buttons/ExitButton.vue';

export default defineComponent({
  components: {
    MainButton,
    SecondaryButton,
    ExitButton
  },
});
</script>

<template>
  <header>
    <NuxtLink to="/" id="logo"><img src="/assets/styles/SVG_Icons/Logo Mila.svg" alt="Centro MiLA"></NuxtLink>
    <nav>
      <div class="menu-container">
        <NuxtLink to="/activities/activities">About Us</NuxtLink>
        <ul class="dropdown-menu">
          <li class="first-li">
            <NuxtLink to="/activities/projects">Our Location</NuxtLink>
          </li>
          <li class="last-li">
            <NuxtLink to="/activities/services">Our People</NuxtLink>
          </li>
        </ul>   
      </div>

      <div class="menu-container">
        <NuxtLink to="/activities/activities">Our Activities</NuxtLink>
        <ul class="dropdown-menu">
          <li class="first-li">
            <NuxtLink to="/activities/projects">Projects</NuxtLink>
          </li>
          <li class="last-li">
            <NuxtLink to="/activities/services">Services</NuxtLink>
          </li>
        </ul>   
      </div>
      
      <div class="menu-container">
        <NuxtLink to="/activities/activities">What You Can Do</NuxtLink>
        <ul class="dropdown-menu">
          <li class="first-li">
            <NuxtLink to="/activities/projects">Volunteering</NuxtLink>
          </li>
          <li class="last-li">
            <NuxtLink to="/activities/services">Donate</NuxtLink>
          </li>
        </ul>   
      </div>

      <SecondaryButton buttonText="Contact Us" buttonLength="short" to="/contact" id="contactUs"
         style="font-size: var(--body2); line-height: var(--l-height-header); width: 137px; height: 50px;" />

      <ExitButton />
    </nav>
  </header>

  <main>
    <slot />
  </main>

  <footer>
    <div id="info">
      <img src="/assets/styles/SVG_Icons/Logo Mila.svg" alt="Centro MiLA" style="height: 85px;">
      <p>Since 2004, the point of reference in Milan for all women in difficulty.</p>
      <MainButton buttonText="Donate" buttonLength="short" to="/activities/services" />
    </div>

    <nav class="body4">
      <div>
        <NuxtLink to="/activities/activities" class="semiboldText">About Us</NuxtLink>
        <NuxtLink to="/activities/activities">Our Location</NuxtLink>
        <NuxtLink to="/activities/activities">Our People</NuxtLink>
      </div>
      <div class="vertical-line"></div>
      <div>
        <NuxtLink to="/activities/activities" class="semiboldText">Our Activities</NuxtLink>
        <NuxtLink to="/activities/activities">Our Services</NuxtLink>
        <NuxtLink to="/activities/activities">Our Projects</NuxtLink>
      </div>
      <div class="vertical-line"></div>
      <div>
        <NuxtLink to="/activities/activities" class="semiboldText">What You Can Do</NuxtLink>
        <NuxtLink to="/activities/activities">Volunteering</NuxtLink>
        <NuxtLink to="/activities/activities">Donate</NuxtLink>
      </div>
    </nav>

    <div id="contacts">
      <div class="semiboldText body4">Contact Us</div>
      <div>
        <p class="semiboldText">Phone</p>
        <p>Call us everyday, at every hour</p>
        <p class="semiboldText body4" style="color: var(--purple);">0521.248886</p>
      </div>
      <div>
        <p class="semiboldText">Location</p>
        <NuxtLink to="/activities/activities">Via Valtellina 20, Milan 20159 <img src="/assets/styles/SVG_Icons/Arrow Right.svg" alt=""></NuxtLink>
        <hr style="width: 100%; border-top: 2px dashed var(--grey3); border-bottom: 0px;">
        <NuxtLink to="/activities/activities">Via Candiani 72, Milan 20158 <img src="/assets/styles/SVG_Icons/Arrow Right.svg" alt=""></NuxtLink>
      </div>
    </div>
  </footer>
</template>


<style scoped>
/* HEADER **************************************************************************/
header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: var(--header-height);
}

#logo{
  text-decoration: none;
  margin-left: 5.2%; /* equal to 100px on a screen that is 1920px wide */
  margin-right: 10px;
}

/* Navigation Bar */
header nav{
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  gap: 2.917vw; /* equal to 56px on a screen that is 1920px wide */
  margin-right: 4.17%; /* equal to 80px on a screen that is 1920px wide */
  font-size: var(--body2);
  line-height: var(--l-height-header);
  min-width: 539px;
}

nav a{
  color: var(--black);
}

header nav #contactUs{
  margin-left: 4px;
  margin-right: 1.25vw; /* equal to 24px on a screen that is 1920px wide */
  width: 137px;
  height: 50px;
  font-size: var(--body2)!important;
  line-height: var(--l-height-header)!important;
}



/* DROPDOWN MENU ********************************************************/
.menu-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: calc(var(--header-height)/2); /**Increase the height to ensure the hover works*/
  top: calc(var(--header-height)/4 - var(--l-height-header)/2); /**centering the element horizontally*/
}

.dropdown-menu { 
  display: none;
  position: absolute;
  top: 16px;
  padding: 0;
  background-color: var(--white);
  width: 187px;
  border: 1px, solid, var(--lilac);
  border-radius: 12px;
  z-index: 1;
}

/* Dropdown Menu Items */
.dropdown-menu li {
  padding: 16px 0 24px 0;
  display: block;
}

.dropdown-menu .first-li{
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.dropdown-menu .last-li{
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.dropdown-menu li:hover {
  background-color: color-mix(in srgb, var(--purple-hover) 20%, transparent);
}

/* Show the dropdown menu on hover */
.menu-container:hover .dropdown-menu {
  display: block;
}

.menu-container:hover a{
  color: var(--purple)!important;
}

.menu-container:hover .dropdown-menu a{
  color: var(--black)!important;
}



/* FOOTER ************************************************************/
footer{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  gap: 30px;
  font-size: var(--body2);
  line-height: var(--l-height2);
}

/**left */
footer #info{
  display: flex;
  flex-direction: column;
  align-content: space-between;
  align-items: start;
  gap: 20px;
  margin-left: 5.73vw;
  max-width: 350px;
}

footer #info button{
  margin-top: 40px;
}

/**center */
footer nav{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0px;
}

footer nav div{
  display: flex;
  flex-direction: column;
  align-content: space-between;
  align-items: start;
  gap: 20px;
  padding: 20px 40px;
}

footer nav .vertical-line{
  height: 200px;
  width: 0;
  border-width: 0 0 0 2px;
  border-style: dashed;
  border-color: var(--grey3);
  padding: 0;  
}

/**right */
footer #contacts{
  display: flex;
  flex-direction: column;
  align-items: start;
  align-content: space-between;
  gap: 20px;
  margin-right: 10.42vw;
}

#contacts a{
  color: var(--black);
  display: flex;
  flex-direction: row;
  align-items: center;
}



/**other general stylings */
footer .body4{
  font-size: var(--body4);
  line-height: var(--l-height4);
}

main{
  margin-top: var(--header-height);
}

.semiboldText{
  font-weight: var(--semibold)
}

p{
  margin: 0px;
}



/**Dynamic header */
@media (max-width: 1092px){
  .menu-container{
  top: calc(var(--header-height)/4 - var(--l-height-header)); /**centering the element horizontally*/
  }
  .dropdown-menu{
    top: 38px;
  }
}

@media (max-width: 851px){
  header nav{
  font-size: var(--body1);
  margin-right: 10px;
  }

  #logo{
    margin-left: 10px;
  }
}

/**Dynamic footer */
@media (max-width: 1600px){
  footer{
  font-size: var(--body1);
  line-height: var(--l-height1);
  }
  footer .body4{
  font-size: var(--body2);
  line-height: var(--l-height-header);
  }
}

@media (max-width: 1030px){
  footer nav{
  flex-direction: column;
  }
  footer nav div{
  padding: 20px;
  }
  footer nav .vertical-line{
  width: 200px;
  height: 0;
  border-width: 2px 0 0 0;
  }
  footer #info{
  max-width: 30vw;
  }
}

@media (max-width: 800px){
  footer{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 50px;
  }
  footer #info{
  max-width: 100%;
  }
  footer nav{
  flex-direction: row;
  }
  footer nav div{
  padding: 20px 40px;
  }
  footer nav .vertical-line{
  height: 200px;
  width: 0;
  border-width: 0 0 0 2px;
  }
  footer #contacts{
  margin-left: 5.73vw;
  }
}

/**Stylings for mobile devices */
@media only screen and (max-device-width:480px){
header{
  height: 64px;
}
#logo{
  height: 27px;
}
}
</style>
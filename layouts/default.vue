<script lang="ts" setup>

import MainButton from '~/components/buttons/MainButton.vue';
import SecondaryButton from '~/components/buttons/SecondaryButton.vue';
import ExitButton from '~/components/buttons/ExitButton.vue';
import ChatbotButton from '~/components/buttons/ChatbotButton.vue';
import Chat from '~/components/chatbot/Chat.vue';
import MobileHeader from '~/components/header/MobileHeader.vue';
import HeaderDropDownMenu from '~/components/header/HeaderDropDownMenu.vue';

/* Detect whether the device is a mobile device or a desktop one based on touch actions support */
const isMobile = ref() as Ref<boolean>;

/* Only on touch-screen devices the header shown is the mobile version */
onBeforeMount(() => {
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        isMobile.value = true;
      } else {
      isMobile.value = false;
     }
});

/* Variable to keep track of the appearance of the chatbot dialogue */
const isChatbotDialogOpened = ref(false);

/* Data for the dropdown menus of the header to be passed to the components */
const linkNames = [
  ['Our Location', 'Our People'],
  ['Projects', 'Services'],
  ['Volunteering', 'Donate'],
];

const to = [
  ['/about-us/locations', '/about-us/people'],
  ['/activities/projects', '/activities/services'],
  ['/what-you-can-do/volunteering', '/what-you-can-do/donate'],
];


/* Reactive management of visibility for dropdown menus */
const focusStatusHeaderLinks = ref([false, false, false]) as Ref<boolean[]>;
const focusStatusDropDownMenus = ref([false, false, false]) as Ref<boolean[]>;

/* Show dropdown when the high-level link in the header is focused or hovered on */

function blurHeaderLink (id: number) {
  setTimeout(() => {
    focusStatusHeaderLinks.value[id] = false;
  }, 100);
}

function blurDropDownMenu (id: number) {
  setTimeout(() => {
    focusStatusDropDownMenus.value[id] = false;
  }, 100);
}

function toggleChatbotDialogue() {
  isChatbotDialogOpened.value = isChatbotDialogOpened.value === true ? false : true;
}

</script>

<!-- TEMPLATE --------------------------------------------------------------------------------->
<template>
  
  <header>
    
    <!-- Home page link -->
    <NuxtLink to="/" class="logo" aria-label="Go back to Home page">
      <Icon name="CentreLogoIcon" size="180" />
    </NuxtLink>
    
    <!-- Navigation bar top-left -->
    <nav class="desktop-nav" v-if="!isMobile">

      <div class="menu-container">
        <NuxtLink class="high-level-link" to="/about-us" aria-controls="about-us-dropdown" 
          :aria-expanded="focusStatusHeaderLinks[0] || focusStatusDropDownMenus[0]" 
          @mouseover="focusStatusHeaderLinks[0] = true" @mouseleave="blurHeaderLink(0)" @focus="focusStatusHeaderLinks[0] = true" @blur="blurHeaderLink(0)">
          About Us
        </NuxtLink>
        <HeaderDropDownMenu id="about-us-dropdown" 
          v-if="focusStatusHeaderLinks[0] || focusStatusDropDownMenus[0]" 
          @mouseover="focusStatusDropDownMenus[0] = true" @mouseleave="blurDropDownMenu(0)" 
          @focused-link="focusStatusDropDownMenus[0] = true" @blur-link="blurDropDownMenu(0)"
          :link-names="linkNames[0]" :to="to[0]"> 
        </HeaderDropDownMenu>
      </div>

      <div class="menu-container">
        <NuxtLink class="high-level-link" to="/activities" aria-controls="our-activities-dropdown" 
          :aria-expanded="focusStatusHeaderLinks[1] || focusStatusDropDownMenus[1]"  
          @mouseover="focusStatusHeaderLinks[1] = true" @mouseleave="blurHeaderLink(1)" @focus="focusStatusHeaderLinks[1] = true" @blur="blurHeaderLink(1)">
          Our Activities
        </NuxtLink>
        <HeaderDropDownMenu id="our-activities-dropdown" 
          v-if="focusStatusHeaderLinks[1] || focusStatusDropDownMenus[1]"
          @mouseover="focusStatusDropDownMenus[1] = true" @mouseleave="blurDropDownMenu(1)" 
          @focused-link="focusStatusDropDownMenus[1] = true" @blur-link="blurDropDownMenu(1)"
          :link-names="linkNames[1]" :to="to[1]"> 
        </HeaderDropDownMenu>
      </div>

      <div class="menu-container">
        <NuxtLink class="high-level-link" to="/what-you-can-do" aria-controls="what-you-can-do-dropdown"
          :aria-expanded="focusStatusHeaderLinks[2] || focusStatusDropDownMenus[2]"    
          @mouseover="focusStatusHeaderLinks[2] = true" @mouseleave="blurHeaderLink(2)" @focus="focusStatusHeaderLinks[2] = true" @blur="blurHeaderLink(2)">
          What You Can Do
        </NuxtLink>
        <HeaderDropDownMenu id="what-you-can-do-dropdown" 
          v-if="focusStatusHeaderLinks[2] || focusStatusDropDownMenus[2]"
          @mouseover="focusStatusDropDownMenus[2] = true" @mouseleave="blurDropDownMenu(2)" 
          @focused-link="focusStatusDropDownMenus[2] = true" @blur-link="blurDropDownMenu(2)"
          :link-names="linkNames[2]" :to="to[2]"> 
        </HeaderDropDownMenu>
      </div>

      <SecondaryButton buttonText="Contact Us" buttonLength="short" to="/contacts" id="contact-us-button-desktop"
        style="font-size: var(--body2); line-height: var(--l-height-header); width: 137px; height: 50px;" />

      <ExitButton/>
    </nav>


    <!-- MOBILE HEADER -->
    <MobileHeader v-if="isMobile"></MobileHeader>

    <ExitButton v-if="isMobile" aria-label="Exit from the website"/>

  </header>

  <!-- Chatbot -->
  <ChatbotButton id="chatbot-button" @chatbot-button-clicked="toggleChatbotDialogue" aria-controls="chat" :aria-expanded="isChatbotDialogOpened" aria-label="Open chatbot"/>
  <Chat v-if="isChatbotDialogOpened" @close-chatbot="toggleChatbotDialogue" id="chat"></Chat>

  <main>
    <slot></slot>
  </main>

  <footer>
    <div id="info">
      <Icon class="footer-logo" aria-label="Centro MiLA logo" name="CentreLogoIcon" size="283" />
      <p>Since 2004, the point of reference in Milan for all women in difficulty.</p>
      <MainButton buttonText="Donate" buttonLength="short" to="/what-you-can-do/donate" />
    </div>

    <nav class="body4">
      <ul>
        <li aria-setsize="3" aria-posinset="1">
          <NuxtLink to="/about-us" class="semiboldText">About Us</NuxtLink>
        </li>
        <li aria-setsize="3" aria-posinset="2">
          <NuxtLink to="/about-us/locations">Our Location</NuxtLink>
        </li>
        <li aria-setsize="3" aria-posinset="3">
          <NuxtLink to="/about-us/people">Our People</NuxtLink>
        </li>
      </ul>
      
      <div class="vertical-line"></div>
      
      <ul>
        <li aria-setsize="3" aria-posinset="1">
          <NuxtLink to="/activities" class="semiboldText">Our Activities</NuxtLink>
        </li>
        <li aria-setsize="3" aria-posinset="2">
          <NuxtLink to="/activities/services">Our Services</NuxtLink>
        </li>
        <li aria-setsize="3" aria-posinset="3">
          <NuxtLink to="/activities/projects">Our Projects</NuxtLink>
        </li>
      </ul>

      <div class="vertical-line"></div>

      <ul>
        <li aria-setsize="3" aria-posinset="1">
          <NuxtLink to="/what-you-can-do" class="semiboldText">What You Can Do</NuxtLink>
        </li>
        <li aria-setsize="3" aria-posinset="2">
          <NuxtLink to="/what-you-can-do/volunteering">Volunteering</NuxtLink>
        </li>
        <li aria-setsize="3" aria-posinset="3">
          <NuxtLink to="/what-you-can-do/donate">Donate</NuxtLink>
        </li>
      </ul>

    </nav>

    <div id="contacts">
      <div class="semiboldText body4">Contact Us</div>
      <div>
        <p class="semiboldText">Phone</p>
        <p>Call us everyday, at every hour</p>
        <p class="semiboldText body4" style="color: var(--black);">0521.248886</p>
      </div>
      <div>
        <p class="semiboldText">Location</p>
        <NuxtLink to="/about-us/locations">Via Valtellina 20, Milan 20159 <Icon name="ForwardArrowIcon" color=var(--purple) class="arrow" /></NuxtLink>
        <hr style="width: 100%; border-top: 2px dashed var(--grey3); border-bottom: 0px;">
        <NuxtLink to="/about-us/locations">Via Candiani 72, Milan 20158 <Icon name="ForwardArrowIcon" color=var(--purple) class="arrow" /></NuxtLink>
      </div>
    </div>
  </footer>
</template>


<style scoped>

*,
* ::before,
* ::after {
  box-sizing: border-box;
}

/* HEADER **************************************************************************/

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: var(--header-height);
  z-index: 10; /* Ensure the header is on top */
  padding: 0 3rem;
  width: 100%;
  background-color: var(--white);
  top: 0;   /* Place the header at the top of the page without adding any space */
}

/* Navigation Bar */
.desktop-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  min-width: 750px;
  max-width: 900px;
  height: 100%;
  gap: 1.8rem;
  
  font-size: var(--body2);
  line-height: var(--l-height-header);
}

nav a {
  color: var(--black);
  min-height: 50px;
  display: flex;
  align-items: center;
}
nav a:hover {
  color: var(--purple-hover);
}
nav a:active {
  color: var(--purple-active);
}

header nav #contactUs{
  margin-left: 4px;
  margin-right: 1.25vw; /* equal to 24px on a screen that is 1920px wide */
}

.menu-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
}

main {
  margin-top: var(--header-height);
}



/* Media queries for header (desktop-first approach) */

@media screen and (max-width: 1200px) {
  .desktop-nav {
    font-size: var(--body1);
    width: 75%;
  }
  .desktop-nav {
    min-width: 500px;
  }
}

@media screen and (max-width: 1050px) {
  header {
    padding: 0 2rem 0 2%;
    height: var(--mobile-header2);
  }

  main{
    margin-top: var(--mobile-header2);
  }

  .logo svg{
    height: 45px;
  }

  .desktop-nav {
    width: 70%;
    min-width: 0px;
  }
}

@media screen and (max-width: 850px) {
  #contact-us-button-desktop {
    display: none;
  }

  .desktop-nav {
    width: 60%;
  }
}

@media only screen and (max-width: 430px){
  header{
    height: var(--mobile-header1);
  }
  main{
    margin-top: var(--mobile-header1);
  }

  .mobile-container{
    font-size: var(--body1);
    line-height: var(--l-height1);
    top: var(--mobile-header1);
  }

  .mobile-container .dropdown-mobile{
    width: 70.8%;
  }

  .subMenu{
    gap: 12px;
    width: 65%;
    margin-top: -14px;
    margin-bottom: 16px;
    font-size: 14px;
  }

  #contact-us-button-mobile {
    margin: var(--mobile-size2);
    margin-bottom: 48px;
    max-width: 70vw;
  }

}













/* FOOTER ************************************************************/
footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  font-size: var(--body2);
  line-height: var(--l-height2);
}

/**left */
footer #info {
  display: flex;
  flex-direction: column;
  align-content: space-between;
  align-items: start;
  gap: 20px;
  margin-left: 5.73vw;
  max-width: 350px;
}

footer #info .footer-logo{
  margin-top: -100px;
}

footer #info p{
  margin-top: -100px;
}

footer #info a {
  margin-top: 50px;
}

/**center */
footer nav {
  display: flex;
  flex-direction: row;
  align-items: start;
}

footer nav ul {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 20px;
  padding: 20px 40px;
  list-style: none;
}

footer nav .vertical-line {
  height: 200px;
  width: 0;
  border-width: 0 0 0 2px;
  border-style: dashed;
  border-color: var(--grey3);
  padding: 0;
}

/**right */
footer #contacts {
  display: flex;
  flex-direction: column;
  align-items: start;
  align-content: space-between;
  gap: 20px;
  margin-right: 10.42vw;
}

#contacts a {
  color: var(--black);
  display: flex;
  flex-direction: row;
  align-items: center;
}

#contacts a:hover .arrow{
  color: var(--purple-hover);
}

#contacts a:active .arrow{
  color: var(--purple-clicked);
}

footer .arrow{
  padding: 5px;
  min-width: 24px;
  min-height: 24px;
}




/**other general stylings */
footer .body4 {
  font-size: var(--body4);
  line-height: var(--l-height4);
}



.semiboldText {
  font-weight: var(--semibold)
}

p {
  margin: 0px;
}



/**Dynamic footer */
@media (max-width: 1600px) {
  footer {
    font-size: var(--body1);
    line-height: var(--l-height1);
  }

  footer .body4 {
    font-size: var(--body2);
    line-height: var(--l-height-header);
  }
}

@media (max-width: 1060px) {
  footer nav {
    flex-direction: column;
  }

  footer nav ul {
    padding: 20px;
  }

  footer nav .vertical-line {
    width: 200px;
    height: 0;
    border-width: 2px 0 0 0;
  }

  footer #info {
    max-width: 30vw;
  }
}

@media (max-width: 900px) {
  footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap: 50px;
  }

  footer #info {
    max-width: 100%;
  }

  footer nav {
    flex-direction: row;
  }

  footer nav ul {
    padding: 20px 40px;
  }

  footer nav .vertical-line {
    height: 200px;
    width: 0;
    border-width: 0 0 0 2px;
  }

  footer #contacts {
    margin-left: 5.73vw;
  }
}


/**Stylings for mobile devices */
/**tablet */
@media only screen and (max-device-width:900px){

footer {
  align-items: center;
}
footer #info {
  max-width: 95%;
  align-items: center;
  margin: 0;
}
footer #info img{
  height: 54px!important;
}
footer nav{
flex-direction: column;
margin-left: 5.73vw;
}
footer nav ul{
padding: 20px;
}
footer nav .vertical-line{
width: 200px;
height: 0;
border-width: 2px 0 0 0;
}
footer #contacts {
  margin: 0;
}
}

</style>
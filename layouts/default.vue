<script lang="ts" setup>

import { onMounted } from 'vue';
import MainButton from '~/components/buttons/MainButton.vue';
import SecondaryButton from '~/components/buttons/SecondaryButton.vue';
import ExitButton from '~/components/buttons/ExitButton.vue';
import ChatbotButton from '~/components/buttons/ChatbotButton.vue';
import Chat from '~/components/chatbot/Chat.vue';
import MobileHeaderOpenCloseButton from '~/components/buttons/MobileHeaderOpenCloseButton.vue';
import MobileHeaderPlusMinusButton from '~/components/buttons/MobileHeaderPlusMinusButton.vue';

/* 
 * Variable that keeps track of whether the layout is for a mobile or desktop target 
 * it is constantly updated using an event listener on the window element.
 */
const isMobile = ref(false);

/* Variable to keep track of whether the mobile menus is opened or not */
const isMobileMenuOpened = ref(false);

/* Variable to keep track of the appearance of the chatbot dialogue */
const isChatbotDialogOpened = ref(false);



watch(isMobile, () => {
  /* Keep the mobile menu closed if the layout is not for mobile */
  if(!isMobile.value){
    isMobileMenuOpened.value = false;
  }
});


/* Open and close mobile menu based on the boolean ref isMobileMenuOpened */
function toggleMobileMenu() {
  isMobileMenuOpened.value = isMobileMenuOpened.value === true ? false : true;
}

function toggleChatbotDialogue() {
  isChatbotDialogOpened.value = isChatbotDialogOpened.value === true ? false : true;
  console.log("value: "+isChatbotDialogOpened.value);
}



function openSubmenu(index: number) {
  let subMenu = document.getElementsByClassName('subMenu')[index] as HTMLElement;
  if(subMenu){
    subMenu.style.display='flex';
  }
}

function closeSubmenu(index: number) {
  let subMenu = document.getElementsByClassName('subMenu')[index] as HTMLElement;
  if(subMenu){
    subMenu.style.display='none';
  }
}





onMounted(() => {

  isMobile.value = window.innerWidth < 1050;

  /* Recalculate the state of the page on resizing for conditional rendering of elements on the page */
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 1050;
  });




  /* ARIA attributes handling for expandable dropdown menus
   * The "a" element created by the NuxtLink is extracted and the listeners for
   * focus and hovering events modify the aria-expanded attributes */
  document.querySelectorAll('.menu-container > a').forEach( link => {
    link.addEventListener('mouseover', (event) => {
      link.setAttribute('aria-expanded', 'true');
    });
    link.addEventListener('mouseout', (event) => {
      link.setAttribute('aria-expanded', 'false');
    });
    link.addEventListener('focus', (event) => {
      link.setAttribute('aria-expanded', 'true');
    });
    link.addEventListener('blur', (event) => {
      link.setAttribute('aria-expanded', 'true');
    });


  });

  

});
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
        <NuxtLink class="high-level-link" to="/about-us" aria-controls="about-us-dropdown" aria-expanded="false">
          About Us
        </NuxtLink>
        <ul id="about-us-dropdown" class="dropdown-menu" >
          <li aria-posinset="1" aria-setsize="2">
            <NuxtLink to="/about-us/locations">Our Location</NuxtLink>
          </li>
          <li aria-posinset="2" aria-setsize="2">
            <NuxtLink to="/about-us/people">Our People</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="menu-container">
        <NuxtLink class="high-level-link" to="/activities" aria-controls="our-activities-dropdown" aria-expanded="false">
          Our Activities
        </NuxtLink>
        <ul id="our-activities-dropdown" class="dropdown-menu">
          <li aria-posinset="1" aria-setsize="2">
            <NuxtLink to="/activities/projects">Projects</NuxtLink>
          </li>
          <li aria-posinset="2" aria-setsize="2">
            <NuxtLink to="/activities/services">Services</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="menu-container">
        <NuxtLink class="high-level-link" to="/what-you-can-do" aria-controls="what-you-can-do-dropdown" aria-expanded="false">
          What You Can Do
        </NuxtLink>
        <ul id="what-you-can-do-dropdown" class="dropdown-menu">
          <li aria-posinset="1" aria-setsize="2">
            <NuxtLink to="/what-you-can-do/volunteering">Volunteering</NuxtLink>
          </li>
          <li aria-posinset="2" aria-setsize="2">
            <NuxtLink to="/what-you-can-do/donate">Donate</NuxtLink>
          </li>
        </ul>
      </div>

      <SecondaryButton buttonText="Contact Us" buttonLength="short" to="/contacts" id="contactUs"
        style="font-size: var(--body2); line-height: var(--l-height-header); width: 137px; height: 50px;" />

      <ExitButton/>
    </nav>


    <!-- MOBILE HEADER -->
    <MobileHeaderOpenCloseButton class="mobile-menu-open-close-button" v-if="isMobile" @toggle-mobile-menu="toggleMobileMenu"></MobileHeaderOpenCloseButton>

    <nav id="mobile-nav" class="mobile-container" v-if="isMobileMenuOpened && isMobile">

      <div class="dropdown-mobile">
        <NuxtLink to="/about-us" class="semiboldText">About Us</NuxtLink>
        <MobileHeaderPlusMinusButton :index="0" @open-submenu="openSubmenu" @close-submenu="closeSubmenu"> </MobileHeaderPlusMinusButton>
      </div>
      <div class="subMenu">
        <NuxtLink to="/about-us/locations">Our Location</NuxtLink>        
        <NuxtLink to="/about-us/people">Our People</NuxtLink>
      </div>   

      <div class="dropdown-mobile">
        <NuxtLink to="/activities" class="semiboldText">Our Activities</NuxtLink>
        <MobileHeaderPlusMinusButton :index="1" @open-submenu="openSubmenu" @close-submenu="closeSubmenu"> </MobileHeaderPlusMinusButton>
      </div>
      <div class="subMenu">
        <NuxtLink to="/activities/projects">Projects</NuxtLink>        
        <NuxtLink to="/activities/services">Services</NuxtLink>
      </div>

      <div class="dropdown-mobile">
        <NuxtLink to="/what-you-can-do" class="semiboldText">What You Can Do</NuxtLink>
        <MobileHeaderPlusMinusButton :index="2" @open-submenu="openSubmenu" @close-submenu="closeSubmenu"> </MobileHeaderPlusMinusButton>
      </div>
      <div class="subMenu">
        <NuxtLink to="/what-you-can-do/volunteering">Volunteering</NuxtLink>        
        <NuxtLink to="/what-you-can-do/donate">Donate</NuxtLink>
      </div>

      <SecondaryButton buttonText="Contact Us" buttonLength="tablet" to="/contacts" id="contact-us-button-mobile"
         style="font-size: var(--body1); line-height: var(--l-height-header); font-weight: var(--semibold); height: 50px;" />
    
    </nav>

    <ExitButton class="mobile-exit" v-if="isMobile" aria-label="Exit from the website"/>

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
  gap: 1.8rem;
  
  font-size: var(--body2);
  line-height: var(--l-height-header);
}

nav a {
  color: var(--black);
}

/* Making the link area larger to improve accessibility for 
  people with mobility impairments */
.high-level-link {
  min-height: 40px;
  margin-top: 20px
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

.dropdown-menu {
  opacity: 0;
  transition: opacity 0.5s;
  position: absolute;
  top: 42px;  
  background-color: var(--white);
  width: 187px;
  border: 1px, solid, var(--lilac);
  border-radius: var(--border-radius-card);
  z-index: 1;
  padding: 0;
  margin: 32  px 0;
  list-style: none;
}

/* Show the dropdown menu on hover and on focus
 * If the link (a), child of .menu-container is hovered or focused, the .dropdown-menu
 * that is its sibling becomes visible.
 * Moreover, if the dropdown menu itself is hovered or if any of the children are focused, the opacity
 * stays set to 1.
 */
.menu-container a:hover + .dropdown-menu,
.menu-container a:focus + .dropdown-menu,
.dropdown-menu:hover,
.dropdown-menu:focus-within {
  opacity: 1;
}

.menu-container a:hover,
.menu-container a:focus {
  color: var(--purple);
}

/* Dropdown Menu Items */
.dropdown-menu li {
  padding: 16px 0 24px 0;
}
.dropdown-menu li:first-child {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
.dropdown-menu li:last-child {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

/* Background color for the single links in the dropdown menus
 * both in case of hovering with the mouse and in case of focusing on the link wrapped inside 
 * the li element of the list.
*/
.dropdown-menu li:hover,
.dropdown-menu li:focus-within {
  background-color: var(--lilac);
}






/**Header for mobile devices */

/* Wrapper for the dropdown menu */
.mobile-container {
  display:flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  font-size: var(--body2);
  line-height: var(--l-height-header);
  background-color: var(--white);
  padding-top: 3.4rem;

  position: fixed;
  width: 100%;
  top: var(--mobile-header2);
  left: 0;

  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
}

/* Top-level links */
.mobile-container .dropdown-mobile {
  max-width: 550px;
  width: 80%;
  display: flex;
  justify-content: space-between;
}
.mobile-container a {
  color: var(--black);
}


/* Sub-menus under the top-level links */
.subMenu {
  display: none;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  width: 75%;
  max-width: 500px;
  margin-top: -12px;
  margin-bottom: 16px;
  font-size: var(--body1);
  line-height: var(--l-height1);
  font-weight: var(--medium);
}
.subMenu a {
  color: var(--grey1);
}

main {
  margin-top: var(--header-height);
}




/* Media queries for header (desktop-first approach) */

/* TABLET */
@media screen and (max-width: 1050px) {
  header {
    padding: 0 2rem 0 8%;
    height: var(--mobile-header2);
  }

  .mobile-exit {
    display: block;
    position: fixed;
    right: 72px;
    bottom: 54px;
    border-radius: 100%;
    z-index: 11;
  }

  main{
    margin-top: var(--mobile-header2);
  }


  #contact-us-button-mobile{
    margin: var(--mobile-size2);
    display: block;
    min-width: 200px;
    max-width: 350px;
  }

}

/* SMARTPHONE */
@media only screen and (max-width: 430px){
  header{
    height: var(--mobile-header1);
  }
  main{
    margin-top: var(--mobile-header1);
  }

  .logo svg{
    height: 45px;
  }

  .mobile-container{
    font-size: var(--body1);
    line-height: var(--l-height1);
    top: var(--mobile-header1);
  }

  .mobile-container .dropdown-mobile{
    width: 70.8%;
  }

  .mobile-exit {
    position: fixed;
    right: 40px;
    bottom: 32px;
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
}

</style>
<script lang="ts" setup>
import { onMounted } from 'vue';

function openMenu() {
  let mobileContainer = document.getElementById('mobile-container');
  let mobileMenu = document.getElementById('mobileMenu');
  let mobileMenuClose = document.getElementById('mobileMenuClose');
  if (mobileContainer && mobileMenu && mobileMenuClose) {
    mobileContainer.style.display = "flex";
    mobileMenu.style.display = "none";
    mobileMenuClose.style.display = "block";
  }
}

function closeMenu(){
  let mobileContainer = document.getElementById('mobile-container');
  let mobileMenu = document.getElementById('mobileMenu');
  let mobileMenuClose = document.getElementById('mobileMenuClose');
  if (mobileContainer && mobileMenu && mobileMenuClose) {
    mobileContainer.style.display = "none";
    mobileMenu.style.display = "block";
    mobileMenuClose.style.display = "none";
    if (window.screen.width > 1024) {    
      mobileMenu.style.display = "none";    
    }
  }
  
}

function openDrop(num: number){
  let subMenus = document.getElementsByClassName('subMenu');
  let plus = document.getElementsByClassName('plus');
  let minus = document.getElementsByClassName('minus');
  if(subMenus[num] && plus[num] && minus[num]){
    let subMenu = subMenus[num] as HTMLElement;
    let plusi = plus[num] as HTMLElement;
    let minusi = minus[num] as HTMLElement;
    subMenu.style.display = "flex";
    plusi.style.display = "none";
    minusi.style.display = "block";
  }
  for(let i = 0; i < subMenus.length; i++){
    if (i != num) {
      let closing = subMenus[i] as HTMLElement;
      let plusi = plus[i] as HTMLElement;
      let minusi = minus[i] as HTMLElement;
      closing.style.display = "none";
      plusi.style.display = "block";
      minusi.style.display = "none";
    }
  }
}

function closeDrop(num: number){
  let subMenus = document.getElementsByClassName('subMenu');
  let plus = document.getElementsByClassName('plus');
  let minus = document.getElementsByClassName('minus');
  if(subMenus[num] && plus[num] && minus[num]){
    let subMenu = subMenus[num] as HTMLElement;
    let plusi = plus[num] as HTMLElement;
    let minusi = minus[num] as HTMLElement;
    subMenu.style.display = "none";
    plusi.style.display = "block";
    minusi.style.display = "none";
  }
}

onMounted(() => {
  let mobileMenu = document.getElementById('mobileMenu');
  let mobileMenuClose = document.getElementById('mobileMenuClose');
  let plus = document.getElementsByClassName('plus');
  let minus = document.getElementsByClassName('minus');
  let links = document.getElementsByTagName('a');
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', closeMenu);
  }
  if (mobileMenu && mobileMenuClose) {
    mobileMenu.addEventListener('click', openMenu);
    mobileMenuClose.addEventListener('click', closeMenu);
  }
  for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', () => {openDrop(i)});
  }
  for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', () => {closeDrop(i)});
  }
});
</script>

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

<!-- TEMPLATE --------------------------------------------------------------------------------->
<template>
  <header>
    <NuxtLink to="/" id="logo">
      <Icon class="header-logo" name="CentreLogoIcon" size="180" />
    </NuxtLink>
    <nav>
      <div class="menu-container">
        <NuxtLink to="/about-us">About Us</NuxtLink>
        <ul class="dropdown-menu">
          <li class="first-li">
            <NuxtLink to="/about-us/locations">Our Location</NuxtLink>
          </li>
          <li class="last-li">
            <NuxtLink to="/about-us/people">Our People</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="menu-container">
        <NuxtLink to="/activities">Our Activities</NuxtLink>
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
        <NuxtLink to="/what-you-can-do">What You Can Do</NuxtLink>
        <ul class="dropdown-menu">
          <li class="first-li">
            <NuxtLink to="/what-you-can-do/volunteering">Volunteering</NuxtLink>
          </li>
          <li class="last-li">
            <NuxtLink to="/what-you-can-do/donate">Donate</NuxtLink>
          </li>
        </ul>
      </div>

      <SecondaryButton buttonText="Contact Us" buttonLength="short" to="/contacts" id="contactUs"
        style="font-size: var(--body2); line-height: var(--l-height-header); width: 137px; height: 50px;" />

      <ExitButton />
    </nav>

    <!-- header for mobile -->
    <Icon name="MenuIcon" color=var(--purple) id="mobileMenu" />
    <Icon name="MobileExitIcon" color=var(--purple) id="mobileMenuClose" />
    <div id="mobile-container" ref="mobileContainer">
      <div class="dropdown-mobile">
        <NuxtLink to="/about-us" class="semiboldText">About Us</NuxtLink>
        <Icon name="MobilePlusIcon" color=var(--purple-hover) size=var(--mobile-size2) class="plus" />
        <Icon name="MobileMinusIcon" color=var(--purple-hover) size=var(--mobile-size2) class="minus" />        
      </div>
      <div class="subMenu">
        <NuxtLink to="/about-us/locations">Our Location</NuxtLink>        
        <NuxtLink to="/about-us/people">Our People</NuxtLink>
      </div>
      <div class="dropdown-mobile">
        <NuxtLink to="/activities" class="semiboldText">Our Activities</NuxtLink>
        <Icon name="MobilePlusIcon" color=var(--purple-hover) size=var(--mobile-size2) class="plus" />
        <Icon name="MobileMinusIcon" color=var(--purple-hover) size=var(--mobile-size2) class="minus" />
      </div>
      <div class="subMenu">
        <NuxtLink to="/activities/projects">Projects</NuxtLink>        
        <NuxtLink to="/activities/services">Services</NuxtLink>
      </div>
      <div class="dropdown-mobile">
        <NuxtLink to="/what-you-can-do" class="semiboldText">What You Can Do</NuxtLink>
        <Icon name="MobilePlusIcon" color=var(--purple-hover) size=var(--mobile-size2) class="plus" />
        <Icon name="MobileMinusIcon" color=var(--purple-hover) size=var(--mobile-size2) class="minus" />
      </div>
      <div class="subMenu">
        <NuxtLink to="/what-you-can-do/volunteering">Volunteering</NuxtLink>        
        <NuxtLink to="/what-you-can-do/donate">Donate</NuxtLink>
      </div>
      <SecondaryButton buttonText="Contact Us" buttonLength="tablet" to="/contacts" id="contactUsT"
         style="font-size: var(--body1); line-height: var(--l-height-header); font-weight: var(--semibold); height: 50px;" />
      <SecondaryButton buttonText="Contact Us" buttonLength="smartphone" to="/contacts" id="contactUsS"
         style="font-size: var(--body1); line-height: var(--l-height-header); font-weight: var(--semibold); height: 50px;" />
    </div>
    <ExitButton id="mobile-exit"/>
  </header>

  <main>
    <slot />
  </main>

  <footer>
    <div id="info">
      <Icon class="footer-logo" name="CentreLogoIcon" size="283" />
      <p>Since 2004, the point of reference in Milan for all women in difficulty.</p>
      <MainButton buttonText="Donate" buttonLength="short" to="/what-you-can-do/donate" />
    </div>

    <nav class="body4">
      <div>
        <NuxtLink to="/about-us" class="semiboldText">About Us</NuxtLink>
        <NuxtLink to="/about-us/locations">Our Location</NuxtLink>
        <NuxtLink to="/about-us/people">Our People</NuxtLink>
      </div>
      <div class="vertical-line"></div>
      <div>
        <NuxtLink to="/activities" class="semiboldText">Our Activities</NuxtLink>
        <NuxtLink to="/activities/services">Our Services</NuxtLink>
        <NuxtLink to="/activities/projects">Our Projects</NuxtLink>
      </div>
      <div class="vertical-line"></div>
      <div>
        <NuxtLink to="/what-you-can-do" class="semiboldText">What You Can Do</NuxtLink>
        <NuxtLink to="/what-you-can-do/volunteering">Volunteering</NuxtLink>
        <NuxtLink to="/what-you-can-do/donate">Donate</NuxtLink>
      </div>
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: var(--header-height);
  z-index: 10; /* Ensure the header is on top */
}

#logo {
  text-decoration: none;
  margin-left: 5.2%;
  /* equal to 100px on a screen that is 1920px wide */
  margin-right: 10px;
  min-width: 114px;
}

/* Navigation Bar */
header nav{
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  gap: 2.917vw;
  /* equal to 56px on a screen that is 1920px wide */
  margin-right: 4.17%;
  /* equal to 80px on a screen that is 1920px wide */
  font-size: var(--body2);
  line-height: var(--l-height-header);
  min-width: 539px;
}

nav a {
  color: var(--black);
}

header nav #contactUs{
  margin-left: 4px;
  margin-right: 1.25vw; /* equal to 24px on a screen that is 1920px wide */
}

/**Header for mobile devices */
#mobileMenu{
  display: none;
  margin-right: var(--mobile-size2);
  height: var(--mobile-size2);
  width: var(--mobile-size2);
}
#mobileMenuClose{
  display: none;
  margin-right: var(--mobile-size2);
  height: 42px;
  width: 42px;
}
#mobile-container{
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  font-size: var(--body2);
  line-height: var(--l-height-header);
  background-color: var(--white);
  padding-top: 54px;
  width: 100vw;
  position: fixed;
  top: var(--mobile-header2);
  right: 0;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
}
#mobile-container .dropdown-mobile{
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
#mobile-container a{
  color: var(--black);
}
.plus{
  height: 28px;
  width: 28px;
}
.minus{
  display: none;
  height: 28px;
  width: 28px;
}
.subMenu{
  display: none;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  width: 75%;
  margin-top: -12px;
  margin-bottom: 16px;
  font-size: var(--body1);
  line-height: var(--l-height1);
  font-weight: var(--medium);
}
.subMenu a{
  color: var(--grey1)!important;
}
#contactUsT{
  margin: var(--mobile-size2);
  margin-bottom: 48px;
  display: none;
}
#contactUsS{
  margin: var(--mobile-size2);
  display: none;
}
#mobile-exit{
  display: none;
}

/* DROPDOWN MENU ********************************************************/
.menu-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: calc(var(--header-height)/2);
  /**Increase the height to ensure the hover works*/
  top: calc(var(--header-height)/4 - var(--l-height-header)/2);
  /**centering the element horizontally*/
}

.dropdown-menu {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s, visibility 0.5s;

  position: absolute;
  top: 16px;
  padding: 0;
  background-color: var(--white);
  width: 187px;
  border: 1px, solid, var(--lilac);
  border-radius: var(--border-radius-card);
  z-index: 1;
}

/* Dropdown Menu Items */
.dropdown-menu li {
  padding: 16px 0 24px 0;
  display: block;
}

.dropdown-menu .first-li {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.dropdown-menu .last-li {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.dropdown-menu li:hover {
  background-color: color-mix(in srgb, var(--purple-hover) 20%, transparent);
}

/* Show the dropdown menu on hover */
.menu-container:hover .dropdown-menu {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.5s;
}

.menu-container:hover a {
  color: var(--purple) !important;
}

.menu-container:hover .dropdown-menu a {
  color: var(--black) !important;
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
  justify-content: center;
  align-items: center;
  gap: 0px;
}

footer nav div {
  display: flex;
  flex-direction: column;
  align-content: space-between;
  align-items: start;
  gap: 20px;
  padding: 20px 40px;
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

main {
  margin-top: var(--header-height);
}

.semiboldText {
  font-weight: var(--semibold)
}

p {
  margin: 0px;
}



/**Dynamic header */
@media (max-width: 1084px) and (min-device-width: 901px){
  .dropdown-menu {
    top: 38px;
  }
  #logo svg{
    width: 130px;
  }
}

@media (max-width: 1019.2px){
  .menu-container{
    top: calc(var(--header-height)/4 - var(--l-height-header)); /**centering the element horizontally*/
  }

}

@media (max-width: 968px){
  #logo {
    margin-left: 10px;
  }
}

@media (max-width: 851px) and (min-device-width: 901px){
  header nav {
    font-size: var(--body1);
    margin-right: 10px;
  }
  #logo svg{
    width: 100px;
  }
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

  footer nav div {
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

  footer nav div {
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
@media only screen and (max-device-width: 900px){
header{
  height: var(--mobile-header2);
}
main{
  margin-top: var(--mobile-header2);
}
#logo{
  margin-left: var(--mobile-size2);
}
#logo img{
  height: var(--mobile-size2);
}
header nav{
  display: none;
}
#mobileMenu{
  display: block;
}
#mobile-exit{
  display: block!important;
  position: fixed;
  right: 72px;
  bottom: 54px;
}
#contactUsT{
  margin: var(--mobile-size2);
  margin-bottom: 48px;
  display: block;
}
#contactUsS{
  margin: var(--mobile-size2);
  display: none;
}

footer #info img{
  height: 54px!important;
}
footer nav{
flex-direction: column;
margin-left: 5.73vw;
}
footer nav div{
padding: 20px;
}
footer nav .vertical-line{
width: 200px;
height: 0;
border-width: 2px 0 0 0;
}
}

/**smartphones */
@media only screen and (max-device-width: 430px){
header{
  height: var(--mobile-header1);
}
main{
  margin-top: var(--mobile-header1);
}
#logo{
  margin-left: var(--mobile-size1);
}
#logo img{
  height: 27px;
}
#mobileMenu{
  margin-right: var(--mobile-size1);
  height: var(--mobile-size1);
  width: var(--mobile-size1);
}
#mobileMenuClose{
  margin-right: var(--mobile-size1);
  height: 32px;
  width: 32px;
}
#mobile-container{
  font-size: var(--body1);
  line-height: var(--l-height1);
  top: var(--mobile-header1);
}
#mobile-container .dropdown-mobile{
  width: 70.8%;
}
#mobile-exit{
  position: fixed;
  right: 40px;
  bottom: 32px;
}
.plus{
  height: 24px;
  width: 24px;
}
.minus{
  height: 24px;
  width: 24px;
}
.subMenu{
  gap: 12px;
  width: 65%;
  margin-top: -14px;
  margin-bottom: 16px;
  font-size: 14px;
}
#contactUsT{
  margin: var(--mobile-size2);
  margin-bottom: 48px;
  display: none;
}
#contactUsS{
  margin: var(--mobile-size2);
  display: block;
}
}
</style>
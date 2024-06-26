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
    if (window.screen.width > 900) {    
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

function openChat(){
  let chatL = document.getElementById('chatbot-label');
  let chatB = document.getElementById('chatbot-button');
  if (chatL) {
    chatL.style.visibility = 'visible';
    chatL.style.opacity = '1';
    chatL.style.transition = 'opacity 0.25s';
  }
  if (chatB) {
    chatB.removeEventListener('click', openChat);
  }
}

function closeChat(){
  let chatL = document.getElementById('chatbot-label');
  let chatB = document.getElementById('chatbot-button');
  if (chatL) {
    chatL.style.visibility = 'hidden';
    chatL.style.opacity = '0';
    chatL.style.transition = 'opacity 0.25s, visibility 0.25s';
  }
  if (chatB) {
    chatB.addEventListener('click', openChat);
  }
}

onMounted(() => {
  let mobileMenu = document.getElementById('mobileMenu');
  let mobileMenuClose = document.getElementById('mobileMenuClose');
  let plus = document.getElementsByClassName('plus');
  let minus = document.getElementsByClassName('minus');
  let links = document.getElementsByTagName('a');
  let chatB = document.getElementById('chatbot-button');
  let chatClose = document.getElementById('chat-close-button');
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', closeMenu);
    links[i].addEventListener('click', closeChat); 
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
  if (chatB) {
    chatB.addEventListener('click', openChat);
  }
  if (chatClose) {
    chatClose.addEventListener('click', closeChat);
  }
});
</script>

<script lang="ts">
import { defineComponent } from 'vue';
import MainButton from '~/components/buttons/MainButton.vue';
import SecondaryButton from '~/components/buttons/SecondaryButton.vue';
import ExitButton from '~/components/buttons/ExitButton.vue';
import ChatbotButton from '~/components/buttons/ChatbotButton.vue';

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
    <div id="mobile-container" >
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
    <!-- Chatbot -->
    <ChatbotButton id="chatbot-button" />
    <div id="chatbot-label">
      <div id="chat-left">
        <SecondaryButton buttonText="Clear Chat" buttonLength="short" style="font-size: var(--body1); line-height: var(--l-height1); width: 120px; height: 40px;" />
        <h4>We are to <br> help you.</h4>
        <p>This space is here to guide you on what to do and who to reach out to if you're experiencing or have experienced violence from men. 
          While you won't be interacting with a person directly, the answers provided have been carefully crafted by trained professionals from Anti-Violence Centers.</p>
      </div>

      <div id="chat-right" >
        <div id="chat-close">
          <SecondaryButton buttonText="Clear Chat" buttonLength="short" style="font-size: var(--body1); line-height: var(--l-height1);
           width: 120px; height: 40px;" id="secondaryButton-mobile"/>
          <Icon name="MobileExitIcon" color="var(--purple)" size="32" style="margin-right: 40px; cursor: pointer" id="chat-close-button" />
        </div>
        <div id="chat-conversation" >
          <!--la conversazione con il chatbot va inserita qui-->
          <ChatbotChatAgent text="ciaooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo" />
          <ChatbotChatUser text="ciao" />
          <ChatbotChatAgent text="ciaooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo" />
          <ChatbotChatAgent text="ciaooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo" />
          <ChatbotChatAgent text="ciaooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo" />
          <ChatbotChatAgent text="ciaooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo" />
          <ChatbotChatAgent text="ciaooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo" />
          <ChatbotChatAgent text="ciaooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo" />
          <ChatbotChatAgent text="ciaooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo" />
        </div>
        <form>
          <input type="text" name="input" placeholder="Here you can write" id="chat-input" required>
          <button type="submit" style="width: 80px; height: 40px; border: 1px solid var(--purple); border-radius: 8px; font-size: var(--body1); 
          background-color: var(--white); color: var(--purple); cursor: pointer;" >Send</button>
        </form>
      </div>
    </div>

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

/** CHATBOT **********************************************************/
#chatbot-label{
  position: fixed;
  top: 26.5vh;
  right: 59px;
  z-index: 100;
  width: 1416px;
  max-width: 90vw;
  height: 70vh;
  border-radius: 24px;
  box-shadow: 0px 16px 40px rgba(26, 20, 31, 0.15);
  display: flex;
  flex-direction: row;
  background-color: var(--white);
  visibility: hidden;
  opacity: 0;
}

#chat-left{
  width: 27%;
  height: 100%;
  background-color: var(--purple);
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
}
#chat-left h4{
  width: 68.8%;
}
#chat-left p{
  font-size: var(--body1);
  line-height: var(--l-height1);
  margin-top: 24px;
  margin-bottom: 72px;
  width: 68.8%;
}
#chat-left a{
  position: absolute;
  top: 48px;
  left: 4.2%;
}

#secondaryButton-mobile{
  display: none;
}
#chat-right{
  width: 73%;
  height: 100%;
}
#chat-close{
  height: 80px;
  border-bottom: 1px solid var(--grey1);
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  gap: 32px;
}
#chat-conversation{
  height: calc(100% - 80px - 72px - 6.8vh);
  background-color: var(--white);
  overflow-y: scroll;
  overflow-x: hidden;
}
/* scrollbar per browser WebKit */
#chat-conversation::-webkit-scrollbar {
  width: 12px;
}
#chat-conversation::-webkit-scrollbar-track {
  background: color-mix(in srgb, var(--white) 80%, transparent);
  border-radius: 10px;
}
#chat-conversation::-webkit-scrollbar-thumb {
  background: var(--grey2);
  border-radius: 10px;
  border: 1px solid var(--white);
}
/* scrollbar per Firefox */
/*
#chat-conversation {
  scrollbar-width: thin;
  scrollbar-color: var(--grey2) var(--white);
}*/

form{
  position: absolute;
  bottom: 6.8vh;
  right: 3.5vw;
  width: 883px;
  max-width: calc(100vw * 90/100 * 73/100 * 90/100);
  height: 72px;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  font-size: var(--body1);
}
#chat-input{
  height: calc(100% - 20px);
  width: 88.45%;
  margin: 0;
  border: 2px solid var(--grey2);
  border-radius: 12px;
}
#chat-input:focus{
  outline: none;
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

/**Dynamic Chatbot */
@media(max-width: 1100px){
  #chat-left p{
    width: 90%;
  }
}
@media(max-width: 900px){
  #chatbot-label{
    right: 3vw;
  }
  #chat-left{
    display: none;
  }
  #chat-right{
    width: 100%;
  }
  form{
    max-width: calc(100vw * 90/100 * 90/100);
  }
  #secondaryButton-mobile{
    display: block !important;
  }
}

/**Stylings for mobile devices */
/**tablet */
@media only screen and (max-device-width:900px){
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
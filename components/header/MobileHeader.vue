<script lang="ts" setup>
import MobileHeaderPlusMinusButton from './MobileHeaderPlusMinusButton.vue';
import MobileHeaderOpenCloseButton from './MobileHeaderOpenCloseButton.vue';
import SecondaryButton from '../buttons/SecondaryButton.vue';

const visibilityMobileHeader = ref(false) as Ref<boolean>;
const visibilitySubmenus = ref([false, false, false]) as Ref<boolean[]>;
const submenuIcons = ref(['MobilePlusIcon','MobilePlusIcon', 'MobilePlusIcon']) as Ref<string[]>;
const openCloseIcon = ref('MenuIcon');

/* Function to toggle the visibility of the mobile header component and reset internal state */
function toggleMobileHeader () {
    visibilityMobileHeader.value = visibilityMobileHeader.value === true ? false : true;
    /* Closing mobile header and resetting visibility states */
    if(visibilityMobileHeader.value === false) {
        openCloseIcon.value = 'MenuIcon';
        for(let i = 0; i < visibilitySubmenus.value.length; i++){
            visibilitySubmenus.value[i] = false;
            submenuIcons.value[i] = 'MobilePlusIcon';
        }
    } else {
        openCloseIcon.value = 'MobileExitIcon';
    }
}

/* Function to toggle the visibility of the submenus inside the mobile header */
function toggleSubMenu (index: number) {
    visibilitySubmenus.value[index] = visibilitySubmenus.value[index] === true ? false : true;
}


</script>

<template>

    <MobileHeaderOpenCloseButton class="mobile-menu-open-close-button" @toggle-mobile-menu="toggleMobileHeader"
        :controls-id="'mobile-nav'" :icon-name="openCloseIcon"></MobileHeaderOpenCloseButton>

    <nav id="mobile-nav" class="mobile-container" v-if="visibilityMobileHeader">

        <div class="dropdown-mobile">
            <NuxtLink to="/about-us" class="semiboldText" @click="toggleMobileHeader">About Us</NuxtLink>
            <MobileHeaderPlusMinusButton @toggle-submenu="toggleSubMenu(0)"> </MobileHeaderPlusMinusButton>
        </div>
        <div class="subMenu" v-if="visibilitySubmenus[0]">
            <NuxtLink to="/about-us/locations" @click="toggleMobileHeader">Our Location</NuxtLink>        
            <NuxtLink to="/about-us/people" @click="toggleMobileHeader">Our People</NuxtLink>
        </div>   

        <div class="dropdown-mobile">
            <NuxtLink to="/activities" class="semiboldText" @click="toggleMobileHeader">Our Activities</NuxtLink>
            <MobileHeaderPlusMinusButton @toggle-submenu="toggleSubMenu(1)"> </MobileHeaderPlusMinusButton>
        </div>
        <div class="subMenu" v-if="visibilitySubmenus[1]">
            <NuxtLink to="/activities/projects" @click="toggleMobileHeader">Projects</NuxtLink>        
            <NuxtLink to="/activities/services" @click="toggleMobileHeader">Services</NuxtLink>
        </div>

        <div class="dropdown-mobile">
            <NuxtLink to="/what-you-can-do" class="semiboldText" @click="toggleMobileHeader">What You Can Do</NuxtLink>
            <MobileHeaderPlusMinusButton @toggle-submenu="toggleSubMenu(2)"> </MobileHeaderPlusMinusButton>
        </div>
        <div class="subMenu" v-if="visibilitySubmenus[2]">
            <NuxtLink to="/what-you-can-do/volunteering" @click="toggleMobileHeader">Volunteering</NuxtLink>        
            <NuxtLink to="/what-you-can-do/donate" @click="toggleMobileHeader">Donate</NuxtLink>
        </div>

        <SecondaryButton buttonText="Contact Us" buttonLength="tablet" to="/contacts" id="contact-us-button-mobile"
            style="font-size: var(--body1); line-height: var(--l-height-header); font-weight: var(--semibold); height: 50px; margin-bottom: 25px" @click="toggleMobileHeader"/>

    </nav>


</template>


<style scoped>

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
    display: flex;
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

@media screen and (max-width: 430px){
    .mobile-container {
        top: var(--mobile-header1);
    }
}



</style>
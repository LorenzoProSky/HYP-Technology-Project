
<!-- 
    Component to handle the button for opening and closing the mobile header in a reactive way 
    Improved accessibility with a single reactive component in order to use ARIA attributes for 
    expansion and collapse of mobile header
-->

<script lang="ts" setup>

const props = defineProps(['controlsId']);
const emit = defineEmits(['close-menu', 'open-menu']);

let iconName = ref('MenuIcon');
let menuExpanded = ref(false);

function buttonClicked() {
    /* Change the icon contained in the button (switch to the other one) */
    iconName.value = iconName.value === 'MenuIcon' ? 'MobileExitIcon' : 'MenuIcon';

    /* Change the aria attribute */
    menuExpanded.value = iconName.value === 'MenuIcon' ? false : true;
    
    /* Emit the event to open or close the menu based on the current iconName */
    iconName.value === 'MenuIcon' ? emit('close-menu') : emit('open-menu');

}

</script>





<template>
    <button type="button" @click="buttonClicked" 
    :aria-expanded="menuExpanded" 
    :aria-controls="props.controlsId"
    aria-label="Open the menu">
        <Icon class="mobile-menu-icon" :name="iconName"></Icon>
    </button>
</template>






<style scoped>

button {
  align-items: center;
  justify-content: center;
  border: none;
  background-color: white;
  margin-right: calc(10% - 2rem);
}

.mobile-menu-icon {
    color: var(--purple);
    height: var(--mobile-size2);
    width: var(--mobile-size2);
}

/* Responsive button for smartphone devices */
@media screen and (max-width: 430px){
    .mobile-menu-icon {
        height: var(--mobile-size1);
        width: var(--mobile-size1);
    }
}

</style>
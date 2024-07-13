
<!-- 
    Component to handle the button for opening and closing the mobile header in a reactive way 
    Improved accessibility with a single reactive component in order to use ARIA attributes for 
    expansion and collapse of mobile header
-->

<script lang="ts" setup>

const props = defineProps({
    controlsId: String,
    iconName: {
        type: String,
        validator: (value: string) => value === 'MenuIcon' || value === 'MobileExitIcon',
        required: true,
    }
});

const emit = defineEmits(['toggleMobileMenu']);

let menuExpanded = ref(false);

function buttonClicked() {

    /* Change the aria attribute */
    menuExpanded.value = props.iconName === 'MenuIcon' ? false : true;
    
    /* Emit the event to inform parent to change the visibility of the mobile menu */
    emit('toggleMobileMenu'); 

}

</script>


<template>
    <button type="button" @click="buttonClicked" 
    :aria-expanded="menuExpanded" 
    :aria-controls="props.controlsId"
    aria-label="Open the menu">
        <Icon class="mobile-menu-icon" :name="props.iconName"> </Icon>
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
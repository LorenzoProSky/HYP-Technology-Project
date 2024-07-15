

<script lang="ts" setup>

const emit = defineEmits(['toggleSubmenu']);
const props = defineProps({
    controlsId: String,
});

let iconName = ref('MobilePlusIcon');
let subMenuExpanded = ref(false);



function buttonClicked() {
    /* Switch between Icons */
    iconName.value = iconName.value === 'MobilePlusIcon' ? 'MobileMinusIcon' : 'MobilePlusIcon';

    /* Emit event to the parent with the value of the index for the current button */
    emit('toggleSubmenu');

    /* Change the value of the expanded data to compute ARIA attributes */
    subMenuExpanded.value = subMenuExpanded.value === false ? true : false;
}

</script>



<template>
    <button type="button" 
    @click="buttonClicked"
    :aria-controls="props.controlsId"
    :aria-expanded="subMenuExpanded"
    aria-label="Open submenu    ">
        <Icon class="mobile-header-plus-minus-icon" :name="iconName"></Icon>
    </button>
</template>



<style scoped>

button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: white;
    color: var(--purple);
}

.mobile-header-plus-minus-icon {
    height: 28px;
    width: 28px;
}

/* Responsive style */
@media screen and (max-width: 430px){
    .mobile-header-plus-minus-icon {
        height: 24px;
        width: 24px;
    }
}

</style>
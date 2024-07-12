<script lang="ts">
// Import necessary functions from Vue
import { defineComponent, ref } from 'vue';

// Define the ExitButton component
export default defineComponent({
  // Component name
  name: 'ExitButton',
});
</script>

<template>
  <!-- Exit button element -->
  <button class="exit-button" @click="navigateTo('https://www.google.com', {external: true})">
      <Icon name="ExitIcon" size="34" />
      <span>{{ "Exit" }}</span>
  </button>
</template>


<style scoped>

.exit-button {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
  align-items: center;
  justify-content: center;
  width: 8rem;
  background-color: var(--orange);
  font-family: var(--font-montserrat);
  color: var(--white);
  font-size: var(--body2);
  font-weight: var(--semibold);
  cursor: pointer;
  border: none;
}

/* Hover style for the button */
.exit-button:hover:not(.is-disabled) {
  filter: brightness(1.1);
}

/* Active style for the button */
.exit-button:active:not(.is-disabled) {
  filter: brightness(0.95);
}


@media screen and (max-width: 1050px){
  .exit-button{
    height: 84px;
    width: 84px;
    border-radius: 100%;
    position: fixed;
    right: 72px;
    bottom: 54px;
    z-index: 11;
  } 
  .exit-button span{
    display: none;
  }
  .icon{
    min-height: 42px;
    min-width: 42px;
    margin: 0;
  }
}

@media screen and (max-width: 430px){
  .exit-button{
    height: 64px;
    width: 64px;
    bottom: 40px;
    right: 40px;
  }
  .icon{
    min-height: 0;
    min-width: 0;
    max-height: 32px;
    max-width: 32px;
  }
}

</style>
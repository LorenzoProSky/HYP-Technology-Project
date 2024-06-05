<script lang="ts">
// Import necessary functions from Vue
import { defineComponent, ref } from 'vue';

// Define the ExitButton component
export default defineComponent({
  // Component name
  name: 'ExitButton',
  // Setup reactive data for the component
  setup() {
    const hover = ref(false); // Tracks whether the mouse is over the button
    const active = ref(false); // Tracks whether the button is being pressed
    const focused = ref(false); // Tracks whether the button has focus

    return { hover, active, focused }; // Expose reactive data to the template
  },
});
</script>

<template>
  <!-- Wrap the button in a NuxtLink for navigation -->
  <NuxtLink to="https://www.google.com">
    <!-- Exit button element -->
    <button class="exit-button" @mouseover="hover = true" @mouseleave="hover = false" @mousedown="active = true"
      @mouseup="active = false" @focus="focused = true" @blur="focused = false" v-bind="$attrs">
      <!-- Icon for the button on top -->
      <div class="icon-container">
        <Icon name="ExitIcon" size="34" />
      </div>
      <!-- Text for the button -->
      <span>{{ "Exit" }}</span>
    </button>
  </NuxtLink>
</template>

/* Styles for the Exit button */
<style scoped>
/* Default style for the button */
.exit-button {
  height: 120px;
  width: 132px;
  padding: 0 10px;
  background-color: var(--orange);
  font-family: var(--font-montserrat);
  color: var(--white);
  font-size: var(--body2);
  font-weight: var(--semibold);
  cursor: pointer;
  border: none;
  transition: background-color var(--transition);
}

/* Hover style for the button */
.exit-button:hover:not(.is-disabled) {
  filter: brightness(1.1);
}

/* Active style for the button */
.exit-button:active:not(.is-disabled) {
  filter: brightness(0.95);
}

.icon {
  margin-bottom: 8px;
}

@media (max-width: 851px){
  .exit-button{
    width: 100px;
  }
}

@media only screen and (max-device-width:1024px){
  .exit-button{
    height: 84px;
    width: 84px;
    border-radius: 100%;
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

@media only screen and (max-device-width: 430px){
  .exit-button{
    height: 64px;
    width: 64px;
  }
  .icon{
    min-height: 0;
    min-width: 0;
    max-height: 32px;
    max-width: 32px;
  }
}

</style>
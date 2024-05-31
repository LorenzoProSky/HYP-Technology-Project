<script lang="ts">
// Import necessary functions from Vue
import { defineComponent, ref } from 'vue';

// Define the ForwardButton component
export default defineComponent({
  // Component name
  name: 'ForwardButton',
  // Define props expected by the component
  props: {
    // Text displayed on the button
    buttonText: {
      type: String,
      required: true,
    },
    // Indicates whether the button is disabled
    isDisabled: {
      type: Boolean,
      default: false,
    },
    // URL or route to navigate to when the button is clicked
    to: {
      type: String,
      required: true,
    },
  },
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
  <NuxtLink :to="to">
    <!-- Forward button element -->
    <button class="forward-button" :class="{ 'is-disabled': isDisabled }" @mouseover="hover = true"
      @mouseleave="hover = false" @mousedown="active = true" @mouseup="active = false" @focus="focused = true"
      @blur="focused = false" :disabled="isDisabled" v-bind="$attrs">
      {{ buttonText }}
      <!-- Icon for the button on the right -->
      <Icon name="ForwardArrowIcon" size="35" />
    </button>
  </NuxtLink>
</template>

/* Styles for the Forward button */
<style scoped>
/* Default style for the button */
.forward-button {
  height: 64px;
  padding: 0 10px;
  background-color: var(--transparent);
  font-family: var(--font-montserrat);
  color: var(--purple);
  font-size: var(--body4);
  font-weight: var(--medium);
  cursor: pointer;
  border: none;
  transition: background-color var(--transition);
}

/* Hover style for the button */
.forward-button:hover:not(.is-disabled) {
  color: var(--purple-hover);
}

/* Active style for the button */
.forward-button:active:not(.is-disabled) {
  color: var(--purple-clicked);
}

/* Disabled style for the button */
.forward-button.is-disabled {
  color: var(--grey3);
  cursor: not-allowed;
}

/* Icon style */
.icon {
  margin-top: -2px;
  margin-left: -5px;
}
</style>
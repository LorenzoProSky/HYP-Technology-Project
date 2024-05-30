<script lang="ts">
// Import necessary functions from Vue
import { defineComponent, ref, computed } from 'vue';

// Define the SecondaryButton component
export default defineComponent({
  // Component name
  name: 'SecondaryButton',
  // Define props expected by the component
  props: {
    // Text displayed on the button
    buttonText: {
      type: String,
      required: true,
    },
    // Length of the button, affects its width
    buttonLength: {
      type: String,
      validator: (value: string) => ['short', 'medium', 'long'].includes(value),
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
  // Compute the width of the button based on its length
  computed: {
    buttonWidth(): string {
      const widths: { [key: string]: string } = {
        short: '163px',
        medium: '248px',
        long: '296px'
      };
      return widths[this.buttonLength] || '163px';
    }
  },
});
</script>

<template>
  <!-- Wrap the button in a NuxtLink for navigation -->
  <NuxtLink :to="to">
    <!-- Secondary button element -->
    <button class="secondary-button" :class="{ 'is-disabled': isDisabled }" :style="{ width: buttonWidth }"
      @mouseover="hover = true" @mouseleave="hover = false" @mousedown="active = true" @mouseup="active = false"
      @focus="focused = true" @blur="focused = false" :disabled="isDisabled" v-bind="$attrs">
      {{ buttonText }}
    </button>
  </NuxtLink>
</template>

/* Styles for the Secondary button */
<style scoped>
/* Default style for the button */
.secondary-button {
  height: 64px;
  padding: 0 10px;
  border-radius: var(--border-radius);
  background-color: var(--white);
  font-family: var(--font-montserrat);
  color: var(--purple);
  font-size: var(--body4);
  font-weight: var(--medium);
  cursor: pointer;
  border: thin solid var(--purple);
  transition: background-color var(--transition);
}

/* Hover style for the button */
.secondary-button:hover:not(.is-disabled) {
  color: var(--purple-light);
  border: thin solid var(--purple-light);
}

/* Active style for the button */
.secondary-button:active:not(.is-disabled) {
  color: var(--purple-dark);
  border: thin solid var(--purple-dark);
}

/* Disabled style for the button */
.secondary-button.is-disabled {
  color: var(--light-grey);
  border: thin solid var(--light-grey);
  cursor: not-allowed;
}
</style>
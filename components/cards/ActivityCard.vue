<script lang="ts">
// Import necessary functions from Vue
import { defineComponent, ref } from 'vue';

// Define the ActivityCard component
export default defineComponent({
  // Component name
  name: 'ActivityCard',
  // Define props expected by the component
  props: {
    // Image source for the activity card
    imageSrc: {
      type: String,
      required: true
    },
    // Title of the card
    title: {
      type: String,
      required: true
    },
    // Description of the card
    text: {
      type: String,
      required: true
    },
    // URL or route to navigate to when the card is clicked
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
  <!-- Wrap the card content in a NuxtLink for navigation -->
  <NuxtLink :to="to">
    <!-- Card container -->
    <div class="card-container">
      <!-- Card -->
      <div class="card">
        <!-- Activity image -->
        <img :src="imageSrc" alt="${imageSrc}" class="card-image">
        <!-- Card content -->
        <div class="card-content">
          <!-- Activity title -->
          <h4 class="card-title">{{ title }}</h4>
          <!-- Activity description -->
          <p class="card-text">{{ text }}</p>
          <!-- Forward arrow icon -->
          <Icon name="ForwardArrowIcon" size="32" />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<!-- Styles for the ActivityCard -->
<style scoped>
/* Card styling */
.card {
  width: 520px;
  height: 652px;
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--white);
  box-shadow: 0px 5px 20px var(--black-shadow);
  transition: transform var(--transition) ease-in-out;
  cursor: pointer;
}

/* Card container styling */
.card-container {
  display: inline-block;
  vertical-align: top;
}

/* Hover effect on card */
.card:hover:not(.is-disabled) {
  background-color: var(--beige-hover);

  .icon {
    color: var(--purple-light);
  }
}

/* Active effect on card */
.card:active:not(.is-disabled) {
  transform: scale(0.98);
  background-color: var(--beige-active);

  .icon {
    color: var(--purple-dark);
  }
}

/* Disabled effect on card */
.card.is-disabled {
  opacity: 0.5;
  background-color: var(--light-grey);
  cursor: not-allowed;
}

/* Image styling */
.card-image {
  width: 100%;
  height: 45%;
  object-fit: cover;
}

/* Content styling */
.card-content {
  height: 55%;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  color: var(--black);
  padding-left: 70px;
  padding-right: 93px;
}

/* Title styling */
.card-title {
  font-family: var(--font-playfair);
  font-size: var(--h4);
  color: var(--black);
  font-weight: var(--semibold);
  margin-top: 68px;
  margin-bottom: 9px;
  text-align: left;
}

/* Text styling */
.card-text {
  flex-grow: 1;
  font-family: var(--font-montserrat);
  color: var(--dark-grey);
  font-size: var(--body3);
  font-weight: var(--medium);
  text-align: left;
}

/* Icon styling */
.icon {
  align-self: center;
  margin-bottom: 36px;
  margin-left: 400px;
}
</style>
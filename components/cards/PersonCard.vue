<script lang="ts">
// Import necessary functions from Vue
import { defineComponent, ref } from 'vue';

// Define the PersonCard component
export default defineComponent({
  // Component name
  name: 'PersonCard',
  // Define props expected by the component
  props: {
    // Image source for the person card
    imageSrc: {
      type: String,
      required: true
    },
    // Name of the person
    name: {
      type: String,
      required: true
    },
    // Job description of the person
    job: {
      type: String,
      required: true
    },
    // Description of the person
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
        <!-- Person image -->
        <img :src="imageSrc" alt="${imageSrc}" class="card-image">
        <!-- Card content -->
        <div class="card-content">
          <!-- Person name -->
          <h3 class="card-name">{{ name }}</h3>
          <!-- Job description -->
          <p class="card-job">{{ job }}</p>
          <!-- Person description -->
          <p class="card-text">{{ text }}</p>
          <!-- Forward arrow icon -->
          <Icon name="ForwardArrowIcon" size="32" />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<!-- Styles for the PersonCard -->
<style scoped>
/* Card styling */
.card {
  width: 470px;
  height: 606px;
  border-radius: var(--border-radius-card);
  overflow: hidden;
  background-color: var(--white);
  box-shadow: 0px 5px 20px var(--black-shadow);
  transition: transform var(--transition) ease-in-out;
  cursor: pointer;
}

.card-container {
  display: inline-block;
  vertical-align: top;
}

/* Hover effect on card */
.card:hover:not(.is-disabled) {
  background-color: var(--beige-hover);

  .icon {
    color: var(--purple-hover);
  }
}

/* Active effect on card */
.card:active:not(.is-disabled) {
  transform: scale(0.98);
  background-color: var(--beige-active);

  .icon {
    color: var(--purple-active);
  }
}

/* Disabled effect on card */
.card.is-disabled {
  opacity: 0.5;
  background-color: var(--grey3);
  cursor: not-allowed;
}

/* Image styling */
.card-image {
  width: 100%;
  height: 58%;
  object-fit: cover;
}

/* Content styling */
.card-content {
  height: 42%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  color: var(--black);
  padding-left: 54px;
  padding-right: 59px;
}

/* Name styling */
.card-name {
  font-family: var(--font-playfair);
  font-size: var(--h3);
  color: var(--black);
  font-weight: var(--semibold);
  margin-top: 24px;
  margin-bottom: -15px;
  text-align: left;
}

/* Job styling */
.card-job {
  font-family: var(--font-montserrat);
  font-size: var(--body4);
  color: var(--black);
  font-weight: var(--medium);
  margin-bottom: 5px;
  text-align: left;
}

/* Text styling */
.card-text {
  flex-grow: 1;
  font-family: var(--font-montserrat);
  color: var(--grey1);
  font-size: var(--body1);
  font-weight: var(--medium);
  text-align: left;
  margin-bottom: 0px;
}

/* Icon styling */
.icon {
  align-self: center;
  margin-bottom: 37px;
  margin-left: 370px;
}
</style>
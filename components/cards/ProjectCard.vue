<script lang="ts">
// Import necessary functions from Vue
import { defineComponent, ref } from 'vue';

// Define the ProjectCard component
export default defineComponent({
  // Component name
  name: 'ProjectCard',
  // Define props expected by the component
  props: {
    // Image source for the project card
    imageSrc: {
      type: String,
      required: true
    },
    // Title of the project
    title: {
      type: String,
      required: true
    },
    // Description of the project
    text: {
      type: String,
      required: true
    },
    // Time description of the project
    when: {
      type: String,
      required: true
    },
    // Location description of the project
    where: {
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
        <!-- Project image -->
        <img :src="imageSrc" alt="${imageSrc}" class="card-image">
        <!-- Card content -->
        <div class="card-content">
          <!-- Project title -->
          <h4 class="card-title">{{ title }}</h4>
          <!-- Project description -->
          <p class="card-text">{{ text }}</p>
          <!-- When and where details -->
          <div class="card-details-container">
            <!-- When details -->
            <div class="card-when">
              <p class="when-text">{{ "When" }}</p>
              <p class="when-content">{{ when }}</p>
            </div>
            <!-- Where details -->
            <div class="card-where">
              <p class="where-text">{{ "Where" }}</p>
              <p class="where-content">{{ where }}</p>
            </div>
          </div>
          <!-- Forward arrow icon -->
          <Icon name="ForwardArrowIcon" size="32" />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<!-- Styles for the ProjectCard -->
<style scoped>
/* Card styling */
.card {
  width: 606px;
  height: 810px;
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
  height: 51%;
  object-fit: cover;
}

/* Content styling */
.card-content {
  height: 49%;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  color: var(--black);
  padding-left: 64px;
  padding-right: 62px;
}

/* Title styling */
.card-title {
  font-family: var(--font-playfair);
  font-size: var(--h4);
  color: var(--black);
  font-weight: var(--semibold);
  margin-top: 36px;
  margin-bottom: 0px;
  text-align: left;
}

/* Text styling */
.card-text {
  font-family: var(--font-montserrat);
  font-size: var(--body3);
  color: var(--black);
  font-weight: var(--medium);
  margin-top: 20px;
  text-align: left;
}

/* Details styling */
.card-details-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -10px;
  margin-bottom: 30px;
}

/* When styling */
.card-when {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  padding-left: 0px;
  padding-right: 0px;
}

/* When text styling */
.when-text {
  font-family: var(--font-montserrat);
  font-size: var(--body2);
  color: var(--grey1);
  font-weight: var(--semibold);
  margin-bottom: 0px;
  text-align: left;
}

/* When content styling */
.when-content {
  font-family: var(--font-montserrat);
  font-size: var(--body2);
  color: var(--grey1);
  font-weight: var(--medium);
  margin-top: 5px;
  text-align: left;
}

/* Where styling */
.card-where {
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  padding-left: 0px;
  padding-right: 0px;
}

/* Where text styling */
.where-text {
  font-family: var(--font-montserrat);
  font-size: var(--body2);
  color: var(--grey1);
  font-weight: var(--semibold);
  margin-bottom: 0px;
  text-align: left;
}

/* Where content styling */
.where-content {
  font-family: var(--font-montserrat);
  font-size: var(--body2);
  color: var(--grey1);
  font-weight: var(--medium);
  margin-top: 5px;
  text-align: left;
}

/* Icon styling */
.icon {
  align-self: center;
  margin-bottom: 37px;
  margin-left: 459px;
}
</style>
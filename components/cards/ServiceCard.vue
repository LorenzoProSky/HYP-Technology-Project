<script lang="ts">
// Import necessary functions from Vue
import { defineComponent, ref } from 'vue';

// Define the ServiceCard component
export default defineComponent({
  // Component name
  name: 'ServiceCard',
  // Define props expected by the component
  props: {
    // Image source for the service card
    imageSrc: {
      type: String,
      required: true
    },
    // Title of the service
    title: {
      type: String,
      required: true
    },
    // Description of the service
    text: {
      type: String,
      required: true
    },
    // Time descriptions of the service
    when: {
      type: Array,
      required: true
    },
    // Location descriptions of the service
    where: {
      type: Array,
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
        <!-- Service image -->
        <img :src="imageSrc" alt="${imageSrc}" class="card-image">
        <!-- Card content -->
        <div class="card-content">
          <!-- Service title -->
          <h4 class="card-title">{{ title }}</h4>
          <!-- Service description -->
          <p class="card-text">{{ text }}</p>
          <!-- Card details -->
          <div class="card-details-container">
            <!-- Details -->
            <div class="card-details" v-for="(item, index) in where" :key="index">
              <p class="where-content">{{ item }}</p>
              <p class="when-content">{{ when[index] }}</p>
            </div>
          </div>
          <!-- Forward arrow icon -->
          <Icon name="ForwardArrowIcon" size="32" />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<!-- Styles for the ServiceCard -->
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
  padding-right: 92px;
}

/* Title styling */
.card-title {
  font-family: var(--font-playfair);
  font-size: var(--h4);
  color: var(--black);
  font-weight: var(--semibold);
  margin-top: 36px;
  margin-bottom: -10px;
  text-align: left;
}

/* Text styling */
.card-text {
  font-family: var(--font-montserrat);
  font-size: var(--body3);
  color: var(--black);
  font-weight: var(--medium);
  margin-top: 10px;
  margin-bottom: 25px;
  text-align: left;
}

/* Details styling */
.card-details-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0px;
  margin-bottom: 30px;
}

/* When content styling */
.when-content {
  font-family: var(--font-montserrat);
  font-size: var(--body2);
  color: var(--grey1);
  font-weight: var(--medium);
  margin-top: 5px;
  margin-bottom: 0px;
  text-align: left;
}

/* Where content styling */
.where-content {
  font-family: var(--font-montserrat);
  font-size: var(--body2);
  color: var(--grey1);
  font-weight: var(--semibold);
  margin-top: -20px;
  margin-bottom: 0px;
  text-align: left;
}

/* Icon styling */
.icon {
  position: relative;
  align-self: center;
  bottom: 37px;
  margin-left: 497px;
}



@media (max-width: 650px){  
  .card{
    width: 80vw;
    height: auto;
  }
  .card .icon{
    margin-left: 80%;
    bottom: 30px;
    margin-top: 20px;
  }
  .card-text{
    font-size: var(--body1);
    line-height: var(--l-height1);
  }
  .card-content{
    padding: 0 20px;
  }
  .card-title{
    margin-top: 10px;
  }
}
</style>
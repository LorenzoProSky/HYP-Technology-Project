<script lang="ts">
// Import necessary functions from Vue
import { defineComponent, ref } from 'vue';

// Define the MapCardBig component
export default defineComponent({
  // Component name
  name: 'MapCardBig',
  // Define props expected by the component
  props: {
    // Image source for the person card
    imageSrc: {
      type: String,
      required: true
    },
    // Name of the centre
    name: {
      type: String,
      required: true
    },
    // Address
    address: {
      type: String,
      required: true
    },
    // Email contact
    email: {
      type: String,
      required: true
    },
    // Phone number
    phone: {
      type: String,
      required: true
    },
    // Opening hours
    hours: {
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
        <!-- Map image -->
        <img :src="imageSrc" alt="${imageSrc}" class="card-image">
        <!-- Card content -->
        <div class="card-content">
          <!-- Centre name -->
          <h3 class="card-name">{{ name }}</h3>
          <!-- Address description -->
          <p class="card-address">{{ address }}</p>
          <div class="card-contact">
            <p class="card-contact-title">{{ "Contact Us" }}</p>
            <!-- Phone number -->
            <p class="card-phone"><span class="prefix">Phone:</span> {{ phone }}</p>
            <!-- Email contact -->
            <p class="card-email"><span class="prefix">Email:</span> {{ email }}</p>
          </div>
          <div class="card-op-hours">
            <p class="card-hours-title">{{ "Opening Hours" }}</p>
            <!-- Opening hours -->
            <p class="card-hours">{{ hours }}</p>
          </div>
          <!-- Forward arrow icon -->
          <Icon name="ForwardArrowIcon" size="32" />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<!-- Styles for the MapCardBig -->
<style scoped>
/* Card styling */
.card {
  width: 600px;
  height: 1065px;
  border-radius: var(--border-radius-card);
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
  height: 48%;
  object-fit: cover;
}

/* Content styling */
.card-content {
  height: 52%;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  color: var(--black);
  padding-left: 64px;
  padding-right: 92px;
}

/* Name styling */
.card-name {
  font-family: var(--font-playfair);
  font-size: var(--h3);
  color: var(--black);
  font-weight: var(--semibold);
  margin-top: 58px;
  margin-bottom: 0px;
  text-align: left;
}

/* Address styling */
.card-address {
  font-family: var(--font-montserrat);
  font-size: var(--body4);
  color: var(--black);
  font-weight: var(--medium);
  margin-top: -50px;
  margin-bottom: 0px;
  text-align: left;
}

/* Contact styling */
.card-contact {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  margin-top: -10px;
}

/* Contact title styling */
.card-contact-title {
  font-family: var(--font-montserrat);
  font-size: var(--body4);
  color: var(--black);
  font-weight: var(--semibold);
  margin-top: 0px;
  margin-bottom: 12px;
  text-align: left;
}

/* Phone and email prefix styling */
.prefix {
  font-family: var(--font-montserrat);
  font-size: var(--body3);
  color: var(--black);
  font-weight: var(--semibold);
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: left;
}

/* Phone styling */
.card-phone {
  font-family: var(--font-montserrat);
  font-size: var(--body3);
  color: var(--black);
  font-weight: var(--medium);
  margin-top: 0px;
  margin-bottom: 5px;
  text-align: left;
}

/* Email styling */
.card-email {
  font-family: var(--font-montserrat);
  font-size: var(--body3);
  color: var(--black);
  font-weight: var(--medium);
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: left;
}

/* Opening hours styling */
.card-op-hours {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  margin-top: -30px;
}

/* Opening hours title styling */
.card-hours-title {
  font-family: var(--font-montserrat);
  font-size: var(--body4);
  color: var(--black);
  font-weight: var(--semibold);
  margin-top: 0px;
  margin-bottom: 12px;
  text-align: left;
}

/* Opening hours styling */
.card-hours {
  font-family: var(--font-montserrat);
  font-size: var(--body3);
  color: var(--black);
  font-weight: var(--semibold);
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: left;
}

/* Icon styling */
.icon {
  align-self: center;
  margin-bottom: 38px;
  margin-left: 494px;
}
</style>
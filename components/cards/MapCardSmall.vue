<script lang="ts">
// Import necessary functions from Vue
import { defineComponent, ref } from 'vue';

// Define the MapCardSmall component
export default defineComponent({
  // Component name
  name: 'MapCardSmall',
  // Define props expected by the component
  props: {
    // Title of the card
    title: {
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
  <!-- Navigation link wrapping the card -->
  <NuxtLink :to="to">
    <!-- Card container -->
    <div class="card-container">
      <!-- Card -->
      <div class="card">
        <!-- Card content wrapper -->
        <div class="card-content">
          <!-- Card title -->
          <div class="card-name">
            <p>{{ title }}</p>
          </div>
          <!-- Contact section -->
          <div class="card-contact">
            <p>Contact Us</p>
          </div>
          <!-- Additional contact details -->
          <div class="card-text">
            <p class="card-address">{{ address }}</p>
            <p class="card-email">{{ email }}</p>
            <p class="card-phone">{{ phone }}</p>
          </div>
        </div>
        <!-- Forward arrow icon -->
        <div class="card-icon-container">
          <Icon class="icon-arrow" name="ForwardArrowIcon" size="50" />
        </div>
        <!-- Pin icon -->
        <Icon class="icon-pin" name="MapPinIcon" size="56" />
      </div>
    </div>
  </NuxtLink>
</template>

<!-- Styles for the MapCardSmall -->
<style scoped>
/* Card styling */
.card {
  width: 441px;
  height: 215px;
  border-radius: var(--border-radius-card);
  display: flex;
  align-items: center;
  overflow: hidden;
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
  .card-content {
    background-color: var(--beige-hover);
  }

  .card-icon-container {
    background-color: var(--purple-hover);
  }

  .icon-pin {
    color: var(--purple-hover);
  }

  .icon-arrow {
    color: var(--beige-hover);
  }
}

/* Active effect on card */
.card:active:not(.is-disabled) {
  transform: scale(0.98);

  .card-content {
    background-color: var(--beige-active);
  }

  .card-icon-container {
    background-color: var(--purple-active);
  }

  .icon-pin {
    color: var(--purple-active);
  }

  .icon-arrow {
    color: var(--beige-active);
  }
}

/* Disabled effect on card */
.card.is-disabled {
  opacity: 0.5;
  background-color: var(--grey3);
  cursor: not-allowed;
}

/* Content styling */
.card-content {
  width: 61%;
  height: 100%;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  color: var(--black);
  background-color: var(--white);
  padding-left: 40px;
  padding-right: 130px;
  margin-right: -70px;
}

/* Title styling */
.card-name {
  font-family: var(--font-montserrat);
  font-size: var(--body3);
  color: var(--purple);
  font-weight: var(--semibold);
  margin-top: 12px;
  text-align: left;
}

/* Contact styling */
.card-contact {
  font-family: var(--font-montserrat);
  color: var(--black);
  font-size: var(--body1);
  font-weight: var(--semibold);
  margin-top: -15px;
  margin-bottom: 0px;
  text-align: left;
}

/* Text styling */
.card-text {
  font-family: var(--font-montserrat);
  color: var(--black);
  font-size: var(--body1);
  line-height: var(--l-height1);
  font-weight: var(--regular);
  text-align: left;
  margin-top: -10px;
  margin-bottom: 40px;
}

/* Address styling */
.card-address {
  margin-top: 0px;
  margin-bottom: 0px;
}

/* Email styling */
.card-email {
  margin-top: 5px;
  margin-bottom: 0px;
}

/* Phone styling */
.card-phone {
  margin-top: 5px;
}

/* Icon container styling */
.card-icon-container {
  width: 19%;
  height: 100%;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--purple);
  align-items: center;
}

/* Arrow Icon styling */
.icon-arrow {
  color: var(--white);
  align-self: center;
  margin-top: 87px;
  margin-left: 0px;
}

/* Pin icon styling */
.icon-pin {
  position: absolute;
  margin-top: 303px;
  margin-left: 204px;
  color: var(--purple);
}


/** PROVVISORIO */
@media (max-width: 650px){  
  .card{
    width: 70vw;
    height: auto;
  }
  .card-content{
    padding-right: 40px;
  }
  .card-icon-container{
    display: none;
  }
  .icon-pin{
    margin-left: 30%;
  }
}
@media (max-width: 400px){
  .card-content{
    padding-left: 2px;
  }
  .card-text{
    font-size: 12px !important;

  }
}
</style>
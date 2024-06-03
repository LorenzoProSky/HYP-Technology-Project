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
            <p>{{ address }}</p>
            <p>{{ email }}</p>
            <p>{{ phone }}</p>
          </div>
        </div>
        <!-- Forward arrow icon -->
        <div class="card-icon-container">
          <Icon name="ForwardArrowIcon" size="50" />
        </div>
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
  border-radius: 12px;
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
    background-color: var(--purple-light);
  }

  .icon {
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
    background-color: var(--purple-dark);
  }

  .icon {
    color: var(--beige-active);
  }
}

/* Disabled effect on card */
.card.is-disabled {
  opacity: 0.5;

  .card-content {
    background-color: var(--light-grey);
  }

  .card-icon-container {
    background-color: var(--light-grey);
  }

  .icon {
    color: var(--light-grey);
  }

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
  margin-top: -10px;
  margin-bottom: -18px;
  text-align: left;
}

/* Text styling */
.card-text {
  font-family: var(--font-montserrat);
  color: var(--black);
  font-size: var(--body1);
  font-weight: var(--regular);
  text-align: left;
  line-height: 0.5;
  margin-bottom: 30px;
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

/* Icon styling */
.icon {
  color: var(--white);
  align-self: center;
  margin-top: 87px;
  margin-left: 0px;
}
</style>
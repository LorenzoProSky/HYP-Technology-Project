<script lang="ts">
// Import necessary functions from Vue
import { defineComponent, ref } from 'vue';
import type { RouteLocationRaw } from 'vue-router';

// Define the ManagerCard component
export default defineComponent({
  // Component name
  name: 'ManagerCard',
  // Define props expected by the component
  props: {
    // Manager of project or service
    type: {
      type: String,
      validator: (value: string) => ['project', 'service'].includes(value),
      required: true
    },
    // Managere descriptions
    text: {
      type: Array,
      required: true
    },
    // URLs or routes to navigate to when the card is clicked
    to: {
      type: Array,
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
  // Compute the height of the button based on the number of descriptions
  computed: {
    cardHeightStyle() {
      const descriptionCount = this.text.length;
      let extraHeight = 0;

      // Calculate the extra height based on the number of descriptions
      if (descriptionCount > 1) {
        extraHeight = Math.floor(descriptionCount - 1) * 252;
      }

      // Return an object with the calculated height
      return {
        '--extra-height': `${extraHeight}px`,
      };
    },
  },
});
</script>

<template>
  <!-- Card container -->
  <div class="card-container">
    <!-- Card -->
    <div class="card" :style="cardHeightStyle">
      <!-- Icon container -->
      <div class="icon-container">
        <!-- Icon of project or service -->
        <Icon class="manager-icon" :name="type === 'project' ? 'ProjectIcon' : 'ServiceIcon'" size="32" />
      </div>
      <!-- Card content -->
      <div class="card-content">
        <!-- Manager -->
        <h3 class="card-title">{{ type === 'project' ? 'Project Manager' : 'Service Manager' }}</h3>
        <!-- Activity description -->
        <div class="card-details" v-for="(item, index) in text" :key="index">
          <!-- Wrap the single description in a NuxtLink for navigation -->
          <NuxtLink :to="to[index] as RouteLocationRaw">
            <p class="card-description">{{ item }}</p>
            <!-- Forward arrow icon -->
            <Icon class="arrow-icon" name="ForwardArrowIcon" size="32" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>

</template>

<!-- Styles for the ManagerCard -->
<style scoped>
/* Card styling */
.card {
  width: 600px;
  height: calc(423px + var(--extra-height));
  border-radius: var(--border-radius-card);
  overflow: hidden;
  background-color: var(--white);
  box-shadow: 0px 5px 20px var(--black-shadow);
  transition: transform var(--transition) ease-in-out;
}

/* Card container styling */
.card-container {
  display: inline-block;
  vertical-align: top;
}

/* Hover effect on card */
.card:hover:not(.is-disabled) {
  background-color: var(--beige-hover);

  .icon-container {
    background-color: var(--purple-hover);
  }

  .arrow-icon {
    color: var(--purple-hover);
  }

  .manager-icon {
    color: var(--beige-hover);
  }
}

/* Active effect on card */
.card:active:not(.is-disabled) {
  transform: scale(0.98);
  background-color: var(--beige-active);

  .icon-container {
    background-color: var(--purple-active);
  }

  .arrow-icon {
    color: var(--purple-active);
  }

  .manager-icon {
    color: var(--beige-active);
  }
}

/* Disabled effect on card */
.card.is-disabled {
  opacity: 0.5;
  background-color: var(--grey3);
  cursor: not-allowed;
}

/* Icon container styling */
.icon-container {
  height: 70px;
  width: 70px;
  border-radius: var(--border-radius-card);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--white);
  background-color: var(--purple);
  margin-top: 56px;
  margin-left: 64px;
  margin-bottom: 0px;
}

/* Manager icon styling */
.manager-icon {
  align-self: center;
  margin-top: 0px;
  margin-left: 0px;
}

/* Content styling */
.card-content {
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  color: var(--black);
  padding-left: 64px;
  padding-right: 110px;
  margin-top: -30px;
  min-height: 225px;
}

/* Title styling */
.card-title {
  font-family: var(--font-playfair);
  font-size: var(--h3);
  color: var(--black);
  font-weight: var(--semibold);
  margin-top: 64px;
  margin-bottom: 9px;
  text-align: left;
  margin-bottom: 0px;
}

/* Details styling */
.card-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  margin-top: 16px;
}

/* Description styling */
.card-description {
  flex-grow: 1;
  font-family: var(--font-montserrat);
  color: var(--black);
  font-size: var(--body4);
  font-weight: var(--medium);
  text-align: left;
  margin-top: 0px;
  cursor: pointer;
}

/* Line between descriptions */
.card-details+.card-details::before {
  content: "";
  margin-left: -64px;
  margin-right: -110px;
  border-top: 2px solid var(--grey2);
  margin-bottom: 64px;
  cursor: pointer;
}

/* Arrow icon styling */
.arrow-icon {
  color: var(--black);
  align-self: center;
  margin-top: 46px;
  margin-left: 445px;
}
</style>
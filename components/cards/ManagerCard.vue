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

    managerName: {
      type: String,
      required: true
    },
    // Manager of project or service
    type: {
      type: String,
      validator: (value: string) => ['project', 'service'].includes(value),
      required: true
    },
    // Manager descriptions
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
  <!-- Wrapper for the entire component -->
  <div class="card-wrapper">
    <div class="icon-container-div">
        <Icon :name="type === 'project' ? 'ProjectIcon' : 'ServiceIcon'" size="32" />
    </div>
    <h3 class="card-title">{{ type === 'project' ? 'Project Manager' : 'Service Manager' }}</h3>
    <NuxtLink class="link-activity" v-for="(item, index) in text" :key="index" :to="to[index]">
      <p class="card-description">{{ managerName }} is the main responsible for the {{ type }} {{ item }}</p>
      <hr v-if="text[index+1]" class="text-divisor-hr"/>
    </NuxtLink>


  </div>

</template>



<style scoped>

.card-wrapper {
  display: inline-block;
  min-width: 200px;
  max-width: 500px;
  padding: 1.6em 3em 1.6em 1.6em;

  overflow: hidden;
  background-color: var(--white);
  border-radius: var(--border-radius-card);
  box-shadow: 0px 5px 20px var(--black-shadow);
  transition: transform var(--transition) ease-in-out;
}

.icon-container-div {
  /*
    Icon is responsive because it starts from a default value that depends on the 
    viewport width and has upper and lower bounds to prevent it from becoming too large or too small.
  */
  height: 18vw;
  width: 18vw;
  min-width: 50px;
  min-height: 50px;
  max-width: 70px;
  max-height: 70px;

  border-radius: var(--border-radius-card);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  background-color: var(--purple);
  
}

.card-title {
  font-family: var(--font-playfair);
  font-size: var(--h3);
  color: var(--black);
  font-weight: var(--semibold);
  margin-top: 1em;
}

.link-activity {
  display: block;
  margin-top: 16px;
}

.text-divisor-hr{
  /* Total width of the divisor is the width of the NuxtLink containing the divisor
   * plus the 4.6em amount of the padding on the left and right of the card-wrapper.
   */
  width: calc(100% + 4.6em);  
  margin-left: -1.6em;
  background-color: var(--grey2);
  height: 1px;
  border: none;
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
  border-top: 1px solid ;
  margin-top: 16px;
  margin-bottom: 64px;
  cursor: pointer;
}

/* Arrow icon styling */
.arrow-icon {
  color: var(--black);
  align-self: center;
  margin-top: 46px;
  margin-left: 453px;
}
</style>
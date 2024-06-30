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
  },
});
</script>

<template>
  <!-- Wrapper for the entire component -->
  <div id="card-wrapper">
    <div class="icon-container-div">
        <Icon class="manager-icon" :name="type === 'project' ? 'ProjectIcon' : 'ServiceIcon'" size="32" />
    </div>
    <h3 class="card-title">{{ type === 'project' ? 'Project Manager' : 'Service Manager' }}</h3>
    <NuxtLink class="link-activity" v-for="(item, index) in text" :key="index" :to="to[index]">
      <p class="card-description">{{ managerName }} is the main responsible for the {{ type }} {{ item }}</p>
      <Icon class="arrow-icon" name="ForwardArrowIcon" size="32"/>
      <hr v-if="text[index+1]" class="text-divisor-hr"/>
      
    </NuxtLink>


  </div>

</template>



<style scoped>


#card-wrapper {
  /* SIZING PROPERTIES OF THE COMPONENT
   * The wrapper only has a min and a max width, so that it can be resized according to the screen
   * width. The max width is the one usable for the desktop version, the min width is suitable for mobile.
   */
  display: inline-block;
  min-width: 270px;
  max-width: 600px;
  padding: 1.6em 6em 1.6em 1.6em;
  box-sizing: border-box;

  /* Basic properties to be inherited and referenced by all children elements
   * The default-font size is the one for a mobile-version.
   */
   font-size: var(--manager-card-mobile-font-size);
  

  background-color: var(--white);
  border-radius: var(--border-radius-card);
  box-shadow: 0px 5px 20px var(--black-shadow);
  transition: transform var(--transition) ease-in-out;
}

/* Icon is responsive because it starts from a default value that depends on the 
 * viewport width and has upper and lower bounds to prevent it from becoming too large or too small. 
 */
#card-wrapper .icon-container-div {
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

#card-wrapper .card-title {
  font-family: var(--manager-card-font-family-title);
  font-size: 1.66em;
  color: var(--black);
  font-weight: var(--semibold);
  margin-top: 1em;
}

#card-wrapper .link-activity {
  display: block;
  margin-top: 16px;
  font-size: inherit;
}

#card-wrapper .text-divisor-hr{
  /* Total width of the divisor is the width of the NuxtLink containing the divisor
   * plus the 4.6em amount of the padding on the left and right of the card-wrapper.
   */
  width: calc(100% + 7.6em);  
  margin-left: -1.6em;
  background-color: var(--grey2);
  height: 1px;
  border: none;
  margin-bottom: 3.5em;
  margin-top: 1.7em;
}

#card-wrapper .card-description {
  font-family: var(--manager-card-font-family-text);
  color: var(--black);
  font-size: 1em;
  font-weight: var(--medium);
}

#card-wrapper .arrow-icon {
  color: var(--black);
  margin-left: 100%;
}


/* HOVER AND ACTIVE EFFECTS ON THE COMPONENT */

/* Hover effect on card */
#card-wrapper:hover {
  background-color: var(--beige-hover);

  .icon-container-div {
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
#card-wrapper:active {

  transform: scale(0.98);
  background-color: var(--beige-active);

  .icon-container-div {
    background-color: var(--purple-active);
  }

  .arrow-icon {
    color: var(--purple-active);
  }

  .manager-icon {
    color: var(--beige-active);
  }
}

/* RESPONSIVE COMPONENT WITH MEDIA QUERIES */

@media (min-width: 700px) {
  #card-wrapper {
    font-size: var(--manager-card-tablet-font-size);
  }
}

@media (min-width: 1200px) {
  #card-wrapper {
    font-size: var(--manager-card-desktop-font-size);
  }
}



</style>
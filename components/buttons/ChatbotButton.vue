<script lang="ts">
// Import necessary functions from Vue
import { defineComponent, ref } from 'vue';

// Define the ExitButton component
export default defineComponent({
  // Component name
  name: 'ChatbotButton',
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
    <!-- Exit button element -->
    <button class="chatbot-button" @mouseover="hover = true" @mouseleave="hover = false" @mousedown="active = true"
    @mouseup="active = false" @focus="focused = true" @blur="focused = false" v-bind="$attrs">
        <!-- Text for the button -->
        <span>{{ "Chat with us" }}</span>
        <!-- Icon for the button on top -->
        <div class="icon-container">
            <Icon name="ChatHeartIcon" size="34" />
        </div>
    </button>
</template>
  
<style scoped>
/* Default style for the button */
.chatbot-button {
  height: 64px;
  width: 248px;
  padding: 0 10px;
  background-color: var(--orange);
  color: var(--white);
  font-size: inherit;
  font-weight: var(--semibold);
  font-family: var(--font-montserrat);
  border: none;
  border-radius: 20px;

  position: fixed;
  top: 252px;
  right: 60px;
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  box-shadow: 0 10px 12px rgba(26, 20, 31, 0.1);
  transition: background-color var(--transition);
}

/* Hover style for the button */
.chatbot-button:hover:not(.is-disabled) {
  filter: brightness(1.1);
}

/* Active style for the button */
.chatbot-button:active:not(.is-disabled) {
  filter: brightness(0.95);
}

@media(max-width:1000px){
  .chatbot-button{
    width: 200px;
  }
}

@media only screen and (max-device-width:900px){
  .chatbot-button{
    height: 84px;
    width: 84px;
    border-radius: 100%;
    bottom: 170px;
    right: 72px;
    top: auto;
    box-shadow: none;
  } 
  .chatbot-button span{
    display: none;
  }
  .icon{
    min-height: 42px;
    min-width: 42px;
    margin: 0;
  }
}

@media only screen and (max-device-width: 430px){
  .chatbot-button{
    height: 64px;
    width: 64px;
    bottom: 128px;
    right: 40px;
  }
  .icon{
    min-height: 0;
    min-width: 0;
    max-height: 32px;
    max-width: 32px;
  }
}

</style>

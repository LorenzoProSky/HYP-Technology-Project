<script lang="ts" setup>

  const emit = defineEmits(['chatbotButtonClicked']);

</script>



<template>

  <button type="button" class="chatbot-button" @click="emit('chatbotButtonClicked')">
      <span> Chat with us </span>
      <Icon name="ChatHeartIcon" size="34" />
  </button>

</template>
  
<style scoped>

.chatbot-button {
  height: 64px;
  width: 248px;
  padding: 0 10px;
  background-color: var(--orange);
  color: var(--white);
  font-size: var(--body4);
  font-weight: var(--semibold);
  font-family: var(--font-montserrat);
  border: none;
  border-radius: 20px;

  position: fixed;
  top: 26.7vh;
  right: 60px;
  z-index: 100;
  display: flex;
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

@media screen and (max-width: 1050px) {
  .chatbot-button{
    height: 84px;
    width: 84px;
    border-radius: 100%;
    top: auto;
    bottom: 170px;
    right: 72px;
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

@media screen and (max-width: 430px) {
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

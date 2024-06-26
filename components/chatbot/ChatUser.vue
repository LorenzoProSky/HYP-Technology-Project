<script lang="ts">
// Import necessary functions from Vue
import { defineComponent, ref } from 'vue';

export default defineComponent({
  // Component name
  name: 'ChatUser',
  // Define props expected by the component
  props: {
    text: {
      type: String,
      required: true
    },
  },
});
</script>

<template>
    <div class="user-container">
        <div class="user-text" >{{ text }}</div>
        <div class="icon-container"> <Icon name="ChatUserIcon" color="var(--white)" size="36" /> </div>
    </div>
</template>

<style scoped>
.user-container{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: start;
    gap: 40px;
    margin: 18px 0;
}
.icon-container{
    width: 65px;
    height: 65px;
    background-color: var(--purple);
    border-radius: 100%;
    align-content: center;
    text-align: center;
    margin-right: 3.5vw;
    margin-top: 12px;
}
.user-text{
    padding: 24px;
    background-color: var(--white);
    border: 1px solid var(--grey2);
    border-radius: 12px;
    max-width: 47%;
    overflow-wrap: break-word;
    font-size: var(--body1);
    line-height: var(--l-height1);
}

@media(max-width: 900px){
    .user-container{
        gap: 20px;
    }
    .icon-container{
        width: 45px;
        height: 45px;
    }
    .icon{
        max-width: 24px;
        max-height: 24px;
    }
}

@media(max-width: 430px){
    .icon-container{
        display: none;
    }
    .user-text{
        margin-right: 20px;
        padding: 15px;
    }
}
</style>
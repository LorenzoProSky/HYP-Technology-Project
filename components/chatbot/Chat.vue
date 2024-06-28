<script lang="ts">

import ChatUser from './ChatUser.vue';
import ChatAgent from './ChatAgent.vue';
import { defineComponent, ref, nextTick } from 'vue';
import OpenAI from 'openai';

interface Message {
    text: string;
    type: 'user' | 'agent';
}

export default defineComponent({

    name: 'Chat',
    components: {
        ChatUser,
        ChatAgent,
    },
    data() {
        return {
            userInput: '',
            chat: [] as Message[] ,   // Array of messages
            isWaitingForReply: false,
            threadId: '',
            openai: new OpenAI( {apiKey: this.$config.public.openaiApiKey, dangerouslyAllowBrowser: true }),
            assistantId: 'asst_1zbW4JTNBND59Max3CW5YvM5',
            conversationRef: null as any,
        }
    },
    async mounted() {
        await this.createThread();
        this.conversationRef = this.$refs.chatContainerRef;
        console.log(this.$config.public.openaiApiKey);
    },
    methods: {
        async createThread() {
            try {
                const thread = await this.openai.beta.threads.create();
                this.threadId = thread.id;
                console.log("Created thred with ID", thread.id);
            } catch (error) {
                console.error('Error creating thread:', error);
            }
        },
        async handleConversation() {
            if(this.userInput){
                console.log("Sending user input to openai");
                this.isWaitingForReply = true;
                const userMessage = this.userInput;
                this.chat.push({text: this.userInput, type: 'user'});
                this.scrollToBottom();
                this.userInput = '';
                
                // Fetch response from the server here
                const message = await this.openai.beta.threads.messages.create(
                    this.threadId,
                    {
                        role: "user",
                        content: userMessage
                    }
                )

                const run = this.openai.beta.threads.runs.stream(this.threadId, {
                    assistant_id: this.assistantId, stream: true
                }).on('textCreated', (text) => {
                    this.chat.push({ text: '', type: 'agent' });
                })
                .on('textDelta', (textDelta, snapshot) => {
                    const lastMessageIndex = this.chat.length - 1;
                    if (this.chat[lastMessageIndex].type === 'agent') {
                        this.chat[lastMessageIndex].text += textDelta.value; // Append incremental text to last agent message
                        this.scrollToBottom();
                    }
                    
                });
                this.isWaitingForReply = false;
            }
        },
        scrollToBottom() {
            console.log("the ref is ", this.conversationRef);
            this.$nextTick(() => {
                if(this.conversationRef){
                    this.conversationRef.scrollTop = this.conversationRef.scrollHeight;
                }
            })
        },

    }
});

</script>



<template>
    <div id="chatconversation" ref="chatContainerRef">
        <div v-for="(message, index) in chat" :key="index">
            <ChatUser v-if="message.type === 'user'" :text="message.text"></ChatUser>
            <ChatAgent v-else :text="message.text"></ChatAgent>
        </div>
    </div>

    <form id="chat-form" @submit.prevent="handleConversation">
      <input type="text" v-model="userInput" name="input" placeholder="Here you can write" id="chat-input" required >
      <button type="submit" style="width: 80px; height: 40px; border: 1px solid var(--purple); border-radius: 8px; font-size: var(--body1);
      background-color: var(--white); color: var(--purple); cursor: pointer;" :disabled="isWaitingForReply" >Send</button>
    </form>

</template>


<style>

#chatconversation{
  height: calc(100% - 80px - 72px - 6.8vh);
  background-color: var(--white);
  overflow-y: scroll;
  overflow-x: hidden;
}
/* scrollbar per browser WebKit */
#chatconversation::-webkit-scrollbar {
  width: 12px;
}
#chatconversation::-webkit-scrollbar-track {
  background: color-mix(in srgb, var(--white) 80%, transparent);
  border-radius: 10px;
}
#chatconversation::-webkit-scrollbar-thumb {
  background: var(--grey2);
  border-radius: 10px;
  border: 1px solid var(--white);
}

form{
  position: absolute;
  bottom: 6.8vh;
  right: 3.5vw;
  width: 883px;
  max-width: calc(100vw * 90/100 * 73/100 * 90/100);
  height: 72px;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  font-size: var(--body1);
}
#chat-input{
  height: calc(100% - 20px);
  width: 88.45%;
  margin: 0;
  border: 2px solid var(--grey2);
  border-radius: 12px;
}
#chat-input:focus{
  outline: none;
}

</style>
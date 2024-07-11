/* Configuration file for the Openai API integration  */

// plugins/openai.ts

import Configuration from 'openai';
import  { OpenAI } from 'openai';
import type { ClientOptions } from 'openai';

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig();
  
  const configuration = { apiKey: nuxtApp.$config.public.openaiApiKey, dangerouslyAllowBrowser: true };
  
  const openai = new OpenAI(configuration);
  
  // Make the OpenAI client available in the Nuxt app context
  nuxtApp.provide('openai', openai);
});



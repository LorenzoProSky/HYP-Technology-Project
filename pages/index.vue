<script lang="ts">
import { defineComponent } from 'vue';
import BackwardButton from '~/components/buttons/BackwardButton.vue';
import ForwardButton from '~/components/buttons/ForwardButton.vue';
import TextButton from '~/components/buttons/TextButton.vue';
import LinkButton from '~/components/buttons/LinkButton.vue';

export default defineComponent({
  components: {
    BackwardButton,
    ForwardButton,
    TextButton,
    LinkButton,
  },
});
</script>

<template>

  <section class="section">
    <h2>Homepage</h2>
    <p>We're here to provide support and resources for those who have been subject to domestic violence.</p>

    <BackwardButton buttonText="Back" to="/activities/activities" />
    <ForwardButton buttonText="Next" to="/activities/activities" />
    <TextButton buttonText="Learn more" to="/activities/activities" />
    <LinkButton buttonText="Contact us" to="/contact" />
  </section>
  <section class="section">
    <h2>About us</h2>
    <p>Learn about the who we are.</p>
  </section>
  <section class="section">
    <h2>Topics</h2>
    <p>Learn about the services we offer, including counseling, legal advice, and support groups.</p>
  </section>
  <section class="section">
    <h2>Groups</h2>
    <p>Explore our groups.</p>
  </section>
  <section class="section">
    <h2>Contact us</h2>
    <p>Get in touch with us to learn more about our services or to get help.</p>
  </section>

</template>



<style>

</style>

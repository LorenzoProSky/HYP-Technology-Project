<script lang="ts">
import { defineComponent } from 'vue';
import BackwardButton from '~/components/buttons/BackwardButton.vue';
import ForwardButton from '~/components/buttons/ForwardButton.vue';
import TextButton from '~/components/buttons/TextButton.vue';
import LinkButton from '~/components/buttons/LinkButton.vue';
import ActivityCard from '~/components/cards/ActivityCard.vue';
import MapCard from '~/components/cards/MapCardSmall.vue';
import DiscoverCard from '~/components/cards/DiscoverCard.vue';
import PersonCard from '~/components/cards/PersonCard.vue';
import ProjectCard from '~/components/cards/ProjectCard.vue';
import ServiceCard from '~/components/cards/ServiceCard.vue';
import ManagerCard from '~/components/cards/ManagerCard.vue';
import MapCardBig from '~/components/cards/MapCardBig.vue';

export default defineComponent({
  components: {
    BackwardButton,
    ForwardButton,
    TextButton,
    LinkButton,
    ActivityCard,
    MapCard,
    DiscoverCard,
    PersonCard,
    ProjectCard,
    ServiceCard,
    ManagerCard,
    MapCardBig
  },
});
</script>

<template>

  <section class="home">
    <h2>Homepage</h2>
    <p>We're here to provide support and resources for those who have been subject to domestic violence.</p>

    <BackwardButton buttonText="Back" to="/activities/activities" />
    <ForwardButton buttonText="Next" to="/activities/activities" />
    <TextButton buttonText="Learn more" to="/activities/activities" />
    <LinkButton buttonText="Contact us" to="/contact" />
    <ActivityCard
      imageSrc="https://plus.unsplash.com/premium_photo-1669863280125-7789ef60adc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title="Supportive Swim Days"
      text="A bi-monthly event offering women and children a safe, supportive environment to enjoy swimming and foster community."
      footerText="Learn more" to="/services" />
    <MapCard to="https://maps.google.com/?q=Via+Candiani+72,+20158+Milano" title="Centro MiLA Bovisa"
      address="Via Candiani 72, 20158 Milano" email="MILACentre.Bovisa@gmail.com" phone="+39 345697365" />
    <DiscoverCard title="Support groups"
      text="Explore the diverse projects we fund and organize, designed to create meaningful experiences, joyful moments for children, and impactful advocacy and awareness for women's rights."
      to="/groups" />
    <PersonCard
      imageSrc="https://plus.unsplash.com/premium_photo-1669863280125-7789ef60adc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      name="Jane Doe" job="Counselor" text="Maria Russo is the responsible for the Psychological Counselling Service."
      to="/about" />
    <ProjectCard
      imageSrc="https://plus.unsplash.com/premium_photo-1669863280125-7789ef60adc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title="Supportive Swim Days"
      text="A bi-monthly event offering women and children a safe, supportive environment to enjoy swimming and foster community."
      when="1st and 3rd Sunday 10:00 - 16:00" where="Centro Balneare Romano, 20131 Milano"
      to="/activities/activities" />
    <ServiceCard
      imageSrc="https://plus.unsplash.com/premium_photo-1669863280125-7789ef60adc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title="Legal Counselling"
      text="With the Legal Counselling, you can know your rights and the tools you need to protect yourself and your children."
      :when="['Monday - Friday 09:00 - 17:00', 'Tuesday - Friday\n09:00 - 18:00']"
      :where="['Centro MiLA Farini', 'Centro MiLA Bovisa']" to="/services" />
    <ManagerCard type=""
      :text="['Name Surname is the main responsible for the Project Name', 'Name Surname is the main responsible for the Project Name', 'Name Surname is the main responsible for the Project Name']"
      :to="['/about', '/activities/activities', '/groups']" />
    <MapCardBig
      imageSrc="https://plus.unsplash.com/premium_photo-1669863280125-7789ef60adc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      name="Centro MiLA Bovisa" address="Via Candiani 72, 20158 Milano" phone="+39 345697365"
      email="centromila.bovisa@gmail.com" hours="07:00 - 19:00 daily" to="/about" />
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


<style scoped>
.template {
  background-color: var(--white);
}
</style>

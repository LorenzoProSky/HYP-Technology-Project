<script lang="ts" setup>
// Import necessary components
import DiscoverCard from '~/components/cards/DiscoverCard.vue';
</script>

<!-- Template for the activities page -->
<template>
  <div class="activities-page">
    <!-- Cover section with image and title -->
    <div class="page-title">
      <h1 class="title-text">Explore<br />Our Activities</h1>
    </div>

    <!-- Section content -->
    <div class="page-section">
      <h3 class="section-title">MiLA Activities</h3>
      <div class="section-description">
        At MiLA, we are dedicated to helping women and children affected by
        domestic violence through a variety of impactful services and projects.<br />Explore
        our activities to see how we can support your journey to a safer life.
      </div>
    </div>

    <!-- Cards for discovering services and projects -->
    <div class="cards-container">
      <div class="page-cards">
        <DiscoverCard title="Discover all the Services"
          text="Discover our wide array of supportive services, including counseling, legal assistance, and safe housing, all aimed at empowering women to build safe, empowered and independent lives."
          to="/activities/services/index" />
        <DiscoverCard title="Discover all the Projects"
          text="Explore the diverse projects we fund and organize, designed to create meaningful experiences, joyful moments for children, and impactful advocacy and awareness for women's rights."
          to="/activities/projects/index" />
      </div>
    </div>

    <!-- Quote section -->
    <div class="quote-section">
      <div class="quote-container">
        <Icon class="quote-icon" name="QuoteIcon" size="85" />
        <div class="quote-content">
          <div class="quote-text">
            At MiLA, we understand the immense courage it takes to seek help. We
            are here to listen, support, and empower you every step of the way.
            Together, we can build a brighter, safer future.
          </div>
          <div class="quote-author">
            Sofia Conti, Centre Coordinator
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Scoped styles for the activities page -->
<style scoped>
.activities-page {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.page-title {
  background-image: url('/assets/images/our-activities-index-cover.png');
  background-size: cover;
  width: 100%;
  height: calc(100vw / 2);
}

.title-text {
  font-family: var(--font-playfair);
  font-weight: var(--extrabold);
  font-size: var(--h1);
  color: var(--white);
}

h1{
  position: relative;
  bottom: -50%;
  left: 10%;
  z-index: 1;
  width:fit-content;
}

@media (max-width: 1400px) {
  .title-text {
    margin-top: -5vw;
  }
}

.page-section {
  margin: 160px auto;
  margin-bottom: 0px;
  width: 50vw;
  color: var(--black);
}

@media (max-width: 1500px) {
  .page-section {
    margin-top: 80px;
  }
}

.section-title {
  text-align: center;
  margin-top: 0px;
  font-family: var(--font-playfair);
  font-weight: var(--bold);
  font-size: 42px;
}

.section-description {
  text-align: center;
  margin-top: 32px;
  font-family: var(--font-montserrat);
  font-weight: var(--regular);
  font-size: var(--body4);
}

.cards-container {
  margin-top: 160px;
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 1500px) {
  .cards-container {
    margin-top: 80px;
  }
}

.page-cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8vw;
}

@media (max-width: 1500px) {
  .page-cards {
    flex-direction: column;
    gap: 80px;
  }
}

.quote-section {
  margin-top: 330px;
  margin-bottom: 345px;
  background-image: url('/assets/images/our-activities-index-quote.png');
  background-size: cover;
  width: 100%;
  height: calc(69.5vw / 2);
  color: var(--black);
}

@media (max-width: 1500px) {
  .quote-section {
    margin-top: 165px;
    margin-bottom: 172.5px;
  }
}

.quote-container {
  display: flex;
  flex-direction: row;
  align-items: start;
  margin: 7.2vw 10.42vw 7.34vw 59.7vw;
  width: 30vw;
}

.quote-icon {
  width: 100%;
  color: var(--purple);
}

.quote-content {
  margin: 1.563vw 0 0 0;
  display: flex;
  flex-direction: column;
}

.quote-text {
  font-family: var(--font-montserrat);
  font-weight: var(--regular);
  font-size: var(--h4);
}

.quote-author {
  margin-top: 2.1vw;
  font-family: var(--font-montserrat);
  font-weight: var(--medium);
  font-size: var(--body3);
  font-style: italic;
}

@media (max-width: 1700px) {
  .quote-container {
    margin: 5vw 0 10vw -10vw;
    width: 100%;
  }

  .quote-icon {
    min-width: 100%;
    margin: -3% -35% 0 -25% ;
  }

  .quote-content {
    margin: 0 0 0 -10vw;
  }
}
</style>
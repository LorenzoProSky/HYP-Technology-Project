<script lang="ts" setup>
// Import necessary assets and components
import activitiesCoverImage from '~/assets/images/our-activities-index-cover.png';
import activitiesQuoteImage from '~/assets/images/our-activities-index-quote.png';
import DiscoverCard from '~/components/cards/DiscoverCard.vue';
</script>

<!-- Template for the activities page -->
<template>
  <div class="activities-page">
    <!-- Cover section with image and title -->
    <div class="cover-section">
      <img loading="lazy" :src="activitiesCoverImage" class="cover-image" />
      <h1 class="cover-title">Explore<br />Our Activities</h1>
    </div>

    <!-- Section title -->
    <h3 class="section-title">MiLA Activities</h3>

    <!-- Description of activities -->
    <div class="section-description">
      At MiLA, we are dedicated to helping women and children affected by
      domestic violence through a variety of impactful services and projects.<br />Explore
      our activities to see how we can support your journey to a safer life.
    </div>

    <!-- Cards displaying services and projects -->
    <div class="activities-cards">
      <div class="card-container">
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
        <img loading="lazy" :srcSet="activitiesQuoteImage" class="quote-image" />
        <div class="quote-content">
          <div class="quote-icon-wrapper">
            <Icon name="QuoteIcon" size="85" class="icon-quote" />
          </div>
          <div class="quote-text-wrapper">
            <div class="quote-text">
              At MiLA, we understand the immense courage it takes to seek help. We
              are here to listen, support, and empower you every step of the way.
              Together, we can build a brighter, safer future.
            </div>
            <div class="quote-author">Sofia Conti, Centre Coordinator</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Scoped styles for the activities page -->
<style scoped>
/* General page styling */
.activities-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 997px) {
  .activities-page {
    max-width: 100%;
  }
}

/* Cover section styling */
.cover-section {
  flex-direction: column;
  overflow: hidden;
  align-self: stretch;
  position: relative;
  display: flex;
  min-height: 960px;
  width: 100%;
  justify-content: center;
}

@media (max-width: 997px) {
  .cover-section {
    max-width: 100%;
  }
}

/* Cover image styling */
.cover-image {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

/* Cover title styling */
.cover-title {
  position: relative;
  font-family: var(--font-playfair);
  font-weight: var(--extrabold);
  color: var(--white);
  width: 100%;
  align-items: start;
  justify-content: center;
  padding: 475px 60px 197px 189px;
}

@media (max-width: 997px) {
  .cover-title {
    max-width: 100%;
    font-size: var(--h3);
    line-height: 44px;
  }
}

/* Section title styling */
.section-title {
  color: var(--black);
  text-align: center;
  margin-top: 172px;
  font-family: var(--font-playfair);
  font-weight: var(--bold);
  font-size: 42px;
}

@media (max-width: 997px) {
  .section-title {
    margin-top: 40px;
  }
}

/* Description of activities styling */
.section-description {
  color: var(--black);
  text-align: center;
  margin-top: 32px;
  width: 922px;
  font-family: var(--font-montserrat);
  font-weight: var(--regular);
  font-size: var(--body4);
}

@media (max-width: 997px) {
  .section-description {
    max-width: 100%;
    margin-top: 40px;
  }
}

/* Cards displaying services and projects styling */
.activities-cards {
  margin-top: 163px;
  width: 100%;
  max-width: 1360px;
}

@media (max-width: 997px) {
  .activities-cards {
    max-width: 100%;
    margin-top: 40px;
  }
}

/* Container for cards styling */
.card-container {
  gap: 160px;
  display: flex;
  justify-content: center;
}

@media (max-width: 997px) {
  .card-container {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
}

/* Column layout adjustment for smaller screens */
.column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
}

@media (max-width: 997px) {
  .column {
    width: 100%;
  }
}

/* Quote section styling */
.quote-section {
  align-self: stretch;
  display: flex;
  overflow: hidden;
  margin-top: 330px;
  margin-bottom: 345px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  color: var(--black);
}

@media (max-width: 997px) {
  .quote-section {
    max-width: 100%;
    margin-top: 40px;
  }
}

/* Quote container styling */
.quote-container {
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  min-height: 678px;
  width: 100%;
  max-width: 1920px;
  align-items: end;
}

@media (max-width: 997px) {
  .quote-container {
    max-width: 100%;
    padding-left: 20px;
  }
}

/* Quote image styling */
.quote-image {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  display: flex;
}

/* Quote content styling */
.quote-content {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 0px;
  padding: 141px 194px 141px 1167px;
  margin-top: 35px;
}

/* Quote icon wrapper styling */
.quote-icon-wrapper {
  position: relative;
  margin-top: -35px;
}

@media (max-width: 998px) {
  .quote-content {
    flex-wrap: wrap;
    padding: 0px;
  }
}

/* Quote text wrapper styling */
.quote-text-wrapper {
  flex-grow: 1;
  flex-basis: auto;
}

/* Quote text styling */
.quote-text {
  font-family: var(--font-montserrat);
  font-size: var(--h4);
  font-weight: var(--regular);
  align-self: end;
  flex-grow: 1;
  flex-basis: auto;
}

@media (max-width: 997px) {
  .quote-text {
    max-width: 100%;
  }
}

/* Quote author styling */
.quote-author {
  font-family: var(--font-montserrat);
  font-size: var(--body3);
  font-weight: var(--medium);
  font-style: italic;
  position: relative;
  margin-top: 42px;
}

@media (max-width: 997px) {
  .quote-author {
    margin: 40px 0;
  }
}
</style>

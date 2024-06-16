<script lang="ts">
// Import necessary components
import PersonCard from '~/components/cards/PersonCard.vue';
import BackwardButton from '~/components/buttons/BackwardButton.vue';
import profileImage from '~/assets/images/profile-image.jpeg';

export default {
  components: {
    PersonCard,
    BackwardButton
  },
  data() {
    return {
      // TODO: Replace the placeholder data with the actual data
      people: Array(20).fill({
        imageSrc: profileImage,
        name: 'Alessandra Ferrari',
        job: 'Psychotherapist',
        text: 'Alessandra Ferrari is the responsible for the projects SELF. Rediscovery & Confidence and Paws for Healing.',
        to: '/index'
      }),

      // Pagination settings
      peoplePerPage: 12,
      startCount: 0,
      endCount: 12,

      // State variable to control the disabled state of the backward navigation button for numbers styling
      isBackButtonDisabled: true,
    };
  },

  computed: {
    // Computed property to dynamically calculate the visible people based on pagination settings
    visiblePeople() {
      return this.people.slice(this.startCount, this.endCount);
    }
  },
  methods: {
    // Method to increment the visible people count and adjust pagination
    showMore() {
      this.startCount += this.peoplePerPage;
      this.endCount += this.peoplePerPage;
      this.scrollToTarget();

      // Logic to disable the backward button when there are no previous pages
      if (this.people.length > this.endCount) {
        (this.$refs.backButton as HTMLButtonElement).disabled = true;
      } else {
        (this.$refs.backButton as HTMLButtonElement).disabled = false;
      }

      // Update the disabled state of the backward button for numbers styling
      this.isBackButtonDisabled = false
    },
    // Method to decrement the visible people count and adjust pagination
    showLess() {
      this.startCount -= this.peoplePerPage;
      if (this.startCount < 0) {
        this.startCount = 0;
      }
      this.endCount -= this.peoplePerPage;
      if (this.endCount < this.peoplePerPage) {
        this.endCount = this.peoplePerPage;
      }
      this.scrollToTarget();

      // Logic to disable the next button when showing the second page
      if (this.endCount === this.peoplePerPage) {
        (this.$refs.nextButton as HTMLButtonElement).disabled = true;
      } else {
        (this.$refs.nextButton as HTMLButtonElement).disabled = false;
      }

      // Update the disabled state of the backward button
      this.isBackButtonDisabled = true
    },
    // Smooth scroll to the target section when pagination changes
    scrollToTarget() {
      const targetElement = this.$refs.targetSection as HTMLElement | null;
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<!-- Template for the people page -->
<template>
  <div id="people-page">

    <!-- Cover section with image, title, back button -->
    <div id="page-title">
      <backward-button-wrapper>
        <BackwardButton buttonText="About Us" to="/about-us" />
      </backward-button-wrapper>
      <page-title>Discover<br />Our People</page-title>
    </div>

    <!-- Section content -->
    <div id="page-section" ref="targetSection"> <!-- Target section for smooth scroll -->
      <h3 id="section-title">MiLA’s Team</h3>
      <div id="section-description">
        Our compassionate team of counselors, legal experts, social workers, and
        volunteers is dedicated to empowering women and children facing domestic violence.
        Discover the people who make our mission possible.
      </div>
    </div>

    <!-- Cards container -->
    <div id="cards-container">
      <div id="page-cards">
        <!-- Loop through visiblePeople to render PersonCard components -->
        <PersonCard v-for="(person, index) in visiblePeople" :key="index" :imageSrc="person.imageSrc"
          :name="person.name" :job="person.job" :text="person.text" :to="person.to" />
      </div>
      <div id="navigation-button">
        <!-- Backward button element -->
        <button class="nav-button" @click="showLess" :disabled="endCount <= peoplePerPage" ref="backButton">
          <Icon id="left-icon" name="NavLeftArrowIcon" size="19" />
          <p> Back </p>
        </button>

        <!-- Page number element -->
        <p id="page-number">
          <span :class="{ 'active-number': isBackButtonDisabled }">{{ 1 }}</span>
          <span id="separator"></span>
          <span :class="{ 'active-number': !isBackButtonDisabled }">{{ 2 }}</span>
        </p>

        <!-- Next button element -->
        <button class="nav-button" @click="showMore" :disabled="endCount >= people.length" ref="nextButton">
          <p> Next </p>
          <Icon id="right-icon" name="NavRightArrowIcon" size="19" />
        </button>
      </div>
    </div>
  </div>

</template>

<!-- Scoped styles for the people page -->
<style scoped>
#people-page {
  width: 100%;
  display: flex;
  flex-direction: column;
}

#page-title {
  background-image: url('/assets/images/our-people-cover.png');
  background-size: cover;
  width: 100%;
  height: calc(100vw / 2);
}

#page-section {
  margin: 160px auto;
  margin-bottom: 0px;
  width: 50vw;
  color: var(--black);
}

@media (max-width: 1500px) {
  #page-section {
    margin-top: 80px;
  }
}

#section-title {
  text-align: center;
  margin-top: 0px;
  font-family: var(--font-playfair);
  font-weight: var(--bold);
  font-size: 42px;
}


#section-description {
  text-align: center;
  margin-top: 32px;
  font-family: var(--font-montserrat);
  font-weight: var(--regular);
  font-size: var(--body4);
}

#cards-container {
  margin-top: 160px;
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 1500px) {
  #cards-container {
    margin-top: 80px;
  }
}

/* Grid layout for the cards */
#page-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  row-gap: 5vw;
  column-gap: 3.2vw;
}

@media (max-width: 1580px) {
  #page-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 1050px) {
  #page-cards {
    grid-template-columns: repeat(1, 1fr);
  }
}

#navigation-button {
  margin-top: 220px;
  margin-bottom: 400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
}

@media (max-width: 1500px) {
  #navigation-button {
    margin-top: 110px;
    margin-bottom: 200px;
  }
}

.nav-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  font-family: var(--font-montserrat);
  color: var(--black);
  font-size: var(--body3);
  font-weight: var(--regular);
  cursor: pointer;
  border: none;
  transition: background-color var(--transition);
}

.nav-button:hover {
  color: var(--purple-hover);
}

.nav-button:active {
  color: var(--purple-active);
}

.nav-button[disabled] {
  color: var(--grey3);
  cursor: not-allowed;
}

.nav-button[disabled]:hover {
  color: var(--grey3);
  cursor: not-allowed;
}

#left-icon {
  margin-top: 0px;
  margin-right: 5px;
}

#right-icon {
  margin-top: 2px;
  margin-left: 5px;
}

#page-number {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  font-family: var(--font-montserrat);
  color: var(--grey2);
  font-size: var(--body3);
  font-weight: var(--regular);
}

.active-number {
  color: var(--black);
  font-weight: var(--medium);
}

#separator {
  width: 2.6vw;
}
</style>
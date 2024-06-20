<script lang="ts" setup>
// Import necessary components
import DiscoverCard from '~/components/cards/DiscoverCard.vue';
</script>

<!-- Template for the activities page -->
<template>
  <div id="activities-page">
    <!-- Cover section with image and title -->
    <div id="page-title">
      <h1 class="page-title">Discover how to<br />Support MiLA</h1>
    </div>

    <!-- Section content -->
    <div id="page-section">
      <h3 id="section-title">Take Action!</h3>
      <div id="section-description">
        Join us in our mission to empower women and fight against violence.<br>
        By donating or volunteering with us, you become part of a community dedicated to creating a safer and more equitable world for all.
      </div>
    </div>

    <!-- Cards for discovering services and projects -->
    <div id="cards-container">
      <div id="page-cards">
        <DiscoverCard title="Donate to MiLA"
          text="Even with a small donation, you can contribute to the realisation of our activities, thus supporting women in their pathways out of violence."
          to="/what-you-can-do/donate" />
        <DiscoverCard title="Become a Volunteer!"
          text="Contribute to the fight against violence against women and for rights by becoming a volunteer in our centre."
          to="/what-you-can-do/volunteering" /> 
      </div>
    </div>

    <!-- Quote section -->
    <div id="quote-section">
      <div id="quote-container">
        <Icon id="quote-icon" name="QuoteIcon" size=8vw />
        <div id="quote-content">
          <div id="quote-text">
            Volunteering at MiLA has changed my life. Seeing the strength of the women and children we help is truly inspiring. If you want to make a real difference, come join us or consider donating. Together, we can create a caring and safe community.
          </div>
          <div id="quote-author">
            Elena, MiLA volunteer
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Scoped styles for the activities page -->
<style scoped>
#activities-page {
  width: 100%;
  display: flex;
  flex-direction: column;
}

#page-title {
  background-image: url('/assets/images/cover-what-you-can-do.png');
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
}

#cards-container {
  margin-top: 160px;
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
}



#page-cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8vw;
}



#quote-section {
  margin-top: 330px;
  margin-bottom: 345px;
  background-image: url('/assets/images/what-you-can-do-pageImage.jpeg');
  background-size: cover;
  width: 100%;
  height: calc(100vw / 2);
  color: var(--black);
}



#quote-container {
  display: flex;
  flex-direction: row;
  align-items: start;
  /* margin: 15.2vw 1.42vw 10.34vw 40.7vw; */
  margin: 27vw 39vw 0vw 8vw;
  background-color: #E0D6F2;
  opacity: 0.8;
  border-radius: 24px;
}

#quote-icon {
  margin-top: -0.8vw;
  width: 35%;
  margin-left: 50px!important;
  color: var(--purple);
}

#quote-content {
  display: flex;
  flex-direction: column;

}

#quote-text {
  font-family: var(--font-montserrat);
  font-weight: var(--regular);
  font-size: var(--h4);
  margin: 65px 65px 0px 0px;

}

#quote-author {
  margin-top: 28px;
  margin-bottom: 28px;
  font-family: var(--font-montserrat);
  font-weight: var(--medium);
  font-size: var(--body3);
  font-style: italic;
}



/* media 1500 */

@media (min-width: 100px) and (max-width: 1500px) {
  #page-section {
    margin-top: 80px;
  }

  #page-cards {
    flex-direction: column;
    gap: 80px;
  }

  #cards-container {
    margin-top: 80px;
  }


  #quote-section {
    margin-top: 165px;
    margin-bottom: 172.5px;
  }
}


/* media 1500 - 1700 */
@media (min-width: 1500px) and (max-width: 1700px) {
  #quote-container {
    margin: 6vw 0 10vw -10vw;
    width: 100%;
  }

  #quote-icon {
    min-width: 100%;
    margin: -3% -35% 0 -25%;
  }

  #quote-content {
    margin: 0 0 0 -10vw;
  }
}


/* media 0 - 1050 */
@media (max-width: 1050px) {
  #quote-container {
    margin-top: 55px;
    padding: 15px;
    width: 80%;
    height: 25vh;
  }

  #quote-text {
    font-size: 2.8vw;
    line-height: 3vw;
    margin: 30px;
  }

  #quote-author {
    font-size: 2.4vw;
    line-height: 2.5vw;
    margin-top: 10px;
    margin-left: 20px;
  }


  #page-title {
  height: calc(90vw / 2);
}

  .page-title {
    top: 18vh;
    width: 60%;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 600px;
  }
}

/* iphone 13 / 13 pro */
@media (max-width: 950px) {

  #quote-section {
  margin-bottom: 90px;
  margin-top: 90px; 
  height: 80vw;
  }

  #quote-icon {
    margin:  6px!important;
    width: 100%;
  }

  #quote-container {
    margin-top: 50px;
    padding: 10px;
    width: 80%;
    height: 25vh;
  }

  #quote-text {
    font-size: 4vw;
    line-height: 4vw;
    margin: 20px 20px 10px 10px;
  }

  #quote-author {
    font-size: 3.2vw;
    margin-top: 10px;
    margin-left: 10px;
  }


  #page-title {
  height: 75vw;
}

  .page-title {
    top: 19vh;
    width: 60%;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
  }

  
  }
</style>
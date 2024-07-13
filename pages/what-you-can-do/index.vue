<script lang="ts" setup>
// Import the DiscoverCard component
import DiscoverCard from '~/components/cards/DiscoverCard.vue';

useHead({
  title: "What You Can Do to Support the Cause at Centro MiLA",
  meta: [
    {
      name: 'description',
      content: 'Discover how to support MiLA in empowering women and fighting against violence. Donate to help women find a pathway out of violence or become a volunteer to contribute directly to our community efforts.'
    },
    {
      name: 'keywords',
      content: 'support MiLA, donate to women\'s shelter, volunteer against violence, empower women, fight against domestic violence, community support, women\'s rights' + 
      'supporto MiLA, donazione a rifugio per donne, volontariato contro la violenza, empowerment delle donne, lotta contro la violenza domestica, supporto comunitario, diritti delle donne',
    }
  ]
});
</script>


<template>
  <!-- Main container for the activities page -->
  <div id="activities-page">
    <!-- Title section -->
    <div id="page-title" :style="{ backgroundImage: 'url(https://pbvaepwwamyykdrwmqui.supabase.co/storage/v1/object/public/HYP-Images/cover_image/Cover_What_you_can_do.png)'}">
      <h1 class="page-title">Discover how to<br />Support MiLA</h1>
    </div>

    <!-- Action section -->
    <div id="page-section">
      <h2 id="section-title">Take Action!</h2>
      <div id="section-description">
        Join us in our mission to empower women and fight against violence.<br>
        By donating or volunteering with us, you become part of a community dedicated to creating a safer and more equitable world for all.
      </div>
    </div>

    <!-- Cards container -->
    <div id="cards-container">
      <div id="page-cards">
        <!-- DiscoverCard for donations -->
        <DiscoverCard title="Donate to MiLA"
          text="Even with a small donation, you can contribute to the realisation of our activities, thus supporting women in their pathways out of violence."
          to="/what-you-can-do/donate" />
        <!-- DiscoverCard for volunteering -->
        <DiscoverCard title="Become a Volunteer!"
          text="Contribute to the fight against violence against women and for rights by becoming a volunteer in our centre."
          to="/what-you-can-do/volunteering" />
      </div>
    </div>

    <!-- Quote section -->
    <div id="quote-section">
      <div id="quote-container">
        <!-- Quote icon -->
        <Icon id="quote-icon" name="QuoteIcon" size=8vw />
        <!-- Quote content -->
        <div id="quote-content">
          <div id="quote-text">
            Volunteering at MiLA has changed my life. Seeing the strength of the women and children we help is truly inspiring. If you want to make a real difference, come join us or consider donating. Together, we can create a caring and safe community.
          </div>
          <div id="quote-author">
            Elena, MiLA volunteer
          </div>
        </div>
      </div>
      <!-- Decorative image -->
      <div id="FlowerImage"><img src="assets/images/fiori-e-cuori.svg" alt=""></div>
    </div>
  </div>
</template>

<style scoped>
/* Style for the decorative flower image */
#FlowerImage {
  position: relative;
  bottom: 98%;
  display: flex;
  justify-content: end;
  opacity: 0.3;
}

/* Main container style */
#activities-page {
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* Style for the title section */
#page-title {
  background-size: cover;
  width: 100%;
  height: calc(100vw / 2);
}

/* Style for the action section */
#page-section {
  margin: 160px auto;
  margin-bottom: 0px;
  width: 50vw;
  color: var(--black);
}

/* Style for the action section title */
#section-title {
  text-align: center;
  margin-top: 0px;
  font-family: var(--font-playfair);
  font-weight: var(--bold);
  font-size: 42px;
}

/* Style for the action section description */
#section-description {
  text-align: center;
  margin-top: 32px;
}

/* Style for the cards container */
#cards-container {
  margin-top: 160px;
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Style for the cards section */
#page-cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8vw;
}

/* Style for the quote section */
#quote-section {
  margin-top: 330px;
  margin-bottom: 390px;
  background-image: url('/assets/images/what-you-can-do-pageImage.png');
  background-size: cover;
  height: calc(100vw / 2);
  color: var(--black);
}

/* Style for the quote container */
#quote-container {
  display: flex;
  flex-direction: row;
  align-items: start;
  margin: 27vw 39vw 0vw 8vw;
  background-color: #E0D6F2;
  opacity: 0.8;
  border-radius: 24px;
}

/* Style for the quote icon */
#quote-icon {
  margin-top: -0.8vw;
  width: 35%;
  margin-left: 50px!important;
  color: var(--purple);
}

/* Style for the quote content */
#quote-content {
  display: flex;
  flex-direction: column;
}

/* Style for the quote text */
#quote-text {
  font-family: var(--font-montserrat);
  font-weight: var(--regular);
  font-size: var(--h4);
  margin: 65px 65px 0px 0px;
}

/* Style for the quote author */
#quote-author {
  margin-top: 28px;
  margin-bottom: 28px;
  font-family: var(--font-montserrat);
  font-weight: var(--medium);
  font-size: var(--body3);
  font-style: italic;
}

/* Media query for screen width less than 500px */
@media (max-width: 500px) {
  #quote-container {
    height: 30vh!important;
  }
}

/* Media query for screen width between 500px and 1500px */
@media (max-width: 1500px) {
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
}

/* Media query for screen width between 500px and 1700px */
@media (max-width: 1700px) {  
  #FlowerImage {
    display: none;
  }
}

/* Media query for screen width less than 1050px */
@media (max-width: 1050px) {
  #quote-icon {
    margin: 0px!important;
    width: 60%;
  }

  #quote-container {
    margin-top: 55px;
    padding: 15px;
    width: 80%;
    height: 25vh;
  }

  #quote-text {
    font-size: 2.8vw;
    line-height: 3vw;
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
}

/* Media query for screen width less than 950px */
@media (max-width: 950px) {
  #quote-section {
    margin-bottom: 100px;
    margin-top: 100px;
    height: 110vw;
  }

  #quote-container {
    margin-top: 15vw;
    width: 80%;
    height: 40vh;
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

/* Media query for screen width between 700px and 1700px */
@media (min-width: 700px) and (max-width: 1700px) {
  #quote-container {
    margin-top: 20vw;
    width: 60%;
    height: 40vw!important;
  }

  #quote-section {
    height: 90vw;
  }

  #quote-text {
    font-size: 2.5vw;
    line-height: 3.3vw;
    margin: 30px 20px 10px 10px!important;
  }

  #quote-author {
    font-size: 1.8vw;
    line-height: 2vw;
  }

  #quote-icon {
    margin-left: 10px!important;
    width: 50%;
  }
}

/* Media query for screen width between 1100px and 1700px */
@media (min-width: 1100px) and (max-width: 1700px) {
  #quote-container {
    height: 35vw!important;
  }
}
</style>
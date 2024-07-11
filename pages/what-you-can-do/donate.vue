<script lang="ts" setup>
// Import the BackwardButton component
import BackwardButton from '~/components/buttons/BackwardButton.vue';
</script>

<template>
  <div id="activities-page">
    <!-- Wrapper for the backward navigation button -->
    <backward-button-wrapper>
      <!-- Button to navigate back to the "What You Can Do" page -->
      <BackwardButton buttonText="What You Can Do" to="/what-you-can-do" />
    </backward-button-wrapper>

    <!-- Page title section -->
    <div id="page-title">
      <h1 class="page-title">Donate to<br />Centro MiLA</h1>
    </div>

    <!-- Description section -->
    <div id="page-section">
      <h3 id="section-title">Your support can make a difference</h3>
      <div id="section-description">
        You can contribute to the realisation of our activities with a <br> donation, thus supporting women in their pathways out of violence.
      </div>
    </div>

    <!-- Container for donation cards -->
    <div id="cards-container">
      <div id="page-cards">
        <!-- Bank transfer donation card -->
        <div class="DonateCard">
          <h3 class="donateTitle">BANK TRANSFER</h3>
          <p class="donateIBAN">IBAN</p>
          <p class="donateText">IT89 I030 6912 7650 0000 0034 400</p>
          <p class="donateHEADING">Heading</p>
          <p class="donateText">Centro MiLA</p>
          <div class="iconDonate">
            <!-- Icon for bank transfer -->
            <Icon id="bank-icon" name="BankIcon" size=3vw />
          </div>
        </div>

        <!-- 5x1000 donation card -->
        <div class="DonateCard">
          <h3 class="donateTitle">DONATE 5X1000</h3>
          <p class="donateSubtitle">Codice Fiscale</p>
          <p class="donateText">94205400193</p>
          <p class="donateGreyText">Write this code in the box for voluntary work and non-profit organisations in your tax return.</p>
          <div class="iconDonate">
            <!-- Icon for 5x1000 donation -->
            <Icon id="hand-heart-icon" name="HandHeartIcon" size=3vw />
          </div>
        </div>
      </div>
    </div>

    <!-- Quote section -->
    <div id="quote-section">
      <div id="quote-container">
        <div id="quote-content">
          <div class="quote-title">
            <h2>Your Impact</h2>
          </div>
          <!-- Text describing the impact of donations -->
          <div id="quote-text">
            By supporting our projects you guarantee many women a welcoming reception, individual psychological support, legal counselling and support for autonomy, job orientation, professional retraining and support in accessing safe housing services.
          </div>
        </div>
      </div>
    </div>

    <!-- Icon and text at the bottom of the page -->
    <div class="heart-container">
      <!-- Heart icon -->
      <Icon id="heart-icon" name="HeartIcon" size=3vw />
    </div>
    <div class="heart-text">
      <h4>All this is possible thanks to all the people who <br> believe in and fight for a fairer and more just world. </h4>
    </div>
  </div>
</template>

<style scoped>
/* Style for the quote title */
.quote-title {
  margin-bottom: 24px;
}

/* Styles for donation card titles and text */
.donateTitle {
  margin: 50px 64px;
  font-size: 40px;
  font-weight: 600;
  line-height: unset;
}
.donateSubtitle, .donateIBAN, .donateHEADING {
  margin: 10px 64px;
  font-size: 20px;
  font-weight: var(--semibold);
}
.donateText {
  margin: 0px 64px;
  font-size: 20px;
}
.donateGreyText {
  margin: 0px 64px;
  margin-top: 32px;
  font-size: 20px;
  color: #76737A;
  width: 60%;
}

/* Layout for the activities page */
#activities-page {
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* Style for the page title section */
#page-title {
  background-image: url('/assets/images/cover-donate.png');
  background-size: cover;
  width: 100%;
  height: calc(100vw / 2);
}

/* Style for the description section */
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

/* Style for the cards container */
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

/* Style for individual donation cards */
.DonateCard {
  border-radius: 24px;
  border: 2px solid var(--purple);
  width: 600px;
  height: 380px;
  line-height: 29px!important;
}
.iconDonate {
  display: flex;
  justify-content: flex-end;
  margin-right: 40px;
}

/* Style for icons used in donation cards */
#hand-heart-icon, #bank-icon, #heart-icon {
  color: var(--purple);
}
#hand-heart-icon {
  position: relative;
  bottom: 32px;
}
#bank-icon {
  position: relative;
  top: -3px;
}

/* Style for the heart container and text at the bottom */
.heart-container {
  display: flex;
  margin: auto;
}
.heart-text {
  display: flex;
  margin: auto;
  text-align: center;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 300px;
  color: var(--purple);
}

/* Style for the quote section */
#quote-section {
  margin-top: 200px;
  margin-bottom: 200px;
  background-image: url('/assets/images/donate.jpeg');
  background-size: cover;
  width: 100%;
  height: calc(100vw / 2);
  color: var(--black);
}

/* Style for the quote container */
#quote-container {
  display: flex;
  flex-direction: row;
  align-items: start;
  margin: 5vw 10.42vw 7.34vw 8.7vw;
  color: white;
  width: 30vw;
}

/* Style for the quote content */
#quote-content {
  margin: 15vw 0 0 0;
}

/* Style for the quote text */
#quote-text {
  width: 700px;
  font-family: var(--font-montserrat);
  font-weight: var(--regular);
  font-size: var(--h4);
}

/* Media queries for responsive design */
@media (min-width: 951px) and (max-width: 1500px) {
  /* Adjust DonateCard size for medium screens */
  .DonateCard {
    width: 400px;
    height: 450px;
  }
  
  /* Adjust quote section for medium screens */
  #quote-section {
    margin-bottom: 110px;
    margin-top: 110px;
    height: 110vw;
  }
  
  /* Adjust icon sizes for medium screens */
  #hand-heart-icon, #bank-icon, #heart-icon {
    width: 50px;
    height: 50px;
  }
  
  #quote-container {
    margin-top: 40vw;
    padding: 15px;
    width: 80%;
    height: 30vh;
  }
  
  #quote-text {
    font-size: 2.8vw;
    line-height: 3vw;
    margin: 30px;
  }
}

@media (max-width: 950px) {
  /* Adjust DonateCard layout for small screens */
  #page-cards {
    flex-direction: column;
    gap: 50px;
  }

  /* Adjust icon sizes for small screens */
  #hand-heart-icon, #bank-icon, #heart-icon {
    width: 30px;
    height: 30px;
  }
  
  .heart-text h4 {
    font-size: 15px;
  }

  .heart-text {
    margin-bottom: 110px;
  }

  .DonateCard {
    width: 300px;
    height: 300px;
  }
  
  .quote-title {
    margin-bottom: 24px;
  }

  .donateTitle, .donateSubtitle, .donateIBAN, .donateHEADING, .donateText, .donateGreyText {
    margin: 20px
  }
}
</style>

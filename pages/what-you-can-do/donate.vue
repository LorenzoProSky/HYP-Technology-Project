<script lang="ts" setup>
// Import necessary components
import DiscoverCard from '~/components/cards/DiscoverCard.vue';
</script>

<!-- Template for the activities page -->
<template>
  <div id="activities-page">
    <!-- Cover section with image and title -->
    <div id="page-title">
      <h1 class="page-title">Donate to<br />Centro MiLA</h1>
    </div>

    <!-- Section content -->
    <div id="page-section">
      <h3 id="section-title">Your support can make a difference</h3>
      <div id="section-description">
        You can contribute to the realisation of our activities with a <br> donation, thus supporting women in their pathways out of violence.
      </div>
    </div>

    <!-- Cards for discovering services and projects -->
    <div id="cards-container">
      <div id="page-cards">
       
        <div class="DonateCard">
          
          <h3 class="donateTitle">BANK TRANSFER</h3>
          <p class="donateIBAN">IBAN</p>
          <p class="donateText">IT89 I030 6912 7650 0000 0034 400</p>
          <p class="donateHEADING">Heading</p>
          <p class="donateText">Centro MiLA</p>
          <div class="iconDonate">
            <Icon id="bank-icon" name="BankIcon" size=3vw />
          </div>

        
        </div>

        <div class="DonateCard">
          <h3 class="donateTitle">DONATE 5X1000</h3>
          <p class="donateSubtitle">Codice Fiscale</p>
          <p class="donateText">94205400193</p>
          <p class="donateGreyText">Write this code in the box for voluntary work and non-profit organisations in your tax return.</p>
          <div class="iconDonate">
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

          <div id="quote-text">
            By supporting our projects you guarantee many women a welcoming reception, individual psychological support, legal counselling and support for autonomy, job orientation, professional retraining and support in accessing safe housing services.
          </div>
        </div>
      </div>
    </div>

    <div class="heart-container"> 
      <Icon id="heart-icon" name="HeartIcon" size=3vw />
      
    </div>
    <div class="heart-text">
      <h4>All this is possible thanks to all the people who <br> believe in and fight for a fairer and more just world. </h4>
    </div>



  </div>
</template>

<!-- Scoped styles for the activities page -->
<style scoped>
.quote-title {
  margin-bottom: 24px;
}
.donateTitle {
  margin: 50px 64px;
  font-size: 40px;
  font-weight: 600;
  line-height: unset;
}

.donateSubtitle {
  margin: 10px 64px;
  font-size: 20px;
  font-weight: var(--semibold);
}

.donateIBAN {
  margin: 10px 64px;
  font-size: 20px;
  font-weight: var(--semibold);
}

.donateHEADING {
  margin: 24px 64px 8px 64px;
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
#activities-page {
  width: 100%;
  display: flex;
  flex-direction: column;
}

#page-title {
  background-image: url('/assets/images/our-activities-index-cover.png');
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

#hand-heart-icon, #bank-icon, #heart-icon{
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


@media (max-width: 1500px) {
  #page-cards {
    flex-direction: column;
    gap: 80px;
  }
}

#quote-section {
  margin-top: 200px;
  margin-bottom: 200px;
  background-image: url('/assets/images/donate.jpeg');
  background-size: cover;
  width: 100%;
  height: calc(100vw / 2);
  color: var(--black);
}



#quote-container {
  display: flex;
  flex-direction: row;
  align-items: start;
  margin: 25vw 10.42vw 7.34vw 8.7vw;
  color: white;
  width: 30vw;
}

#quote-icon {
  margin-top: -1.8vw;
  width: 100%;
  color: var(--purple);
}

#quote-content {
  margin: 1.563vw 0 0 0;
  display: flex;
  flex-direction: column;
}

#quote-text {
  width: 700px;
  font-family: var(--font-montserrat);
  font-weight: var(--regular);
  font-size: var(--h4);
}

#quote-author {
  margin-top: 2.1vw;
  font-family: var(--font-montserrat);
  font-weight: var(--medium);
  font-size: var(--body3);
  font-style: italic;
}


@media (min-width: 1050px) and (max-width: 1500px) {
  #quote-section {
    margin-top: 165px;
    margin-bottom: 172.5px;
  }
}

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

/* media 1500 */

@media (min-width: 1050px) and (max-width: 1500px) {
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

#quote-section {
  margin-bottom: 110px;
  margin-top: 110px; 
  height: 100vw;
}

#hand-heart-icon{
  width: 50px;
  height: 50px;
  bottom: 10px;
}

#heart-icon {
  width: 50px;
  height: 50px;
}
.quote-title h2 {
  margin-left: 20px;
}
.heart-text {
  margin-bottom: 110px;
}

#bank-icon{
  width: 50px;
  height: 50px;
  top: 20px;
}


#quote-container {
  margin-top: 50vw;
  padding: 15px;
  width: 80%;
  height: 30vh;
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

#hand-heart-icon{
  width: 30px;
  height: 30px;
  bottom: 10px;
}

#heart-icon {
  width: 30px;
  height: 30px;
}

.heart-text h4 {
  font-size: 15px;
}

.heart-text {
  margin-bottom: 110px;
}

#bank-icon{
  width: 30px;
  height: 30px;
  top: -30px;
}




.DonateCard {
    width: 300px;
    height: 300px;
}

.quote-title {
  margin-bottom: 24px;
}
.donateTitle {
  margin: 20px;
  font-size: 20px;
  font-weight: 600;
  line-height: unset;
}

.donateSubtitle {
  margin: 20px;
  font-size: 15px;
}

.donateIBAN {
  margin: 20px;
  font-size: 15px;
  font-weight: var(--semibold);
}

.donateHEADING {
  margin: 20px;
  font-size: 15px;
}

.donateText {
  margin: 20px;
  font-size: 15px;
}

.donateGreyText {
  margin: 20px;
  font-size: 15px;
  color: #76737A;
  width: 80%;
}

  #quote-section {
  margin-bottom: 110px;
  margin-top: 110px; 
  height: 110vw;
  }

  #quote-container {
    margin-top: 100px;
    padding: 10px;
    width: 80%;
    height: 25vh;
  }

  #quote-text {
    font-size: 3.9vw;
    line-height: 4vw;
    margin: 0px;
    width: 100%;
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
<script lang="ts" setup>
import BackwardButton from '~/components/buttons/BackwardButton.vue';
</script>

<template>
  <div id="volunteering-cover">
    <backward-button-wrapper>
      <BackwardButton buttonText="What You Can Do" to="/what-you-can-do" />
    </backward-button-wrapper>
    <h1 class="page-title">Become a <br> volunteer at MiLA</h1>
  </div>
  
  <div id="volunteering-intro">
    <h3>Volunteer With Us!</h3>
    <p class="dynamic-p">Contribute to the fight against violence against women
      and for rights by becoming a volunteer in our centre.</p>
  </div>

  <div id="volunteer-quote" >
    <div id="quote-container">
      <Icon name="QuoteIcon" size="4.2vw" style="margin-top: -30px; color: var(--purple);" />
      <div>
        <p>Volunteering at Centro MiLA has been one of the most rewarding experiences of my life. The love, strength, and resilience I see every day 
          inspire me to be a better person. Centro MiLA is truly a place where we all grow together.</p>
        <p style="font-style: italic; font-size: var(--body3);">Elena, MiLA volunteer</p>
      </div>
    </div>
  </div>

  <div id="volunteer-role">
    <img src="/assets/images/fiori-e-cuori.svg" alt="" style="position: absolute; transform: scaleX(-1); opacity: 0.25;">
    <img src="/assets/images/volunteer-pic2.jpeg" alt="volunteer-pic2" id="volunteer-pic2">
    <div>
      <h4>Who We Are Looking For</h4>
      <p>We seek compassionate, reliable individuals eager to support women and children affected by domestic violence. Our ideal volunteer is empathetic, 
        maintains confidentiality, and is dedicated to making a positive impact. We welcome diverse backgrounds and experiences, believing that varied perspectives 
        strengthen our community. Whether you have previous social services experience or simply a heartfelt desire to help, your commitment and willingness to 
        learn are what matter most. Join us in making a difference.</p>
      <h4 style="margin-top: 108px;">Your Role</h4>
      <p>Volunteers at Centro MiLA provide essential support by offering emotional assistance, helping with administrative tasks, and organizing support groups 
        and workshops. You will also participate in community outreach to raise awareness about domestic violence and support fundraising events. Collaboration 
        with our professional staff ensures a safe and welcoming environment for all women. Your contributions, no matter how small, will help us create a nurturing 
        and empowering space for those who need it most.</p>
    </div>
  </div>

  <div id="volunteer-training" >
    <div>
      <h3>Training Courses</h3>
      <p>Centro MiLA offers comprehensive training to ensure volunteers are well-prepared and confident in their roles. Training covers understanding domestic violence, 
        effective communication, crisis intervention, and confidentiality protocols. These sessions equip you with the knowledge and tools necessary to provide compassionate 
        and effective support. Completing this training prepares you to make a meaningful impact and contribute to the healing and empowerment of those we serve. Join us to 
        learn, grow, and make a difference together.</p>
        <p class="boldText" style="margin-top: 64px;" >Seminar 1 - On site</p>
        <p>Sat 01 June <br>
          18 pm - 20 pm</p>
        <p class="boldText" style="margin-top: 48px;" >Seminar 2 - Online</p>
        <p>Wed 05 June - Wed 15 June <br>
          18 pm - 20 pm</p>
        <p class="boldText" style="margin-top: 48px;" >Seminar 3 - On site</p>
        <p>Sat 22 June - Sat 29 June <br>
          18 pm - 20 pm</p>
    </div>
    <img src="/assets/images/volunteer-pic1.jpeg" alt="volunteer-pic1" id="volunteer-pic1">
  </div>

  <div id="volunteering-form">
    <h4>Submit Your Application!</h4>
    <p class="dynamic-p">By submitting your application you will be contacted by our staff and invited to the first collective appointment of the training course. 
      For any doubts contact: centromila@gmail.com</p>
    <!--Cambiare action-->  
    <form action="/" style="width: 800px; margin-top: 92px;">
      <input type="text" name="name" placeholder="Name and Surname" required>
      <input type="text" name="age" placeholder="Your age" required>
      <input type="text" name="e-mail" placeholder="E-mail address" required>
      <input type="text" name="phone" placeholder="Phone number" required>
      <textarea name="comment" placeholder="Why would you want to become a volunteer?" style="height: 282px;" required></textarea>
      <button type="submit" 
      style="width: 163px; height: 64px; background-color: var(--purple); border: 0; border-radius: 12px; font-size: var(--body4); color: white;
       font-family: 'Montserrat', serif; font-weight: var(--regular); margin-top: 92px"> Send</button>
    </form>
  </div>

</template>


<style scoped>
#volunteering-cover{
  background-image: url('/assets/images/cover-volunteering.png');
  background-size: cover;
  width: 100%;
  height: calc(100vw / 2);
}

/**Introductive section */
#volunteering-intro{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 160px 0;
  text-align: center;
}
#volunteering-intro p{
  width: 41%;
  text-align: center;
  padding: 20px;
}
#volunteering-intro a{
  text-decoration: underline;
}

#volunteer-quote{
  background-color: var(--lilac);
  background-image: url(/assets/images/volunteer-quote.svg);
  background-repeat: no-repeat;
  background-position: right;
  min-height: calc(100vw*678/1920);
}
#quote-container{
  display: flex;
  flex-direction: row;
  padding: 145px 0 139px 170px;
}
#quote-container div{
  width: 30.5vw;
}

#volunteer-role{
  margin: 300px 0 370px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}
#volunteer-pic2{
  width: 69.8vw;
  height: auto;
  margin-left: -20vw;
}
#volunteer-role div{
  margin-left: 7.9vw;
  width: 32.2vw;
  font-size: var(--body3);
  line-height: var(--l-height3);
}

#volunteer-training{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  overflow-x: hidden
}
#volunteer-training div{
  margin-right: 7.9vw;
  width: 30vw;
  font-size: var(--body3);
  line-height: var(--l-height3);
}
#volunteer-pic1{
  width: 69.8vw;
  height: auto;
  margin-right: -12vw;
}

#volunteering-form{
  margin: 300px 0 511px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
#volunteering-form p{
  max-width: 38.2vw;
}

@media(max-width:900px){
  .dynamic-p{
    width: 80vw !important;
    max-width: 80vw !important;
  }

  #quote-container{
    padding-left: 20px;
  }
  #quote-container div{
    width: 80vw;
  }

  #volunteer-role{
    flex-direction: column;
  }
  #volunteer-pic1{
    width: 100vw;
    margin: 0;
  }
  #volunteer-role div{
    width: 80vw;
    margin: 0;
    font-size: var(--body1);
    line-height: var(--l-height1);
  }
  #volunteer-training{
    flex-direction: column;
  }
  #volunteer-pic2{
    width: 100vw;
    margin: 0;
  }
  #volunteer-training div{
    width: 80vw;
    margin: 0;
    font-size: var(--body1);
    line-height: var(--l-height1);
  }

  form{
    width: 90vw !important;
  }
}
</style>
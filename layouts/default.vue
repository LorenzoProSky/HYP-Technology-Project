<script lang="ts">
import { defineComponent } from 'vue';
import MainButton from '~/components/buttons/MainButton.vue';
import SecondaryButton from '~/components/buttons/SecondaryButton.vue';
import ExitButton from '~/components/buttons/ExitButton.vue';

export default defineComponent({
  components: {
    MainButton,
    SecondaryButton,
    ExitButton
  },
});
</script>

<template>
  <header>
    <NuxtLink to="/" id="logo">
      <h4>Centro MiLA</h4>
    </NuxtLink>
    <nav>
      <div class="menu-container">
        <NuxtLink to="/activities/activities">About Us</NuxtLink>
        <ul class="dropdown-menu">
          <li>
            <NuxtLink to="/activities/projects">Our Location</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/activities/services">Our People</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="menu-container">
        <NuxtLink to="/activities/activities">Our Activities</NuxtLink>
        <ul class="dropdown-menu">
          <li>
            <NuxtLink to="/activities/projects">Projects</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/activities/services">Services</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="menu-container">
        <NuxtLink to="/activities/activities">What You Can Do</NuxtLink>
        <ul class="dropdown-menu">
          <li>
            <NuxtLink to="/activities/projects">Volunteering</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/activities/services">Donate</NuxtLink>
          </li>
        </ul>
      </div>

      <SecondaryButton buttonText="Contact Us" buttonLength="short" to="/contact" />

      <ExitButton />
    </nav>
  </header>

  <main>
    <slot />
  </main>

  <footer>
    <div id="info">
      <h4>Centro MiLA</h4>
      <p>Since 2004, the point of reference in Milan for all women in difficulty.</p>
      <MainButton buttonText="Donate" buttonLength="short" to="/activities/services" />
    </div>

    <nav>
      <div style="border-width: 0px;">
        <NuxtLink to="/activities/activities" class="boldText">About Us</NuxtLink>
        <NuxtLink to="/activities/activities">Our Location</NuxtLink>
        <NuxtLink to="/activities/activities">Our People</NuxtLink>
      </div>
      <div>
        <NuxtLink to="/activities/activities" class="boldText">Our Activities</NuxtLink>
        <NuxtLink to="/activities/activities">Our Services</NuxtLink>
        <NuxtLink to="/activities/activities">Our Projects</NuxtLink>
      </div>
      <div>
        <NuxtLink to="/activities/activities" class="boldText">What You Can Do</NuxtLink>
        <NuxtLink to="/activities/activities">Volunteering</NuxtLink>
        <NuxtLink to="/activities/activities">Donate</NuxtLink>
      </div>
    </nav>

    <div id="contacts">
      <div class="boldText" style="font-size: var(--body2)">Contact Us</div>
      <div>
        <p class="boldText">Phone</p>
        <p>Call us everyday, at every hour</p>
        <p class="boldText" style="font-size: var(--body2); color: var(--purple);">0521.248886</p>
      </div>
      <div>
        <p class="boldText">Location</p>
        <p>Via Valtellina 20, Milan 20159</p>
        <hr style="width: 100%; border-top: 2px dashed var(--light-grey); border-bottom: 0px;">
        <p>Via Candiani 72, Milan 20158</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* HEADER **************************************************************************/
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: var(--header-height);
}

#logo {
  text-decoration: none;
  margin-left: 100px;
}

/* Navigation Bar */
nav {
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  gap: 48px;
  margin-right: 80px;
  font-size: var(--body2);
  line-height: var(--l-height2);
}

nav a {
  color: var(--black);
}

main {
  margin-top: var(--header-height);
}

/* DROPDOWN MENU ********************************************************/
/*modificare*/
.menu-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dropdown-menu {
  display: none;
  position: absolute;
  margin-top: var(--l-height2);
  padding: 0%;
  background-color: var(--white);
  width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Dropdown Menu Items */
.dropdown-menu li {
  padding: 12px 16px;
  display: block;
}

.dropdown-menu li:hover {
  background-color: var(--dirty-white);
}

/* Show the dropdown menu on hover */
.menu-container:hover .dropdown-menu {
  display: block;
}



/* FOOTER ************************************************************/
footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

footer #info {
  display: flex;
  flex-direction: column;
  align-content: space-between;
  align-items: start;
  gap: 20px;
  margin-left: 110px;
  max-width: 15%;
}

footer #info button {
  margin-top: 50px;
}

footer nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0px;
}

footer nav div {
  display: flex;
  flex-direction: column;
  align-content: space-between;
  align-items: start;
  padding: 20px 50px;
  border-width: 0 0 0 2px;
  border-style: dashed;
  border-color: var(--light-grey);
}

footer #contacts {
  display: flex;
  flex-direction: column;
  align-items: start;
  align-content: space-between;
  gap: 20px;
  font-size: var(--body1);
  margin-right: 200px;
}



.boldText {
  font-weight: 550;
}

p {
  margin: 0px;
}
</style>
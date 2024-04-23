<template>
  <div>
    <header>
      <h1>Domestic Violence Support Center</h1>
      <nav>
        <ul>
          <NuxtLink to="/">Homepage</NuxtLink>
          <NuxtLink to="/about">About Us</NuxtLink>
          <NuxtLink to="/people">People</NuxtLink>
          <li>
            <NuxtLink to="/activities/activities">Activities</NuxtLink>
            <ul class="dropdown-menu">
              <li>
                <NuxtLink to="/activities/projects">Projects</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/activities/services">Services</NuxtLink>
              </li>
            </ul>
          </li>
          <li>
            <NuxtLink to="/groups">Groups</NuxtLink>
            <ul class="dropdown-menu">
              <li>
                <NuxtLink to="/groups/persons">All Persons</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/groups/projects">All Projects</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/groups/services">All Services</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/groups/activities">All Activities</NuxtLink>
              </li>
            </ul>
          </li>
          <NuxtLink to="/contact">Contact Us</NuxtLink>
        </ul>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <p>&copy; 2024 Domestic Violence Support Center. All rights reserved.</p>
    </footer>
  </div>
</template>
 
<script>
export default {
  // Any layout-specific JavaScript goes here
}
</script>
 
<style scoped>
/* Style the dropdown menu */
.dropdown-menu {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Show the dropdown menu on hover */
nav ul li:hover .dropdown-menu {
  display: block;
}

/* Style the dropdown menu items */
.dropdown-menu li {
  padding: 12px 16px;
  display: block;
}

.dropdown-menu li:hover {
  background-color: #f1f1f1;
}</style>
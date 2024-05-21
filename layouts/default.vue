<template >
  <header>
    <NuxtLink to="/index.vue"><h1>NAME</h1></NuxtLink>
    <nav>
      <NuxtLink to="/about">About Us</NuxtLink>
      <NuxtLink to="/people">People</NuxtLink>

      <div class="menu-container" id="activities-container">
        <NuxtLink to="/activities/activities">Activities</NuxtLink>
        <ul class="dropdown-menu">
          <li>
            <NuxtLink to="/activities/projects">Projects</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/activities/services">Services</NuxtLink>
          </li>
        </ul>   
      </div> 

      <div class="menu-container" id="groups-container">
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
      </div>  

      <NuxtLink to="/contact">Contact Us</NuxtLink>      
    </nav>
  </header>

  <main>
    <slot />
  </main>

  <footer>
    <div class="greyColor">The Centre</div>
    <div class="greyColor">
      <NuxtLink to="/about">Homepage</NuxtLink>
      <NuxtLink to="/about">About Us</NuxtLink>
      <NuxtLink to="/about">Our Activities</NuxtLink>
      <NuxtLink to="/about">What You Can Do</NuxtLink>
      <NuxtLink to="/about">Contact Us</NuxtLink>
    </div>
    <p>&copy; 2024 Domestic Violence Support Center. All rights reserved.</p>
  </footer>
</template>
 
<script>
export default {
  // Any layout-specific JavaScript goes here
}
</script>
 


<style scoped>
/* HEADER *************/
header{
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: var(--header-height);
}

header h1{ /* da cambiare con il logo */
  margin: 0;
  padding-left: 5px
}

nav{ /**Il nav è da cambiare */
  display: flex;
  flex-direction: row;
  justify-content: right;
  gap: 20px;
  padding-right: 20px;
}

main{
  margin-top: var(--header-height);
}



/* DROPDOWN MENU ***********/
.menu-container{
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Style the dropdown menu */
.dropdown-menu {
  display: none;
  position: absolute;
  padding: 0%;
  margin-top: 20px;
  background-color: #f9f9f9;
  width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Style the dropdown menu items */
.dropdown-menu li {
  padding: 12px 16px;
  display: block;
}

.dropdown-menu li:hover {
  background-color: #f1f1f1;
}

/* Show the dropdown menu on hover */
#activities-container:hover .dropdown-menu,
#groups-container:hover .dropdown-menu {
  display: block;
}


/* FOOTER *************/
footer{
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items:baseline;
}

footer div{
  padding-left: 10%;
  display: flex;
  flex-direction: row;
  align-content: baseline;
  gap: 20px;
  margin-bottom: 10px;
}

footer p{
  width: 100%;
  text-align: center;
}

.greyColor, a{
  color: var(--grey);
}


</style>
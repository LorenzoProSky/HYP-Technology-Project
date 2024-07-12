

<script lang="ts" setup>

const props = defineProps({
    linkNames: {
        type: Array,
        required: true,
    },
    to: {
        type: Array,
        required: true,
    },

});

const emits = defineEmits(['focusedLink', 'blurLink']);

/* Turn the to array into an array of string for type safety (Typescript) */
const typeSafeTo = props.to as string[];

/* Maintain a data structure to verify the focus state of the links to notify the parent when the dropdown menu can be closed */
const focusStateLinks = ref([]) as Ref<boolean[]>;
for(let i = 0; i < props.linkNames.length; i++){
    focusStateLinks.value.push(false);
}

/* Emit the blurLink event only when all the links are not focused */
function focusLink(index: number){
    focusStateLinks.value[index] = true;
    emits('focusedLink');
}
function blurLink(index: number){
    focusStateLinks.value[index] = false;
    setTimeout(() => {
        if(focusStateLinks.value.every(element => element === false)){
            emits('blurLink');
        }
    }, 100);
}


</script>


<template>
    <ul class="dropdown-menu">
        <li v-for="(linkName, index) in linkNames" :key=index :aria-posinset="index + 1" :aria-setsize="linkNames.length">
            <NuxtLink :to="typeSafeTo[index]"
                @focus="focusLink(index)"
                @blur="blurLink(index)">
                 {{ linkName }} 
            </NuxtLink>
        </li>
    </ul>
</template>


<style scoped>

.dropdown-menu {
  position: absolute;
  top: 20px;  
  background-color: var(--white);
  width: 187px;
  border: 1px, solid, var(--lilac);
  border-radius: var(--border-radius-card);
  z-index: 1;
  padding: 0;
  margin: 32  px 0;
  list-style: none;
}

a {
    color: black;
}

a:hover,
a:focus {
  color: var(--purple);
}

/* Dropdown Menu Items */
li {
  padding: 16px 0 24px 0;
}
.dropdown-menu li:first-child {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
.dropdown-menu li:last-child {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

/* Background color for the single links in the dropdown menus
 * both in case of hovering with the mouse and in case of focusing on the link wrapped inside 
 * the li element of the list.
*/
.dropdown-menu li:hover,
.dropdown-menu li:focus-within {
  background-color: var(--lilac);
}

/* Reponsive design */
@media screen and (max-width: 1200px) {
    .dropdown-menu {
        width: 170px;
    }
}

@media screen and (max-width: 700px) {
    .dropdown-menu {
        top: 30px;
    }
}








</style>
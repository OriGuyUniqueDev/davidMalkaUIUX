<script setup>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
import Developer from './components/Developer.vue';
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import ProjectNav from './components/ProjectNav.vue'
const route = useRoute()
const routeName = ref(route)
let showNav = ref(false)
watch(showNav,() => {
  (route.name !== 'project') ? showNav.value = true : showNav.value = false
})

</script>

<template>
  <Nav v-if="showNav"></Nav>
  <ProjectNav v-else></ProjectNav>
  <router-view v-slot="{ Component, route }  ">
		<transition :enter-active-class="route.meta.enterClass" :leave-active-class="route.meta.leaveClass">
			<component :is="Component" ref="showNav"  />
		</transition>
	</router-view>
  <Footer></Footer>
  <Developer></Developer>
</template>

<style scoped>

</style>

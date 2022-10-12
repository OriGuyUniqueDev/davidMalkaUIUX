<script setup>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
import Developer from './components/Developer.vue';

</script>

<template>
  <Nav></Nav>
  <router-view v-slot="{ Component, route } ">
		<transition :enter-active-class="route.meta.enterClass" :leave-active-class="route.meta.leaveClass">
			<component :is="Component"  />
		</transition>
	</router-view>
  <Footer></Footer>
  <Developer></Developer>
</template>

<style scoped>

</style>

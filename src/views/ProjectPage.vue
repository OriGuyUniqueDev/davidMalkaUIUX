<template>
	<div >
		<ProjectHero :bgColor1="data.bgColor" :topImage="data.topImage"></ProjectHero>
		
	</div>
</template>

<script setup>
import ProjectHero from '../components/ProjectHero.vue'
	let props = defineProps(['id','data'])
</script>

<style scoped>
	h1 {
		font-size: 5rem;
		color: white;
	}
</style>

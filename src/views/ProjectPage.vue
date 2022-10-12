<template>
	<div :class="[data.bgColor]">
		<ProjectHero :bgColor1="data.bgColor" :topImage="data.topImage"></ProjectHero>
		
	</div>
</template>

<script setup>
import ProjectHero from '../components/ProjectHero.vue'
	let props = defineProps(['id','data'])
	console.log(props.data);
	console.log(props.data.bgColor);
</script>

<style scoped>
	h1 {
		font-size: 5rem;
		color: white;
	}
</style>

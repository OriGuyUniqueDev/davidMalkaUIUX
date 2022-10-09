<template>
	<div class="mainWrapper flex flex-col mx-auto ">
		<img class="hover:scale-105 "  :src="url" :alt="alt" />
		<h1>{{ title }}</h1>
		<h2>{{ role }}</h2>
		<button type="button">View project</button>
	</div>
</template>

<script setup>
	const props = defineProps(["title", "role", "url", "alt"]);
</script>

<style scoped>
	img {
		transition: all 0.375s linear;
	}
</style>

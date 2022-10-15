<template>
	<div class="mainWrapper">
		<h2 class="text-3xl mt-[2rem]">{{ challengeData.title }}</h2>

		<p class="text-[1.6rem] my-[0.9rem]">{{ challengeData.paraData.data1 }}</p>
		<img class="w-[5rem] my-8" src="/icons/arrowDown.svg" alt="" />
		<p class="text-[1.6rem] mb-[6.7rem] my-[0.9rem]">{{ challengeData.paraData.data2 }}</p>
	</div>
</template>

<script setup>
	let props = defineProps(["challengeData"]);
</script>

<style scoped>
	div {
		color: whitesmoke;
		font-family: Outfit;
		font-weight: 700;
	}
	p {
		font-weight: 300;
	}
</style>

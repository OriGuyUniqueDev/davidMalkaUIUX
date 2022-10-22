<template>
	<div class="mainWrapper w-full">
		<h2 class="text-3xl mt-[4.8rem] mb-[1rem]">{{ challengeData.title }}</h2>

		<div class=" xl:flex gap-12 justify-around w-full ">
			<p class="text-[1.6rem] my-[0.9rem] xl:w-[100rem]">{{ challengeData.paraData.data1 }}</p>
			<img class="w-[5rem] my-16 md:mx-auto xl:-rotate-90 relative  xl:my-0 xl:self-start" src="/icons/arrowDown.svg" alt="" />
			<p class="text-[1.6rem] mb-[6.7rem] my-[0.9rem] xl:w-[100rem]">{{ challengeData.paraData.data2 }}</p>
		</div>
		<hr class="h-[1px] bg-dividers">
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

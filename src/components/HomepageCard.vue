<template>
	<div   ref="elementWidth"  class=" mainWrapper md:w-[80rem] md:mx-auto   flex flex-col mx-4 mb-8 lg:flex-row  lg:h-[40rem] lg:w-[96.3rem] lg:mb-[8.8rem] lg:gap-[14.7rem]">
		<RouterLink :to="{ name: 'project' }">
			<img  :src="url" :alt="alt" class="hover:scale-105
			md:w-[80rem] md:h-[40rem]
			lg:w-[56.4rem] 
			2xl:w-[69rem]
			"/>
		</RouterLink>
		<div class="textButtonWrapper flex justify-between lg:flex-col lg:justify-evenly my-4 ">
			<div>
				<h1 class="text-[900]
				text-[4.8rem] leading-[6.398rem]"
				>{{ title }}</h1>
				<h2 class="text-greyText
				text-[3.2rem] leading-[4.032rem]
				">{{ role }}</h2>
			</div>
			<RouterLink :to="{ name: 'project'}">
				<button v-if="width >= 550" type="button" class="
				self-center
				w-[14.6rem] h-[4.5rem]
				lg:self-start
					">View project</button>
			</RouterLink>
				
		</div>
	</div>
</template>

<script setup>
	import { ref } from "vue";
	import { useElementSize } from "@vueuse/core";
	import { useMotion } from "@vueuse/motion";
	const props = defineProps(["title", "role", "url", "alt"]);
	let elementWidth = ref(null);
	const { width } = useElementSize(elementWidth);
	const motionInstance = useMotion(elementWidth, {
		initial: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 1000
			},
		},
	});
</script>

<style scoped>
	img {
		transition: all 0.375s linear;
	}
	h1 {
		font-family: "Playfair Display", serif;
		
	}
	h2 {
		font-family: "Outfit", sans-serif;
	}
	button {
		background: linear-gradient(96.02deg, #ff1392 -1.37%, #7b3ce1 46.36%, #10a9ff 95.6%);
		border: 0;
		width: 14.6rem;
		height: 4.5rem;
		position: relative;
		border-radius: 999px;
		z-index: 6;
		transition: 0.3s all ease-out;
	}
	button::before {
		content: "View Project";
		font-family: "Outfit", sans-serif;
		padding-top: 2.3%;
		letter-spacing: 5%;
		line-height: 3.3rem;
		font-size: 1.6rem;
		display: block;
		position: absolute;
		top: 3px;
		left: 3px;
		width: calc(100% - (3px * 2));
		height: calc(100% - (3px * 2));
		background-color: #1b1b1b;
		border-radius: 999px;
		transition: 0.3s all ease-out;
	}
	button:hover::before {
		content: "View Project";
		font-family: "Outfit", sans-serif;
		padding-top: 2.3%;
		letter-spacing: 5%;
		line-height: 3.3rem;
		font-size: 1.6rem;
		display: block;
		position: absolute;
		top: 3px;
		left: 3px;
		width: calc(100% - (3px * 2));
		height: calc(100% - (3px * 2));
		background-color: #323232;
		border-radius: 999px;
		transition: 0.3s all ease-out;
	}
</style>

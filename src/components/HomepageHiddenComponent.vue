<template>
	<div ref="target" class="mainWrapper bg-white text-black shadow-hoverStyle h-[28.9rem]">
		<div class="text-center">
			<h1 class="">About me</h1>
			<button type="button" class="text-white text-2xl pt-1 w-[10rem] h-[4.5rem] mt-[3.4rem]"><RouterLink key="about" to="/about">Get know</RouterLink></button>
		</div>
	</div>
</template>

<script setup>
	import { useMotion } from "@vueuse/motion";
	import { ref } from "vue";
	const target = ref();
	const motionInstance = useMotion(target, {
		initial: {
			opacity: 0,
		
		},
		visible: {
			opacity: 1,
		
			transition: {
				duration: 800
			},
		},
	});
</script>

<style scoped>
	.mainWrapper {
		display: grid;
		place-content: center;
		box-shadow: 0rem 0rem 2rem #637b81;
		position: relative;
		
	}
	h1 {
		font-size: 4.8rem;

		font-family: "Playfair Display", serif;
	}
	button {
		background: linear-gradient(96.02deg, #ff1392 -1.37%, #7b3ce1 46.36%, #10a9ff 95.6%);
		border-radius: 1000px;
		font-family: "Outfit", sans-serif;
	}
</style>

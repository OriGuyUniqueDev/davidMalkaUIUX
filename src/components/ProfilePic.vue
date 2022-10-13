<template>
	<div ref="target" class="">
		<img class="
        w-[43.06rem] h-[38.6rem] left-[-70%] relative -top-20
        sm:w-[60rem] sm:h-[57.6rem] sm:left-0 
        md:w-[72.1rem] md:h-[69.2rem]
        " 
        src="@/assets/images/profilePic.png" alt="profile picture" />
	</div>
</template>

<script setup>
		import { useMotion } from "@vueuse/motion";
	import { ref } from "vue";
	const target = ref();
	const motionInstance = useMotion(target, {
		initial: {
			opacity: 0,
			x: 200,
		},
		enter: {
			opacity: 1,
			x:0,
			transition: {
				duration: 800
			},
		},
	});
</script>

<style lang="css" scoped>
	img {
		max-width: 80rem;
		max-height: 75rem;
		width: auto;
		height: auto;
		z-index: 0;
	
	}
</style>

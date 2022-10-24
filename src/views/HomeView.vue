<template>
	<div   >
		<div class="mainWrapper overflow-y-scroll h-[58.5rem] bg-hoverStyle flex justify-between px-[1.8rem] lg:px-[12rem] xl:px-[26.4rem]">
			<HeroText class="relative"></HeroText>
			<ProfilePic class="sm:absolute sm:right-3 md:relative"></ProfilePic>
		</div>
		<div class="text-white relative flex flex-col lg:px-[12rem] xl:px-[26.4rem] md:mx-auto pt-[10.5rem] w-full bg-black">
			<HomepageCard v-for="card in cardsData" :key="card.title" :hoverScale="card.hoverScale" :scale="card.scale" :alt="card.alt" :title="card.title" :bgCard="card.bg" :role="card.role" :url="card.url" ></HomepageCard>
		</div>
		<div class="relative"></div>
		<div ref="target"
		class="toAnimate relative ">
			<HomepageHiddenComponent ></HomepageHiddenComponent>
			<Footer></Footer>
			<!-- <Developer></Developer> -->
		</div>
	</div>
</template>

<script setup>
	import HeroText from "@/components/HeroText.vue";
	import ProfilePic from "@/components/ProfilePic.vue";
	import HomepageCard from "@/components/HomepageCard.vue";
	import HomepageHiddenComponent from "../components/HomepageHiddenComponent.vue";
	import Footer from "../components/Footer.vue";
	import Developer from "../components/Developer.vue";
	import { useMotion } from "@vueuse/motion";
	import { ref } from "vue";
	const target = ref();

	const cardsData = [
		{
			title: "Paamonim",
			role: "UI/UX Design",
			url: "/projectsImages/paamonim/paamonim.webp",
			alt: "Pa’amonim project pic",
			bg: "bg-purple",
			scale: "scale-125",
			hoverScale: " hover:scale-[1.35]",
		},
		{
			title: "Ram Aderet",
			role: "Product Design",
			url: "/projectsImages/ramAderet/ramAderet.png",
			alt: "Ram Aderet project pic",
			bg: "bg-lightBlue",
			scale: "scale-125",
			hoverScale: " hover:scale-[1.35]",
		},
		{
			title: "Patricia",
			role: "Product Design",
			url: "/projectsImages/patricia/patricia.webp",
			alt: "Patricia project pic",
			bg: "bg-red",
			scale: "scale-100",
			hoverScale: " hover:scale-[1.10]",
		},
		{
			title: "Abra Web & Mobile",
			role: "UI/UX Design",
			url: "/projectsImages/Abra/Abra.png",
			alt: "Abra Web & Mobile project pic",
			bg: "bg-yellow",
			scale: "scale-150",
			hoverScale: " hover:scale-[1.60]",
		},
	];
	// 	const {variant} = useMotion(target, {
	// 	visible: {
	// 		display:'block',
	// 		opacity: 1,
	// 		transition: {
	// 			duration: 2000
	// 		},
	// 	},
	// });
</script>

<style lang="css" scoped>
.toAnimate{
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	box-shadow: 0rem -1rem 1rem rgba(69, 69, 69, 0.195);
}
</style>

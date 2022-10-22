<template>
	<div class="">
		<div class="mainWrapper h-[58.5rem] bg-hoverStyle flex justify-between px-[1.8rem] lg:px-[12rem] xl:px-[26.4rem]">
			<HeroText class="relative"></HeroText>
			<ProfilePic class="sm:absolute sm:right-3 md:relative"></ProfilePic>
		</div>
		<div class="text-white flex flex-col lg:px-[12rem] xl:px-[26.4rem] md:mx-auto pt-[10.5rem] w-full bg-black">
			<HomepageCard v-for="card in cardsData" :key="card.title" :hoverScale="card.hoverScale" :scale="card.scale" :alt="card.alt" :title="card.title" :bgCard="card.bg" :role="card.role" :url="card.url"></HomepageCard>
		</div>
		<HomepageHiddenComponent></HomepageHiddenComponent>
	</div>
</template>

<script setup>
	import HeroText from "@/components/HeroText.vue";
	import ProfilePic from "@/components/ProfilePic.vue";
	import HomepageCard from "@/components/HomepageCard.vue";
	import HomepageHiddenComponent from "../components/HomepageHiddenComponent.vue";
	const cardsData = [
		{
			title: "Paamonim",
			role: "UI/UX Design",
			url: "/projectsImages/paamonim/paamonim.webp",
			alt: "Pa’amonim project pic",
			bg: "bg-purple",
			scale:'scale-125',
			hoverScale:' hover:scale-[1.35]'
		},
		{
			title: "Ram Aderet",
			role: "Product Design",
			url: "/projectsImages/ramAderet/ramAderet.png",
			alt: "Ram Aderet project pic",
			bg: "bg-lightBlue",
			scale:'scale-125',
			hoverScale:' hover:scale-[1.35]'
		},
		{
			title: "Patricia",
			role: "Product Design",
			url: "/projectsImages/patricia/patricia.webp",
			alt: "Patricia project pic",
			bg: "bg-red",
			scale:'scale-100',
			hoverScale:' hover:scale-[1.10]'
		},
		{
			title: "Abra Web & Mobile",
			role: "UI/UX Design",
			url: "/projectsImages/Abra/Abra.png",
			alt: "Abra Web & Mobile project pic",
			bg: "bg-yellow",
			scale:'scale-150',
			hoverScale:' hover:scale-[1.60]'
		},
	];
</script>

<style lang="css" scoped></style>

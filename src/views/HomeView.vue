<template>
	<div class="" >
		<div class="mainWrapper h-[58.5rem] bg-hoverStyle flex  justify-between  
		px-[1.8rem]  lg:px-[12rem] xl:px-[26.4rem] ">
			<HeroText class="relative" ></HeroText>
			<ProfilePic class="sm:absolute sm:right-3 md:relative "></ProfilePic>
		</div>
		<div class="text-white flex flex-col lg:px-[12rem] xl:px-[26.4rem] md:mx-auto pt-[10.5rem] w-full bg-black ">
			<HomepageCard v-for="card in cardsData" :key="card.title" :alt="card.alt" :title="card.title" :role="card.role" :url="card.url"></HomepageCard>
		</div>
		<HomepageHiddenComponent></HomepageHiddenComponent>
	</div>
</template>

<script setup>
	import HeroText from "@/components/HeroText.vue";
	import ProfilePic from "@/components/ProfilePic.vue";
	import HomepageCard from "@/components/HomepageCard.vue";
	import AbraWebMobile from "@/assets/images/Abra_Web_Mobile.png";
	import paamonim from "@/assets/images/paamonim.png";
	import patricia from "@/assets/images/patricia.png";
	import ramAderet from "@/assets/images/ramAderet.png";
	import HomepageHiddenComponent from "../components/HomepageHiddenComponent.vue";
	const cardsData = [
		{
			title: "Paamonim",
			role: "UI/UX Design",
			url: paamonim,
			alt: "Pa’amonim project pic",
		},
		{
			title: "Ram Aderet",
			role: "Product Design",
			url: ramAderet,
			alt: "Ram Aderet project pic",
		},
		{
			title: "Patricia",
			role: "Product Design",
			url: patricia,
			alt: "Patricia project pic",
		},
		{
			title: "Abra Web & Mobile",
			role: "UI/UX Design",
			url: AbraWebMobile,
			alt: "Abra Web & Mobile project pic",
		},
	];
</script>

<style lang="css" scoped></style>

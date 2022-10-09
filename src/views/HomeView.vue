<template>
	<div>
		<div class="mainWrapper h-[58.5rem]   bg-hoverStyle flex md:justify-around xl:justify-center xl:gap-80">
			<HeroText></HeroText>
			<ProfilePic></ProfilePic>
		</div>
	</div>
	<div class="text-white flex flex-col  pt-[12.8rem] w-full bg-black">
		<HomepageCard v-for="card in cardsData" :key="card.title" :alt="card.alt" :title="card.title" :role="card.role" :url="card.url"></HomepageCard>
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

	const cardsData = [
		{
			title: "Pa’amonim",
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

<style lang="css" scoped>

</style>

<template>
	<div>
		<div class="mainWrapper bg-hoverStyle flex  md:justify-around xl:justify-center xl:gap-80">
			<HeroText></HeroText>
			<ProfilePic></ProfilePic> 
		</div>
	</div>
	<div class="text-white flex flex-col ">
		<HomepageCard v-for="card in cardsData" :key="card.title" :title="card.title" :role="card.role" :url="card.url"></HomepageCard>
	</div>
</template>

<script setup>
	import HeroText from "../components/HeroText.vue";
	import ProfilePic from "../components/ProfilePic.vue";
import HomepageCard from "../components/HomepageCard.vue";

	const cardsData = [
		{
			title:"Pa’amonim",
			role: "UI/UX Design",
			url: "../src\\assets\\images\\paamonim.png"
		},
		{
			title:"Ram Aderet",
			role: "Product Design",
			url: "../src/assets/images/ramAderet.png"
		},
		{
			title:"Patricia",
			role: "Product Design",
			url: "../src/assets/images/patricia.png"
		},
		{
			title:"Abra Web & Mobile",
			role: "UI/UX Design",
			url: "../src/assets/images/Abra_Web_Mobile.png"
		}
	]
</script>

<style lang="css" scoped>
	/* .mainWrapper {
		position: relative;
		top: 9.5rem;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 0 2rem;
	} */
</style>

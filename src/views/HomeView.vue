<template>
	<div>
		<div class="mainWrapper bg-hoverStyle flex  md:justify-around xl:justify-center xl:gap-80">
			<HeroText></HeroText>
			<ProfilePic></ProfilePic> 
		</div>
	</div>
</template>

<script setup>
	import HeroText from "../components/HeroText.vue";
	import ProfilePic from "../components/ProfilePic.vue";
</script>

<style lang="css" scoped>
	.mainWrapper {
		position: absolute;
		top: 9.5rem;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 0 2rem;
	}
</style>

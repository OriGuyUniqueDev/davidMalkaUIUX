<template>
	<div>
		<img class="
        w-[43.06rem] h-[38.6rem] left-[-70%] relative -top-20
        sm:w-[60rem] sm:h-[57.6rem] sm:left-0 sm: top-0
        md:w-[72.1rem] md:h-[69.2rem]
        " 
        :src="imgUrl" alt="profile picture" />
	</div>
</template>

<script setup>
	let imgUrl = "/src/assets/photos/profilePic.png";
</script>

<style lang="css" scoped>
	img {
		max-width: 80rem;
		max-height: 75rem;
		width: auto;
		height: auto;
	}
</style>

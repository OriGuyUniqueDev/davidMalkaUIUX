<template>
	<nav ref="elementWidth" class="flex justify-between bg-hoverStyle navBarContainer">
		<div class="logo"><span class="font-bold">David</span>Malka</div>
		<TransitionGroup name="slide">
			<div v-if="show || width >= 833" key="wrapper" class="linkWrapper mobileOpen text-white flex">
				<RouterLink key="home" class="mr-4" to="/">Home</RouterLink>
				<RouterLink key="about" to="/about">About</RouterLink>
			</div>
		</TransitionGroup>
		<img @click="show = !show" class="md:hidden" src="../assets/icons/hamburger.svg" alt="hamburger menu icon" />
	</nav>
	<RouterView />
</template>
<script>
	import { ref } from "vue";
	import { useElementSize } from "@vueuse/core";
	export default {
		setup() {
			let show = ref(false);
			let elementWidth = ref(null);
			const { width } = useElementSize(elementWidth);
			return {
				show,
				elementWidth,
				width,
			};
		},
	};
</script>

<style scoped>
	@media (max-width: 834px) {
		img {
			width: 24px;
		}
		.mobileOpen {
			background-color: #323232;
			position: absolute;
			width: 100%;
			height: max-content;
			bottom: -100%;
			left: 0;
			padding: 3.7rem 1.6rem;
		}
		.slide-enter-active,
		.slide-leave-active {
			transition: all 0.375s linear;
		}
		.slide-enter-from,
		.slide-leave-to {
			opacity: 0;
		}
	}
	.router-link-active {
		font-weight: 700;
	}
	.router-link {
		position: relative;
		width: max-content;
	}
	.router-link-active::before {
		content: "";
		width: 2.2rem;
		height: 0.3rem;
		border-radius: 999px;
		background: linear-gradient(96.02deg, #ff1392 -1.37%, #7b3ce1 46.36%, #10a9ff 95.6%);
		position: absolute;
		transform: translate(50%, 2.3rem);
	}
	.linkWrapper {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
	.navBarContainer {
		padding: 3.7rem 1.6rem;
		position: relative;
		font-family: "Roboto", sans-serif;
		font-weight: 400;
		font-size: 1.6rem;
		line-height: 2.268rem;
		letter-spacing: 5%;
	}
	.logo {
		font-family: "Playfair Display";
		font-style: normal;
		font-weight: 700;
		font-size: 2.1rem;
		line-height: 2.2rem;
		background: linear-gradient(96.02deg, #ff1392 -1.37%, #7b3ce1 46.36%, #10a9ff 95.6%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
	}
	.navBarContainer {
		padding: 3.7rem 1.6rem;
		position: relative;
		font-family: "Roboto", sans-serif;
		font-weight: 400;
		font-size: 1.8rem;
		line-height: 2.268rem;
		letter-spacing: 5%;
	}
</style>

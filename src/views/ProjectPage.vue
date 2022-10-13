<template>
	<div >
		<ProjectHero :bgColor1="data.bgColor" :topImage="data.topImage"></ProjectHero>
		<div  class="px-[1.8rem]">
			<div fieldName="about" class="mb-20">
				<h1 class="text-bold mt-8 text-[3.2rem]">{{data.projectTitle}}</h1>
				<p class="text-[1.6rem]">{{data.details}}</p>
			</div>
			<div fieldName="personas" class="mb-[10.8rem]">
				<h2 class="text-white  text-bold mt-8 text-[3.2rem] mb-[2rem]">{{data.secondTitle}}</h2>
				<Personas v-for="persona in data.secondTitleDetails" :icon="persona.icon" :data="persona.data"></Personas>
			</div>
			<div fieldName="research" class="mb-[10.8rem]">
				<h2 class="text-white  text-bold mt-8 text-[3.2rem] mb-[2rem]">{{data.thirdTitle}}</h2>
				<ResearchComponent v-for="card in data.thirdTitleDetails" :icon="card.icon" :data="card.data"></ResearchComponent>
			
			</div>
		</div>
		
	</div>
</template>

<script setup>
import ProjectHero from '../components/ProjectHero.vue'
import Personas from '../components/Personas.vue'
import ResearchComponent from '../components/ResearchComponent.vue';
	let props = defineProps(['id','data'])
</script>

<style scoped>
	h1,h2 {
		color: white;
		font-family: "Playfair Display";
	}
	p{
		color: white;
		font-family: "Outfit";
		font-weight: 300;
	}
</style>

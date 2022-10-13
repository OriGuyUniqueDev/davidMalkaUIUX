<script setup>
	import Nav from "./components/Nav.vue";
	import Footer from "./components/Footer.vue";
	import Developer from "./components/Developer.vue";
	import { ref, watch } from "vue";
	import { useRouter, useRoute } from "vue-router";
	import ProjectNav from "./components/ProjectNav.vue";
	const route = useRoute();
	let showNav = ref(false);
	watch(showNav, () => {
		route.name !== "project" ? (showNav.value = true) : (showNav.value = false);
	});
	let data = [
		{
			projectName: "Pa’amonim",
			bgColor: `bg-purple`,
			color:'text-purple',
			topImage: "/projectsImages/paamonim/topImage.png",
			projectTitle: "About the project",
			details: `Paamonim is a non-profit social organization.
The organization strives for a reality in which families in Israel lead an economically balanced and responsible life - a reality that will help build socio-economic resilience.
Bells guides and provides financial advice to anyone interested, and provides the right knowledge, tools and habits in the field.`,
			secondTitle: "Personas",
			secondTitleDetails: [
				{
					icon: "/icons/persona1.svg",
					data: `Users are struggling to tracking after thier mony expands.`,
				},
				{
					icon: "/icons/persona2.svg",
					data: `Students which living with a 
                low salaries.`,
				},
				{
					icon: "/icons/persona3.svg",
					data: `Families with many childrens.`,
				},
			],
			thirdTitle: `Research & Users`,
			thirdTitleDetails: [
				{
					icon: `65%`,
					data: `Would like to see more
                visualization in the app`,
				},
				{
					icon: `35%`,
					data: `Users don’t want to complicated
                with so many screen transitions.`,
				},
			],
			fourthTitle: `Research & Users`,
			fourthTitleDetails: [
			{
					number: `#1`,
					title: `Managment economy`,
					data: "most of users can’t follow after their money expands. ",
					color:'text-purple'
				},
				{
					number: `#2`,
					title: 'Budget management',
					data: `Simple users, specially old users, complicate with makeing budget every month.`,
					color:'text-purple'
				},
				{
					number: `#3`,
					title: `Managment economy`,
					data: "most of users can’t follow after their money expands. ",
					color:'text-purple'
				},
				{
					number: `#4`,
					title: 'Budget management',
					data: `Simple users, specially old users, complicate with makeing budget every month.`,
					color:'text-purple'
				},
			],
			fifthTitle: `Challenges`,
			fifthTitleDetails: [
				{
					title: `Make It Simple`,
					data1: `Apps of this kind for the most part are complicated with lots of information, the challenge was to create something a little more experiential, fun and easy to use.`,
					data2: `Use of illustrations and pastel colors. I’ve tried to create a nice copywriting that speaks to simple users.`,
				},
				{
					title: `Use it fast`,
					data1: `In an app of this type, there is a lot of data that needs to be entered specifically from the user's side. One of the challenges was to create a template that would be quick and easy to use`,
					data2: `One of the solution was create layers templates (toast).
                Those templates are make the fast experiance, enter information easily and always indicate the users where they are during using the app, and let them returning without unnecessary screen transitions.`,
				},
			],
			pic2: "../assets/images/projectsImages/paamonim/pic1.png",
			pic3: "../assets/images/projectsImages/paamonim/pic2.png",
		},
		{
			projectName: "Ram Aderet",
			bgColor: `bg-lightBlue`,
			topImage: "/projectsImages/ramAderet/topImage.png",
			projectTitle: "About the project",
			details: `The company is involved in the initiation and execution of the leading and sought-after residential areas and neighborhoods in Israel. Responsible for the construction of some of the most important architectural icons and public buildings erected in recent years. The system is an internal corporate SAP system designed to help Ram Adrat user׳s manage the organization.`,
			thirdTitle: `Research & Users`,
			thirdTitleDetails: [
				{
					icon: `70%`,
					data: `Of users are not technology
personas. `,
				},
				{
					icon: `20%`,
					data: `Of users want to be monitored
for the actions of different users
in the system`,
				},
				{
					icon: `10%`,
					data: `Of users working in
construction area.`,
				},
			],
			fourthTitle: `paint points`,
			fourthTitleDetails: [
				{
					number: `#1`,
					title: `Managment economy`,
					data: "most of users can’t follow after their money expands. ",
					color:'text-purple'
				},
				{
					number: `#2`,
					title: 'Budget management',
					data: `Simple users, specially old users, complicate with makeing budget every month.`,
					color:'text-purple'
				},
				{
					number: `#3`,
					title: `Managment economy`,
					data: "most of users can’t follow after their money expands. ",
					color:'text-purple'
				},
				{
					number: `#4`,
					title: 'Budget management',
					data: `Simple users, specially old users, complicate with makeing budget every month.`,
					color:'text-purple'
				},
			],
			fifthTitle: `Challenges`,
			fifthTitleDetails: [
				{
					title: `Make It Simple`,
					data1: `Apps of this kind for the most part are complicated with lots of information, the challenge was to create something a little more experiential, fun and easy to use.`,
					data2: `Use of illustrations and pastel colors. I’ve tried to create a nice copywriting that speaks to simple users.`,
				},
				{
					title: `Use it fast`,
					data1: `In an app of this type, there is a lot of data that needs to be entered specifically from the user's side. One of the challenges was to create a template that would be quick and easy to use`,
					data2: `One of the solution was create layers templates (toast).
                Those templates are make the fast experiance, enter information easily and always indicate the users where they are during using the app, and let them returning without unnecessary screen transitions.`,
				},
			],
			pic2: "../assets/images/projectsImages/paamonim/pic1.png",
			pic3: "../assets/images/projectsImages/paamonim/pic2.png",
		},
	];
</script>

<template>
	<Nav v-if="showNav"></Nav>
	<ProjectNav v-else></ProjectNav>
	<router-view :data="data.find((element) => element.projectName === route.params.id)" :id="route" v-slot="{ Component, route }">
		<Transition mode="out-in" :enter-active-class="route.meta.enterClass" :leave-active-class="route.meta.leaveClass">
			<component :is="Component" ref="showNav"></component>
		</Transition>
	</router-view>
	<Footer></Footer>
	<Developer></Developer>
</template>

<style scoped></style>

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProjectPage from "../views/ProjectPage.vue";
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
			meta: {
				enterClass: "animate__animated animate__fadeIn",
				leaveClass: "animate__animated animate__fadeOut",
			},
		},
		{
			path: "/about",
			name: "about",
			meta: {
				enterClass: "animate__animated animate__fadeIn",
				leaveClass: "animate__animated animate__fadeOut",
				title: "David Malka - About",
			},
			component: AboutView,
		},
		{
			path: "/project:/:id",
			name: "project",
			meta: {
				enterClass: "animate__animated animate__fadeIn",
				leaveClass: "animate__animated animate__fadeOut",
				title: "Project",
			},
			props: true,
			component: ProjectPage,
		},
	],
	scrollBehavior(to, from, savedPosition) {
		// always scroll 10px above the element #main
		return {
			// could also be
			// el: document.getElementById('main'),
			el: "#app",
			top: 0,
			behavior: "smooth",
		};
	},
});

router.afterEach((to, from) => {
	to.name !== "home" ? (document.title = to.meta.title) : (document.title = "David Malka UX/UI");
});
export default router;

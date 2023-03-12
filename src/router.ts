import { createRouter, createWebHistory } from 'vue-router'
import Login from '@pages/Login.vue'
import Home from '@pages/Home.vue'
import CreateOrder from '@pages/CreateOrder.vue'
import { useUserStore } from '@store/userStore'

const routes = [
	{ path: '/', component: Home },
	{ path: '/login', component: Login },
	{ path: '/create', component: CreateOrder },
	{
		path: '/:pathMatch(.*)*',
		redirect: '/',
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

router.beforeEach(async to => {
	const store = useUserStore()
	const publicPages = ['/login']
	const authRequired = !publicPages.includes(to.path)
	const auth = store.isAuth

	if (authRequired && !auth) {
		return '/login'
	}
})

export default router

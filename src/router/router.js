import EmployeeCardPage from '@/pages/EmployeeCardPage'; // Карточка

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		component: EmployeeCardPage,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router;

import actividades from '../components/Actividades.vue'
import agregar from '../components/Agregar.vue'   
import editar from '../components/Editar.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {path: '/', component: actividades},
    {path: '/agregar', component: agregar},
    {path: '/editar', component: editar}

]
export const router = createRouter({
    history: createWebHistory(),
    routes
})
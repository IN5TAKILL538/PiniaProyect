<template>
    <header>
       <h1>Editando ✍🏻</h1>
    </header>
    <main>
       <div class="q-pa-md">
   
   <q-form @submit="mainStore.editActivity(descriptionActivity, date)" class="q-gutter-md">
     <q-input type="textarea" filled v-model="descriptionActivity" label="Descripcion" lazy-rules />
   
     <q-input filled type="date" v-model="date" label="Fecha de la actividad" lazy-rules />
   
     <div class="q-gutter-md">
     <p>Estado</p>
       <q-radio v-model="selectedActivity.state" val="pendiente" label="pendiente" />
       <q-radio v-model="selectedActivity.state" val="completada" label="completada" />
     </div>
   
     <div>
       <q-btn label="Submit" type="submit" color="primary"/>
     </div>
   </q-form>
   
   </div>  
    </main>
   
   </template>
   
   <style src="../styles/editar.css" scoped></style>
   
   <script setup>
   import { ref } from 'vue'
   import {useMainStore} from '../store/store.js'
   const mainStore = useMainStore()
   const selectedActivity= mainStore.selectedActivity
   const descriptionActivity = ref(selectedActivity.description )
   const date = ref(selectedActivity.date)
   
   </script>
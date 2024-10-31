<template>
    <header>
      <h1>Agregando tareas 🗒️</h1>
      
    </header>
  
    <main>
      <div class="q-pa-md">
  
        <q-form @submit="addActivity(descriptionActivity, date)"
         class="q-gutter-md">
          <q-input type="textarea" filled v-model="descriptionActivity" label="Descripcion" lazy-rules />
  
          <q-input filled type="date" v-model="date" label="Fecha de la Actividad" lazy-rules />
  
          
  
          <div>
            <q-btn label="Submit" type="submit" color="primary"/>
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>
  
      </div>  
    </main>
  
  
  
  </template>
  
  
  <style src="../styles//agregar.css" scoped></style>
  
  <script setup>
  import { ref } from 'vue'
  import {useMainStore} from '../store/store.js'
  const mainStore = useMainStore()
  const addActivity = mainStore.addActivity 
  
  //formulario
  const descriptionActivity = ref(null);
  const date = ref(null);
  
  
  
  
  </script>
<template>
  <q-layout view="lHc Lpc lfc">

    <q-header elevated class="bg-primary text-black" height-hint="70">
    

      <q-tabs  >
        <q-route-tab to="/" label="Actividades" />
        <q-route-tab to="/agregar" label="Agregar" />
        <q-route-tab to="/editar" label="Editar" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    

  </q-layout>
</template>
<style>
.bg-primary{
  display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-evenly;
    color: black;
    background-color: blue;
}
</style>
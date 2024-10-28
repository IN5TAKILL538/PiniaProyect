
  <script>
import { ref } from "vue"; 

import jsonDatos from "../store/user.json";

console.log(jsonDatos);

let columns = ref([
  {
    name: "Actividad",
    align: "center",
    label: "Actividad",
    field: "name",
    sortable: true,
  },
  {
    name: "Fecha",
    align: "center",
    label: "Fecha",
    field: "email",
    sortable: true,
  },
  {
    name: "Estado",
    align: "center",
    label: "Estado",
    field: "password",
    sortable: true,
  },
  
]);

</script>

  <template>
  <div>
    <q-table
      title="Datos usuarios"
      :rows="jsonDatos"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body-cell-avatar="props">
        <q-td :props="props" class="q-pa-sm">
          <img
            :src="props.row.avatar"
            alt=""
            style="height: 50px; width: 50px"
          />
        </q-td>
      </template>
      <template v-slot:body-cell-fecha="props">
        <q-td :props="props" class="q-pa-sm">
          {{ props.row.creationAt.toString().split("T")[0] }}
        </q-td>
      </template>
      <template v-slot:body-cell-status="props">
        <q-td :props="props" class="q-pa-sm">
          <span style="background-color: green" v-if="props.row.status == 1"
            >Activo</span
          >
          <span style="background-color: red" v-else>Inactivo</span>
        </q-td>
      </template>
      <template v-slot:body-cell-opciones="props">
        <q-td :props="props" class="q-pa-sm">
          <button>📝</button>
          <button v-if="props.row.status == 1">❌</button>
          <button v-else>✅</button>
        </q-td>
      </template>
    </q-table>
  </div>
</template>

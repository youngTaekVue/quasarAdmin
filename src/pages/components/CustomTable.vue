<template>
  <div class="q-pa-md">
    <div class="col-12 col-xs-12 col-md-6 col-lg-4 q-pa-sm">
      <q-card
        flat
        bordered
        class="col-3 col-md-3 bg-grey-1 ellipsis my-card"
        v-show="show"
      >
        <q-bar class="bg-grey-8 text-white">
          <div class="text-weight-bold">CustomTable - default</div>
          <q-space />
        </q-bar>
        <q-card-section>
          <q-table
            row-key="name"
            :columns="columns"
            :data="rows"
            :grid="layout"
          >
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="name" :props="props">
                  {{ props.row.albumId }}
                </q-td>
                <q-td key="fat" :props="props">
                  {{ props.row.title }}
                </q-td>
                <q-td key="fat" :props="props">
                  {{ props.row.url }}
                </q-td>
                <q-td key="fat" :props="props">
                  {{ props.row.thumbnailUrl }}
                </q-td>
                <q-td key="calories" :props="props">
                  <q-btn name="delete" label="delete" icon="delete" />
                </q-td>
              </q-tr>
            </template>
          </q-table>
          <q-pagination
            v-model="current"
            color="purple"
            :max="10"
            :max-pages="6"
            boundary-numbers
          />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { Screen } from "quasar";
import { local } from "boot/axios";
const rows = ref();
const show = ref(false);
const current = ref(6);

onMounted(() => {
  getRowsList();
});

function getRowsList() {
  local.get("/photos").then(function (response) {
    rows.value = response.data;
    console.dirxml(rows);
    show.value = true;
  });
  const columns = [
    {
      name: "desc",
      required: true,
      label: "Dessert (100g serving)",
      align: "left",
      classes: "col-12",
      field: (row) => row.name,
      format: (val) => `${val}`,
    },
    {
      name: "calories",
      align: "center",
      label: "Calories",
      field: "calories",
    },
    { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
    { name: "carbs", label: "Carbs (g)", field: "carbs" },
  ];
}

const layout = computed(() => {
  return Screen.lt.sm ? true : Screen.lt.md ? false : false;
});

//const rows ;
</script>

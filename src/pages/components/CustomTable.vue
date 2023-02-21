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
          <q-table :rows="rows" :grid="layout">
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="albumId" :props="props">
                  {{ props.row.albumId }}
                </q-td>
                <q-td key="title" :props="props">
                  {{ props.row.title }}
                </q-td>
                <q-td key="url" :props="props">
                  {{ props.row.url }}
                </q-td>
                <q-td key="thumbnailUrl" :props="props">
                  {{ props.row.thumbnailUrl }}
                </q-td>
                <q-td>
                  <q-btn
                    name="delete"
                    label="delete"
                    v-on:click="btnDetail()"
                    icon="delete"
                  />
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

function btnDetail() {
  console.log("test");
}

function getRowsList() {
  // const columns = [
  //   {
  //     name: "albumId",
  //     required: true,
  //     label: "Dessert (100g serving)",
  //     field: (row) => row.albumId,
  //     format: (val) => `${val}`,
  //     sortable: true,
  //   },
  //   {
  //     name: "calories",
  //     align: "center",
  //     label: "Calories",
  //     field: "title",
  //   },
  // ];

  local.get("/photos").then(function (response) {
    rows.value = response.data;
    console.dirxml(rows);
    show.value = true;
  });
}

const layout = computed(() => {
  return Screen.lt.sm ? true : Screen.lt.md ? false : false;
});

//const rows ;
</script>

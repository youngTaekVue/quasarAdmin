<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="CustomTable" to="/portfolio/CustomTable" />
      <q-breadcrumbs-el label="ApexChart" to="/components/ApexChart" />
    </q-breadcrumbs>
  </div>
  <div class="q-pa-xs">
    <div class="row">
      <div class="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-3 q-pa-sm">
        <q-card class="my-card fit q-pa-md">
          <div class="q-gutter-md">
            <p class="text-subtitle1 text-center">선택한 JSON Data</p>
            <q-select
              v-model="model"
              outlined
              :options="selOptions"
              @update:model-value="onloadJson($event.value)"
              label="표준 API 항목"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    No results
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
            <q-scroll-area style="height: 550px">
              <q-table
                flat
                bordered
                row-key="name"
                separator="cell"
                :rows="optionJson"
                :columns="columns"
                :hideBottom="true"
                :rows-per-page-options="[0]"
                :card-container-style="{ backgroundColor: '#ff0000' }"
                class="josnTable1"
              >
                <template v-slot:body="props">
                  <q-tr :props="props">
                    <q-td key="name" :props="props">
                      {{ props.row.name }}
                    </q-td>
                    <q-td key="option" :props="props">
                      {{ props.row.option }}
                    </q-td>
                  </q-tr>
                </template>
                <q-inner-loading :showing="spinVisible">
                  <q-spinner-gears size="50px" color="primary" />
                </q-inner-loading>
              </q-table>
            </q-scroll-area>
          </div>
        </q-card>
      </div>
      <div class="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-3 q-pa-sm">
        <q-card class="my-card fit q-pa-md">
          <q-field class="q-pb-sm" borderless placeholder="Placeholder">
            <template v-slot:append>
              <q-btn
                color="primary"
                label="Compare"
                @click="jsonCompare()"
                style="width: 100%"
              />
            </template>
          </q-field>
          <q-scroll-area style="height: 600px">
            <q-input v-model="getJosn2" type="textarea" outlined rows="31" />
          </q-scroll-area>
        </q-card>
      </div>
      <div class="col-12 col-xs-12 col-md-12 col-lg-6 q-pa-sm">
        <q-card class="my-card fit q-pa-md">
          <p class="text-subtitle1 text-center">JSON API Compare</p>
          <q-scroll-area style="height: 600px">
            <q-table
              flat
              bordered
              row-key="name"
              separator="cell"
              :rows="result1"
              :columns="columns2"
              :rows-per-page-options="[0]"
              :grid="layout"
            />
            <br />

            <div>
              <p class="text-subtitle1 text-center">누락된 항목</p>
              <q-list dense padding>
                <q-item clickable v-ripple v-for="item in result2" :key="item">
                  <q-item-section>{{ item }}</q-item-section>
                </q-item>
              </q-list>
            </div>
          </q-scroll-area>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
// import VueJsonPretty from "vue-json-pretty";
// import "vue-json-pretty/lib/styles.css";
import { Screen } from "quasar";
import { ref, computed, onMounted } from "vue";

// JSON 데이터를 호출하는 JS IMPORT
import { useJsonStore } from "stores/custom";

//import { api } from "boot/axios";
const model = ref(null);
const selOptions = ref();
const spinVisible = ref(false);
const optionJson = ref();
const getJosn2 = ref();
const result1 = ref();
const result2 = ref();

const layout = computed(() => {
  return Screen.lt.sm ? true : Screen.lt.md ? false : false;
});

selOptions.value = [{ label: "select option 4", value: "4" }];

const columns = [
  {
    name: "name",
    required: true,
    label: "API 항목명",
    align: "left",
    sortable: true,
    classes: "q-pa-sm",
    style: "width: 40px",
  },
  {
    name: "option",
    label: "Option",
    align: "left",
    classes: "q-pa-sm",
  },
];
const columns2 = [
  {
    name: "id",
    label: "no",
    field: (row) => row.id + 1,
    align: "center",
    sortable: true,
    classes: "q-pa-sm",
    style: "max-width: 50px",
    headerStyle: "max-width: 50px",
  },
  {
    name: "name",
    required: true,
    label: "표준 항목",
    align: "left",
    field: (row) => row.bName,
  },

  {
    name: "name",
    required: true,
    label: "비교하는 항목",
    align: "left",
    field: (row) => row.aName,
  },
  {
    name: "name",
    required: true,
    label: "비고",
    align: "left",
    field: (row) => row.remark,
  },
  {
    name: "name",
    required: true,
    label: "값",
    align: "left",
    field: (row) => row.aValue,
  },
];

onMounted(() => {
  // onloadJson();
});

function onloadJson(param) {
  optionJson.value = "";
  const reader = new FileReader();
  let prettyJson = useJsonStore(param);

  let test = reader.readAsText(prettyJson);
  console.log(test);
  // prettyJson.forEach((element, i) => {
  //   let iterator = element.option;
  //   if (iterator != false) {
  //     prettyJson[i].option = JSON.stringify(iterator);
  //     console.log(iterator);
  //   }
  // });

  optionJson.value = prettyJson;
}
</script>




<style lang="sass">
.josnTable1
  /* height or max-height is important */
  height: 550px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: #EAEAEA

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px

  /* prevent scrolling behind sticky top row on focus */
  tbody
    /* height of all previous header rows */
    scroll-margin-top: 48px
</style>
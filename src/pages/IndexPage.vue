<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" />
      <q-breadcrumbs-el label="Components" />
      <q-breadcrumbs-el label="Breadcrumbs" />
    </q-breadcrumbs>
  </div>
  <div class="q-pa-xs">
    <div class="row">
      <DashCard v-for="item in array" :key="item.title" v-bind="item" />
    </div>
  </div>
  <div class="q-pa-xs">
    <div class="row">
      <div class="col-12 col-xs-12 col-md-6 q-pa-sm">
        <ApexLineChart :items="apexChartData" />
      </div>
      <div class="col-12 col-xs-12 col-md-6 q-pa-sm">
        <ChartjsBar :items="chartJsData" />
      </div>
    </div>
  </div>
  <div class="q-pa-xs">
    <div class="row">
      <div class="col-12 col-xs-12 col-md-12 q-pa-sm">
        <q-table
          :rows="rows"
          :columns="columns"
          row-key="name"
          :filter="filter"
          :hide-header="scMd"
          :grid="layout"
        >
        </q-table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Screen } from "quasar";
import { ref, computed } from "vue";
import DashCard from "src/components/card/DashCard.vue";
import ApexLineChart from "components/charts/ApexLineChart.vue";
import ChartjsBar from "components/charts/ChartjsBar.vue";

const scMd = ref(Screen.lt.md);
const apexChartData = ref();
const chartJsData = ref();
const layout = computed(() => {
  return Screen.lt.sm ? true : Screen.lt.md ? false : false;
});
apexChartData.value = [
  {
    name: "Session Duration",
    data: [
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
    ],
  },
  {
    name: "Page Views",
    data: [
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
    ],
  },
  {
    name: "User Visits",
    data: [
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
    ],
  },
];

chartJsData.value = [
  {
    labels: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    data: [
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
    ],
  },
];

const array = [
  {
    id: "1",
    name: "calories1",
    body: "center1",
  },
  {
    id: "2",
    name: "calories2",
    body: "center2",
  },
  {
    id: "3",
    name: "calories3",
    body: "center3",
  },
  {
    id: "4",
    name: "calories4",
    body: "center4",
  },
];

const columns = [
  {
    name: "desc",
    required: true,
    label: "Dessert (100g serving)",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calories",
    align: "center",
    label: "Calories",
    field: "calories",
    sortable: true,
  },
  { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
  { name: "carbs", label: "Carbs (g)", field: "carbs" },
];

const rows = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
  },
  {
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
  },
];

function randomData() {
  const rand_0_99 = Math.floor(Math.random() * 1000);
  return rand_0_99;
}
</script>

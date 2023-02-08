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
      <ApexLineChart :items="apexChartData" />

      <ChartjsBarChart />
    </div>
  </div>
</template>

<script setup>
import { Screen } from "quasar";
import { ref, watch } from "vue";
import DashCard from "components/DashCard.vue";
import ApexLineChart from "components/charts/ApexLineChart.vue";
import ChartjsBarChart from "components/charts/ChartjsBarChart.vue";

const test = ref(Screen.lt.xl);

function randomData() {
  const rand_0_99 = Math.floor(Math.random() * 100);
  return rand_0_99;
}

const apexChartData = ref();
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
    ],
  },
  {
    title: "2015",
    count: [
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
</script>

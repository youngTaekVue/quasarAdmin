<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Components" />
      <q-breadcrumbs-el label="ApexChart" />
    </q-breadcrumbs>
  </div>

  <div class="q-pa-xs">
    <div class="row">
      <div class="col-12 col-xs-12 col-md-4 q-pa-sm">
        <ApexLineChart :items="apexChartData" />
      </div>
      <div class="col-12 col-xs-12 col-md-4 q-pa-sm">
        <ApexBarChart :items="apexChartData" />
      </div>
      <div class="col-12 col-xs-12 col-md-4 q-pa-sm">
        <ApexMixChart :items="apexChartData" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ApexLineChart from "components/charts/ApexLineChart.vue";
import ApexBarChart from "components/charts/ApexBarChart.vue";
import ApexMixChart from "components/charts/ApexMixChart.vue";

const apexChartData = ref();
const apexMixData = ref();

const chartJsData = ref();
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

function randomData() {
  const random = Math.floor(Math.random() * 1000);
  return random;
}
</script>

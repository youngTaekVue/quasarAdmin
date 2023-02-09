<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Components" />
      <q-breadcrumbs-el label="ApexChart" />
    </q-breadcrumbs>
  </div>

  <div class="q-pa-xs">
    <div class="row">
      <div class="col-12 col-xs-12 col-md-6 col-lg-4 q-pa-sm">
        <ApexLineChart :items="apexChartData" />
      </div>
      <div class="col-12 col-xs-12 col-md-6 col-lg-4 q-pa-sm">
        <ApexBarChart :items="apexChartData" />
      </div>
      <div class="col-12 col-xs-12 col-md-6 col-lg-4 q-pa-sm">
        <ApexMixChart :items="apexChartData" />
      </div>

      <div class="col-12 col-xs-12 col-md-6 col-lg-4 q-pa-sm">
        <ChartjsBar :items="chartJsData" />
      </div>
      <div class="col-12 col-xs-12 col-md-6 col-lg-4 q-pa-sm">
        <ChartjsLine :items="chartJsData" />
      </div>
      <!-- <div class="col-12 col-xs-12 col-md-6 col-lg-4 q-pa-sm">
        <ApexMixChart :items="chartJsData" />
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import ApexLineChart from "components/charts/ApexLineChart.vue";
import ApexBarChart from "components/charts/ApexBarChart.vue";
import ApexMixChart from "components/charts/ApexMixChart.vue";
import ChartjsBar from "src/components/charts/ChartjsBar.vue";
import ChartjsLine from "src/components/charts/ChartjsLine.vue";

const apexChartData = ref();
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

function randomData() {
  const random = Math.floor(Math.random() * 1000);
  return random;
}
</script>

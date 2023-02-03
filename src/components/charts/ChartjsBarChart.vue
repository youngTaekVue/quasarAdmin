<template>
  <div class="col-12 col-xs-12 col-md-6 q-pa-sm">
    <q-card class="my-card fit">
      <q-bar class="bg-grey-8 text-white">
        <div class="text-weight-bold">vue-chartjs - Page Statistics</div>
        <q-space />
      </q-bar>
      <q-card-section>
        <Bar
          class="fit"
          id="my-chart-id"
          :options="barChartOp"
          :data="barData"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { Bar } from "vue-chartjs";

const barData = {
  labels: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  datasets: [
    {
      label: "인원수",
      backgroundColor: "rgb(255,153,204, 0.5)",
      pointBackgroundColor: "hotpink",
      fill: true,
      tension: 0.1,
      borderColor: "hotpink",
      pointBorderColor: "hotpink",
      borderWidth: 1,
      pointBorderWidth: 1,
      data: [450, 300, 100, 1000, 750, 600, 900, 1500, 1200, 2000],
    },
  ],
};
const barChartOp = {
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        boxWidth: 8,
        padding: 10,
        usePointStyle: true,
        pointStyle: "circle",
      },
      fullSize: true,
      align: "center",
    },
    tooltip: {
      boxWidth: 15,
      bodyFont: {
        size: 14,
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        padding: 3,
      },
    },
    y: {
      ticks: {
        callback: (val, index) => {
          return val !== 0
            ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            : "";
        },
        padding: 10,
      },
      grid: {
        drawBorder: false,
        color: "#323232",
        lineWidth: 1,
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 2000,
  },
};
</script>

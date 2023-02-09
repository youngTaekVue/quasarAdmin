<template>
  <q-card class="my-card fit">
    <q-bar class="bg-grey-8 text-white">
      <div class="text-weight-bold">vue-chartjs - Page Statistics</div>
      <q-space />
    </q-bar>
    <q-card-section>
      <Bar class="fit" id="my-chart-id" :options="barChartOp" :data="barData" />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { Bar } from "vue-chartjs";

const props = defineProps({
  items: {
    type: Array,
  },
});

const propLabels = ref(props.items[0].labels);
const propData = ref(props.items[0].data);

const barData = {
  labels: propLabels.value,
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
      data: propData.value,
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

<template>
  <q-card class="my-card fit">
    <q-bar class="bg-grey-8 text-white">
      <div class="text-weight-bold">ApexChart - MixChart</div>
      <q-space />
    </q-bar>
    <q-card-section>
      <apexchart
        type="line"
        :options="chartOptions"
        :series="mixSeries"
      ></apexchart>
    </q-card-section>
  </q-card>
</template>
<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  items: {
    name: {
      type: String,
    },
    data: {
      type: Array,
    },
  },
});
const mixSeries = ref(props.items);
console.log(mixSeries);
const chartOptions = {
  chart: {
    id: "mixChart",
    type: "line",
    stacked: false,
  },
  stroke: {
    width: [0, 2, 5],
    curve: "smooth",
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },

  fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: "light",
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100],
    },
  },
  labels: [
    "01 Jan",
    "02 Jan",
    "03 Jan",
    "04 Jan",
    "05 Jan",
    "06 Jan",
    "07 Jan",
    "08 Jan",
    "09 Jan",
    "10 Jan",
    "11 Jan",
    "12 Jan",
  ],
  markers: {
    size: 3,
  },
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    title: {
      text: "Points",
    },
    min: 0,
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;
      },
    },
  },
};
</script>

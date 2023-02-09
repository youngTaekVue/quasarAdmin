<template>
  <q-card class="my-card fit">
    <q-bar class="bg-grey-8 text-white">
      <div class="text-weight-bold">ApexChart - BarChart</div>
      <q-space />
    </q-bar>
    <q-card-section>
      <apexchart
        type="bar"
        :options="chartOptions"
        :series="barSeries"
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
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },
});
const barSeries = ref(props.items);
console.log(barSeries);
const chartOptions = {
  chart: {
    id: "barChart",
    type: "bar",
    stacked: true,
    stackType: "100%",
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  stroke: {
    width: 1,
    colors: ["#fff"],
  },
  title: {
    text: "100% Stacked Bar",
  },
  xaxis: {
    categories: [
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
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "개";
      },
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    offsetX: 40,
  },
};
</script>

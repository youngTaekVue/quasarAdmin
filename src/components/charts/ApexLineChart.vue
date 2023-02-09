<template>
  <q-card class="my-card fit">
    <q-bar class="bg-grey-8 text-white">
      <div class="text-weight-bold">ApexChart - LineChart</div>
      <q-space />
    </q-bar>
    <q-card-section>
      <apexchart
        type="line"
        :options="lineChartOp"
        :series="lineSeries"
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
const lineSeries = ref(props.items);
const lineChartOp = {
  chart: {
    id: "lineChart",
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [3, 5, 3],
    curve: "straight",
    dashArray: [0, 8, 5],
  },

  legend: {
    tooltipHoverFormatter: function (val, opts) {
      return (
        val +
        " - " +
        opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
        ""
      );
    },
  },
  markers: {
    size: 0,
    hover: {
      sizeOffset: 6,
    },
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
    y: [
      {
        title: {
          formatter: function (val) {
            return val + " (mins)";
          },
        },
      },
      {
        title: {
          formatter: function (val) {
            return val + " per session";
          },
        },
      },
      {
        title: {
          formatter: function (val) {
            return val;
          },
        },
      },
    ],
  },
  grid: {
    borderColor: "#f1f1f1",
  },
};
</script>

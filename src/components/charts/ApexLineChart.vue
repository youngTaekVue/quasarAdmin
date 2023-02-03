<template>
  <div class="col-12 col-xs-12 col-md-6 q-pa-sm">
    <q-card class="my-card fit">
      <q-bar class="bg-grey-8 text-white">
        <div class="text-weight-bold">ApexChart - Page Statistics</div>
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
  </div>
</template>

<script setup>
const lineSeries = [
  {
    name: "Session Duration",
    data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
  },
  {
    name: "Page Views",
    data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
  },
  {
    name: "Total Visits",
    data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
  },
];
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
    width: [5, 7, 5],
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

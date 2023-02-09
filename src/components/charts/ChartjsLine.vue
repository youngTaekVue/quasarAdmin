<template>
  <q-card class="my-card fit">
    <q-bar class="bg-grey-8 text-white">
      <div class="text-weight-bold">vue-chartjs - Page Statistics</div>
      <q-space />
    </q-bar>
    <q-card-section>
      <Line :data="lineData" :options="lineChartOp" />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { Line } from "vue-chartjs";

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

const proLabels = ref(props.items[0].labels);
const proData = ref(props.items[0].data);

console.log(proLabels);
console.log(proData);
const lineData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Data One",
      backgroundColor: "#f87979",
      data: [40, 39, 10, 40, 39, 80, 40],
    },
  ],
};

const lineChartOp = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>

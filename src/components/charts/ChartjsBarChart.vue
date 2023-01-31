<template>
  <div class="col-12 col-xs-12 col-md-6 q-pa-sm">
    <q-card class="my-card">
      <q-card-section>
        <Bar id="my-chart-id" :options="barChartOp" :data="barData" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
const barData = {
  labels: ["January", "February", "March"],
  datasets: [{ data: [40, 20, 12] }],
};
const barChartOp = {
  chart: {
    responsive: true,
  },
};
</script>

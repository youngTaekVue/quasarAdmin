-
<template>
  <div class="q-pa-md q-gutter-sm">
    <!-- <q-btn color="white" text-color="black" @click="alert()" label="Standard" />
    <q-btn color="primary" label="Primary" />
    <q-btn color="secondary" label="Secondary" />
    <q-btn color="amber" glossy label="Amber" />
    <q-btn color="brown-5" label="Brown 5" />
    <q-btn color="deep-orange" glossy label="Deep Orange" />
    <q-btn color="purple" label="Purple" />
    <q-btn color="black" label="Black" /> -->
  </div>
  <div class="q-pa-md q-gutter-sm">
    <q-btn
      v-for="item in arrButton"
      :key="item.color"
      :color="item.color"
      v-bind:text-color="[item.isBlFont === true ? 'black' : 'none']"
      >{{ item.isBlFont }}</q-btn
    >
    <!--
      v-bind:text-color="[item.isBlFont === true ? 'black' : 'none']"
       v-bind:label="item.label" -->
  </div>
</template>

<!--
Here we are reactively binding element attributes / properties to the state.
The :title syntax is short for v-bind:title.
-->

<script setup>
import { ref } from "vue";
const arrButton = ref([
  { color: "white", label: "Standard", isBlFont: true },
  { color: "primary", label: "Primary", isBlFont: false },
  { color: "secondary", label: "secondary", isBlFont: false },
  { color: "amber", label: "amber", isBlFont: false },
  { color: "brown-5", label: "brown-5", isBlFont: false },
  { color: "deep-orange", label: "deep-orange", isBlFont: false },
]);

const message = ref("Hello World!");
const isRed = ref(true);
const color = ref("green");

function alert() {
  console.log();
}

function toggleRed() {
  isRed.value = !isRed.value;
}

function toggleColor() {
  color.value = color.value === "green" ? "blue" : "green";
}
</script>

<style>
.red {
  color: red;
}
</style>

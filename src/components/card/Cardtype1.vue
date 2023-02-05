<template>
  <div class="col-5 col-xs-5 col-md-5 col-lg-3 q-pa-sm">
    <q-card class="my-card text-white">
      <q-img
        class="absolute"
        img-class="rounded-borders"
        src="~/assets/images/23.jpeg"
      />

      <div class="column">
        <div class="col">
          <q-avatar rounded>
            <q-img src="~assets/images/chip.png" />
          </q-avatar>
        </div>
        <div class="row text-center z-top">
          <div class="col-3 col-xs-3 col-md-3">
            <q-input
              class="q-ma-sm"
              v-model="text"
              bg-color="white"
              outlined
              dense
            />
          </div>
          <div class="col-3 col-xs-3 col-md-3">
            <q-input
              class="q-ma-sm"
              v-model="text"
              bg-color="white"
              outlined
              dense
            />
          </div>
          <div class="col-3 col-xs-3 col-md-3">
            <q-input
              class="q-ma-sm"
              v-model="text"
              bg-color="white"
              outlined
              dense
            />
          </div>
          <div class="col-3 col-xs-3 col-md-3">
            <q-input
              class="q-ma-sm"
              v-model="text"
              bg-color="white"
              outlined
              dense
            />
          </div>
        </div>
      </div>
    </q-card>
  </div>
</template>
<script setup>
import { defineComponent, ref } from "vue";
const text = ref("####");

const props = defineComponent({
  name: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});
</script>
<!-- 
<script>
export default defineComponent({
  name: "DashCard",
  props: {
    name: {
      type: String,
      required: true,
    },

    body: {
      type: String,
      default: "",
    },
  },
});
</script> -->
<style lang="sass" scoped>
.column > div
  padding: 0.5rem
.column + .column
  margin-top: 1rem
</style>

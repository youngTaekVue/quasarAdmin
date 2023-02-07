<template>
  <div class="col-6 col-xs-6 col-md-6 col-lg-4 q-pa-sm">
    <q-card class="my-card text-white" style="border-radius: 1rem">
      <q-img
        class="absolute"
        style="border-radius: 1rem"
        src="~/assets/images/23.jpeg"
      />

      <div class="row justify-between">
        <div class="col-4 text-left q-ml-md">
          <q-avatar rounded size="4.5rem">
            <q-img src="~assets/images/chip.png" />
          </q-avatar>
        </div>
        <div class="col-4 text-right q-mr-md">
          <q-avatar rounded size="4.5rem">
            <q-img src="~assets/images/visa.png" />
          </q-avatar>
        </div>
      </div>
      <div class="row text-center z-top">
        <div class="col-3 col-xs-3 col-md-3">
          <q-input
            class="q-ma-md"
            v-model="text"
            bg-color="white"
            outlined
            dense
          />
        </div>
        <div class="col-3 col-xs-3 col-md-3">
          <q-input
            class="q-ma-md"
            v-model="text"
            bg-color="white"
            outlined
            dense
          />
        </div>
        <div class="col-3 col-xs-3 col-md-3">
          <q-input
            class="q-ma-md"
            v-model="text"
            bg-color="white"
            outlined
            dense
          />
        </div>
        <div class="col-3 col-xs-3 col-md-3">
          <q-input
            class="q-ma-md"
            v-model="text"
            bg-color="white"
            outlined
            dense
          />
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

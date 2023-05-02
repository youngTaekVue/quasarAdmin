<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Components" />
      <q-breadcrumbs-el label="ApexChart" />
    </q-breadcrumbs>
  </div>

  <div class="q-pa-xs">
    <div class="row">
      <div class="col-12 col-xs-12 col-md-12 col-lg-12 q-pa-sm">
        <q-card class="my-card fit">
          <p class="lead">
            Below is an example form built entirely with Bootstrap's form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p>
        </q-card>
      </div>
      <div class="col-12 col-xs-12 col-md-3 col-lg-3 q-pa-sm">
        <q-card class="my-card fit">
          <label for="sel_json"> <h4 class="mb-2">API 명</h4></label>
          <div class="q-gutter-md">
            <q-select
              v-model="model"
              outlined
              :option="options"
              label="Outlined"
            />

            <vue-json-pretty
              :data="getJosn"
              :showIcon="true"
              :showLine="false"
              :show-double-quotes="false"
              style="position: relative"
            />
          </div>
        </q-card>
      </div>
      <div class="col-12 col-xs-12 col-md-3 col-lg-3 q-pa-sm">
        <q-card class="my-card fit">
          <h4 class="mb-3">Billing address</h4>
          <q-input v-model="text" filled type="textarea" />
          <!-- <textarea class="form-control" id="after_json" rows="10"></textarea> -->
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";
import userList from "src/assets/data/sampleData1.json";
import { api } from "boot/axios";
const model = ref(null);
const options = ref([]);
let getJosn = ref();

options.value = [
  { label: "select option 1", value: "value1" },
  { label: "select option 2", value: "value2" },
  { label: "select option 3", value: "value3" },
  { label: "select option 4", value: "value4" },
];
onMounted(() => {
  // onloadJson();
});

function onloadJson() {
  let test = userList.map((items) => {
    console.log(items);

    return items;
  });
  getJosn.value = test;
  console.log(JSON.stringify(test));
}
</script>
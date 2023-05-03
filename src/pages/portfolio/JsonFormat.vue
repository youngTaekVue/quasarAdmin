<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Components" />
      <q-breadcrumbs-el label="ApexChart" />
    </q-breadcrumbs>
  </div>

  <div class="q-pa-xs">
    <div class="row">
      <div
        class="col-12 col-xs-12 col-md-12 col-lg-12 q-pa-sm"
        style="height: 120px"
      >
        <q-card class="my-card fit">
          <p class="lead">
            Below is an example form built entirely with Bootstrap's form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p>
        </q-card>
      </div>
      <div class="col-12 col-xs-12 col-md-6 col-lg-3 q-pa-sm">
        <q-card class="my-card fit q-pa-md">
          <div class="q-gutter-md">
            <q-select
              v-model="model"
              outlined
              :options="options"
              @update:model-value="onloadJson($event.value)"
              label="API 항목"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    No results
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
            <q-scroll-area style="height: 600px">
              <vue-json-pretty
                :data="getJosn"
                :showIcon="true"
                :showLength="true"
                :showLine="false"
                :show-double-quotes="false"
                style="position: relative"
                v-if="showText"
              />
            </q-scroll-area>
          </div>
        </q-card>
      </div>
      <div class="col-12 col-xs-12 col-md-6 col-lg-3 q-pa-sm">
        <q-card class="my-card fit q-pa-md">
          <q-field class="q-pb-sm" borderless label="Outlined" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                Field content
              </div>
            </template>
          </q-field>
          <q-scroll-area style="height: 600px">
            <q-input v-model="text" outlined filled autogrow />
          </q-scroll-area>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";
import { useJsonStore } from "stores/custom";
//import { api } from "boot/axios";
const model = ref(null);
const options = ref();
const showText = ref(false);
let getJosn = ref();

options.value = [
  { label: "select option 1", value: "1" },
  { label: "select option 2", value: "2" },
  { label: "select option 3", value: "3" },
];

onMounted(() => {
  // onloadJson();
});

function onloadJson(param) {
  getJosn.value = "";
  let store = useJsonStore(param);
  let prettyJson = store.map((items) => {
    return items;
  });
  showText.value = true;
  getJosn.value = prettyJson;
}
</script>
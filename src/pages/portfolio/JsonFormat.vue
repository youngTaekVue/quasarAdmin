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
        <q-card class="my-card fit q-pa-md">
          <p class="text-h4 text-center">JSON API Compare</p>
          <p class="text-body1">
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
              :options="selOptions"
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
                v-if="showText"
                :data="getJosn1"
                :showLength="true"
                :showLine="false"
                :show-double-quotes="false"
                outlined
                style="position: relative"
              />
              <q-inner-loading :showing="spinVisible">
                <q-spinner-gears size="50px" color="primary" />
              </q-inner-loading>
            </q-scroll-area>
          </div>
        </q-card>
      </div>
      <div class="col-12 col-xs-12 col-md-6 col-lg-3 q-pa-sm">
        <q-card class="my-card fit q-pa-md">
          <q-field class="q-pb-sm" borderless placeholder="Placeholder">
            <template v-slot:append>
              <q-btn color="primary" label="Compare" @click="jsonCompare()" />
            </template>
          </q-field>
          <q-scroll-area style="height: 600px">
            <q-input v-model="getJosn2" type="textarea" outlined rows="31" />
          </q-scroll-area>
        </q-card>
      </div>
      <div class="col-12 col-xs-12 col-md-6 col-lg-3 q-pa-sm">
        <q-card class="my-card fit q-pa-md">
          <q-scroll-area style="height: 600px">
            <div class="text-body1" id="result1"></div>
          </q-scroll-area>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";
import { onMounted, ref } from "vue";
import { useJsonStore } from "stores/custom";
//import { api } from "boot/axios";
const model = ref(null);
const selOptions = ref();
const showText = ref(false);
const spinVisible = ref(false);

const getJosn1 = ref();
const getJosn2 = ref();
const result1 = "";

selOptions.value = [
  { label: "select option 1", value: "1" },
  { label: "select option 2", value: "2" },
  { label: "select option 3", value: "3" },
];

onMounted(() => {
  // onloadJson();
});

function onloadJson(param) {
  getJosn1.value = "";
  spinVisible.value = true;

  let prettyJson = useJsonStore(param);

  showText.value = true;
  spinVisible.value = false;
  getJosn1.value = prettyJson;
  getJosn2.value = JSON.stringify(prettyJson);
}

function jsonCompare() {
  //const objecJson = [];
  const target1Json = getJosn1.value;
  const target2Json = getJosn2.value; //object 화 시켰다는 가정하에

  let objecJson = target2Json.split("");
  console.log(objecJson);

  // let test = target2Json.split("");
  // for (let i = 0; i < test.length; i++) {
  //   if (test[i] == "{") {
  //     console.log("여기");
  //     test[i] = test[i].replaceAll(/{/g, "!!!!!!");
  //     console.log(test[i]);
  //   }
  // }

  let divCont = "";
  for (let i = 0; i < objecJson.length; i++) {
    let conSpan = document.createElement("div");
    conSpan.setAttribute("id", "value" + objecJson[i]);

    if (objecJson[i] == "{") {
      objecJson[i] = objecJson[i].replaceAll(/{/g, "{\n'");
    } else if (objecJson[i] == ":") {
      objecJson[i] = objecJson[i].replaceAll(/:/g, "':");
    }

    divCont += objecJson[i];

    console.log(divCont);

    // //result1.push(conSpan);
    // document.getElementById("result1").appendChild = conSpan;
  }

  // objecJson.forEach((element) => {
  //   console.log(element);

  //   result1.value = element;
  // });

  // if (getJosn1.value == true && getJosn2.value == true) {
  //   alert("test");
  //   result1.value = "compare";
  //   //   return false;
  // }
  // if ((test = "")) {
  //   alert("test");
  //   return false;
  // }
}
</script>
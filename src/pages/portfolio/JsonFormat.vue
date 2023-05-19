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
            <p class="text-subtitle1 text-center">선택한 JSON Data</p>
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
            <q-scroll-area style="height: 550px">
              <q-table
                flat
                bordered
                row-key="name"
                separator="cell"
                :rows="getJosn1"
                :columns="columns"
                :hideBottom="true"
                :table-class="{ 'q-pa-sm': [true] }"
                :rows-per-page-options="[0]"
              />

              <!-- <vue-json-pretty
                v-if="showText"
                :data="getJosn1"
                :showLength="true"
                :showLine="false"
                :show-double-quotes="false"
                outlined
                style="position: relative"
              /> -->
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
              <q-btn
                color="primary"
                label="Compare"
                @click="jsonCompare()"
                style="width: 100%"
              />
            </template>
          </q-field>
          <q-scroll-area style="height: 600px">
            <q-input v-model="getJosn2" type="textarea" outlined rows="31" />
          </q-scroll-area>
        </q-card>
      </div>
      <div class="col-12 col-xs-12 col-md-12 col-lg-6 q-pa-sm">
        <q-card class="my-card fit q-pa-md">
          <p class="text-subtitle1 text-center">JSON API Compare</p>
          <q-scroll-area style="height: 600px">
            <q-table
              flat
              bordered
              row-key="name"
              separator="cell"
              :rows="result1"
              :columns="columns"
              :hideBottom="true"
              :rows-per-page-options="[0]"
            />
            <br />

            <div>
              <p class="text-subtitle1 text-center">누락된 항목</p>
              <q-list dense padding>
                <q-item clickable v-ripple v-for="item in result2" :key="item">
                  <q-item-section>{{ item }}</q-item-section>
                </q-item>
              </q-list>
            </div>
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
const result1 = ref();
const result2 = ref();

selOptions.value = [
  { label: "select option 1", value: "1" },
  { label: "select option 2", value: "2" },
  { label: "select option 3", value: "3" },
];

const columns = [
  {
    name: "id",
    label: "no",
    field: (row) => row.id + 1,
    align: "center",
    sortable: true,
    classes: "q-pa-sm",
    style: "max-width: 50px",
    headerClasses: "bg-primary text-white",
    headerStyle: "max-width: 50px",
  },
  {
    name: "name",
    required: true,
    label: "API 항목명",
    align: "left",
    field: (row) => row.name,
    sortable: true,
    classes: "q-pa-sm",
    style: "width: 40px",
  },
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
}

function jsonCompare() {
  const target1Json = getJosn1.value;
  const target2Json = getJosn2.value; //object 화 시켰다는 가정하에

  const arrKeyTarget1 = [];
  const arrKeyTarget2 = [];
  const arrValTarget2 = [];

  const valueTarget1 = [];
  const valueTarget2 = [];

  let objecJson = target2Json.split("");
  let parseData = JSON.parse(getJosnParse(objecJson));

  let addList = {};

  // for (let [key, value] of Object.entries(target1Json)) {
  //   arrKeyTarget1.push(key);
  //   arrValTarget1.push(value);
  // }

  for (let [key, value] of Object.entries(parseData[0])) {
    arrKeyTarget2.push(key);
    arrValTarget2.push(value);
  }

  console.dirxml("===== target1Json =====");
  console.dirxml(target1Json);

  let num = 0;

  for (let j = 0; j < target1Json.length; j++) {
    let testList = {};

    testList = target1Json[j].name;

    arrKeyTarget1.push(testList);
    for (let k = 0; k < arrKeyTarget2.length; k++) {
      if (target1Json[j].name == arrKeyTarget2[k]) {
        let pushList = {};
        pushList.id = num;
        pushList.name = arrKeyTarget2[k];
        pushList.value = arrValTarget2[k];

        valueTarget2.push(pushList);
        num++;
      }
    }
  }

  let difference1 = arrKeyTarget1.filter((x) => !arrKeyTarget2.includes(x)); // 결과 1
  let difference2 = arrKeyTarget2.filter((x) => !arrKeyTarget1.includes(x)); // 결과 1

  //arrKeyTarget1.push(addList);

  valueTarget2.push(difference2);

  console.log(valueTarget2);

  result1.value = valueTarget2;
  result2.value = difference1;
}

// "Repairs common JSON errors by replacing incorrect quotes"
function getJosnParse(array) {
  let divCont = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "{") {
      array[i] = array[i].replace("{", '{"');
    } else if (array[i] == ",") {
      array[i] = array[i].replace(",", ',"');
    } else if (array[i] == ":") {
      array[i] = array[i].replace(":", '":');
    } else if (array[i] == "\n") {
      array[i] = array[i].replace("\n", "");
    } else if (array[i] == " ") {
      array[i] = array[i].replace(" ", "");
    }
    divCont += array[i];
    //console.dirxml(divCont);
  }
  divCont = divCont.replace(/,"{"/g, ',{"');

  return divCont;
}

function targetForEach(array, target) {
  Object.keys(array).forEach((element) => {
    return target.push(element);
  });
}
// function targetForEach(array, target1, target2) {
//   for (let [key, value] of Object.entries(array[0])) {
//     target1.push(key);
//     target2.push(value);
//   }
// }
</script>
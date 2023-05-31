<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card
      flat
      bordered
      class="col-3 col-md-3 bg-grey-1 ellipsis my-card"
      v-show="skeleton"
      v-for="item in itemList"
      :key="item"
    >
      <q-item>
        <q-item-section avatar>
          <q-skeleton type="QAvatar" />
        </q-item-section>
        <q-item-section>
          <q-item-label caption>
            <q-skeleton type="text" />
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-card-actions class="q-gutter-md">
        <q-skeleton type="QBtn" />
        <q-skeleton type="QBtn" />
      </q-card-actions>
    </q-card>

    <q-card
      flat
      bordered
      class="col-3 col-md-3 bg-grey-1 ellipsis my-card"
      v-for="item in poketList"
      :key="item.id"
    >
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <q-img class="cursor-pointer" :src="item.imageUrl" :ratio="16 / 20">
              <div class="text-subtitle2 absolute-bottom text-center">
                <div class="text-h5 q-mt-sm q-mb-xs ellipsis">
                  {{ item.name }}
                </div>
              </div>
            </q-img>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label> {{ item.imageUrl }} </q-item-label>
        </q-item-section>
      </q-item>

      <q-card-actions class="q-gutter-md">
        <q-btn flat color="dark" label="Share" />
        <q-btn flat color="primary" label="Book" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { api } from "boot/axios";

const poketList = ref(null);
const itemList = ref(null);

const expanded = ref(false);
let skeleton = true;

onMounted(() => {
  getPoketList();
});

function getPoketList() {
  let arrTarget = "";
  api
    .get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
    .then(function (response) {
      arrTarget = response.data.results;
      console.log(arrTarget);
      setPoketImage(arrTarget);
      itemList.value = arrTarget;
    });
}

async function setPoketImage(array) {
  for (let i = 0; i < array.length; i++) {
    let poketName = "";
    poketName = array[i].name;
    if (poketName != "") {
      await api
        .get("https://pokeapi.co/api/v2/pokemon/" + poketName)
        .then(function (response) {
          const imgeName =
            response.data.sprites.other.dream_world.front_default;
          array[i].imageUrl = imgeName;
        });
    }
  }
  skeleton = false;
  poketList.value = array;
}
</script>

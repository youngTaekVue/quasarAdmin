<template>
  <q-infinite-scroll @load="onLoad" :offset="50">
    <div class="row">
      <!-- contents Skeleton -->
      <div
        class="col-12 col-md-3 q-pa-sm bg-grey-1"
        v-show="skeleton"
        v-for="item in itemList"
        :key="item.name"
      >
        <q-card flat bordered class="ellipsis my-card">
          <q-item>
            <q-item-section avatar>
              <q-skeleton type="QAvatar" size="50px" />
            </q-item-section>
            <q-item-section>
              <q-item-label>
                <q-skeleton type="text" />
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-card-actions class="q-gutter-md">
            <q-skeleton type="QBtn" />
            <q-skeleton type="QBtn" />
          </q-card-actions>
        </q-card>
      </div>
      <div
        class="col-12 col-md-3 q-pa-sm bg-grey-1"
        v-for="item in poketList"
        :key="item.name"
      >
        <PoketCard :data="item" />
      </div>
    </div>
    <template v-slot:loading>
      <div class="row justify-center q-my-md">
        <q-spinner-dots color="primary" size="40px" />
      </div>
    </template>
  </q-infinite-scroll>
</template>

<script setup>
import PoketCard from "components/card/PoketCard.vue";
import { onMounted, ref } from "vue";
import { api } from "boot/axios";

let skeleton = true;
const poketList = ref(null);
const itemList = ref(null);

onMounted(() => {
  getPoketList();
});

function getPoketList() {
  let arrTarget = "";
  api
    .get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
    .then(function (response) {
      arrTarget = response.data.results;
      itemList.value = arrTarget;
      setPoketImage(arrTarget);
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
  //console.log(poketList.value);
}
</script>

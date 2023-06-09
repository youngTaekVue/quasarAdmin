<template>
  <div class="row">
    <PoketCard v-for="item in poketList" :key="item.name" :data="item" />
  </div>
</template>

<script setup>
import PoketCard from "components/card/PoketCard.vue";
import { onMounted, ref } from "vue";
import { api } from "boot/axios";
const poketList = ref(null);

onMounted(() => {
  getPoketList();
});

function getPoketList() {
  let arrTarget = "";
  api
    .get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
    .then(function (response) {
      arrTarget = response.data.results;
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
  //skeleton = false;
  poketList.value = array;
  //console.log(poketList.value);
}
</script>

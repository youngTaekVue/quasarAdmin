<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card
      flat
      bordered
      class="col-3 col-md-3 bg-grey-1 ellipsis my-card"
      v-for="item in poketList"
      :key="item.id"
    >
      <q-card-section>
        <div class="text-overline text-orange-9">Overline</div>
        <!-- <q-img class="cursor-pointer" :src="item.imageUrl" :ratio="16 / 20">
          <div class="text-subtitle2 absolute-bottom text-center">
            <div class="text-h5 q-mt-sm q-mb-xs ellipsis">{{ item.name }}</div>
          </div>
        </q-img> -->

        <div class="text-caption text-grey ellipsis">
          {{ item.imageUrl }}
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="dark" label="Share" />
        <q-btn flat color="primary" label="Book" />

        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expand()"
        />
        <!-- @click="expanded = !expanded" -->
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            {{ item.body }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { api } from "boot/axios";

const poketList = ref(null);
const expanded = ref(false);

onMounted(() => {
  getPoketList();
});

// function expand() {
//   console.log("test");
// }

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
  poketList.value = array;
}
</script>

<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card
      flat
      bordered
      class="col-6 col-md-2 bg-grey-1 ellipsis my-card"
      v-for="item in list"
      :key="item.id"
    >
      <q-card-section>
        <div class="text-overline text-orange-9">Overline</div>
        <q-img :src="item.imageUrl">
          <div class="text-subtitle2 absolute-bottom text-center">
            <div class="text-h5 q-mt-sm q-mb-xs ellipsis">{{ item.name }}</div>
          </div>
        </q-img>

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

<!-- <q-table title="유저정보" :rows="rows" :columns="columns" row-key="name" /> -->
<script setup>
import { onMounted, ref } from "vue";
import { api } from "boot/axios";

const list = ref(null);
const expanded = ref(false);
onMounted(() => {
  getApi();
});

function expand() {
  console.log("test");
}

function getApi() {
  const params = "3";
  api
    .get("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0")
    .then(function (response) {
      const arrTarget = response.data.results;
      console.log(arrTarget);
      const targetUrl = arrTarget[20];
      console.log("test1");

      getApi1(targetUrl);
    });
}

function getApi1(target) {
  api.get(target.url).then(function (response) {
    console.log(response.data);
    const imgeName = response.data.sprites.other.dream_world.front_default;

    target.imageUrl = imgeName;
    console.log(target);
    list.value = [target];
  });
}
</script>

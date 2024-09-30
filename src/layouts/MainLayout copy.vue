<template>
  <q-layout view="lHh Lpr lFf" id="mainContainer">
    <q-page-container>
      <div v-if="$q.screen.xs == true">
        <ContentHead />
        <ContentBody />
      </div>
      <div v-else>
        {{ $q.screen }}
      </div>
      <router-view />
      <IndexPage2 />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";
import ContentHead from "src/components/ContentHead.vue";
import ContentBody from "src/components/ContentBody.vue";

const $q = useQuasar();

defineOptions({
  name: "MainLayout",
});

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  font-family: "궁서", "돋움", "굴림";
}
#q-app {
  /* width: 50%; */
  height: 100%;
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  padding: auto;
  font-size: 0.9rem;
}

#mainContainer {
  background: linear-gradient(rgb(244, 255, 255), rgb(255, 240, 252));
}
</style>
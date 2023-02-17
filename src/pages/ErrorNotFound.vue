<template>
  <div class="fullscreen text-center q-pa-md flex flex-center">
    <q-img class="absolute op-sm" src="~/assets/images/bgImage.png" />
    <q-card class="my-card">
      <q-card-section>
        <q-input outlined v-model="text" :dense="dense" />
      </q-card-section>
      <q-card-section>
        <q-input outlined v-model="text" :dense="dense" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorNotFound",
});
</script>
<style scoped>
</style>
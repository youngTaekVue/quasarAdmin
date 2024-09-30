<template>
  <q-card flat bordered class="ellipsis my-card">
    <q-item>
      <q-item-section avatar>
        <q-avatar size="50px">
          <q-img class="cursor-pointer" :src="data.imageUrl" :ratio="16 / 20">
            <div class="text-subtitle2 absolute-bottom text-center">
              <div class="text-h5 q-mt-sm q-mb-xs ellipsis">
                {{ data.name }}
              </div>
            </div>
          </q-img>
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label> {{ data.name }} </q-item-label>
      </q-item-section>
    </q-item>
    <q-card-actions class="q-gutter-md">
      <q-btn flat color="dark" label="Share" />
      <q-btn flat color="primary" label="Book" />
    </q-card-actions>
  </q-card>
</template> 

<script setup>
import { defineProps } from "vue";
defineProps(["data"]);
</script>
 
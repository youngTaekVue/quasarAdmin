<template>
  <div class="col-3 col-md-3 q-pa-sm bg-grey-1">
    <q-card flat bordered class="ellipsis my-card">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <q-img class="cursor-pointer" :src="data.imageUrl" :ratio="16 / 20">
              <div class="text-subtitle2 absolute-bottom text-center">
                <div class="text-h5 q-mt-sm q-mb-xs ellipsis">
                  {{ data.imageUrl }}
                </div>
              </div>
            </q-img>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label> {{ data.imageUrl }} </q-item-label>
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
import { defineProps, ref } from "vue";
let skeleton = true;
defineProps(["data"]);
</script>
 
<template>
  <!-- Columns are always 50% wide, on mobile and desktop -->

  <div class="col-xs-12 col-md-6 col-lg-3 q-pa-sm">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-subtitle2 text-grey-13">{{ body }}</div>
        <div class="text-h5">{{ name }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DashCard",
  props: {
    name: {
      type: String,
      required: true,
    },

    body: {
      type: String,
      default: "",
    },
  },
});
</script>

<template>
  <q-item clickable tag="a" :to="link">
    <q-avatar
      rounded
      color="primary"
      text-color="white"
      :icon="icon"
      size="2.5rem"
    />
    <q-item-section class="text-center text-h6"> {{ title }} </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
  },
});
</script>

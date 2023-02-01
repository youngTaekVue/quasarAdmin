<template>
  <q-item-label header> {{ title }}</q-item-label>
  <div v-for="idx in childrens" :key="idx.title" v-bind="idx">
    <q-item clickable tag="a" :to="idx.link">
      <q-avatar rounded color="grey-1" :icon="idx.icon" size="3.0rem" />
      <q-item-section class="q-pl-sm">
        {{ idx.title }}
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },

    childrens: {
      type: String,
      default: "",
      required: true,
    },
  },
});
</script>

<template>
  <q-item-label header> {{ title }}</q-item-label>
  <div class="q-mb-lg">
    <q-item
      clickable
      tag="a"
      :to="idx.to"
      v-for="idx in childrens"
      :key="idx.title"
      v-bind="idx"
    >
      <q-avatar
        class="bg-white shadow-1"
        rounded
        :icon="idx.icon"
        size="2.5rem"
      />
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
    },
  },
});
</script>

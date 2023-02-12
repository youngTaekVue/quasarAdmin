<template>
  <button @click="count++">{{ count }}</button>
</template>

<!-- <script setup>
import { ref, onMounted } from "vue";

const count = ref(0);

// expose to template and other options API hooks

onMounted(() => {
  console.log(count); // 0
});
</script> -->

<script>
import { ref } from "vue";

export default {
  setup() {
    const count = ref(0);

    // expose to template and other options API hooks
    return {
      count,
    };
  },

  mounted() {
    console.log(this.count); // 0
  },
};
</script>

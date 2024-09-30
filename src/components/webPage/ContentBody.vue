<template>
  <div class="q-pa-md">
    <gallery
      :images="images"
      :index="index"
      :options="options"
      @close="index = null"
    ></gallery>
    <div class="row justify-center">
      <q-img
        class="image col-4"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="index = imageIndex"
        :ratio="1"
        :style="{
          backgroundImage: 'url(' + image + ')',
        }"
      ></q-img>
    </div>
  </div>
</template>
  
  <script>
import VueGallery from "vue-gallery";

export default {
  data: function () {
    return {
      images: [
        "https://picsum.photos/500/300?t=" + Math.random(),
        "https://picsum.photos/500/300?t=" + Math.random(),
        "https://picsum.photos/500/300?t=" + Math.random(),
        "https://picsum.photos/500/300?t=" + Math.random(),
        "https://picsum.photos/500/300?t=" + Math.random(),
        "https://picsum.photos/500/300?t=" + Math.random(),
      ],
      index: null,
      options: {
        closeOnEscape: false,
      },
    };
  },

  components: {
    gallery: VueGallery,
  },
};
</script> 
  
  <style scoped>
.image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
}
</style>
<template>
  <div class="q-pa-md text-center">
    <div class="row justify-center">
      <q-avatar class="text-center" size="24px">
        <img src="/public/icons/favicon-96x96.png" />
      </q-avatar>
    </div>
    <div class="row justify-center q-mt-md">
      <div class="col q-px-md">
        <q-skeleton type="text" v-if="load" />
        <span v-else>{{ name.eName1 }} </span>
      </div>
      <div class="col q-px-md">
        <q-skeleton type="text" v-if="load" />
        <span v-else>{{ name.eName2 }} </span>
      </div>
    </div>
    <div class="row justify-center text-center q-mt-xs">
      <div class="col q-px-md">
        <q-skeleton type="text" v-if="load" />
        <span v-else>{{ name.kName1 }} </span>
      </div>
      <div class="col q-px-md">
        <q-skeleton type="text" v-if="load" />
        <span v-else>{{ name.kName2 }} </span>
      </div>
    </div>
    <div class="row justify-center text-center q-mt-md">
      <div class="col q-mt-xs">
        <q-skeleton height="400px" v-if="load" />
        <transition
          v-else
          appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <q-carousel
            swipeable
            animated
            v-model="slide"
            :autoplay="autoplay"
            ref="carousel"
            infinite
            v-show="showSimulatedReturnData"
          >
            <q-carousel-slide :name="1" :img-src="mainUrl" />
          </q-carousel>
        </transition>
        <q-inner-loading :showing="visible">
          <q-spinner-tail size="3rem" color="primary" />
        </q-inner-loading>
      </div>
    </div>
    <div class="row justify-end text-center q-mt-md">
      <div class="col-4">
        <q-skeleton type="text" v-if="load" />
        <div v-else>{{ name.eName1 }}</div>
        <q-skeleton type="text" v-if="load" />
        <div v-else>{{ name.eName1 }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useTimeout } from "quasar";
const { registerTimeout } = useTimeout();
const load = ref();
const slide = ref(1);
const autoplay = ref(false);
const images = import.meta.glob("/public/icons/*");
const arrImages = [];
const visible = ref(false);
const showSimulatedReturnData = ref(false);

load.value = true;

const name = {
  eName1: "Oh young taek",
  eName2: "Kim daee",
  kName1: "홍길동",
  kName2: "장길산",
};

const mainImages = [
  { name: "이름", url: "https://cdn.quasar.dev/img/mountains.jpg" },
];

// main carousel image set
const mainUrl = ref();
mainUrl.value = "https://picsum.photos/500/300?t=" + Math.random();

for (const path in images) {
  images[path]().then((mod) => {
    console.log(path);
    arrImages.push(path);
  });
}

onMounted(() => {
  onLoadImage();
});

function onLoadImage() {
  visible.value = true;
  showSimulatedReturnData.value = false;
  mainUrl.value = "https://picsum.photos/500/300?t=" + Math.random();

  registerTimeout(() => {
    visible.value = false;
    showSimulatedReturnData.value = true;
    load.value = false;
  }, 3500); // in 3 seconds
}
</script>

<style scoped>
#imageLogo {
  text-align: left;
  font-size: 2.2rem;
  color: rgb(214, 228, 20);
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  rotate: -15deg;
}
</style>

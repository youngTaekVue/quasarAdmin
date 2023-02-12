<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal no-border class="bg-grey-1 text-grey-9">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title> Admin Tmplate </q-toolbar-title>

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn
            round
            dense
            flat
            color="grey-8"
            icon="message"
            v-if="$q.screen.gt.sm"
          >
            <q-tooltip>Messages</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating> 2 </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      class="bg-grey-1"
      :width="250"
    >
      <q-list class="q-pa-lg">
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-scroll-area
      class="bg-grey-1 window-height"
      :thumb-style="thumbStyle"
      :bar-style="barStyle"
    >
      <q-page-container class="window-height">
        <router-view />
      </q-page-container>
    </q-scroll-area>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const leftDrawerOpen = ref(false);
const rvisible = ref(false);
const linksList = ref();

linksList.value = [
  {
    title: "Essential Links",
    childrens: [
      {
        title: "홈",
        icon: "home",
        to: "/",
      },
    ],
  },
  {
    title: "Components",
    childrens: [
      {
        title: "QuasarCard",
        icon: "credit_card",
        to: "/components/QuasarCard",
      },
      {
        title: "CustomTable",
        icon: "table_view",
        to: "/components/CustomTable",
      },
      {
        title: "ApexChart",
        icon: "table_view",
        to: "/components/ApexChart",
      },
    ],
  },
  {
    title: "Portfolio",
    childrens: [
      {
        title: "CardPoket",
        icon: "code",
        to: "/portfolio/CardPoket",
      },
      {
        title: "TimeLine",
        icon: "code",
        to: "/portfolio/TimeLine",
      },
      {
        title: "CustomTable",
        icon: "code",
        to: "/portfolio/CustomTable",
      },
      {
        title: "CardPoket",
        icon: "code",
        to: "/portfolio/CardPoket",
      },
    ],
  },
];

const essentialLinks = linksList;

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const thumbStyle = {
  right: "4px",
  borderRadius: "5px",
  backgroundColor: "#027be3",
  width: "2px",
  opacity: 0.95,
};

const barStyle = {
  right: "2px",
  borderRadius: "9px",
  backgroundColor: "#027be3",
  width: "5px",
  opacity: 0.2,
};
</script>

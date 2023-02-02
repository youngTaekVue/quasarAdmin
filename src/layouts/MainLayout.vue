<template>
  <q-layout view="lHh Lpr lFf ">
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
          :key="link.id"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-1">
      <q-scroll-area
        class="window-height"
        :visible="visible"
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
      >
        <router-view />
      </q-scroll-area>
    </q-page-container>
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
    id: 1,
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
    id: 2,
    title: "Components",
    childrens: [
      {
        title: "CardPoket",
        icon: "credit_card",
        to: "/components/CardPoket",
      },
      {
        title: "CustomTable",
        icon: "table_view",
        to: "/components/CustomTable",
      },
    ],
  },
  {
    id: 3,
    title: "Portfolio",
    childrens: [
      {
        title: "CardPoket",
        icon: "code",
        to: "/portfolio/CardPoket",
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

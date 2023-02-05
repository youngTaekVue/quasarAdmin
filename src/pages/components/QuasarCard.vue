<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" />
      <q-breadcrumbs-el label="Components" />
      <q-breadcrumbs-el label="Breadcrumbs" />
    </q-breadcrumbs>
  </div>
  <div class="q-pa-xs">
    <div class="row">
      <div class="col-12 col-xs-12 col-md-12 q-pa-sm">
        <div class="row">
          <ShinHan />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import ShinHan from "src/components/card/Cardtype1.vue";
</script>

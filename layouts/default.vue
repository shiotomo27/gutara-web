<template>
  <v-app>
    <loading-animation></loading-animation>
    <div class="bg-gray" :class="mobile ? 'pa-2' : 'pa-6'">
      <v-card class="rounded-xl elevation-10">
        <layout-mini-header v-if="mobile"></layout-mini-header>
        <layout-header v-else></layout-header>
        <slot />
      </v-card>
      <div class="pa-12 d-flex justify-center">
        <div class="justify-center">
          Follow me
          <v-icon class="mx-2" style="opacity: 0.5">mdi-heart</v-icon>Contact us
          <div class="d-flex justify-center my-6" style="opacity: 0.5">
            <div class="pa-2"><v-icon>mdi-twitter</v-icon></div>
            <div class="pa-2"><v-icon>mdi-instagram</v-icon></div>
            <div class="pa-2"><v-icon>mdi-email</v-icon></div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script setup lang="ts">
  import { useDisplay } from 'vuetify'
  const { mobile } = useDisplay()
</script>

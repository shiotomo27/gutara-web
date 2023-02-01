<template>
  <v-timeline>
    <v-timeline-item v-for="n in 3" :key="n" dot-color="grey">
      <template v-slot:opposite>
        <span class="text-strong text-disabled">Phase {{ n }}</span>
      </template>
      <v-card class="elevation-2" min-width="300">
        <div class="d-flex align-center pa-2">
          <div>
            <v-img
              :src="items[n - 1]"
              class="rounded"
              style="overflow: hidden"
              width="80"
              height="80"
            ></v-img>
          </div>
          <v-card-text>{{ text[n - 1] }}</v-card-text>
        </div>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script setup lang="ts">
  const items = [
    '/images/gutara6.png',
    '/images/gutara5.png',
    '/images/gutara4.png',
  ]
  const text = [
    'いっしょにぐうたら..しよ？',
    'まだぐうたらするよ...',
    'もーーっとぐうたら...',
  ]
</script>

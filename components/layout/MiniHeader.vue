<template>
  <div>
    <div
      class="gtr-app-bar text-strong d-flex align-center px-8"
      :style="
        displayBox
          ? 'position: fixed; top: 0; padding: 0 8px 0 8px; width: calc(100% - 8px); background-color: #e8e8e8; transition: background-color 1s;'
          : ''
      "
    >
      <nuxt-link to="/">
        <div>GUTARA</div>
      </nuxt-link>
      <v-spacer></v-spacer>
      <common-mint-btn></common-mint-btn>
    </div>
    <div v-if="displayBox" style="height: 64px"></div>
  </div>
</template>

<script setup lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'

  const router = useRouter()
  const route = useRoute()
  const displayBox = ref(false)
  onMounted(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 24) {
        displayBox.value = true
      } else {
        displayBox.value = false
      }
    })
  })

  const goToMint = () => {
    router.push({
      path: '/mint',
    })
  }

  const goToHome = (position: string | undefined) => {
    router.push({
      path: '/',
      query: {
        p: position,
      },
    })
  }

  const goToShop = () => {
    let url = 'https://gutaramania.thebase.in'
    window.open(url, '_blank')
  }
</script>

<style lang="scss">
  .gtr-app-bar {
    font-size: 20px !important;
    height: 64px;
    width: 100%;
    z-index: 100;

    .v-btn {
      font-size: 18px !important;
    }
  }

  .gtr-app-bar-item {
    padding: 0 10px 0 10px;
    margin: 0 10px 0 10px;
  }

  a {
    text-decoration: none;
    color: black;
  }
</style>

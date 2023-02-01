<template>
  <g-btn width="100px" @click="goToMint"> MINT </g-btn>
</template>

<script setup lang="ts">
  const router = useRouter()
  const goToMint = () => {
    router.push({
      path: '/mint',
    })
  }
</script>

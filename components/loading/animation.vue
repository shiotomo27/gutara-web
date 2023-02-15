<template>
  <v-fade-transition>
    <v-sheet
      v-if="show"
      class="d-flex align-center justify-center"
      style="
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1000;
      "
      color="white"
    >
      <div>
        <div
          style="
            width: 300px;
            height: 300px;
            margin-top: -100px;
            margin-bottom: -100px;
          "
        >
          <v-img
            v-show="start[1]"
            class="fadein"
            style="position: absolute"
            src="/images/loading_1.png"
            width="300px"
            height="300px"
          ></v-img>
          <v-img
            v-show="start[2]"
            class="fadein"
            style="position: absolute"
            src="/images/loading_2.png"
            width="300px"
            height="300px"
          ></v-img>
          <v-img
            v-show="start[3]"
            class="fadein"
            style="position: absolute"
            src="/images/loading_3.png"
            width="300px"
            height="300px"
          ></v-img>
        </div>
        <div v-if="start[0]" class="text-center fadein" style="width: 300px">
          <div class="text-subtitle-1 wavetext">
            <span>L</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>
      </div>
    </v-sheet>
  </v-fade-transition>
</template>

<script setup lang="ts">
  const show = ref(true)
  const start = ref([false, false, false, false])
  setTimeout(() => {
    start.value[0] = true
  }, 200)
  setTimeout(() => {
    start.value[1] = true
  }, 700)
  setTimeout(() => {
    start.value[2] = true
  }, 1000)
  setTimeout(() => {
    start.value[3] = true
  }, 1300)
  setTimeout(() => {
    show.value = false
  }, 2500)
</script>

<style>
  .fadein {
    position: absolute;
    opacity: 0;
    animation-name: fadein;
    animation-duration: 0.3s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
  }

  @keyframes fadein {
    0% {
      opacity: 0;
      transform: translateY(0);
    }
    100% {
      opacity: 1;
      transform: translateY(50px);
    }
  }

  .wavetext {
    /* アニメーションの領域確保 */
    margin-top: 0.8em;
  }

  .wavetext span {
    display: inline-block;
    animation: wave-text 1.3s ease-in-out infinite;
  }

  /* アニメーション開始タイミングをずらす */
  .wavetext span:nth-of-type(1) {
    animation-delay: 0s;
  }
  .wavetext span:nth-of-type(2) {
    animation-delay: 0.05s;
  }
  .wavetext span:nth-of-type(3) {
    animation-delay: 0.1s;
  }
  .wavetext span:nth-of-type(4) {
    animation-delay: 0.15s;
  }
  .wavetext span:nth-of-type(5) {
    animation-delay: 0.2s;
  }
  .wavetext span:nth-of-type(6) {
    animation-delay: 0.25s;
  }
  .wavetext span:nth-of-type(7) {
    animation-delay: 0.3s;
  }
  .wavetext span:nth-of-type(8) {
    animation-delay: 0.35s;
  }
  .wavetext span:nth-of-type(9) {
    animation-delay: 0.4s;
  }
  .wavetext span:nth-of-type(10) {
    animation-delay: 0.45s;
  }

  @keyframes wave-text {
    00% {
      transform: translateY(0em);
    }
    30% {
      transform: translateY(-0.8em);
    }
    60% {
      transform: translateY(0em);
    }
    100% {
      transform: translateY(0em);
    }
  }
</style>

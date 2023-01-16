<template>
  <div style="width: 100%; height: 150px;">
    <div style="margin-top: -70px;">
      <div :class="reverse ? 'loop_wrap_r' : 'loop_wrap'">
        <ul>
          <li>
            <v-img :width="size" :height="size" src="/images/cactus.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/camera.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/candy.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/cupcake_brown.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/donut.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/kakigori_blue.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/cupcake_pink.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/onigiri.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/popcorn.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/cupcake-01.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/radio_red.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/camera.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/candy.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/cupcake_brown.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/donut.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/kakigori_blue.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/cupcake_pink.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/onigiri.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/popcorn.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/cupcake-01.png" />
          </li>
        </ul>
        <ul>
          <li>
            <v-img :width="size" :height="size" src="/images/cactus.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/camera.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/candy.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/cupcake_brown.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/donut.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/kakigori_blue.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/cupcake_pink.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/onigiri.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/popcorn.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/cupcake-01.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/radio_red.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/camera.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/candy.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/cupcake_brown.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/donut.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/kakigori_blue.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/cupcake_pink.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/onigiri.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/popcorn.png" />
          </li>
          <li>
            <v-img :width="size" :height="size" src="/images/cupcake-01.png" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    offset: {
      default: 0,
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      size: 180,
    };
  },
};
</script>

<style lang="scss">
.loop_wrap {
  display: flex;
  width: 110vw;
  height: 300px;
  // overflow: visible;
}

.loop_wrap ul {
  width: auto;
  display: flex;
  height: 100%;
}

.loop_wrap .v-image {
  margin: 5px;
  border-radius: 15px;
  // overflow: visible;
  border: 6px solid white;
}

@keyframes loop {
  0% {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}

@keyframes loop2 {
  0% {
    transform: translateX(0);
  }
  to {
    transform: translateX(-200%);
  }
}

.loop_wrap ul:first-child {
  animation: loop 250s -125s linear infinite;
}

.loop_wrap ul:last-child {
  animation: loop2 250s linear infinite;
}

ul {
  list-style: none;
}

.loop_wrap_r {
  display: flex;
  width: 110vw;
  height: 300px;
  // overflow: visible;
}

.loop_wrap_r ul {
  width: auto;
  display: flex;
  height: 100%;
}

.loop_wrap_r .v-image {
  margin: 5px;
  border-radius: 15px;
  // overflow: visible;
  border: 6px solid white;
}

@keyframes loopr {
  0% {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}

@keyframes loop2r {
  0% {
    transform: translateX(0);
  }
  to {
    transform: translateX(-200%);
  }
}

.loop_wrap_r ul:first-child {
  animation: loopr 220s -110s linear infinite reverse;
}

.loop_wrap_r ul:last-child {
  animation: loop2r 220s linear infinite reverse;
}
</style>

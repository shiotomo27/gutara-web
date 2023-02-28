<template>
  <div
    v-scroll.self="onScroll"
    style="
      padding-bottom: 100px;
      max-height: 100vh;
      overflow-y: scroll;
      overflow-x: hidden;
    "
  >
    <div
      ref="top"
      class="px-6 d-flex flex-column justify-center"
      style="width: 100%; padding-top: 50px; background-color: white"
    >
      <div>
        <item-grid :size="mobile ? 100 : 180"></item-grid>
      </div>
      <v-row :class="mobile ? 'align-center' : 'align-end'">
        <v-col v-if="mobile" cols="12" class="pt-12 text-center">
          <div class="d-flex justify-center">
            <v-img
              src="/images/gutara.png"
              max-width="200px"
              max-height="150px"
            ></v-img>
          </div>
        </v-col>
        <v-col :cols="mobile ? 12 : 7">
          <div
            class="gtr-content px-xs-2 px-md-12"
            :class="mobile ? 'text-center' : 'text-left'"
            style="margin: 50px 0 50px 0"
          >
            <h3 class="mb-2">みんなのこころをぐうたらさせるNFTコレクション</h3>
            <h1 class="mb-2">いっしょにぐうたらしませんか？</h1>
            <div class="mb-4">
              "ぐうたらまにあ"<br />
              それは忙しいみなさんの心をどうにか癒したい、いっしょにぐうたらしてほしい、そんなきもちから生まれたキャラクターです。<br />
              あなたといっしょにぐうたらしたり、あなたの代わりにぐうたらしたり……<br />
              1人1つは持ってほしい、そんなコレクションです。
            </div>
            <div>
              <common-mint-btn></common-mint-btn>
            </div>
          </div>
        </v-col>
        <v-col v-if="!mobile" cols="5" class="pb-12">
          <v-img
            src="/images/gutara.png"
            max-width="400px"
            max-height="200px"
          ></v-img>
        </v-col>
      </v-row>
      <div>
        <item-grid reverse :size="mobile ? 100 : 180"></item-grid>
      </div>
    </div>
    <div
      ref="about"
      class="pa-6 pb-0 d-flex flex-column align-center"
      style="width: 100%"
    >
      <div class="gtr-content text-center">
        <h3 class="mb-2 text-light fade-in">ぐうたらしてるいぬ…？</h3>
        <h1 class="mb-2 fade-in" style="transition-delay: 100ms">
          ぐうたらまにあってなあに？
        </h1>
        <div class="mb-4 fade-in" style="transition-delay: 200ms">
          何かと忙しいみなさんを癒したい、たまにはぐうたらしてほしい、そう思った作者が作ったのがこの"ぐうたらまにあ"<br />
          ぐうたらするのが得意です。あなたといっしょにぐうたらしたり、忙しい時には代わりにぐうたらしたり…<br />
          NFTジェネラティブを少しずつ不定期で、フェーズを分けて販売します。<br />
          積極的にアパレル展開もしていき、生活にぐうたらを添えていきたいと思っています。
        </div>
        <div>
          <common-mint-btn></common-mint-btn>
        </div>
      </div>
      <v-row style="width: 100%" no-gutters class="px-1 pb-2">
        <v-col
          :cols="mobile ? 3 : 2"
          v-for="(i, n) in mobile ? 4 : 6"
          :key="n"
          class="d-flex child-flex pa-1 fade-in"
          :style="'transition-delay: ' + 50 * i + 'ms'"
        >
          <v-img
            :src="'images/gutara' + i + '.png'"
            :lazy-src="'images/gutara' + i + 'lazy.png'"
            aspect-ratio="1"
            cover
            class="grey lighten-2 rounded-lg"
          >
          </v-img>
        </v-col>
      </v-row>
    </div>
    <div
      ref="roadmap"
      class="pa-6 d-flex justify-center bg-gray-2"
      style="width: 100%; min-height: 10px"
    >
      <div class="gtr-content-full text-center">
        <div class="d-flex justify-center align-center mb-6 fade-in">
          <v-img
            src="images/candy.png"
            max-width="80px"
            max-height="80px"
          ></v-img>
          <h2 class="text-strong">ROADMAP</h2>
          <v-img
            src="images/candy.png"
            max-width="80px"
            max-height="80px"
          ></v-img>
        </div>
        <div
          class="text-left d-flex justify-center"
          :class="mobile ? 'flex-column' : ''"
          style="width: 100%"
        >
          <v-card class="ma-2 pa-4 rounded-xl">
            <div class="d-flex px-4 py-2">
              <div class="text-strong text-h6">Phase1</div>
              <v-spacer></v-spacer>
              <div class="text-strong">
                <div>
                  <span class="mr-2 text-lg">200</span>
                  <span class="text-strong text-h6">items</span>
                </div>
              </div>
            </div>
            <v-row class="pa-2 justify-center">
              <v-sheet
                class="rounded-xl pa-6 rounded-lg ma-2"
                style="transition-delay: 100ms; height: 350px"
                color="grey-lighten-4"
              >
                <div class="text-strong">
                  <div>Presale</div>
                  <div>
                    <span class="mr-2 text-lg">0.015</span>
                    <span class="text-strong text-h6">eth</span>
                  </div>
                </div>
                <div>
                  <div class="d-flex my-4">
                    <v-icon class="mr-1">mdi-check</v-icon>
                    AL保有者のみミント可能
                  </div>
                  <div class="d-flex my-4">
                    <v-icon class="mr-1">mdi-check</v-icon>
                    3/1(Wed)21:00 - 3/2(Thu)21:00
                  </div>
                  <div class="d-flex my-4">
                    <v-icon class="mr-1">mdi-check</v-icon>
                    MAX 2ミント/ウォレット
                  </div>
                </div>
                <div class="mt-8 text-center">
                  <common-mint-btn></common-mint-btn>
                </div>
              </v-sheet>
              <v-sheet
                class="rounded-xl pa-6 rounded-lg ma-2"
                style="transition-delay: 200ms; height: 350px"
                color="grey-lighten-4"
              >
                <div class="text-strong">
                  <div>Public Sale</div>
                  <div>
                    <span class="mr-2 text-lg">0.018</span>
                    <span class="text-strong text-h6">eth</span>
                  </div>
                </div>
                <div>
                  <div class="d-flex my-4">
                    <v-icon class="mr-1">mdi-check</v-icon>
                    だれでもミント可能
                  </div>
                  <div class="d-flex my-4">
                    <v-icon class="mr-1">mdi-check</v-icon>
                    3/2(Thu)22:00 -
                  </div>
                  <div class="d-flex my-4">
                    <v-icon class="mr-1">mdi-check</v-icon>
                    MAX 2ミント/ウォレット
                  </div>
                </div>
                <div class="mt-8 text-center">
                  <common-mint-btn></common-mint-btn>
                </div>
              </v-sheet>
            </v-row>
          </v-card>
          <v-card class="ma-2 pa-4 rounded-xl">
            <div class="d-flex px-4 py-2">
              <div class="text-strong text-h6">Phase2</div>
              <v-spacer></v-spacer>
              <div class="text-strong" style="opacity: 0">
                <div>
                  <span class="mr-2 text-lg">???</span>
                  <span class="text-strong text-h6">items</span>
                </div>
              </div>
            </div>
            <v-row class="pa-2 justify-center">
              <v-sheet
                class="rounded-xl pa-6 rounded-lg ma-2 d-flex align-center justify-center font-weight-bold"
                style="
                  transition-delay: 200ms;
                  height: 350px;
                  min-width: 250px;
                  width: 100%;
                "
                color="grey-lighten-4"
              >
                <v-icon class="mr-1">mdi-calendar</v-icon>
                4月中旬予定
              </v-sheet>
            </v-row>
          </v-card>
        </div>
        <div class="text-center pa-2">
          ミントには別途ガス代がかかります。ご了承ください。
        </div>
      </div>
    </div>
    <div class="pa-6 d-flex justify-center" style="width: 100%">
      <v-row class="gtr-content text-center" style="width: 100%">
        <div class="pa-4" :style="mobile ? 'width: 100%' : 'width: 300px'">
          <h3 class="mb-2 text-light fade-in">ぐうたらしてるいぬ…？</h3>
          <h1 class="mb-2 fade-in" style="transition-delay: 100ms">
            ぐうたらぐっず
          </h1>
          <div class="mb-4 fade-in" style="transition-delay: 200ms">
            何かと忙しいみなさんを癒したい、たまにはぐうたらしてほしい、そう思った作者が作ったのがこの"ぐうたらまにあ"<br />
            ぐうたらするのが得意です。あなたといっしょにぐうたらしたり、忙しい時には代わりにぐうたらしたり…
          </div>
          <div>
            <g-btn width="100px" @click="goToShop">SHOP</g-btn>
          </div>
        </div>
        <v-col class="px-4">
          <v-row style="width: 100%" no-gutters>
            <v-col
              :cols="mobile ? 6 : 4"
              v-for="(item, n) in merchItems"
              :key="n"
              class="d-flex child-flex pa-2 fade-in"
              :style="'transition-delay: ' + n * 50 + 'ms'"
            >
              <v-img
                :src="'images/' + item + '.png'"
                aspect-ratio="1"
                cover
                style="transform: scale(0.8)"
                class="grey lighten-2 rounded-lg"
              >
              </v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useDisplay } from 'vuetify'
  const { mobile } = useDisplay()
  const route = useRoute()
  const merchItems = ref(['item1', 'item2', 'item3', 'item4', 'item5', 'item6'])
  const goToShop = () => {
    let url = 'https://gutaramania.thebase.in'
    window.open(url, '_blank')
  }

  const top = ref()
  const about = ref()
  const roadmap = ref()

  const scrollTo = (ref: string) => {
    if (ref === 'top') {
      top.value?.scrollIntoView({ behavior: 'smooth' })
    }
    if (ref === 'about') {
      about.value?.scrollIntoView({ behavior: 'smooth' })
    }
    if (ref === 'roadmap') {
      roadmap.value?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const onScroll = () => {
    console.log('onScroll')
    const els = document.querySelectorAll('.fade-in')
    for (let index = 0; index < els.length; index += 1) {
      const el = els[index]
      const rect = el.getBoundingClientRect()
      if (rect.top >= 0 && rect.bottom <= window.innerHeight + 100) {
        els[index].classList.add('on')
      }
    }
  }

  watchEffect(() => {
    const p = route.query.p
    console.log(p)
    if (p) {
      scrollTo(p.toString())
    } else {
      scrollTo('top')
    }
  })
</script>

<style lang="scss">
  .fade-in {
    transition: opacity 0.5s ease-out, transform 0.3s ease-out;
  }

  .fade-in {
    opacity: 0;
    transform: translateY(50px);
  }

  .fade-in.on {
    opacity: 1;
    transform: translateY(0px);
  }
</style>

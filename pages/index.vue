<template>
  <div>
    <div class="px-6 d-flex justify-center"
      style="width: 100%; padding-top: 50px;"
      :style="'background-image: url(images/header.png); background-size: cover; background-position: right;'"
    >
      <div class="gtr-content" style="margin: 50px 0 100px 0">
        <h3 class="mb-2 text-light">みんなのこころをぐうたらさせるNFTコレクション</h3>
        <h1 class="mb-2">いっしょにぐうたらしませんか？</h1>
        <div class="mb-4">
          "ぐうたらまにあ"<br/>
          それは忙しいみなさんの心をどうにか癒したい、いっしょにぐうたらしてほしい、そんなきもちから生まれたキャラクターです。<br/>
          あなたといっしょにぐうたらしたり、あなたの代わりにぐうたらしたり……<br/>
          1人1つは持ってほしい、そんなコレクションです。
        </div>
        <div>
          <btn-mint></btn-mint>
        </div>
      </div>
    </div>
    <div class="pa-6 pb-0 d-flex justify-center" style="width: 100%">
      <div class="gtr-content text-center">
        <h3 class="mb-2 text-light">ぐうたらしてるいぬ…？</h3>
        <h1 class="mb-2">ぐうたらまにあってなあに？</h1>
        <div class="mb-4">
          何かと忙しいみなさんを癒したい、たまにはぐうたらしてほしい、そう思った作者が作ったのがこの"ぐうたらまにあ"<br/>
          ぐうたらするのが得意です。あなたといっしょにぐうたらしたり、忙しい時には代わりにぐうたらしたり…<br/>
          NFTジェネラティブを少しずつ不定期で、フェーズを分けて販売します。<br/>
          積極的にアパレル展開もしていき、生活にぐうたらを添えていきたいと思っています。
        </div>
        <div>
          <btn-mint></btn-mint>
        </div>
      </div>
    </div>
    <v-row style="width: 100%" no-gutters class="px-1 pb-2">
      <v-col :cols="mobile ? 3 : 2" v-for="(i, n) in (mobile ? 4 : 6)" :key="n" class="d-flex child-flex pa-1">
        <v-img
          :src="'images/gutara' + i + '.png'"
          aspect-ratio="1"
          cover
          class="grey lighten-2 rounded-lg"
        >
        </v-img>
      </v-col>
    </v-row>
    <div class="pa-6 d-flex justify-center bg-gray" style="width: 100%">
      <div class="gtr-content-full text-center">
        <h2 class="mb-6 text-strong">Release Info</h2>
        <div class="text-left d-flex justify-center" style="width: 100%">
          <v-card class="px-6 py-10 rounded-lg mx-4">
            <div class="text-strong">
              <div>Phase1</div>
              <div>
                <span class="mr-2 text-lg">0.01</span>
                <span>eth</span>
              </div>
            </div>
            <div>
              <div class="d-flex my-4">
                <v-icon class="mr-1">mdi-check</v-icon>
                1/x 販売開始
              </div>
              <div class="d-flex my-4">
                <v-icon class="mr-1">mdi-check</v-icon>
                全150アイテム販売
              </div>
              <div class="d-flex my-4">
                <v-icon class="mr-1">mdi-check</v-icon>
                AL所有者のみ
              </div>
            </div>
            <div class="mt-8 text-center">
              <btn-mint></btn-mint>
            </div>
          </v-card>
          <v-card class="px-6 py-10 rounded-lg mx-4">
            <div class="text-strong">
              <div>Phase2</div>
              <div>
                <span class="mr-2 text-lg">0.01</span>
                <span>eth</span>
              </div>
            </div>
            <div>
              <div class="d-flex my-4">
                <v-icon class="mr-1">mdi-check</v-icon>
                1/x 販売開始
              </div>
              <div class="d-flex my-4">
                <v-icon class="mr-1">mdi-check</v-icon>
                全150アイテム販売
              </div>
              <div class="d-flex my-4">
                <v-icon class="mr-1">mdi-check</v-icon>
                だれでもミント可能
              </div>
            </div>
            <div class="mt-8 text-center">
              <btn-mint></btn-mint>
            </div>
          </v-card>
        </div>
      </div>
    </div>
    <div class="pa-6 d-flex justify-center" style="width: 100%">
      <div class="gtr-content text-center d-flex" style="width: 100%">
        <div class="pa-4" style="width: 300px;">
          <h3 class="mb-2 text-light">ぐうたらしてるいぬ…？</h3>
          <h1 class="mb-2">ぐうたらぐっず</h1>
          <div class="mb-4">
            何かと忙しいみなさんを癒したい、たまにはぐうたらしてほしい、そう思った作者が作ったのがこの"ぐうたらまにあ"<br/>
            ぐうたらするのが得意です。あなたといっしょにぐうたらしたり、忙しい時には代わりにぐうたらしたり…
          </div>
          <div>
            <btn-mint></btn-mint>
          </div>
        </div>
        <div class="px-4" style="width: calc(100% - 250px)">
          <v-row style="width: 100%" no-gutters>
            <v-col cols="4" v-for="(item, n) in merchItems" :key="n" class="d-flex child-flex pa-2">
              <v-img
                :src="'images/' + item + '.png'"
                aspect-ratio="1"
                cover
                style="transform: scale(0.8);"
                class="grey lighten-2 rounded-lg"
              >
              </v-img>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()
const merchItems = ["item1","item2","item3","item4","item5","item6"];
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

body {
  font-family: "M PLUS Rounded 1c";
  font-weight: 500;
}

.text-strong {
  font-family: "Righteous" !important;
  font-weight: bold !important;
}

.text-lg {
  font-family: "Righteous" !important;
  font-weight: 700 !important;
  font-size: 42px !important;
}

.text-light {
  color: #525252;
}

.gtr-content {
  margin-top: 40px;
  margin-bottom: 60px;
  max-width: 1024px;
}

.gtr-content-full {
  margin-top: 30px;
  margin-bottom: 30px;
  width: 1024px;
}

.bg-gray {
  background-color: #e8e8e8;
}
</style>
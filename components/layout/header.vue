<template>
  <div>
    <div
      class="gtr-app-bar text-strong d-flex align-center px-8"
      :style="displayBox ? 'position: fixed; top: 0; padding: 0 24px 0 24px; width: calc(100% - 48px); background-color: #e8e8e8; transition: background-color 1s;' : ''"
    >
      <div>GUTARA</div>
      <v-spacer></v-spacer>
      <div class="gtr-app-bar-item">
        TOP
      </div>
      <div class="gtr-app-bar-item">
        ABOUT
      </div>
      <div class="gtr-app-bar-item">
        MINT
      </div>
      <div class="gtr-app-bar-item">
        SHOP
      </div>
      <v-spacer></v-spacer>
      <btn-mint></btn-mint>
    </div>
    <div v-if="displayBox" style="height: 64px;">
      
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted,ref } from "vue"

export default defineComponent ({
  setup () {
    const displayBox=ref(false)
    onMounted(()=>{
      window.addEventListener('scroll',()=>{
        if(window.scrollY > 24){
          displayBox.value=true
        }else{
          displayBox.value=false
        }
      })
    })
    return{
      displayBox
    }
  }
})
</script>

<style lang="scss">
.gtr-app-bar {
  font-size: 20px;
  height: 64px;
  width: 100%;
  z-index: 100;
}

.gtr-app-bar-item {
  padding: 0 10px 0 10px;
  margin: 0 10px 0 10px;
}
</style>
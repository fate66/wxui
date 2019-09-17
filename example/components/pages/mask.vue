<template>
    <div>
        <wx-mask v-if="show" @click="()=>show=false"></wx-mask>

        <wx-button :margin-top="100" @click="show=true" background="red" :width="400">显示mask</wx-button>

        <wx-mask v-show="show2" :animation="true" @click="()=>show2=false"></wx-mask>

        <wx-button :margin-top="100" :animation="true" @click="show2=true" background="red" :width="400">带动画显示mask
        </wx-button>

    </div>
</template>

<script>

  export default {
    data() {
      return {
        show: false,
        show2: false
      }
    },
    created() {
    },
    methods: {}
  }
</script>

<style lang='scss' scoped>
    .title {
        margin-top: 60px;
        color: coral;
        font-size: 36px;
        margin-left: 40px;
        margin-bottom: 40px;
    }
</style>

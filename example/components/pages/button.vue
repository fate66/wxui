<template>
    <div>
        <div class="title">默认样式</div>
        <wx-button @click="click1">默认样式</wx-button>

        <div class="title">自定义样式1</div>
        <wx-button @click="click1" background="red" :width="400">自定义样式1</wx-button>

        <div class="title">自定义样式2</div>
        <wx-button @click="click1" background="black" :width="400" :borderRadius="44">自定义样式1</wx-button>
    </div>
</template>

<script>

  export default {
    data() {
      return {}
    },
    created() {
    },
    methods: {
      click1() {
        this.$toast({content: '点击btn'})
      }
    }
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

<template>
    <wx-fixed>
        <div class="fixed">我是fixed</div>
    </wx-fixed>
</template>

<script>

  export default {
    data() {
      return {
        showCard: true
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

    .fixed {
        width: 750px;
        height: 120px;
        line-height: 120px;
        text-align: center;
        background: blue;
        color: white;
    }
</style>

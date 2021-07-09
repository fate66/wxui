<template>
    <div>
<!--        <a class="title" href="https://fangxin.weidian.com/fxx_h5/weihubao/article/articleList.html">demo</a>-->
    </div>
</template>

<script>

  export default {
    data() {
      return {
        epInfoes: [0, 1, 2, 3],
        num: 0,
        num2: 0
      }
    },
    created() {
    },
    methods: {
      change(num) {
        this.num = num
      },
      change2(num) {
        this.num2 = num
      }
    }
  }
</script>

<style lang='scss' scoped>
    .title {
        padding-top: 260px;
        color: blue;
        font-size: 36px;
        margin-left: 140px;
        margin-bottom: 40px;
        display: block;
    }
</style>

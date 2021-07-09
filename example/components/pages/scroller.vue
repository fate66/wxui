<template>
    <div class="box">
        <div class="title">宽度、高度设置。默认全屏</div>

<!--        <wx-scroller :width="650" :height="600">-->
<!--            <div class="row" v-for="(item, i) in list" :key="i">{{i}}</div>-->
<!--        </wx-scroller>-->
    </div>
</template>

<script>

  export default {
    data() {
      return {
        list: Array(400)
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

    .row {
        width: 100%;
        height: 80px;
        line-height: 80px;
        text-align: center;
        border-bottom: 1px white solid;
        background: #F0F0F0;
        color: #3535;
    }
    .box{
        padding-left: 30px;
    }
</style>

<template>
    <wx-card :show.sync="showCard">
        <div class="exist-card">
            <div class="title">已为该用户建档的顾问</div>
            <wx-button :width="600" :borderRadius="0" :marginTop="270">确定继续建档吗</wx-button>
        </div>
    </wx-card>
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

    .exist-card {
        .title {
            margin-top: 80px;
            text-align: center;
            font-size: 34px;
            font-family: PingFang-SC-Regular;
            margin-bottom: 50px;
        }
        .empty {
            height: 150px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: PingFang-SC-Regular;
            font-size: 30px;
            color: #353535;
            letter-spacing: 0;
        }
    }
</style>

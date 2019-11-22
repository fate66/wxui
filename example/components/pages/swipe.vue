<template>
    <div>
        <h1 class="title">样式一：轮播到第{{num}}个</h1>
        <div class="swipe-box">
            <wx-swipe :nextMargin="16" :previousMargin="50" :autoplay="true" @change="change" :showIndicator="true">
                <wx-swipe-item v-for="i in epInfoes" :key="i">
                    <div :class="['swipe-item', i===0&&'first-swipe-item']">
                        <div class="item">
                            test{{i}}
                        </div>
                    </div>
                </wx-swipe-item>
            </wx-swipe>
        </div>
        <h1 class="title">样式二：轮播到第{{num2}}个</h1>
        <div class="swipe-box-2">
            <wx-swipe @change="change2" :autoplay="true" :showIndicator="true">
                <wx-swipe-item v-for="i in epInfoes" :key="i">
                    <div :class="['swipe-item']">
                        <div :class="['item' , i%2==0&&'item-bg']">
                            test{{i}}
                        </div>
                    </div>
                </wx-swipe-item>
            </wx-swipe>
        </div>
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
        margin-top: 60px;
        color: coral;
        font-size: 36px;
        margin-left: 40px;
        margin-bottom: 40px;
    }

    .swipe-box {
        margin-top: 40px;
        .swipe-item {
            margin-right: 16px;
            display: flex;
            justify-content: center;
            .item {
                background: red;
                width: 650px;
                height: 420px;
            }
        }
        .first-swipe-item {
            margin-left: 50px;
        }
    }

    .swipe-box-2 {
        .swipe-item {
            display: flex;
            justify-content: center;
            .item {
                background: red;
                width: 750px;
                height: 420px;
                font-size: 34px;
                text-align: center;
                color: white;
            }
            .item-bg {
                background: blue;
            }
        }
    }
</style>

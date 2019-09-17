<template>
    <div :class="['toast', !iconShow&&'wx-toast', iconShow&&'wx-icon-toast']">
        <!--<img v-if="iconShow" src="./suc.png"/>-->
        <div v-html="content"></div>
    </div>
</template>

<script>

  export default {
    props: {
      content: {
        type: String,
        default: ''
      },
      icon: {
        type: String,
        default: ''
      }
    },
    computed: {},
    data() {
      return {
        iconShow: false
      }
    },
    created() {
      this.iconShow = !!this.icon
    },
    methods: {
    }
  }
</script>

<style lang='scss' scoped>
    .toast {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        max-width: 540px;
        background: rgba(0, 0, 0, 0.7);
        box-sizing: border-box;
    }

    .wx-toast {
        padding: 40px 50px;
        min-height: 120px;
        div {
            font-size: 30px;
            color: white;
            text-align: center;
        }
    }

    .wx-icon-toast {
        padding: 40px 40px;
        img {
            width: 100px;
            height: 72px;
        }
        div {
            font-size: 26px;
            color: white;
            text-align: center;
            margin-top: 30px;
        }
    }
</style>

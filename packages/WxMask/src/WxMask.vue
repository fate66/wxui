<template>
    <transition :name="fade">
        <div class="wx-mask" @click="click" :style="{background: `rgba(0, 0, 0, ${opacity})`}">
            <div @click.stop="()=>{}">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
  export default {
    name: 'WxMask',
    props: {
      animation: {
        type: String,
        default: ''
      },
      opacity: {
        type: Number,
        default: 0.5
      }
    },
    data() {
      return {
        fade: this.animation && 'fade'
      }
    },
    components: {},
    created() {
    },
    methods: {
      click() {
        this.$emit('click')
      }
    },
    mounted() {
    }
  }
</script>

<style lang='scss' scoped>
    .wx-mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
        background: rgba(0, 0, 0, .5);
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>

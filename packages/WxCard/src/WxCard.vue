<template>
    <wx-mask v-if="show">
        <div class="mask-card">
            <div class="card">
                <div class="card-delete" @click="del">
                    <img src="../../../src/assets/img/del.png"/>
                </div>
                <slot></slot>
            </div>
        </div>
    </wx-mask>
</template>

<script>
  import WxMask from 'packages/WxMask'

  export default {
    name: 'WxCard',
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {}
    },
    components: {WxMask},
    created() {
    },
    methods: {
      click() {
        this.$emit('click')
      },
      del() {
        this.$emit('update:show', false)
      }
    },
    mounted() {
    }
  }
</script>

<style lang='scss' scoped>
    .mask-card {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        .card {
            background: white;
            border-radius: 16px;
            position: relative;
            min-width: 100px;
            min-height: 200px;
            .card-delete {
                padding: 12px 12px;
                position: absolute;
                top: 32px;
                right: 32px;
                img {
                    width: 22px;
                    height: 22px;
                    display: block;
                    position: absolute;
                    left: 0;
                    right: 0;
                }
            }
        }
    }
</style>

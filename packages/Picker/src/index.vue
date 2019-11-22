<template>
    <section>
        <section v-if="isCom" @click="selectMask" :class="['wx-pick', isCom&&'wx-pick-component']">
            <div class="pick-body">
                <picker v-for="(item, i) in list" :a="a" ref="picker" :defaultValue="defaultValues[i]||''" :list="item"
                        :key="i" :index="i"
                        :resets="resets" @change="selPick"></picker>
            </div>
        </section>
        <wx-mask v-else @select-mask="selectMask">
            <section class="wx-pick">
                <header class="pick-header">
                    <span @click.stop="hide">取消</span>
                    <span @click.stop="confirm">确认</span>
                </header>
                <div class="pick-body">
                    <picker v-for="(item, i) in list" ref="picker" :a="a" :defaultValue="defaultValues[i]||''" :list="item"
                            :key="i" :index="i"
                            :resets="resets" @change="selPick"></picker>
                </div>
            </section>
        </wx-mask>
    </section>
</template>

<script>

  import WxMask from '../../WxMask'
  import picker from './Picker'

  export default {
    name: 'WxPicker',
    props: {
      options: {
        type: Array,
        default: () => []
      },
      onConfirm: {
        type: Function,
        default: () => {
        }
      },
      vm: {
        type: Object,
        default: () => {
        }
      },
      onHide: {
        type: Function,
        default: () => {
        }
      },
      onChange: {
        type: Function,
        default: () => {
        }
      },
      defaultValues: {
        type: Array,
        default: () => []
      },
      isCom: {
        type: Boolean,
        default: true
      },
      a: {
        type: Number,
        validator: function (n) {
          return n < 0
        },
        default: -0.005
      }
    },
    data() {
      return {
        resets: [],
        sign: false,
        cacheData: this.options
      }
    },
    created() {
    },
    computed: {
      list() {
        let list = []
        if (this.cacheData.length) {
          if (!Array.isArray(this.cacheData[0])) {
            list.push(this.cacheData)
          } else {
            list = this.cacheData
          }
        }
        return list
      }
    },
    components: {WxMask, picker},
    watch: {
      options(val) {
        this.cacheData = val
        this.addResets(-1) // 当 options 变化时 需要将所有的picker进行重置
      }
    },
    methods: {
      confirm() {
        let data = {}
        this.$refs.picker && this.$refs.picker.forEach((ref, i, arr) => {
          const val = ref.getVal()
          if (arr.length == 1) {
            data = val
          } else {
            data[i] = val
          }
        })
        if (this.isCom) return data
        this.onConfirm(data, this)
        document.body.removeChild(this.$el)
      },
      selectMask() {
        this.hide()
      },
      hide() {
        this.onHide(this.value, this)
        document.body.removeChild(this.$el)
        this.$destroy()
      },
      addResets(index) {
        this.resets = []
        for (let i = index + 1; i < this.list.length; i++) {
          this.resets.push(i)
        }
      },
      selPick({index, data}) {
        this.addResets(index)
        this.onChange(this, {index, data})
      }
    },
    mounted() {
    },
    updated() {
    }
  }
</script>

<style lang='scss' scoped>

    .wx-pick {
        width: 750px;
        position: fixed;
        left: 0;
        bottom: 0;
        height: 590px;
        background-color: white;
        .pick-header {
            display: flex;
            padding: 20px 140px;
            height: 90px;
            align-items: center;
            background: #F7F7F7;
            box-shadow: 0 1px 0 0 #CDCDCD;
            justify-content: space-between;
            box-sizing: border-box;
            span {
                font-family: PingFang-SC-Regular;
                font-size: 36px;
                color: #52B992;
                letter-spacing: -0.6px;
                text-align: center;
            }
        }
        .pick-body {
            display: flex;
            width: 750px;
            height: 500px;
        }
    }

    .wx-pick-component {
        width: 750px;
        position: relative;
        height: 590px;
    }

</style>

<template>
    <div class="wx-grid">
        <div class="wx-grid-item" :style="itemSty(i)" v-for="(item, i) in grids" :key="i"
             @click="click(i, item)">
            <img :src="item.src"/>
            <span>{{item.label}}</span>
        </div>
    </div>
</template>

<script>
  /**
   * grids: 数据源
   * width： item宽度
   * column：几列
   */
  import {wpx2rem} from 'src/shared'

  export default {
    name: 'WxGrid',
    props: {
      grids: {
        type: Array,
        default: () => []
      },
      width: {
        type: Number,
        default: 112
      },
      column: {
        type: Number,
        default: 4
      }
    },
    computed: {
      signLF() {
        return (750 - this.width * this.column) / (2 * this.column)
      }
    },
    data() {
      return {}
    },
    created() {
    },
    components: {},
    methods: {
      itemSty(i) {
        return {
          width: wpx2rem(this.width),
          marginLeft: wpx2rem(i % this.column === 0 ? this.signLF : 2 * this.signLF)
        }
      },
      click(index, data) {
        this.$emit('click', {index, data})
      }
    }
  }
</script>

<style lang='scss' scoped>
    .wx-grid {
        width: 750px;
        padding: 0px 0px;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        .wx-grid-item {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 0;
            width: 112px;
            img {
                width: 100%;
                height: auto;
            }
            span {
                margin-top: 6px;
                font-family: PingFang-SC-Regular;
                font-size: 24px;
                color: #353535;
                letter-spacing: 0;
                text-align: center;
            }
        }
    }
</style>

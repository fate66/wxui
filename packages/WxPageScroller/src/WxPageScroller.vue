<template>
    <wx-scroller ref="scroller"
                 :onPullDownRefresh="onPullDownRefresh"
                 :onReachBottom="onReachBottom"
                 :stopReachBottom.sync="stopReachBottom"
                 :reachBottomSuc="reachBottomSuc"
                 v-bind="$attrs">
        <slot></slot>
    </wx-scroller>
</template>

<script>

  import WxScroller from '../../WxScroller'

  export default {
    name: 'WxPageScroller',
    props: {
      page: {
        type: Number,
        default: 0
      },
      pageSize: {
        type: Number,
        default: 10
      },
      data: {
        type: Object,
        default: () => {
        }
      },
      http: {
        type: Object,
        default: () => {
        }
      },
      noInitReq: {
        type: Boolean,
        default: false
      }
    },
    computed: {},
    data() {
      return {
        page_no: 0,
        stopReachBottom: false,
        showLoadMore: true,
        reachBottomSuc: false,
        startBottom: false,
        inner_http: null
      }
    },
    created() {
      this.inner_http = this.http && Object.keys(this.http) ? this.http : this.$http
      !this.noInitReq && this.getData()
    },
    components: {WxScroller},
    methods: {
      reset_scroll() {
        this.$refs.scroller.reset_scroll()
      },
      onPullDownRefresh() {
        this.reset_scroll()
        this.page_no = 0
        this.stopReachBottom = false
        this.getData()
      },
      onReachBottom() {
        this.page_no++
        this.startBottom = true
        this.getData()
      },
      get_res(res) {
        let data
        for (let k of this.data.key) {
          data = res[k]
          res = data
        }
        return data
      },
      getData(data = {}) {
        if (!this.data.url) {
          console.log('URL或KEY不能为空')
          return false
        }
        data.hasOwnProperty('page_no') && (this.page_no = data.page_no)
        let param = Object.assign({page_no: this.page_no, page_size: this.pageSize}, this.data.params, data)
        console.log(param, '请求的参数')
        this.inner_http.get(this.data.url, param, res => {
          if (res._ok) {
            const list = this.get_res(res)
            let length = list.length
            this.$emit('getListData', list, this.page_no, res)
            if (length < this.pageSize) {
              this.stopReachBottom = true
            }
            // 关闭上拉
            if (this.startBottom) {
              this.reachBottomSuc = !this.reachBottomSuc
              this.startBottom = false
            }
          }
        })
      }
    },
    mounted() {
    },
    beforeDestroy() {
    }
  }
</script>

<style lang='scss' scoped>
</style>

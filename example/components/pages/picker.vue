<template>
    <div class="box">
        <h1 class="title">样式一：滚轮选中{{sign_val}}</h1>
        <wx-button @click="click1" :width="400">弹出picker</wx-button>

        <h1 class="title">样式一，改变滚轮的速度，带默认值：滚轮选中{{sign_val_2}}</h1>
        <wx-button @click="click2" :width="400">弹出picker</wx-button>


        <h1 class="title">样式一,带默认值：{{two_val || default_val}}</h1>
        <wx-button @click="click3" :width="400">弹出picker</wx-button>

        <h1 class="title">样式二：滚轮选中{{html_val}}</h1>
        <wx-picker :options="sign" :isCom="true" :onChange="onChange"></wx-picker>
    </div>
</template>

<script>


  export default {
    data() {
      return {
        sign: [],
        sign_val: '',
        sign_val_2: 6,
        two_val: '',
        default_val: 'label91',
        two: [],
        html_val: 0
      }
    },
    created() {
      for (let i = 0; i < 200; i++) {
        this.sign.push(i)
        this.two.push({label: `label${i}`, id: i})
      }
    },
    methods: {
      click1() {
        const self = this
        this.$picker({
          options: this.sign,
          onConfirm(val, vm) {
            self.sign_val = val
          }
        })
      },
      click2() {
        const self = this
        this.$picker({
          options: this.sign,
          a: -0.002,
          defaultValues: [this.sign_val_2],
          onConfirm(val, vm) {
            self.sign_val_2 = val
          }
        })
      },
      click3() {
        const self = this
        this.$picker({
          options: this.two,
          defaultValues: [this.default_val],
          onConfirm(val, vm) {
            self.two_val = val
          }
        })
      },
      onChange(vm, {index, data}) {
        this.html_val = data
      }
    }
  }
</script>

<style lang='scss' scoped>
    .box{
        padding-bottom: 400px;
        .title {
            margin-top: 60px;
            color: coral;
            font-size: 36px;
            margin-left: 40px;
            margin-bottom: 40px;
            margin-left: 40px;
            margin-right: 40px;
        }
    }

</style>

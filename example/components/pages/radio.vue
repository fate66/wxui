<template>
    <div class="box">
        <h1 class="title">默认样式：默认选中{{sign_val_2}}</h1>
        <wx-radio :list="sign" @click="click1" v-model="sign_val_2"></wx-radio>

        <h1 class="title">间距可变</h1>
        <wx-radio :list="sign2" :margin-left="100"></wx-radio>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        sign: [{label: '好好好好', value: 1}, {label: '坏', value: 0}],
        sign_val: '',
        sign_val_2: 1,
        sign2: [{label: '好好好好', value: 1}, {label: '坏', value: 0}]
      }
    },
    created() {
    },
    methods: {
      click1(val) {
        this.sign_val = val
      },
      onChange(vm, {index, data}) {
        this.html_val = data
      }
    }
  }
</script>

<style lang='scss' scoped>
    .box {
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

<template>
    <div class="box">
        <h1 class="title">地址选择：{{val}}</h1>
        <wx-button @click="click1" :width="400">弹出picker</wx-button>

        <wx-address-picker defaultValues="河南省-焦作市-武陟县" @adsPicker="adsPicker" style="margin-top: 90px"></wx-address-picker>
    </div>
</template>

<script>

  export default {
    data() {
      return {
        val: ''
      }
    },
    created() {
    },
    methods: {
      click1() {
        this.$addressPicker('河南省-焦作市-武陟县', val => {
          this.val = val
        })
      },
      adsPicker(val) {
        this.val = val
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

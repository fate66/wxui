<template>
    <div class="box">
        <h1 class="title">日期选择：{{val}}</h1>
        <wx-button @click="click1" :width="400">弹出picker</wx-button>

        <!--<h1 class="title">日期选择二：{{v2}}</h1>-->
        <!--<wx-date-picker @datePicker="datePicker"></wx-date-picker>-->
    </div>
</template>

<script>
  export default {
    data() {
      return {
        val: '',
        v2: ''
      }
    },
    created() {
    },
    methods: {
      click1() {
        this.$datePicker({
          defaultValues: '1994-08-01',
        }, val => {
          this.val = val
        })
      },
      datePicker(val) {
        this.v2 = val
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
            margin-bottom: 80px;
            margin-left: 40px;
            margin-right: 40px;
        }
    }

</style>

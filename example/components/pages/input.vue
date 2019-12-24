<template>
    <div class="box">
        <wx-input label="默认样式：" v-model="wx_id_2" placeholder="请输入微信ID"></wx-input>

    </div>
</template>

<script>
  export default {
    data() {
      return {
        wx_id_2: ''
      }
    },
    created() {
    },
    methods: {
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

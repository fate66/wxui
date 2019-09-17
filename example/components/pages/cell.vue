<template>
    <div>
        <div class="title">默认样式</div>
        <wx-cell label="label" value="value" @click="selCell"></wx-cell>

        <div class="title">自定义label</div>
        <wx-cell @click="selCell">
            <div slot="label" class="label">自定义label</div>
        </wx-cell>

        <div class="title">label添加icon</div>
        <wx-cell label="label" @click="selCell">
            <div slot="icon" class="icon">*</div>
        </wx-cell>
        <div class="title">不带箭头</div>
        <wx-cell label="label" :link="false" @click="selCell"></wx-cell>

        <div class="title">带上边框,默认不带</div>
        <wx-cell label="label" :borderTop="true" @click="selCell"></wx-cell>

        <div class="title">value--slot</div>
        <wx-cell label="label" :borderTop="true" @click="selCell">
            <div slot="value" class="label">自定义value</div>
        </wx-cell>
    </div>
</template>

<script>

  export default {
    data() {
      return {}
    },
    created() {
    },
    methods: {
      selCell() {
        this.$toast({content: '点击cell'})
      }
    }
  }
</script>

<style lang='scss' scoped>
    .title {
        margin-top: 60px;
        color: coral;
        font-size: 36px;
        margin-left: 40px;
        margin-bottom: 40px;
    }

    .label, .icon {
        color: red;
    }

    .icon {
        margin-left: 10px;
    }
</style>

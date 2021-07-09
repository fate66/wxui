<template>
    <div>
        <div class="title">默认样式，item会进行均分</div>
        <div class="desc">选中的index：{{selIndex}}--{{selItem}}</div>
        <wx-tab :tabs="tabs" @click="click" v-model="selIndex"></wx-tab>

<!--        <div class="desc">选中的index：{{selIndex2}}&#45;&#45;{{selItem2}}</div>-->
<!--        <wx-tab :tabs="tabs" @click="click2" v-model="selIndex2"></wx-tab>-->

        <div class="title">改变线的宽度，默认是tab-item的宽度</div>
        <wx-tab :tabs="tabs" :line-width="50"></wx-tab>

        <div class="title">自定义样式，可滚动</div>
        <wx-tab :tabs="tabs2" :tab-width="100" :tab-margin-left="40"></wx-tab>

        <div class="title">自定义样式，宽度自适应</div>
        <wx-tab :tabs="tabs3" :tab-margin-left="40"></wx-tab>

        <div class="title">字体颜色默认与选中</div>
        <wx-tab :tabs="tabs2" default-color="red" active-color="black" :tab-width="100" :tab-margin-left="40"></wx-tab>
    </div>
</template>

<script>

  export default {
    data() {
      return {
        tabs: [{
                 label: '菜单一', id: 0
               },
               {label: '菜单二', id: 1},
               {label: '菜单三', id: 2},
               {label: '菜单四', id: 3}],
        tabs2: [{
                  label: '菜单一', id: 0
                },
                {label: '菜单二', id: 1},
                {label: '菜单三', id: 2, tabMarginLeft: 120},
                {label: '菜单四', id: 3},
                {label: '菜单五', id: 4},
                {label: '菜单六', id: 5, tabMarginLeft: 100},
                {label: '菜单七', id: 6, tabMarginRight: 40}],
        tabs3: [{
                  label: '菜单一', id: 0
                },
                {label: '菜单二二', id: 1},
                {label: '菜单三', id: 2},
                {label: '菜单四四四', id: 3},
                {label: '菜单五', id: 4},
                {label: '菜单六', id: 5},
                {label: '菜单七', id: 6, tabMarginRight: 40}],
        selIndex: 2,
        selIndex2: 3,
        selItem: {label: '菜单三', id: 2},
        selItem2: {label: '菜单三', id: 2}
      }
    },
    created() {
    },
    methods: {
      click(data) {
        this.selItem = data
      },
      click2(data, i) {
        this.selItem2 = data
        this.selIndex = i
      }
    }
  }
</script>

<style lang='scss' scoped>
    .title {
        margin-top: 100px;
        color: coral;
        font-size: 36px;
        margin-left: 40px;
        margin-bottom: 40px;
    }

    .desc {
        margin: 20px 40px;
        font-size: 32px;
    }
</style>

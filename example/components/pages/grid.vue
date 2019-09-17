<template>
    <div>
        <div class="title">默认样式（4列）</div>
        <wx-grid :grids="grids" @click="click"></wx-grid>

        <div class="title">展示3列</div>
        <wx-grid :grids="grids" :column="3"  @click="click"></wx-grid>

        <div class="title">展示5列</div>
        <wx-grid :grids="grids" :column="5" :width="100"  @click="click"></wx-grid>
    </div>
</template>

<script>

  export default {
    data() {
      return {
        grids: [
          {src: 'https://assets.geilicdn.com/fxx-h5/static/img/getzl.5d526f6.png', label: 'item1'},
          {src: 'https://assets.geilicdn.com/fxx-h5/static/img/getzl.5d526f6.png', label: 'item2'},
          {src: 'https://assets.geilicdn.com/fxx-h5/static/img/getzl.5d526f6.png', label: 'item3'},
          {src: 'https://assets.geilicdn.com/fxx-h5/static/img/getzl.5d526f6.png', label: 'item4'},
          {src: 'https://assets.geilicdn.com/fxx-h5/static/img/getzl.5d526f6.png', label: 'item5'},
          {src: 'https://assets.geilicdn.com/fxx-h5/static/img/getzl.5d526f6.png', label: 'item6'},
          {src: 'https://assets.geilicdn.com/fxx-h5/static/img/getzl.5d526f6.png', label: 'item7'},
          {src: 'https://assets.geilicdn.com/fxx-h5/static/img/getzl.5d526f6.png', label: 'item8'},
          {src: 'https://assets.geilicdn.com/fxx-h5/static/img/getzl.5d526f6.png', label: 'item9'},
          {src: 'https://assets.geilicdn.com/fxx-h5/static/img/getzl.5d526f6.png', label: 'item10'}
        ]
      }
    },
    created() {
    },
    methods: {
      click({data}) {
        this.$toast({content: data})
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

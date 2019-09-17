<template>
    <div>
        <wx-cell label="button" @click="jump('Button')"></wx-cell>
        <wx-cell label="cell" @click="jump('Cell')"></wx-cell>
        <wx-cell label="mask" @click="jump('Mask')"></wx-cell>
        <wx-cell label="tab" @click="jump('Tab')"></wx-cell>
        <wx-cell label="grid" @click="jump('Grid')"></wx-cell>
        <wx-cell label="button" @click="jump('Button')"></wx-cell>
        <wx-cell label="button" @click="jump('Button')"></wx-cell>
        <wx-cell label="button" @click="jump('Button')"></wx-cell>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        components: []
      }
    },
    methods: {
      jump(page) {
        this.$router.push({name: page})
      }
    }
  }
</script>

<style lang="scss">

</style>

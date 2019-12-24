<template>
    <div>
        <wx-cell label="button" @click="jump('Button')"></wx-cell>
        <wx-cell label="cell" @click="jump('Cell')"></wx-cell>
        <wx-cell label="mask" @click="jump('Mask')"></wx-cell>
        <wx-cell label="tab" @click="jump('Tab')"></wx-cell>
        <wx-cell label="grid" @click="jump('Grid')"></wx-cell>
        <wx-cell label="card" @click="jump('Card')"></wx-cell>
        <wx-cell label="swipe" @click="jump('Swipe')"></wx-cell>
        <wx-cell label="picker" @click="jump('Picker')"></wx-cell>
        <wx-cell label="addressPicker" @click="jump('AddressPicker')"></wx-cell>
        <wx-cell label="datePicker" @click="jump('DatePicker')"></wx-cell>
        <wx-cell label="scroller" @click="jump('Scroller')"></wx-cell>
        <wx-cell label="pageScroller" @click="jump('PageScroller')"></wx-cell>
        <wx-cell label="fixed" @click="jump('Fixed')"></wx-cell>
        <wx-cell label="radio" @click="jump('Radio')"></wx-cell>
        <wx-cell label="input" @click="jump('Input')"></wx-cell>

    </div>
</template>

<script>
  export default {
    data() {
      return {
        components: []
      }
    },
    created() {
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

<template>
    <div class="wrapper">
        <swiper :options="swiperOptions" v-if="showSwipper">
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwipper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    .wrapper
      overflow: hidden
      width: 100%
      height: 0
      // 宽高比保持31.25
      padding-bottom: 36.25%
      background: #eee
    .swiper-img
      width: 100%
</style>

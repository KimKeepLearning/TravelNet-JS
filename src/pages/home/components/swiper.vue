<template>
    <div class="wrapper">
        <swiper :options="swiperOptions">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '000',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/0615f7282a652394ef8a41d06b34ae7c.jpg_890x330_fcaf597c.jpg'

      }, {
        id: '001',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20208/91d516ade2556cb2f64aae392e6b35ce.jpg_890x330_ba143e24.jpg'

      }]
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

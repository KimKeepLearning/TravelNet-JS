<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
            <div class="item-img-wrapper">
                <img class="item-img" :src="item.imgUrl" alt="">
            </div>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1511/8f/bf3a40e4afcf29.jpg_r_640x214_90225212.jpg',
        title: '环岛路帆船出海',
        desc: '浪漫厦门，浪漫的帆船游行'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1711/15/1cdd5ee885686b.jpg_r_640x214_46768064.jpg',
        title: '环岛路帆船出海',
        desc: '浪漫厦门，浪漫的帆船游行'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1509/69/3f535648c26681.jpg_r_640x214_146b5b8e.jpg',
        title: '环岛路帆船出海',
        desc: '浪漫厦门，浪漫的帆船游行'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
    .item-img
      width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      fontsize .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
    
</style>

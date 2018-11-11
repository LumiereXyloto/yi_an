<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        autoplay: false
      },
      iconList: [{
        id: '1',
        imgUrl: './static/images/1.png',
        desc: '家教'
      }, {
        id: '2',
        imgUrl: './static/images/2.png',
        desc: '服务员'
      }, {
        id: '3',
        imgUrl: './static/images/3.png',
        desc: '接待员'
      }, {
        id: '4',
        imgUrl: './static/images/4.png',
        desc: '安保人员'
      }, {
        id: '5',
        imgUrl: './static/images/5.png',
        desc: '推广促销'
      }, {
        id: '6',
        imgUrl: './static/images/6.png',
        desc: '翻译'
      }, {
        id: '7',
        imgUrl: './static/images/7.png',
        desc: '话务员'
      }, {
        id: '8',
        imgUrl: './static/images/8.png',
        desc: '实习生'
      }, {
        id: '9',
        imgUrl: './static/images/9.png',
        desc: '收银员'
      }, {
        id: '0',
        imgUrl: './static/images/0.png',
        desc: '其它'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  @import '~@/assets/styles/mixins.styl'
  .icons
    margin-top: .1rem
  .icons >>> .swiper-container
    width: 100%
    height: 0
    padding-bottom: 50%
    overflow: hidden
    .icon
      position: relative
      overflow: hidden
      float: left
      height: 0
      width: 25%
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0.4rem
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        right: 0
        left: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        color: $darkTextColor
        text-align: center
        ellipsis()
</style>

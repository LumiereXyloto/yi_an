<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 2500,
        speed: 1500,
        autoplayDisableOnInteraction: false
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://image.ganjistatic1.com/gjfsqq/097136cab4dc4fe4943b1a03e7f2db68_0-0_7-5.png'
      }, {
        id: '0002',
        imgUrl: 'https://image.ganjistatic1.com/gjfsqq/gjupload/671e4c82eddf4f269be1ae9034928245_0-0_7-5.png'
      }]
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #ffffff
  .wrapper
    background: #eee
    .swiper-img
      width: 100%
</style>

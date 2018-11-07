<template>
  <div>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {

    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: [],
      list: []
    }
  }
  // methods: {
  //   getDetailInfo () {
  //     axios.get('/api/detail.json', {
  //       params: {
  //         id: this.$route.params.id
  //       }
  //     }).then(this.handleGetDataSucc)
  //   },
  //   handleGetDataSucc (res) {
  //     res = res.data
  //     if (res.ret && res.data) {
  //       const data = res.data
  //       console.log(this.$route.params.id)
  //       console.log(data)
  //       this.sightName = data.sightName
  //       this.bannerImg = data.bannerImg
  //       this.gallaryImgs = data.gallaryImgs
  //       this.list = data.categoryList
  //     }
  //   }
  // },
  // activated () {
  //   this.getDetailInfo()
  // }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 20rem
</style>

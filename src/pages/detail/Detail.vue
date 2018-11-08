<template>
  <div>
    <detail-header></detail-header>
    <div class="null-content"></div>
    <detail-list :list="list"></detail-list>
    <detail-footer></detail-footer>
  </div>
</template>

<script>
import DetailHeader from './components/Header'
import DetailList from './components/List'
import DetailFooter from './components/Footer'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailList,
    DetailFooter
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
  .null-content
    height .86rem
</style>

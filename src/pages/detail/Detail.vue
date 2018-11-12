<template>
  <div>
    <detail-header></detail-header>
    <div class="null-content"></div>
    <detail-list></detail-list>
    <detail-footer></detail-footer>
  </div>
</template>

<script>
import DetailHeader from './components/Header'
import DetailList from './components/List'
import DetailFooter from './components/Footer'
// import axios from 'axios'
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
}
</script>

<style lang="stylus" scoped>
  .null-content
    height .86rem
</style>

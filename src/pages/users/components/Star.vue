<template>
  <div>
    <div>
      <router-link
        tag="div"
        to="/user"
        class="header-abs"
        v-show="showAbs"
      >
        <div class="iconfont header-abs-back">&#xe624;</div>
      </router-link>
      <div
        class="header-fixed"
        v-show="!showAbs"
        :style="opacityStyle"
      >
        <router-link to="/user">
          <div class="iconfont header-fixed-back">&#xe624;</div>
        </router-link>
        我的关注
      </div>
    </div>
    <div class="banner">
      <img src="@/assets/images/banner.png" alt="gg">
    </div>
    <div id="trigger2">修改偏好</div>
    <div class="block-title">我的偏好</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of preferList"
        :key="item.jobId"
        :to="'/detail/' + item.jobId"
      >
        <div class="item-img-wrapper">
          <img src="@/assets/images/logo.png" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-brief">{{item.brief}}</p>
          <p class="item-time">{{item.location}}</p>
          <p class="item-time">{{item.time}}</p>
          <div class="reward-and-num">
            <p class="item-reward">{{item.reward}}/{{item.rewardType}}</p>
            <p class="item-num">供需:{{item.nowNum}}/{{item.hireNum}}</p>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import qs from 'qs'
import MobileSelect from 'mobile-select'
import axios from 'axios'
axios.defaults.withCredentials = true
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      },
      chooseList: [{
        id: '1',
        value: '家教',
        childs: [{
          id: '0',
          value: '时薪',
          childs: [{
            id: '1',
            value: '8'
          }, {
            id: '2',
            value: '9'
          }, {
            id: '3',
            value: '10'
          }, {
            id: '4',
            value: '11'
          }, {
            id: '5',
            value: '12'
          }]
        }, {
          id: '1',
          value: '日薪',
          childs: [{
            id: '1',
            value: '50'
          }, {
            id: '2',
            value: '60'
          }, {
            id: '3',
            value: '70'
          }, {
            id: '4',
            value: '80'
          }, {
            id: '5',
            value: '90'
          }, {
            id: '5',
            value: '100'
          }]
        }, {
          id: '2',
          value: '月薪',
          childs: [{
            id: '1',
            value: '500'
          }, {
            id: '2',
            value: '1000'
          }, {
            id: '3',
            value: '1500'
          }, {
            id: '4',
            value: '2000'
          }, {
            id: '5',
            value: '2500'
          }, {
            id: '5',
            value: '3000'
          }]
        }]
      }, {
        id: '2',
        value: '服务员',
        childs: [{
          id: '0',
          value: '时薪',
          childs: [{
            id: '1',
            value: '8'
          }, {
            id: '2',
            value: '9'
          }, {
            id: '3',
            value: '10'
          }, {
            id: '4',
            value: '11'
          }, {
            id: '5',
            value: '12'
          }]
        }, {
          id: '1',
          value: '日薪',
          childs: [{
            id: '1',
            value: '50'
          }, {
            id: '2',
            value: '60'
          }, {
            id: '3',
            value: '70'
          }, {
            id: '4',
            value: '80'
          }, {
            id: '5',
            value: '90'
          }, {
            id: '5',
            value: '100'
          }]
        }, {
          id: '2',
          value: '月薪',
          childs: [{
            id: '1',
            value: '500'
          }, {
            id: '2',
            value: '1000'
          }, {
            id: '3',
            value: '1500'
          }, {
            id: '4',
            value: '2000'
          }, {
            id: '5',
            value: '2500'
          }, {
            id: '5',
            value: '3000'
          }]
        }]
      }, {
        id: '3',
        value: '接待员',
        childs: [{
          id: '0',
          value: '时薪',
          childs: [{
            id: '1',
            value: '8'
          }, {
            id: '2',
            value: '9'
          }, {
            id: '3',
            value: '10'
          }, {
            id: '4',
            value: '11'
          }, {
            id: '5',
            value: '12'
          }]
        }, {
          id: '1',
          value: '日薪',
          childs: [{
            id: '1',
            value: '50'
          }, {
            id: '2',
            value: '60'
          }, {
            id: '3',
            value: '70'
          }, {
            id: '4',
            value: '80'
          }, {
            id: '5',
            value: '90'
          }, {
            id: '5',
            value: '100'
          }]
        }, {
          id: '2',
          value: '月薪',
          childs: [{
            id: '1',
            value: '500'
          }, {
            id: '2',
            value: '1000'
          }, {
            id: '3',
            value: '1500'
          }, {
            id: '4',
            value: '2000'
          }, {
            id: '5',
            value: '2500'
          }, {
            id: '5',
            value: '3000'
          }]
        }]
      }, {
        id: '4',
        value: '安保人员',
        childs: [{
          id: '0',
          value: '时薪',
          childs: [{
            id: '1',
            value: '8'
          }, {
            id: '2',
            value: '9'
          }, {
            id: '3',
            value: '10'
          }, {
            id: '4',
            value: '11'
          }, {
            id: '5',
            value: '12'
          }]
        }, {
          id: '1',
          value: '日薪',
          childs: [{
            id: '1',
            value: '50'
          }, {
            id: '2',
            value: '60'
          }, {
            id: '3',
            value: '70'
          }, {
            id: '4',
            value: '80'
          }, {
            id: '5',
            value: '90'
          }, {
            id: '5',
            value: '100'
          }]
        }, {
          id: '2',
          value: '月薪',
          childs: [{
            id: '1',
            value: '500'
          }, {
            id: '2',
            value: '1000'
          }, {
            id: '3',
            value: '1500'
          }, {
            id: '4',
            value: '2000'
          }, {
            id: '5',
            value: '2500'
          }, {
            id: '5',
            value: '3000'
          }]
        }]
      }, {
        id: '5',
        value: '推广销售',
        childs: [{
          id: '0',
          value: '时薪',
          childs: [{
            id: '1',
            value: '8'
          }, {
            id: '2',
            value: '9'
          }, {
            id: '3',
            value: '10'
          }, {
            id: '4',
            value: '11'
          }, {
            id: '5',
            value: '12'
          }]
        }, {
          id: '1',
          value: '日薪',
          childs: [{
            id: '1',
            value: '50'
          }, {
            id: '2',
            value: '60'
          }, {
            id: '3',
            value: '70'
          }, {
            id: '4',
            value: '80'
          }, {
            id: '5',
            value: '90'
          }, {
            id: '5',
            value: '100'
          }]
        }, {
          id: '2',
          value: '月薪',
          childs: [{
            id: '1',
            value: '500'
          }, {
            id: '2',
            value: '1000'
          }, {
            id: '3',
            value: '1500'
          }, {
            id: '4',
            value: '2000'
          }, {
            id: '5',
            value: '2500'
          }, {
            id: '5',
            value: '3000'
          }]
        }]
      }, {
        id: '6',
        value: '翻译',
        childs: [{
          id: '0',
          value: '时薪',
          childs: [{
            id: '1',
            value: '8'
          }, {
            id: '2',
            value: '9'
          }, {
            id: '3',
            value: '10'
          }, {
            id: '4',
            value: '11'
          }, {
            id: '5',
            value: '12'
          }]
        }, {
          id: '1',
          value: '日薪',
          childs: [{
            id: '1',
            value: '50'
          }, {
            id: '2',
            value: '60'
          }, {
            id: '3',
            value: '70'
          }, {
            id: '4',
            value: '80'
          }, {
            id: '5',
            value: '90'
          }, {
            id: '5',
            value: '100'
          }]
        }, {
          id: '2',
          value: '月薪',
          childs: [{
            id: '1',
            value: '500'
          }, {
            id: '2',
            value: '1000'
          }, {
            id: '3',
            value: '1500'
          }, {
            id: '4',
            value: '2000'
          }, {
            id: '5',
            value: '2500'
          }, {
            id: '5',
            value: '3000'
          }]
        }]
      }, {
        id: '7',
        value: '话务员',
        childs: [{
          id: '0',
          value: '时薪',
          childs: [{
            id: '1',
            value: '8'
          }, {
            id: '2',
            value: '9'
          }, {
            id: '3',
            value: '10'
          }, {
            id: '4',
            value: '11'
          }, {
            id: '5',
            value: '12'
          }]
        }, {
          id: '1',
          value: '日薪',
          childs: [{
            id: '1',
            value: '50'
          }, {
            id: '2',
            value: '60'
          }, {
            id: '3',
            value: '70'
          }, {
            id: '4',
            value: '80'
          }, {
            id: '5',
            value: '90'
          }, {
            id: '5',
            value: '100'
          }]
        }, {
          id: '2',
          value: '月薪',
          childs: [{
            id: '1',
            value: '500'
          }, {
            id: '2',
            value: '1000'
          }, {
            id: '3',
            value: '1500'
          }, {
            id: '4',
            value: '2000'
          }, {
            id: '5',
            value: '2500'
          }, {
            id: '5',
            value: '3000'
          }]
        }]
      }, {
        id: '8',
        value: '实习生',
        childs: [{
          id: '0',
          value: '时薪',
          childs: [{
            id: '1',
            value: '8'
          }, {
            id: '2',
            value: '9'
          }, {
            id: '3',
            value: '10'
          }, {
            id: '4',
            value: '11'
          }, {
            id: '5',
            value: '12'
          }]
        }, {
          id: '1',
          value: '日薪',
          childs: [{
            id: '1',
            value: '50'
          }, {
            id: '2',
            value: '60'
          }, {
            id: '3',
            value: '70'
          }, {
            id: '4',
            value: '80'
          }, {
            id: '5',
            value: '90'
          }, {
            id: '5',
            value: '100'
          }]
        }, {
          id: '2',
          value: '月薪',
          childs: [{
            id: '1',
            value: '500'
          }, {
            id: '2',
            value: '1000'
          }, {
            id: '3',
            value: '1500'
          }, {
            id: '4',
            value: '2000'
          }, {
            id: '5',
            value: '2500'
          }, {
            id: '5',
            value: '3000'
          }]
        }]
      }, {
        id: '9',
        value: '收银员',
        childs: [{
          id: '0',
          value: '时薪',
          childs: [{
            id: '1',
            value: '8'
          }, {
            id: '2',
            value: '9'
          }, {
            id: '3',
            value: '10'
          }, {
            id: '4',
            value: '11'
          }, {
            id: '5',
            value: '12'
          }]
        }, {
          id: '1',
          value: '日薪',
          childs: [{
            id: '1',
            value: '50'
          }, {
            id: '2',
            value: '60'
          }, {
            id: '3',
            value: '70'
          }, {
            id: '4',
            value: '80'
          }, {
            id: '5',
            value: '90'
          }, {
            id: '5',
            value: '100'
          }]
        }, {
          id: '2',
          value: '月薪',
          childs: [{
            id: '1',
            value: '500'
          }, {
            id: '2',
            value: '1000'
          }, {
            id: '3',
            value: '1500'
          }, {
            id: '4',
            value: '2000'
          }, {
            id: '5',
            value: '2500'
          }, {
            id: '5',
            value: '3000'
          }]
        }]
      }],
      jobTypeId: '',
      rewardTypeId: '',
      rewardId: '',
      preferList: []
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity: opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    },
    sendChangeRequest () {
      let _this = this
      console.log(this.jobTypeId, this.rewardTypeId, this.rewardId)
      axios.post('http://yian.our16.top:8080/yian/preference/changePreferenceJobType.do', qs.stringify({
        jobTpyeId: this.jobTypeId,
        rewadTypeId: this.rewardTypeId,
        rewadId: this.rewardId
      }))
        .then(res => {
          _this.$layer.closeAll()
          _this.$layer.msg(res.data.msg)
          _this.sendPreferRequest()
        })
    },
    sendPreferRequest () {
      let _this = this
      axios.post('http://yian.our16.top:8080/yian/student/getAttentionedType.do')
        .then(res => {
          _this.preferList = res.data.data
          console.log(_this.preferList)
        })
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted () {
    let _this = this
    var mobileSelect2 = new MobileSelect({// eslint-disable-line
      trigger: '#trigger2',
      title: '选择偏好',
      wheels: [
        {data: this.chooseList}
      ],
      position: [0, 0, 0],
      transitionEnd: function (indexArr, data) {
        // console.log(data)
      },
      callback: function (indexArr, data) {
        console.log(data)
        _this.jobTypeId = data[0].id
        _this.rewardTypeId = data[1].id
        _this.rewardId = data[2].value
        if (_this.jobTypeId && _this.rewardTypeId && _this.rewardId) {
          _this.sendChangeRequest()
        }
      }
    })
    this.sendPreferRequest()
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
  .header-abs
    text-align: center
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    border-radius: .4rem
    background: rgba(0, 0, 0, .3)
    .header-abs-back
      color: #ffffff
      font-size: .4rem
  .header-fixed
    position: fixed
    z-index: 2
    top: 0
    left: 0
    right: 0
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-fixed-back
      width: .64rem
      text-align: center
      font-size: .4rem
      position: absolute
      top: 0
      left: 0
      color: #ffffff
  .banner
    background-color #A6DCFD
  .banner img
    width 100%
  #trigger2
    background-color #ffffff
    height .6rem
    line-height .6rem
    text-align center
    margin .3rem 1rem
    color $bgColor
    border-radius .1rem
    border 1px solid #adadad
  .block-title
    background-color #EEEEEE
    font-size .28rem
    height .8rem
    line-height .8rem
    margin-bottom .2rem
    padding 0 .2rem
  .item
    display flex
    .item-img-wrapper
      display flex
      justify-content center
      align-items center
      height 2.2rem
      .item-img
        width 1.2rem
        height 1.2rem
        padding .3rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-time
        ellipsis()
        color #ADADAD
        padding .1rem 0
      .item-brief
        ellipsis()
        font-size .36rem
        padding .1rem 0
      .reward-and-num
        display flex
        justify-content space-between
        padding-right .8rem
        .item-reward
          color #FE7418
          font-size .32rem
          padding .1rem 0
        .item-num
          color #ADADAD
          font-size .3rem
          padding .1rem 0
</style>

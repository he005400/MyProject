<template>
  <div>
    <body>
      <!-- 顶部 -->
      <header class="header">
        <div class="top">
          <div class="top-content">
            <h4>美团</h4>
            <div class="function-bar">
              <img src="@/assets/images/top-1.png" alt="">
              <img src="@/assets/images/top-2.png" alt="">
              <img src="@/assets/images/top-3.png" alt="">
            </div>
          </div>
          <div class="top-search">
            <div class="choice-box">
              <select name="city" id="">
                <option value="">安阳</option>
                <option value="" selected="selected">郑州</option>
                <option value="">天津</option>
              </select>
            </div>
            <div class="search-box">
              <input type="text" value="一键搜索吃喝玩乐住">
              <img src="@/assets/images/top-4.png" alt="">
            </div>
          </div>
        </div>
      </header>
      <!-- 导航栏 -->
      <nav class="nav">
        <!-- 导航栏主体 -->
        <ul class="nav-top">
          <li>
            <a href="#">
              <img src="@/assets/images/nav-1.png" alt="">
              <div>外卖</div>
            </a>
            <div class="nav-jiaobiao">Hot</div>
          </li>
          <li>
            <a href="#">
              <img src="@/assets/images/nav-2.png" alt="">
              <div>美食</div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="@/assets/images/nav-3.png" alt="">
              <div>酒店/民宿</div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="@/assets/images/nav-4.png" alt="">
              <div>休闲玩乐</div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="@/assets/images/nav-5.png" alt="">
              <div>周边游</div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="@/assets/images/nav-6.png" alt="">
              <div>超市便利</div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="@/assets/images/nav-7.png" alt="">
              <div>打车</div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="@/assets/images/nav-8.png" alt="">
              <div>骑车</div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="@/assets/images/nav-9.png" alt="">
              <div>电影/演出</div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="@/assets/images/nav-10.png" alt="">
              <div>买药</div>
            </a>
            <div class="nav-jiaobiao">抢药</div>
          </li>
          <li>
            <a href="#">
              <img src="@/assets/images/nav-11.png" alt="">
              <div>美团优选</div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="@/assets/images/nav-12.png" alt="">
              <div>丽人/美发</div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="@/assets/images/nav-13.png" alt="">
              <div>火车/机票</div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="@/assets/images/nav-14.png" alt="">
              <div>美团电商</div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="@/assets/images/nav-15.png" alt="">
              <div>KTV</div>
            </a>
          </li>
        </ul>
        <!-- 小圆圈 -->
        <div class="circle">
          <ul>
            <li class="current"></li>
            <li></li>
          </ul>
        </div>
      </nav>
      <!-- 渐变 -->
      <div class="jianbian"></div>
      <!-- 中间页面栏 1 --优选/电商 -->
      <div class="main-1">
        <div class="youxuan">
          <div class="youxuan-left">
            <div class="youxuan-left-a">
              <ul>
                <li>
                  <img src="@/assets/images/youxuan-1.png" alt="">
                </li>
                <li>
                  <img src="@/assets/images/youxuan-a1.png" alt="">
                </li>
              </ul>
            </div>
            <h3>美团优选</h3>
            <h4>次日自提</h4>

          </div>
          <div class="youxuan-right">
            <ul>
              <li>
                <a href="#"><img src="@/assets/upload/youxuan-2.jpg" alt="">
                  <em>￥0.99</em>
                </a>
              </li>
              <li>
                <a href="#"><img src="@/assets/upload/youxuan-3.jpg" alt="">
                  <em>￥2.32</em>
                </a>
              </li>
              <li>
                <a href="#"><img src="@/assets/upload/youxuan-4.jpg" alt="">
                  <em>￥66.21</em>
                </a>
              </li>
              <li>
                <a href="#"><img src="@/assets/upload/youxuan-5.jpg" alt="">
                  <em>￥12.32</em>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="dianshang">
          <div class="dianshang-left">
            <img src="@/assets/images/dianshang-1.png" alt="">
            <h3>美团电商</h3>
            <h4>快递到家</h4>
          </div>
          <div class="dianshang-right">
            <ul>
              <li>
                <a href="#"><img src="@/assets/upload/dianshang-2.jpg" alt="">
                  <em>￥9.9</em>
                </a>
                <div class="main-1-jiaobiao">新人价</div>
              </li>
              <li>
                <a href="#"><img src="@/assets/upload/dianshang-3.jpg" alt="">
                  <em>￥20.32</em>
                </a>
                <div class="main-1-jiaobiao">券后价</div>
              </li>
              <li>
                <a href="#"><img src="@/assets/upload/dianshang-4.jpg" alt="">
                  <em>￥34.21</em>
                </a>
                <div class="main-1-jiaobiao">券后价</div>
              </li>
              <li>
                <a href="#"><img src="@/assets/upload/dianshang-5.jpg" alt="">
                  <em>￥10.2</em>
                </a>
                <div class="main-1-jiaobiao">新人价</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 中间页面栏 2 --限时抢/1折购 -->
      <div class="main-2">
        <div class="main-2-left">
          <div class="xianshiqiang">
            <div class="xianshiqiang-top">
              <h2>限时抢</h2>
              <div class="count-down">
                <h5>距结束</h5>
                <div>{{count}}</div>
              </div>
            </div>
            <div class="xianshiqiang-bottom">
              <div class="xianshiqiang-bottom-a">
                <ul>
                  <li>
                    <img src="@/assets/upload/xianshiqiang-1.jpg" alt="">
                    <img src="@/assets/upload/xianshiqiang-2.jpg" alt="">
                    <div>自热火锅限...</div>
                    <div>白象汤好喝...</div>
                    <em>￥12.8 &nbsp;<i>￥32</i></em>
                    <em>￥9.9 <i>￥25</i></em>
                  </li>
                  <li>
                    <img src="@/assets/upload/xianshiqiang-a-1.jpg" alt="">
                    <img src="@/assets/upload/xianshiqiang-a-2.jpg" alt="">
                    <div>火爆炸鸡腿...</div>
                    <div>海盐芝士条...</div>
                    <em>￥25 &nbsp;<i>￥54</i></em>
                    <em>￥19 &nbsp;<i>￥28</i></em>
                  </li>
                  <li>
                    <img src="@/assets/upload/xianshiqiang-a-3.jpg" alt="">
                    <img src="@/assets/upload/xianshiqiang-a-4.jpg" alt="">
                    <div>冷鲜鸡腿限...</div>
                    <div>凤梨酥降价...</div>
                    <em>￥35 &nbsp;<i>￥60</i></em>
                    <em>￥14.6 &nbsp;<i>￥23</i></em>
                  </li>
                  <li>
                    <img src="@/assets/upload/xianshiqiang-1.jpg" alt="">
                    <img src="@/assets/upload/xianshiqiang-2.jpg" alt="">
                    <div>自热火锅限...</div>
                    <div>白象汤好喝...</div>
                    <em>￥12.8 &nbsp;<i>￥32</i></em>
                    <em>￥9.9 <i>￥25</i></em>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        <div class="main-2-right">
          <div class="zhekou">
            <div class="zhekou-top">
              <h2>1折购</h2>
            </div>
            <div class="zhekou-bottom">
              <img src="@/assets/upload/zhekou-1.jpg" alt="">
              <img src="@/assets/upload/zhekou-2.jpg" alt="">
              <div>御用驴肉限...</div>
              <div>不锈钢铁床...</div>
              <em>￥16.9 &nbsp;<i>￥22</i></em>
              <em>￥122 <i>￥399</i></em>
            </div>
          </div>
        </div>
      </div>
      <!-- 中间页面栏 3 --巨划算/美团优选 -->
      <div class="main-3">
        <!-- 选择盒 -->
        <div class="choice">
          <ol>
            <li class="choice_1 " :class="{current: toggleBox == 1}" @click="toggle(1)">巨划算</li>
            <li class="choice_2" :class="{current: toggleBox == 2}" @click="toggle(2)">美团优选</li>
          </ol>
        </div>
        <div class="box-juhuasuan" ref="toggle1">
          <ul>
            <li v-for="item in list1" :key="item.id">
              <div class="left-box" v-lazy-container="{selector: 'img'}">
                <img :data-src="getPath(item.src)" alt="">
              </div>
              <div class="right-box">
                <h3>{{item.title}}</h3>
                <h5>附近{{item.order_quantity}}人已下单</h5>
                <h6>限购一份</h6>
                <div class="goumai">
                  <em>￥{{item.price}}</em>
                  <div class="buy">购买</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="box-youxuan" ref="toggle2">
          <ul>
            <li v-for="item in list2" :key="item.id">
              <div class="left-box" v-lazy-container="{selector: 'img'}">
                <img :data-src="getPath(item.src)" alt="">
              </div>
              <div class="right-box">
                <h3>{{item.title}}</h3>
                <h5>附近{{item.order_quantity}}人已下单</h5>
                <h6>限购一份</h6>
                <div class="goumai">
                  <em>￥{{item.price}}</em>
                  <div class="buy">购买</div>
                </div>

              </div>
            </li>
          </ul>
        </div>
        <div class="placeholder">
          <div class="dibu">没有更多了</div>
        </div>
      </div>
      <my-footer></my-footer>
    </body>
  </div>
</template>
<script>
import MyFooter from '@/components/MyFooter.vue'
import { mapState } from 'vuex'

export default {
  name: 'IndexView',
  data () {
    return {
      toggleBox: 1,
      count: '',
      // 倒计时秒数
      seconds: 10800
    }
  },
  components: {
    'my-footer': MyFooter
  },
  computed: {
    ...mapState(['list1', 'list2'])
  },
  created () {
    // 触发 actions 的异步操作
    this.$store.dispatch('getList1')
    this.$store.dispatch('getList2')
  },
  mounted () {
    this.Time()
  },
  methods: {
    toggle (i) {
      this.toggleBox = i
      if (i === 1) {
        this.$refs.toggle1.style.display = 'block'
        this.$refs.toggle2.style.display = 'none'
      } else {
        this.$refs.toggle2.style.display = 'block'
        this.$refs.toggle1.style.display = 'none'
      }
    },
    getPath (path) {
      // path 不为空则返回相应路径，为防止
      return path ? require('@/' + path) : ''
    },
    countDown () {
      let h = parseInt(this.seconds / (60 * 60) % 24)
      h = h < 10 ? '0' + h : h
      let m = parseInt(this.seconds / 60 % 60)
      m = m < 10 ? '0' + m : m
      let s = parseInt(this.seconds % 60)
      s = s < 10 ? '0' + s : s
      this.count = h + ':' + m + ':' + s
    },
    // 定时器没过 1s减 1
    Time () {
      setInterval(() => {
        this.seconds -= 1
        this.countDown()
      }, 1000)
    }
  }
}
</script>
<style scoped>
/* 网络较慢时，使用该命令，防止显示出源码( {{item.id}} )，也可以防止屏幕闪动 */
/* 在小项目中作用较大，大项目中的内容是空 div，主要是使用router挂载，此时作用较小 */
[v-cloak]{
  display: none;
}
/* 顶部 */
.header {
  width: 100%;
  height: 102px;
}

.top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: #FFC300;
  z-index: 2;
}

.top-content {
  position: relative;
  height: 46px;
  line-height: 46px;
}

.top h4 {
  display: block;
  text-align: center;
  font-size: 16px;
  font-weight: 530;
  color: #333;
}

.top .function-bar {
  position: absolute;
  top: 8px;
  right: 14px;
  width: 25%;
  height: 30px;
  background-color: #FFC91A;
  text-align: center;
  border-radius: 16px;
  box-sizing: border-box;
}

.top .function-bar div {
  display: inline-block;
  text-align: center;
}

.function-bar img {
  width: 18px;
  height: 18px;
  padding: 0 5px;
  margin-bottom: 3px;
}

.function-bar img:nth-child(n+2) {
  border-left: 1px solid rgba(51, 51, 51, .1);
}

.top-search {
  height: 54px;
}

.choice-box {
  position: relative;
}

.choice-box select {
  position: absolute;
  float: left;
  border: none;
  outline: none;
  box-shadow: none;
  background: none;
  top: 20px;
  left: 15px;
  text-align: center;
  font-size: 17px;
  font-weight: 600;
}

.search-box {
  position: relative;

}

.search-box input {
  width: 50%;
  height: 30px;
  position: absolute;
  top: 14px;
  left: 80px;
  padding: 0 32px;
  background-color: rgba(255, 249, 230, .9);
  font-size: 14px;
  border-radius: 12px;
}

.search-box img {
  position: absolute;
  top: 21px;
  left: 90px;
  width: 16px;
  height: 16px;
}

/* 导航栏 */
.nav {
  position: relative;
  /* overflow: hidden; */
  width: 100%;
  /* height: 225px; */
  height: 200px;
  background-color: #fff;
}

.nav .nav-jiaobiao {
  position: absolute;
  top: -4px;
  left: 60%;
  width: 35%;
  height: 14px;
  line-height: 14px;
  color: #fff;
  border-radius: 10px;
  background-color: #FF3F00;
}

.nav .nav-top {
  padding-top: 18px;
  width: 100%;
  height: 200px;
}

.nav ul li {
  position: relative;
  float: left;
  width: 20%;
  height: 60px;
  text-align: center;
}

.nav ul li img {
  height: 35px;
  vertical-align: middle;
}

.nav ul li div {
  height: 20px;
  font-size: 12px;
  color: #333;
}

/* 小圆圈 */
.circle {
  display: none;
  position: absolute;
  height: 20px;
  top: 205px;
  left: 50%;
  transform: translate(-50%);
}

.circle ul li {
  width: 8px;
  height: 8px;
  margin: 0 3px;
  background-color: #E5E5E5;
  border-radius: 50%;

}

.circle .current {
  background-color: #FFCF01;
}

/* 渐变栏 */
.jianbian {
  height: 8px;
  background-image: linear-gradient(#fff, #F4F4F4)
}

/* 中间页面栏 1 --优选/电商*/

.main-1,
.main-2 {
  width: 94%;
  height: 200px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 9px;
}

.main-1 .youxuan,
.main-1 .dianshang {
  width: 100%;
  height: 100px;
}

.main-1 em,
.main-2 em {
  margin-left: -7px;
  font-size: 14px;
  font-weight: 600;
  color: #FF6000;
}

.main-1 .youxuan-left,
.main-1 .dianshang-left {
  float: left;
  text-align: center;
}

.main-1 .youxuan-left img,
.main-1 .dianshang-left img {
  vertical-align: middle;
  height: 35px;
  margin-top: 12px;
}

.main-1 .youxuan-left h3,
.main-1 .dianshang-left h3 {
  font-weight: 600;
  color: #333;
  text-align: center;
}

.main-1 .youxuan-left h4,
.main-1 .dianshang-left h4 {
  width: max-content;
  margin-left: 50%;
  transform: translate(-50%);
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  color: #FF6000;
  background-color: #FFF2EA;
}

.main-1 .youxuan-right ul li,
.main-1 .dianshang-right ul li {
  position: relative;
  float: left;
  width: 18%;
  text-align: center;
  margin: 12px 0 0 8px;
}

.main-1-jiaobiao {
  position: absolute;
  top: -4px;
  left: 30%;
  width: 70%;
  height: 18px;
  line-height: 18px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 10px;
  background-color: #FF3F00;
}

.main-1 .youxuan-right ul li:nth-child(4),
.main-1 .dianshang-right ul li:nth-child(4) {
  margin: 12px 0 0 0;
}

.main-1 .youxuan-right img,
.main-1 .dianshang-right img {
  height: 52px;
}

.main-1 .dianshang {
  display: block;
  width: 100%;
  height: 100px;
}

/* 中间页面栏 2 --限时抢/1折购 */
.main-2 {
  margin-top: 8px;
  height: 165px;
}

.main-2-left {
  float: left;
  width: 50%;
  height: 100%;
}

.main-2-left .xianshiqiang,
.main-2-left .zhekou {
  height: 32px;
}

.main-2 h2 {
  float: left;
  margin-left: 9px;
  color: #333;
}

.main-2-left .xianshiqiang .count-down {
  float: left;
  width: 50%;
  height: 18px;
  line-height: 18px;
  margin: 7px 0 0 10px;
  border: 1px solid #F0F0F0;
}

.xianshiqiang-top .count-down h5 {
  float: left;
  margin-right: 3px;
  color: #666;
}

.xianshiqiang-top .count-down div {
  float: left;
  font-weight: 600;
  color: #333;
}

.xianshiqiang-top,
.zhekou-top {
  height: 34px;
  line-height: 34px;
}

.xianshiqiang-bottom,
.zhekou-bottom {
  height: 118px;
}

.zhekou-bottom {
  border-left: 1px solid #EFEFEF;
}

.xianshiqiang-bottom-a div,
.zhekou-bottom div {
  float: left;
  font-size: 12px;
  margin-left: 18px;
}

.xianshiqiang-bottom-a em,
.zhekou-bottom em {
  padding: 0 0 0 13px;
  margin: -2px 0 0 2px;
}

.xianshiqiang-bottom-a em i,
.zhekou-bottom em i {
  font-size: 10px;
  color: #ADADAD;
  font-weight: 400;
  text-decoration: line-through;
}

.xianshiqiang-bottom-a img,
.zhekou-bottom img {
  height: 80px;
  vertical-align: middle;
  margin: 0 0 0 9px;
}

.main-2-right {
  float: left;
  width: 50%;
}

/* 中间页面栏 3 --巨划算/美团优选 */
/* 选择盒 */
.main-3 {
  width: 94%;
  height: 540px;
  margin: 8px auto;
}

.main-3 .box-juhuasuan,
.main-3 .box-youxuan {
  height: 100%;
}

.box-juhuasuan {
  display: block;
}

.box-youxuan {
  display: none;
}

.box-juhuasuan ul li,
.box-youxuan ul li {
  height: 160px;
  margin-bottom: 15px;
}

.choice ol {
  width: 100%;
  height: 32px;
}

.choice ol li {
  float: left;
  width: 50%;
  height: 32px;
  line-height: 32px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  text-align: center;
}

.choice ol .current {
  font-size: 20px;
  font-weight: 700;
  text-decoration: underline #FFC300;
}

.left-box {
  overflow: hidden;
  float: left;
  width: 40%;
  height: 160px;
  border-radius: 9px;
}

.right-box {
  float: right;
  width: 60%;
  height: 160px;
  box-sizing: border-box;
  padding-left: 3%;
}

.left-box img,
.right-box img {
  height: 100%;
}

.right-box h3 {
  font-weight: 400;
  color: #333;
}

.right-box h5,
.right-box h6 {
  font-size: 14px;
  font-weight: 400;
  color: #9A9DA3;
}

.right-box h6 {
  margin-top: 60px;
}

.right-box em {
  float: left;
  color: #F20000;
  font-size: 20px;
}

.right-box .goumai {
  height: 30px;
  border-bottom: 1px solid #E1E1E1;
  padding-bottom: 10px;
}

.right-box .buy {
  float: right;
  width: 40%;
  height: 30px;
  line-height: 30px;
  background-color: #FFD100;
  text-align: center;
  color: #333;
  border-radius: 15px;
}

.box-juhuasuan ul li:nth-last-child(1) .goumai,
.box-youxuan ul li:nth-last-child(1) .goumai {
  border-bottom: none;
}

.placeholder {
  height: 200px;
}

.dibu {
  width: 100%;
  line-height: 60px;
  box-sizing: border-box;
  margin-top: 10px;
  text-align: center;
  background-color: #F8F8F8;
}

/* 动画 */
/* 优选左端 */
.youxuan-left-a {
  overflow: hidden;
}

.youxuan-left ul {
  position: relative;
  width: 100%;
  height: 51px;
  animation: youxuan-a 5s linear normal infinite;
}

.youxuan-left ul li:nth-child(2)::after {
  position: absolute;
  content: '省钱了';
  top: 65px;
  left: 65px;
  width: 65px;
  font-size: 20px;
  font-weight: 600;
  color: #FF3F00;
}

@keyframes youxuan-a {
  0% {}

  15% {
    transform: rotateY(90deg)
  }

  20% {
    transform: rotateY(180deg)
  }

  25% {
    transform: rotateY(360deg)
  }

  35% {
    transform: rotateY(540deg)
  }

  40% {
    transform: rotateY(630deg)
  }

  45% {
    transform: rotateY(720deg)
  }

  75% {
    transform: translate(0, -50px);
  }

  85% {
    transform: translate(-63px, -50px);
  }

  100% {
    transform: translate(-63px, -50px);
  }
}

/* 限时抢部分商品滚动 */
.xianshiqiang-bottom .xianshiqiang-bottom-a {
  overflow: hidden;
  height: 118px;
}

.xianshiqiang-bottom-a ul {
  animation: xianshiqiang_scroll 8s normal infinite;
}

@keyframes xianshiqiang_scroll {
  0% {}

  25% {
    transform: translate(0, -120px);
  }

  50% {
    transform: translate(0, -240px);
  }

  75% {
    transform: translate(0, -357px);
  }

  100% {
    transform: translate(0, -357px);
  }
}
</style>

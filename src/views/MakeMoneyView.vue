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
        </div>
      </header>
      <div class="main">
        <div class="main-top">
          <div class="zhuanqian">
            <h4>天天赚钱</h4>
            <img src="@/assets/images/weixin.png" alt="">
          </div>
          <div class="jinbi">
            <div class="jinbi-top">
              <ul class="clearfix">
                <li>我的金币</li>
                <li>明细 | 规则</li>
              </ul>
              <ol>
                <li>20</li>
                <li>去兑换</li>
              </ol>
            </div>
            <div class="jinbi-bottom">
              <a href="#">立即签到</a>
            </div>
          </div>
        </div>
        <div class="main-bottom">
          <div class="box1"></div>
          <ul>
            <li>
              <div class="li-box1"></div>
              <div class="li-box2"></div>
              <div class="li-box3"></div>
            </li>
            <li>
              <div class="li-box1"></div>
              <div class="li-box2"></div>
              <div class="li-box3"></div>
            </li>
            <li>
              <div class="li-box1"></div>
              <div class="li-box2"></div>
              <div class="li-box3"></div>
            </li>
            <li>
              <div class="li-box1"></div>
              <div class="li-box2"></div>
              <div class="li-box3"></div>
            </li>
          </ul>
        </div>
      </div>
    </body>

    <my-footer></my-footer>
  </div>
</template>
<script>
import MyFooter from '@/components/MyFooter.vue'

export default {
  name: 'MakeMoneyView',
  components: {
    'my-footer': MyFooter
  }
}
</script>
<style scoped>
/* 顶部 */
.header {
  width: 100%;
  height: 44px;
}

.top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
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

/* 主要区域 */
.main {
  width: 100%;
  height: 780px;
  background-color: pink;
}

.main-top {
  height: 50%;
  background-color: #3B3E4B;
}

.main-top .zhuanqian {
  position: relative;
  text-align: center;
  height: 60px;
  line-height: 60px;
}

.zhuanqian h4 {
  height: 100%;
  left: 30px;
  font-weight: 400;
  color: #fff;
}

.zhuanqian img {
  position: absolute;
  top: 24%;
  left: 62%;
  height: 30px;
}

.main-top .jinbi {
  width: 92%;
  height: 320px;
  margin: 0 auto;
  background-color: #F2563F;
  color: #FFE9CA;
  box-sizing: border-box;
  padding: 20px 15px;
}

.jinbi-top {
  height: 50%;
  border-bottom: 2px solid #FFE9CA;
}

.jinbi-top ul li:nth-child(1) {
  float: left;
}

.jinbi-top ul li:nth-child(2) {
  float: right;
}

.jinbi-top ol li:nth-child(1) {
  float: left;
  font-size: 32px;
}

.jinbi-top ol li:nth-child(2) {
  float: right;
  margin-top: 12px;
  padding: 0 10px;
  height: 26px;
  line-height: 26px;
  font-weight: 600;
  color: #A94C1B;
  background-color: #FFE9CA;
  border-radius: 13px;
}

.jinbi-bottom {
  width: 92%;
  height: 46px;
  line-height: 46px;
  margin: 40px auto;
  text-align: center;
  background-color: #FFE9CA;
  border-radius: 8px;
}

.jinbi-bottom a {
  color: #A94C1B;
  font-weight: 600;
  font-size: 16px;
}

.main-bottom {
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 72px;
  left: 0;
  padding: 15px 12px;
  background-color: #F5F5F5;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  box-sizing: border-box;
  z-index: 2;
}

.main-bottom .box1 {
  width: 28%;
  height: 28px;
  background-color: #E5E5E5;
  border-radius: 5px;
}

.main-bottom ul li {
  position: relative;
  margin-top: 8px;
  padding: 18px 12px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 5px;
}

.main-bottom ul li .li-box1 {
  width: 60%;
  height: 26px;
  background-color: #E5E5E5;
  border-radius: 10px;
}

.main-bottom ul li .li-box2 {
  margin-top: 5px;
  width: 35%;
  height: 24px;
  background-color: #F2F2F2;
  border-radius: 5px;
}

.main-bottom ul li .li-box3 {
  position: absolute;
  top: 28px;
  right: 2%;
  width: 18%;
  height: 32px;
  background-color: #E5E5E5;
  border-radius: 16px;
}
</style>

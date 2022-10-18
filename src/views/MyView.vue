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
          <div class="user">
            <div class="user-img">
            </div>
            <div class="user-id">寂。458</div>
            <div class="user-settings">账户设置</div>
          </div>
          <div class="user-operation">
            <ul>
              <li><a href="#">
                  <img src="@/assets/images/user-operation-1.png" alt="">
                  <h5>收藏</h5>
                </a>
              </li>
              <li><a href="#">
                  <img src="@/assets/images/user-operation-2.png" alt="">
                  <h5>关注公众号</h5>
                </a>
              </li>
              <li><a href="#">
                  <img src="@/assets/images/user-operation-3.png" alt="">
                  <h5>客服</h5>
                </a>
              </li>
              <li><a href="#">
                  <img src="@/assets/images/user-operation-4.png" alt="">
                  <h5>红包卡券</h5>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <!-- 内容区域 -->
      <div class="main">
        <div class="purchase-info">
          <ul>
            <li>
              <a href="">
                <img src="@/assets/images/purchase-info-1.png" alt="">
                <h5>我的订单</h5>
              </a>
            </li>
            <li>
              <a href="">
                <img src="@/assets/images/purchase-info-2.png" alt="">
                <h5>我的订单</h5>
              </a>
            </li>
            <li>
              <a href="">
                <img src="@/assets/images/purchase-info-3.png" alt="">
                <h5>我的订单</h5>
              </a>
            </li>
            <li>
              <a href="">
                <img src="@/assets/images/purchase-info-4.png" alt="">
                <h5>我的订单</h5>
              </a>
            </li>
            <li>
              <a href="">
                <img src="@/assets/images/purchase-info-5.png" alt="">
                <h5>我的订单</h5>
              </a>
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
  name: 'MyView',
  components: {
    'my-footer': MyFooter
  }
}
</script>
<style scoped>
/* 顶部 */
.header {
  width: 100%;
  height: 100px;
}

.top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 220px;
  background-color: #FFD100;
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
  background-color: #FFD51A;
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

.user {
  position: relative;
  width: 100%;
  height: 70px;
  padding: 0 20px;
  box-sizing: border-box;
}

.user .user-img {
  float: left;
  overflow: hidden;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: url(@/assets/upload/user-img.jpg) no-repeat -9px 1px;
  background-size: 89px;
}

.user .user-id {
  float: left;
  font-size: 20px;
  font-weight: 600;
  color: #333;
  padding-left: 10px;
}

.user .user-settings {
  position: absolute;
  top: 40px;
  left: 24%;
  width: 68px;
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  text-align: center;
  background-color: #F1C50C;
  border-radius: 12px;
}

.user-operation {
  width: 100%;
  height: 56px;
  margin-top: 20px;
  padding: 0 20px;
  box-sizing: border-box;
}

.user-operation ul li {
  float: left;
  width: 25%;
  height: 56px;
  line-height: 56px;
  text-align: center;
}

.user-operation ul li a {
  display: inline-block;
  width: 100%;
  height: 100%;
}

.user-operation img {
  height: 24px;
}

.user-operation h5 {
  height: 24px;
  margin-top: -20px;
  line-height: 24px;
  font-weight: 400;
}

/* 内容区域 */
.main {
  position: absolute;
  top: 200px;
  left: 4%;
  width: 92%;
  height: 78px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;
  z-index: 3;
}

.main .purchase-info {
  margin-top: 16px;
  height: 100%;
  text-align: center;
  box-sizing: border-box;
}

.purchase-info ul li {
  float: left;
  padding: 0 14px;
}

.purchase-info img {
  height: 24px;
}

.purchase-info h5 {
  font-weight: 400;
}
</style>

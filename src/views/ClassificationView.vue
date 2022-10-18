<template>
  <div>

    <div class="class-body">
      <!-- 顶部区域 -->
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
            <div class="search-box">
              <input type="text" value="一键搜索吃喝玩乐住">
              <img src="@/assets/images/top-4.png" alt="">
            </div>
          </div>
        </div>
      </header>
      <!-- 主要区域 -->
      <div class="main">
        <img src="@/assets/images/fenlei-1.png" alt="">
        <h4>无法链接到网络</h4>
        <h5>请检查网络设置或点击重试</h5>
        <div class="reload">重新加载</div>
      </div>
      <!-- 底部区域 -->
      <footer class="footer">
        <ul>
          <li>
            <a href="index.html">
              <img src="@/assets/images/footer-1.png" alt="">
            </a>
            <h4>首页</h4>
          </li>
          <li>
            <a href="fenlei.html">
              <img src="@/assets/images/footer-2.png" alt="" class="current">
            </a>
            <h4>分类</h4>
          </li>
          <li>
            <a href="hongbao.html">
              <img src="@/assets/images/footer-3.png" alt="">
            </a>
            <h4>赚钱</h4>
          </li>
          <li>
            <a href="wode.html">
              <img src="@/assets/images/footer-4.png" alt="">
            </a>
            <h4>我的</h4>
          </li>
        </ul>
      </footer>
    </div>

    <my-footer></my-footer>
  </div>
</template>
<script>
import MyFooter from '@/components/MyFooter.vue'

export default {
  name: 'ClassificationView',
  components: {
    'my-footer': MyFooter
  }
}
</script>
<style scoped>
.class-body {
  height: 880px;
  background-color: #fff;
}

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
  height: 100px;
  background-color: #fff;
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
  border: 1px solid #F5F5F5;
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

.search-box input {
  width: 60%;
  height: 28px;
  position: absolute;
  top: 67px;
  left: 12%;
  padding: 0 9%;
  background-color: #F5F5F5;
  font-size: 14px;
  color: #828282;
  border-radius: 8px;
}

.search-box img {
  position: absolute;
  top: 73px;
  left: 15%;
  width: 16px;
  height: 16px;
}

/* 主要区域 */
.main {
  text-align: center;
  margin-top: 230px;
}

.main img {
  height: 200px;
}

.main h4 {
  margin-top: 20px;
  font-weight: 400;
  font-size: 18px;
  color: #333;
}

.main h5 {
  margin-top: 5px;
  font-weight: 400;
  font-size: 14px;
}

.main .reload {
  width: 20%;
  height: 30px;
  line-height: 30px;
  margin-left: 50%;
  margin-top: 20px;
  transform: translate(-50%);
  background-color: #FFD61A;
  text-align: center;
  color: #333;
  border-radius: 7px;
}

/* 底部 */
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #fff;
}

.footer ul li {
  float: left;
  width: 25%;
  height: 100%;
  text-align: center;
}

.footer ul li h4 {
  font-weight: 400;
}

.footer ul li img {
  height: 45px;
}
</style>

<template>
  <div>
    <footer class="footer">
      <ul>
        <li>
          <router-link to="/index">
            <img src="@/assets/images/footer-1.png" alt="" :class="{current: togglePage==1}" @click="changeToggleNum(1)">
          </router-link>
          <h4>首页</h4>
        </li>
        <li>
          <router-link to="/class">
            <img src="@/assets/images/footer-2.png" alt="" :class="{current: togglePage==2}" @click="changeToggleNum(2)">
          </router-link>
          <h4>分类</h4>
        </li>
        <li>
          <router-link to="/money">
            <img src="@/assets/images/footer-3.png" alt="" :class="{current: togglePage==3}" @click="changeToggleNum(3)">
          </router-link>
          <h4>赚钱</h4>
        </li>
        <li>
          <router-link to="/my">
            <img src="@/assets/images/footer-4.png" alt="" :class="{current: togglePage==4}" @click="changeToggleNum(4)">
          </router-link>
          <h4>我的</h4>
        </li>
      </ul>
    </footer>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'MyFooter',
  computed: {
    ...mapState(['togglePage'])
  },
  methods: {
    ...mapMutations(['changeToggleNum'])
  }
}
</script>
<style scoped>
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

.footer .current {
  background-color: #FFC800;
}
</style>

<template>
  <div>
    <div class="header">
      <div class="school_name">北京亦庄实验小学</div>
      <div class="pic">
        <!--<img src="" alt="头像">-->
        <i class="iconfont icon-yonghu1" @click="userId==1?userId++:userId--"></i>
      </div>
      <p class="userName" @click="$router.push('/userInfo')">张老师</p>
    </div>
    <div class="main" v-if="userId == 1">
      <flexbox :gutter="20">
        <flexbox-item><div class="flex-demo" @click="routerLink()">
          <p class="icon"><i class="iconfont icon-zhifeiji-copy"></i></p>
          <p class="text">邀请</p>
        </div></flexbox-item>
        <flexbox-item><div class="flex-demo" @click="$router.push('/invitation/list')">
          <p class="icon"><i class="iconfont icon-yaoqinghaoyou"></i></p>
          <p class="text">我的邀请</p>
        </div></flexbox-item>
      </flexbox>
      <flexbox :gutter="20">
        <flexbox-item><div class="flex-demo" @click="$router.push('/examine/list')">
          <p class="icon"><i class="iconfont icon-shenhe"></i></p>
          <p class="text">预约审核</p>
        </div></flexbox-item>

        <flexbox-item></flexbox-item>
      </flexbox>
    </div>
    <div class="main" v-else-if="userId == 2">
      <flexbox :gutter="20">
        <flexbox-item><div class="flex-demo"  @click="routerLink()">
          <p class="icon"><i class="iconfont icon-yuyueshenqingshuoming"></i></p>
          <p class="text">预约申请</p>
        </div></flexbox-item>
        <flexbox-item><div class="flex-demo" @click="$router.push('/myselfApply/list')">
          <p class="icon"><i class="iconfont icon-wodeshenqing"></i></p>
          <p class="text">我的申请</p>
        </div></flexbox-item>
      </flexbox>
      <flexbox :gutter="20">

        <flexbox-item><div class="flex-demo" @click="$router.push('/received/list')">
          <p class="icon"><i class="iconfont icon-shoudaoyaoqing"></i></p>
          <p class="text">我收到的邀请</p>
        </div></flexbox-item>

        <flexbox-item></flexbox-item>

      </flexbox>
    </div>

  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    const userId = this.$store.state.userId || 1;
    return {
      userId,
    }
  },
  methods: {
    routerLink() {
      this.$router.push('/identity');
      this.$store.commit('UserId', this.userId)
    }
  }
}
</script>

<style scoped>
.header {
  height: 4rem;
  width: 100%;
  background-color: cornflowerblue;
  background-image: linear-gradient(#39d6fd, #39adf6);
  text-align: center;
  color: #fff;
  box-sizing: border-box;
  padding-top: 0.4rem;
}
.header .pic img {
  display: block;
  margin: auto;
  width: 1.5rem;
  height: 1.5rem;
  box-sizing: border-box;
  border-radius: 50%;
  border: 4px solid #fff;
}
.header .pic i.iconfont {
  font-size: 1.6rem;
}
.userName {
  /*margin-top: 0.2rem;*/
  font-size: 0.32rem;
}
.main {
  padding: 0 20px;
}
.flex-demo {
  background-color: #fff;
  text-align: center;
  margin-top: 20px;
  height: 2.6rem;
  box-sizing: border-box;
  padding-top: 0.4rem;
  border-radius: 7px;
}
p.icon i.iconfont {
  font-size: 0.8rem;
  color: #44b8ff;
}
p.text {
  font-size: 0.28rem;
  color: #666;
}
</style>

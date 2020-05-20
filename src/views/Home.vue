<template>
  <div>
    <div class="header">
      <div class="school_name">北京亦庄实验小学</div>
      <div class="pic">
        <img v-if="userHeadInfo" :src="userHeadInfo" alt="头像">
        <i v-else class="iconfont icon-yonghu1" @click="userId==1?userId++:userId--"></i>
      </div>
      <p class="userName" @click="$router.push('/userInfo')">张老师</p>
    </div>
    <ul class="main">
      <li v-for="item of powerData" :key="item.name" @click="routerLink(item)">
        <div>
          <p class="icon"><i :class="['iconfont', item.iconClass]"></i></p>
          <p class="text">{{item.name}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getToken, getUserInfo, getUserHeadById } from '../api/home'
export default {
  name: "home",
  data() {
    const userId = this.$store.state.userId || 1;
    // 权限信息
    const powerDataAll = [
      { powerId: 1, name: '邀请', toPath: '/identity', iconClass: 'icon-zhifeiji-copy'},
      { powerId: 1, name: '我的邀请', toPath: '/invitation/list', iconClass: 'icon-yaoqinghaoyou'},
      { powerId: 1, name: '预约审核', toPath: '/examine/list', iconClass: 'icon-shenhe'},
      { powerId: 2, name: '预约申请', toPath: '/identity', iconClass: 'icon-yuyueshenqingshuoming'},
      { powerId: 2, name: '我的申请', toPath: '/myselfApply/list', iconClass: 'icon-wodeshenqing'},
      { powerId: 2, name: '我收到的邀请', toPath: '/received/list', iconClass: 'icon-shoudaoyaoqing'},
    ];
    return {
      userId,
      powerDataAll,
      powerData: powerDataAll,
      userHeadInfo: '',
    }
  },
  mounted() {
    this.getTokenByOppenId();
  },
  methods: {
    async getTokenByOppenId() {
      const res = await getToken({openId: 123});
      if (!res.state) return this.$vux.toast.text('获取token失败, 请退出重进');
      this.utils.setSession('token', res.token);

      this.getUser(); // 获取用户信息
    },
    async getUser() {
      const res = await getUserInfo();
      console.log(res);
      const {f_custodian_id, f_cususer_id, f_visitor_id, facePhoto} = res.wxAccount;
      if (!res.state) return this.$vux.toast.text(res.error);
      // 根据角色身份，判断渲染权限
      this.judeUserId (f_custodian_id, f_cususer_id, f_visitor_id);
      if (!facePhoto.id) {
        this.$router.push('/userInfo')
      } else {
        const token = this.utils.getSession('token');
        this.userHeadInfo = `${this.axiosUrl}/system/getImage.do?token=${token}&id=${facePhoto.id}`;
      }
    },

    judeUserId (a, b, c) {
      /*
      * a: f_custodian_id (监护人身份)
      * b: f_cususer_id (系统身份)
      * c: f_visitor_id (临时拜访人身份)
      */
      if (!!b && (!!a || !!c)) { // 系统用户，并且是监护人或者临时拜访用户
        this.powerData = this.powerDataAll
      }
      if(!!b && (!a && !c)) { // 系统用户，并且不是监护人和者临时拜访用户
        this.powerData = this.powerDataAll.filter(item => item.powerId === 1);
      }
      if (!!b || !!c) { // 是监护人或者临时拜访用户
        this.powerData = this.powerDataAll.filter(item => item.powerId === 2);
      }
    },
    getUserHead() {

    },
    // 页面跳转
    routerLink(to) {
      this.$router.push(to.toPath);
      if (to.name === '邀请' || to.name === '预约申请') {
        this.$store.commit('UserId', this.userId)
      }
    }
  }
}
</script>

<style scoped lang="less">
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
.header .pic{
  height: 2.56rem;
  line-height: 2.56rem;
  position: relative;
  img {
    display: block;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 1.8rem;
    height: 1.8rem;
    box-sizing: border-box;
    border-radius: 50%;
    border: 4px solid #fff;
  }
}
.header .pic i.iconfont {
  font-size: 1.6rem;
}
.userName {
  /*margin-top: 0.2rem;*/
  font-size: 0.32rem;
}
ul.main {
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 50%;
    max-width: calc(50%);
    flex-grow: 1;
    text-align: center;
    margin-top: 20px;
    height: 2.6rem;
    overflow: hidden;
    border-radius: 7px;
    >div {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding-top: 0.4rem;
      background-color: #fff;
    }
    &:nth-child(2n) {
      padding-left: 10px;
    }
    &:nth-child(2n - 1) {
      padding-right: 10px;
    }
  }
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

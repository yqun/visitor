<template>
  <div class="comm-body">
    <div class="content" ref="getfocus"> <!--  @focusin="show()" @focusout="hide()" -->
      <!-- 手机登陆 -->
      <x-input type="tel" placeholder="请输入手机号码" keyboard="number" v-model="cellPhone" mask="99999999999">
        <i slot="label" class="iconfont icon-shouji"></i>
      </x-input>
      <x-input title="图片验证码" placeholder="请输入图片验证码" class="weui-vcode" :max='4' v-model="picverification" :show-clear="false">
        <i slot="label" class="iconfont icon-renzhengdunpaianquanbaozhangzhibao-xianxing"></i>
        <img slot="right"
             :src="imagesUrl"
             alt="图片验证码" width="100"
             @click="changeImages()"
             style="border-radius:0px;display: block;"/>
      </x-input>
      <x-input title="手机验证码" placeholder="请输入手机验证码" class="weui-vcode" :max='max' v-model="Verification">
          <i slot="label" class="iconfont icon-icon--"></i>
          <x-button slot="right" class="blue" mini
                    :disabled="disabledBool"
                    @click.native="getVerification()">
            {{btnText}}
          </x-button>
        </x-input>
      <!-- 登录按钮 -->
      <div class="login">
        <x-button class="blue" @click.native="$router.push('/')">登 录</x-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        token: '',
        max: 6,
        cellPhone: '', // 输入的电话号码
        Verification: '', // 输入的验证码
        btnText: '发送验证码', // 发送验证码按钮文本
        disabledBool: false, // 验证码禁用
        picverification: '', //图片验证码
        imagesUrl: '', //验证码图片

      }
    },
    created() {

    },
    mounted () {

    },
    methods: {

    }
  }
</script>

<style scoped>
.comm-body {
  width: 100%;
  height: 100%;
  background: #dbe8f4 url("../assets/images/loginBj.png") no-repeat top/100%;
  box-sizing: border-box;
  padding: 4.58rem 0 1.25rem;
}
.content {
  height: 100%;
  box-sizing: border-box;
  margin: 0 0.5rem;
  background-color: #fff;
  border-radius: 7px;
}
.content .vux-x-input.weui-cell {
  padding-top: 0.5rem;
}
.login {
  width: 100%;
  box-sizing: border-box;
  padding: 20px 0.5rem;
}
.login .blue {
  border-radius: 20px;
}
div.vux-x-input.weui-cell /deep/ .weui-cell__hd {
  margin-right: 20px;
}
div.vux-x-input.weui-cell i {
  color: #39adf6;
  font-size: 20px;
}
div.vux-x-input.weui-cell.weui-vcode::before {
  border: none;
}
div.vux-x-input.weui-cell::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 15px;
  height: 1px;
  border-bottom: 1px solid #e1e1e1;
  left: 15px;
}
.vux-x-input.weui-cell /deep/ .weui-cell__bd {
  /*font-size: 14px;*/
}
</style>

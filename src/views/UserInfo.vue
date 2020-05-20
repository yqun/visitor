<template>
  <div>
    <group>
      <x-input title="用户名"
               disabled
               v-model="userName"
               :show-clear="false"
               text-align="right">
      </x-input>
      <x-input title="手机号"
               disabled
               v-model="userTel"
               :show-clear="false"
               text-align="right">
      </x-input>
      <x-input title="性　别"
               v-model="userSex"
               :show-clear="false"
               placeholder="请填写性别"
               text-align="right">
      </x-input>
      <x-input title="身份证号"
               v-model="userId"
               :show-clear="false"
               placeholder="请填写性别"
               text-align="right">
      </x-input>
      <datetime v-model="birthday"
                placeholder="请选择出生年月"
                title="生　日">
      </datetime>
      <!--<input type="file">-->
    </group>
    <div class="footer">
      <x-button class="blue" @click.native="$router.push('/login')">更改认证手机号</x-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "userInfo",
  data() {
    return {
      userName: '大白',
      userTel: '12345678901',
      userSex: '',
      userId: 1234567890,
      birthday: '',
    }
  }
}
</script>

<style scoped>
.footer {
  margin: 1rem 0.5rem;
}
</style>

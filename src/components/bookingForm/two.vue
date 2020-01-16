<template>
  <div>
    <group :gutter="8" class="main_form">

      <x-input title="　邀请人"
               v-model="userName"
               text-align="right"
               :show-clear="false"
               disabled>
      </x-input>
      <x-input title="职　　位"
               v-model="userPosition"
               text-align="right"
               :show-clear="false"
               disabled>
      </x-input>

      <cell primary="content" title="被邀请人">
        <span v-for="item in appoint.name" :key="item.id" v-if="!item.children">{{item.text}}, </span>
        <!--<el-select v-model="appoint.name" multiple placeholder="请选择" disabled></el-select>-->
      </cell>
      <datetime title="开始时间" v-model="appoint.startDate" format="YYYY-MM-DD HH:mm" readonly></datetime>
      <datetime title="结束时间" v-model="appoint.endDate" format="YYYY-MM-DD HH:mm" readonly></datetime>

      <x-textarea title="地　　点"
                  v-model="appoint.address"
                  :max="200" readonly
                  :show-counter="false"
                  :rows="2">
      </x-textarea>

      <x-textarea title="事　　由"
                  v-model="appoint.cause"
                  :max="200"
                  readonly
                  :show-counter="false"
                  :rows="2">
      </x-textarea>
      <cell title="二维码次数">
        <inline-x-number v-model="appoint.qrNum"
                         style="display:block;"
                         :min="appoint.qrNum"
                         :max="appoint.qrNum"
                         width="50px"
                         button-style="round">
        </inline-x-number>
      </cell>
    </group>
  </div>
</template>

<script>
export default {
  name: "bookingForm-two",
  data(){
    const appoint = this.$store.state.appoint;
    console.log(appoint)
    return {
      appoint,
      userName: '', // 邀请人姓名
      userPosition: '', // 邀请人职位
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
.main_form >>> .weui-cells:before {
  border: 0;
}
div.el-select {
  width: 100%;
}
div.el-select >>> .el-input.is-disabled .el-input__inner{
  background-color: transparent;
}
div.el-select >>> input {
  border: 0;
}
</style>

<template>
  <div>
    <group :gutter="0">

      <x-input disabled title="　邀请人" v-model="userName" text-align="right"></x-input>
      <x-input disabled title="职　　位" v-model="userPosition" text-align="right"></x-input>

      <datetime title="开始时间" v-model="startDate" format="YYYY-MM-DD HH:mm" readonly></datetime>
      <datetime title="结束时间" v-model="endDate" format="YYYY-MM-DD HH:mm" readonly></datetime>

      <x-textarea title="地　　点" v-model="address" :max="200" readonly :show-counter="false" :rows="2"></x-textarea>
      <x-textarea title="事　　由" v-model="cause" :max="200" readonly :show-counter="false" :rows="2"></x-textarea>

      <cell title="二维码次数">
        <inline-x-number v-model="qrNum" style="display:block;" :min="qrNum" :max="qrNum"
                         width="50px" button-style="round">
        </inline-x-number>
      </cell>
    </group>
    <div class="footer">
      <flexbox justify="center" :gutter="40">
        <flexbox-item :span="1/3">
          <div class="flex-demo"><x-button class="red">拒绝</x-button></div>
        </flexbox-item>
        <flexbox-item :span="1/3">
          <div class="flex-demo"><x-button class="blue">同意</x-button></div>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
export default {
  name: "received-item",
  data() {
    return {
      userName: '小明',
      userPosition: '数学老师',
      startDate: '',
      endDate: '',
      address: '学校',
      cause: '作业',
      qrNum: 2,
    }
  }
}
</script>

<style scoped>
.footer {
  margin-top: 20px;
}
</style>

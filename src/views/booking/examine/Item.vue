<template>
  <div>
    <group :gutter="0">
      <x-input disabled title="学生姓名" v-model="studentName"></x-input>
      <x-input disabled title="家长姓名" v-model="parentName"></x-input>
      <x-input disabled title="身份证号" v-model="parentId"></x-input>
      <x-input disabled title="电话" v-model="parentTel"></x-input>

      <datetime title="开始时间" v-model="startDate" readonly format="YYYY-MM-DD HH:mm"></datetime>
      <datetime title="结束时间" v-model="endDate" readonly format="YYYY-MM-DD HH:mm"></datetime>

      <x-textarea title="地点" v-model="address" :max="200" readonly
                  :show-counter="false" :rows="2">
      </x-textarea>
      <x-textarea title="事由" v-model="cause" :max="200" readonly
                  :show-counter="false" :rows="2">
      </x-textarea>
      <cell title="二维码次数">
        <inline-x-number v-model="qrNum" style="display:block;"
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
  name: "Item",
  data() {
    return {
      studentName: '小白',
      parentName: '大白',
      parentId: 123456789,
      parentTel: 12345678901,
      startDate: '',
      endDate: '',
      address: '学校',
      cause: '作业',
      qrNum: 1,
    }
  }
}
</script>

<style scoped>
.footer {
  margin-top: 20px;
}
</style>

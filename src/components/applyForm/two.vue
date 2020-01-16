<template>
  <div>
    <group :gutter="8" class="main_form">
      <cell primary="content" title="被访问人">
        <div>
          <span v-for="item in appoint.name" :key="item.id">{{item.text}}, </span>
        </div>
      </cell>
      <x-input v-if="addType != 'temporary'" disabled title="学生姓名" v-model="appoint.studentName" text-align="right"></x-input>
      <x-input v-if="addType != 'temporary'" disabled title="家长姓名" v-model="appoint.parentName" text-align="right"></x-input>
      <x-input v-if="addType != 'temporary'" disabled title="身份证号" v-model="appoint.parentId" text-align="right"></x-input>
      <x-input v-if="addType != 'temporary'" disabled title="电　　话" v-model="appoint.parentTel" text-align="right"></x-input>

      <datetime title="开始时间" v-model="appoint.startDate" readonly format="YYYY-MM-DD HH:mm"></datetime>
      <datetime title="结束时间" v-model="appoint.endDate" readonly format="YYYY-MM-DD HH:mm"></datetime>

      <x-textarea title="地点" v-model="appoint.address" :max="200" readonly
                  :show-counter="false" :rows="2">
      </x-textarea>
      <x-textarea title="事由" v-model="appoint.cause" :max="200" readonly
                  :show-counter="false" :rows="2">
      </x-textarea>
    </group>
  </div>
</template>

<script>
export default {
  name: "applyForm-two",
  data(){
    const appoint = this.$store.state.appoint;
    const addType = this.$route.query.type;
    return {
      appoint,
      addType,
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.main_form >>> .weui-cells:before {
  border: 0;
}
</style>

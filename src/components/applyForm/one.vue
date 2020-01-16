<template>
  <div>
    <group :gutter="8" class="main_form">
      <cell primary="content" @click.native="$emit('showConfirm')">
        <p slot="title"><i class="must">*</i> 被访问人</p>
        <div>
          <span v-if="user.length == 0">请选择被访问人</span>
          <span v-for="item in user" :key="item.id">{{item.text}}, </span>
        </div>
      </cell>
      <x-input v-model="appoint.studentName"
               v-if="addType != 'temporary'"
               text-align="right"
               :show-clear="false"
               placeholder="请填写学生姓名"
               placeholder-align="right">
        <p slot="label"><i class="must">*</i> 学生姓名</p>
      </x-input>
      <x-input v-model="appoint.parentName"
               v-if="addType != 'temporary'"
               text-align="right"
               :show-clear="false"
               placeholder="请填写家长姓名"
               placeholder-align="right">
        <p slot="label"><i class="must">*</i> 家长姓名</p>
      </x-input>
      <x-input v-model="appoint.parentId"
               v-if="addType != 'temporary'"
               text-align="right"
               :show-clear="false"
               placeholder="请填写身份证号"
               placeholder-align="right">
        <p slot="label"><i class="must">*</i> 身份证号</p>
      </x-input>
      <x-input v-model="appoint.parentTel"
               v-if="addType != 'temporary'"
               text-align="right"
               :show-clear="false"
               placeholder="请填写电话"
               placeholder-align="right">
        <p slot="label"><i class="must">*</i> 电话</p>
      </x-input>

      <datetime v-model="appoint.startDate"
                format="YYYY-MM-DD HH:mm"
                placeholder="请选择预约时间">
        <p slot="title"><i class="must">*</i> 开始时间</p>
      </datetime>
      <datetime v-model="appoint.endDate"
                format="YYYY-MM-DD HH:mm"
                placeholder="请选择预约时间">
        <p slot="title"><i class="must">*</i> 结束时间</p>
      </datetime>

      <x-textarea v-model="appoint.address" :max="200"
                  :show-counter="false" :rows="2">
        <p slot="label"><i class="must">*</i> 地点　</p>
      </x-textarea>
      <x-textarea v-model="appoint.cause" :max="200"
                  :show-counter="false" :rows="2">
        <p slot="label"><i class="must">*</i> 事由　</p>
      </x-textarea>
    </group>
  </div>
</template>

<script>
export default {
  name: "applyForm-one",
  props: {
    user: {
      type: Array,
    }
  },
  watch: {
    user(newVal, oldVal) {
      this.appoint.name = newVal
    }
  },
  data() {
    let appoint = this.$store.state.appoint;
    const addType = this.$route.query.type;
    return {
      appoint,
      addType,
    }
  },
  mounted() {
    this.appoint.name = this.user
  }
}
</script>

<style scoped>
i.must {
  color: red;
}
.main_form >>> .weui-cells:before {
  border: 0;
}
</style>

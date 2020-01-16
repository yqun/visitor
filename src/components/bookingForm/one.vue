<template>
  <div>
    <group :gutter="8" class="main_form">
      <!--被邀请人（通过选择学生连带出学生监护人信息）、日期、时间、地点、事由、二维码次数-->
      <cell primary="content"
            @click.native="$emit('showConfirm')">
        <p slot="title"><i class="must">* </i>被邀请人</p>
        <div>
          <span v-if="user.length == 0">请选择被邀请人</span>
          <span v-for="item in user" :key="item.id" v-if="!item.children">{{item.text}}, </span>
        </div>
        <!--<el-select v-model="appoint.name" multiple ref="eleSel"-->
                   <!--placeholder="请选择被邀请人" @blur="$refs.eleSel.blur()">-->
          <!--<el-option-->
            <!--v-for="item in options"-->
            <!--:key="item.value"-->
            <!--:label="item.label"-->
            <!--:value="item.value">-->
          <!--</el-option>-->
        <!--</el-select>-->
      </cell>
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
      <x-textarea v-model="appoint.address" :max="200" placeholder="请填写预约地点" :show-counter="false" :rows="2">
        <p slot="label"><i class="must">*</i> 地点　</p>
      </x-textarea>
      <x-textarea v-model="appoint.cause" :max="200" placeholder="请填写预约事由" :show-counter="false" :rows="2">
        <p slot="label"><i class="must">*</i> 事由　</p>
      </x-textarea>
      <cell>
        <p slot="title"><i class="must">*</i> 二维码次数</p>
        <inline-x-number v-model="appoint.qrNum" style="display:block;" :min="0" width="50px" button-style="round"></inline-x-number>
      </cell>
    </group>
  </div>
</template>

<script>
export default {
  name: "bookingForm-one",
  props: {
    user: {
      type: Array,
    }
  },
  data() {
    let appoint = this.$store.state.appoint;
    return {
      appoint,
      options: [
        {value: '选项1'},
        {value: '选项2'},
        {value: '选项3'},
        {value: '选项4'},
        {value: '选项5'}
      ],

    }
  },
  watch: {
    user: {
      immediate: true,    // 这句重要
      handler (val) {
        this.appoint.name = val
      }
    }
  },
  mounted() {
    this.appoint.name = this.user;
  },
  methods: {
    changeAppointName(data) {
      console.log('data', data)
      const arr = [];
      data.forEach(item => {
        if (item.children) {
          console.log(item.name)
        }
        arr.push(item.text);
      });
      this.appoint.name = arr.join(', ');
      console.log(this.appoint.name)
    }
  }
}
</script>

<style scoped>
.main_form >>> .weui-cells:before {
  border: 0;
}
.main_form p {
  /*font-size: 0.34rem;*/
}
i.must {
  color: red;
}
div.el-select {
  width: 100%;
}
div.el-select >>> input {
  border: 0;
}
</style>

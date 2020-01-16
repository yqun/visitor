<template>
  <div>
    <group :gutter="0">
      <cell primary="content" title="被邀请人" @click.native="showConfirm = true">
        <p><span v-for="item of appointName" :key="item.id">{{item.text}}, </span></p>
      </cell>
      <x-input disabled title="学生姓名" v-model="studentName" text-align="right"></x-input>
      <x-input disabled title="家长姓名" v-model="parentName" text-align="right"></x-input>
      <x-input disabled title="身份证号" v-model="parentId" text-align="right"></x-input>
      <x-input disabled title="电　　话" v-model="parentTel" text-align="right"></x-input>

      <datetime title="开始时间" v-model="startDate" readonly format="YYYY-MM-DD HH:mm"></datetime>
      <datetime title="结束时间" v-model="endDate" readonly format="YYYY-MM-DD HH:mm"></datetime>

      <x-textarea title="地点" v-model="address" :max="200" readonly
                  :show-counter="false" :rows="2">
      </x-textarea>
      <x-textarea title="事由" v-model="cause" :max="200" readonly
                  :show-counter="false" :rows="2">
      </x-textarea>
    </group>
    <div class="footer">
      <flexbox justify="center">
        <flexbox-item :span="1/2">
          <div class="flex-demo"><x-button class="red">撤销</x-button></div>
        </flexbox-item>
      </flexbox>
    </div>

    <!-- 选择邀请人 -->
    <confirm v-model="showConfirm" class="testCon" title="请选择站点">
      <Tree :data="siteData" checkbox ref="easyTree" @nodeClick="nodeClick"></Tree>
    </confirm>
  </div>
</template>

<script>
export default {
  name: "myselfApply-item",
  data() {
    return {
      appointName: [{ id: 111, text: "张老师" }],
      studentName: '小白',
      parentName: '大白',
      parentId: 123456789,
      parentTel: 12345678901,
      startDate: '',
      endDate: '',
      address: '学校',
      cause: '小白作业',
      showConfirm: false,
      siteData: [
        { id: 111, text: "张老师", checkState: "checked" },
        { id: 112, text: "赵老师" },
      ],
    }
  },
  methods: {
    nodeClick(node) {
      if (!node.state) return false;
      node.state=='closed'?node.state='open':node.state='closed';
    },
  }
}
</script>

<style scoped>
.footer {
  margin-top: 20px;
}

/* 弹框样式 */
.testCon /deep/ .weui-dialog__bd{
  height: 400px;
  overflow: auto;
  text-align: left;
  padding-bottom: 1.6em;
}
.testCon /deep/ .weui-dialog__bd .tree{
  height: 100%;
  overflow: auto;
}
</style>

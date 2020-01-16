<template>
  <div>
    <group :gutter="0">
      <cell primary="content" title="被邀请人" @click.native="showConfirm = true">
        <p><span v-for="item of appoint.name" :key="item.id">{{item.text}}, </span></p>
      </cell>
      <datetime title="开始时间"
                v-model="appoint.startDate"
                format="YYYY-MM-DD HH:mm"
                readonly>
      </datetime>
      <datetime title="结束时间"
                v-model="appoint.endDate"
                format="YYYY-MM-DD HH:mm"
                readonly>
      </datetime>
      <x-textarea title="地点" v-model="appoint.address" :max="200" readonly
                  :show-counter="false" :rows="2">
      </x-textarea>
      <x-textarea title="事由" v-model="appoint.cause" :max="200" readonly
                  :show-counter="false" :rows="2">
      </x-textarea>
      <cell title="二维码次数">
        <inline-x-number v-model="appoint.qrNum" style="display:block;"
                         :min="appoint.qrNum" :max="appoint.qrNum" width="50px" button-style="round">
        </inline-x-number>
      </cell>
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
  name: "invitation-item",
  data() {
    return {
      appoint: {
        name: [{ id: 111, text: "小明" },{ id: 112, text: "小丽" }],
        startDate: '2020-01-08 12:00',
        endDate: '2020-01-08 14:00',
        address: '学校',
        cause: '家长会',
        qrNum: 3,
      },
      showConfirm: false,
      siteData: [
        {id: 11, text: "一年级一班", state: "open", checkState: "indeterminate",
          children: [
            { id: 111, text: "小明", checkState: "checked" },
            { id: 112, text: "小丽", checkState: "checked" },
            { id: 113, text: "小红" }
          ]
        },
        {id: 12, text: "一年级二班", state: 'open',
          children: [
            {id: 121, text: "小强"},
            {id: 122, text: "小赵"},
            {id: 123, text: "小张"},
            {id: 124, text: "小李"}
          ]
        },
      ],
    }
  },
  mounted() {

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
div.el-select {
  width: 100%;
}
div.el-select >>> .el-input.is-disabled .el-input__inner{
  background-color: transparent;
}
div.el-select >>> input {
  border: 0;
}
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

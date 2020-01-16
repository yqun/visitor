<template>
  <div class="content">
    <div class="header">
      <h3>访客预约单</h3>
      <div style="padding: 5px 10px;">
        <y-step :link="currentLink" :key="currentLink">
          <y-step-item :title="step.one" stepLine>1</y-step-item>
          <y-step-item :title="step.two" stepLine>2</y-step-item>
          <y-step-item :title="step.three">3</y-step-item>
        </y-step>
      </div>
    </div>
    <div class="main">
      <router-view ref="bookingForm"
                   :user="selection"
                   @showConfirm="showConfirm = true">
      </router-view>
    </div>
    <div class="footer">
      <flexbox justify="center" :gutter="40">
        <flexbox-item :span="1/3" v-if="currentLink != 1">
          <div class="flex-demo">
            <x-button class="default" @click.native="prev()">返回上一步</x-button>
          </div>
        </flexbox-item>
        <flexbox-item :span="1/3" v-if="currentLink == 1">
          <div class="flex-demo">
            <x-button class="blue" @click.native="next()">下一步</x-button>
          </div>
        </flexbox-item>
        <flexbox-item :span="1/3" v-if="currentLink == 2">
          <div class="flex-demo">
            <x-button class="blue" @click.native="next()">确认预约</x-button>
          </div>
        </flexbox-item>
      </flexbox>
    </div>

    <!-- 选择邀请人 -->
    <confirm v-model="showConfirm" class="testCon" title="请选择站点" @on-confirm="getdefaultValueSite()">
      <Tree :data="siteData"
            checkbox
            ref="easyTree"
            @nodeExpand="onNodeExpand($event)"
            @checkChange="selectChange"
            @nodeClick="nodeClick">
      </Tree>
    </confirm>
  </div>
</template>

<script>
import yStep from '../components/step/y-step'
import yStepItem from '../components/step/y-step-item'
export default {
  components: {
    yStep,
    yStepItem
  },
  name: "formAdd",
  data() {
    // userId:  1(老师)  2(家长)
    const userId = this.$store.state.userId;
    const addType = this.$route.query.type;
    let step = null;
    if (userId == 1) {
      step = { one: '填写邀请信息', two: '确认邀请信息', three: '邀请成功' }
    }
    else if (userId == 2) {
      step = { one: '填写申请信息', two: '确认申请信息', three: '申请成功' }
    }
    return {
      userId,
      addType,
      step,
      currentLink: 1,
      showConfirm: false,
      siteData: [],
      selection: [],
    }
  },
  beforeRouteLeave(to, form, next) {
    this.$store.commit('Appoint', {});
    next();
  },
  mounted() {
    if (this.$route.name != 'applyForm-one' && this.$route.name != 'bookingForm-one' && this.currentLink == 1) {
      this.judgeCurrentLink();
    }
    if (this.addType == 'class') {
      this.siteData =  [
        {id: 11, text: "一年级一班", state: "closed",
          children: [
            { id: 111, text: "小明" },
            { id: 112, text: "小丽" },
            { id: 113, text: "小红" }
          ]
        },
        {id: 12, text: "一年级二班", state: 'closed',
          children: [
            {id: 121, text: "小强"},
            {id: 122, text: "小赵"},
            {id: 123, text: "小张"},
            {id: 124, text: "小李"}
          ]
        },
      ];
    } else if (this.addType == 'association') {
      this.siteData =  [
        {id: 11, text: "足球社", state: "closed",
          children: [
            { id: 111, text: "小明" },
            { id: 112, text: "小丽" },
            { id: 113, text: "小红" }
          ]
        },
        {id: 12, text: "篮球社", state: 'closed',
          children: [
            {id: 121, text: "小强"},
            {id: 122, text: "小赵"},
            {id: 123, text: "小张"},
            {id: 124, text: "小李"}
          ]
        },
      ];
    } else if (this.addType == 'temporary' && this.userId == 1) {
      this.siteData =  [
        { id: 111, text: "小明" },
        { id: 112, text: "小丽" },
        { id: 113, text: "小红" },
        { id: 121, text: "小强" },
        { id: 122, text: "小赵" },
        { id: 123, text: "小张" },
        { id: 124, text: "小李" }
      ];
    } else if (this.addType == 'parent') {
      this.siteData =  [
        { id: 111, text: "张老师" },
        { id: 112, text: "赵老师" },
      ];
    } else if (this.addType == 'temporary' && this.userId == 2) {
      this.siteData =  [
        { id: 111, text: "张老师" },
        { id: 112, text: "赵老师" },
      ];
    }

  },
  methods: {
    next() {
      if (this.currentLink == 1) {
        this.$store.commit('Appoint', this.$refs.bookingForm.appoint);
      }
      this.currentLink++;
      this.judgeCurrentLink();
    },
    prev() {
      this.currentLink--;
      this.judgeCurrentLink();
    },
    judgeCurrentLink() {
      if (this.userId == 1) { // 教师（被访人员）
        if (this.currentLink == 1) return this.$router.replace(`/bookingForm/one`);
        if (this.currentLink == 2) return this.$router.replace(`/bookingForm/two`);
        if (this.currentLink == 3) return this.$router.replace(`/bookingForm/three`);
      }
      else if (this.userId == 2) { // 家长（访问人）
        if (this.currentLink == 1) return this.$router.replace(`/applyForm/one?type=${this.addType}`);
        if (this.currentLink == 2) return this.$router.replace(`/applyForm/two?type=${this.addType}`);
        if (this.currentLink == 3) return this.$router.replace(`/applyForm/three`);
      }
    },
    onNodeExpand(event) {
      // let node = event;
      // if (!node.children) {
      //   this.getNodes(node).then(data => {
      //     this.$set(node, "children", data);
      //   });
      // }
    },
    async getNodes(node) {
      if (!node.state) return false;
      const res = await this.$http.get(`${this.apiHost}leagueBuss/findScopeByPageTree.do?token=${this.token}&id=${node.id}`)
      const data = res.data;
      // console.log(data);
      return new Promise(resolve => {
        if (!node) return false;
        resolve(data);

      });
    },
    nodeClick(node) {
      // console.log(node);
      if (!node.state) return false; // this.$refs.easyTree.selectNode()
      node.state=='closed'?node.state='open':node.state='closed';
      // this.onNodeExpand(node)
    },
    selectChange(nodes) {
      this.selection = nodes
    },
    getdefaultValueSite() {
      // this.$refs.bookingForm.changeAppointName()
    }
  }
}
</script>

<style scoped>
.content {
  height: 100%;
  box-sizing: border-box;
  padding: 4rem 0 0.4rem;
}
.header {
  background-image: linear-gradient(#39d6fd, #39adf6);
  width: 100%;
  height: 4rem;
  background-color: cornflowerblue;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  position: fixed;
  top: 0;
}
.header h3 {
  font-size: 0.56rem;
  text-align: center;
  color: #fff;
  margin-top: 0.4rem;
  font-weight: 400;
}
.main {
  height: 100%;
  background-color: #fff;
  margin: -1.2rem 10px 10px;
  border-radius: 7px;
  position: relative;
  z-index: 999;
  overflow: scroll;
}
.footer {
  margin-top: 0.2rem;
  margin-bottom: 0.4rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
button {
  font-size: 0.36rem;
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

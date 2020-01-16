<!--
  * 属性
    stepLine：是否存在线条路径，默认为false
    title：流程显示的标题（当前环节信息）
-->
<template>
  <div class="stepItem">
    <p :class="{'step_line': stepLine}"><span><slot></slot></span></p>
    <p class="title">{{title}}</p>
  </div>
</template>

<script>
export default {
  name: "y-step-item",
  props: {
    stepLine: {
      default: false,
      type: Boolean
    },
    title: {
      default: '',
    },

  },
  mounted() {

  }
}
</script>

<style scoped>
.stepItem {
  float: left;
  width: 33%;
}
.stepItem p {
  text-align: center;
  font-size: 0.28rem;
  position: relative;
}
p.title {
  color: #fff;
}
.stepItem p span {
  background-color: transparent;
  color: #fff;
  box-sizing: border-box;
  border: 1px solid #fff;
  border-radius: 50%;
  display: inline-block;
  width: 0.48rem;
  height: 0.48rem;
  line-height: 0.48rem;
  position: relative;
  z-index:2;
}
.stepItem.active p span {
  background-color: #fff;
  color: #666;
}
.step_line::before {
  content: '';
  display: block;
  width: 70%;
  height: 1px;
  background-color: #fff;
  margin: auto;
  position: absolute;
  left: 66%;
  top: 0;
  bottom: 0;
}
</style>

<!--
  * 属性 link：当前环节，数字
-->
<template>
  <div class="clearfix" ref="step">
    <slot></slot>
  </div>
</template>

<script>
import yStepItem from './y-step-item'
export default {
  components: {
    yStepItem,
  },
  name: "y-step",
  props: {
    link: {
      default: 1,
      type: Number
    }
  },
  data() {
    return {

    }
  },
  mounted() {
    let index = 0;
    const stepItemArr = this.$refs.step.children;
    while(index != this.link) {
      stepItemArr[index].classList.add("active");
      index++;
    }
    // console.log(this.$children.length);
  },
  methods: {

  }
}
</script>

<style scoped>

</style>

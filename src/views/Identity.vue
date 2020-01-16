<template>
  <div>
    <div class="main" v-if="userId == 1">
      <flexbox :gutter="20">
        <flexbox-item><div class="flex-demo" @click="$router.replace('/formAdd?type=class')">
          <p class="text">班级邀请</p>
        </div></flexbox-item>
        <flexbox-item><div class="flex-demo" @click="$router.replace('/formAdd?type=association')">
          <p class="text">社团邀请</p>
        </div></flexbox-item>
      </flexbox>
      <flexbox :gutter="20">
        <flexbox-item><div class="flex-demo" @click="$router.replace('/formAdd?type=temporary')">
          <p class="text">临时邀请</p>
        </div></flexbox-item>

        <flexbox-item></flexbox-item>
      </flexbox>
    </div>
    <div class="main" v-if="userId == 2">
      <flexbox :gutter="20">
        <flexbox-item><div class="flex-demo" @click="$router.replace('/formAdd?type=parent')">
          <p class="text">学生家长</p>
        </div></flexbox-item>
        <flexbox-item><div class="flex-demo" @click="$router.replace('/formAdd?type=temporary')">
          <p class="text">临时访问</p>
        </div></flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
export default {
  name: "Identity",
  data() {
    const userId = this.$store.state.userId;
    return {
      userId,
    }
  }
}
</script>

<style scoped>
.main {
  padding: 0 20px;
}
.flex-demo {
  background-color: #fff;
  text-align: center;
  margin-top: 20px;
  height: 2.6rem;
  line-height: 2.6rem;
  box-sizing: border-box;
  /*padding-top: 0.4rem;*/
  border-radius: 7px;
}
p.text {
  font-size: 0.48rem;
  color: #666;
}
</style>

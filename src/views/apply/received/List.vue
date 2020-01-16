<template>
  <div>
    <group :gutter="0">
      <cell title="事由" value="时间" v-for="num of 2" :key="num"
            :link="`/received/item?id=${num}`">
      </cell>
    </group>
  </div>
</template>

<script>
export default {
  name: "received-list"
}
</script>

<style scoped>

</style>

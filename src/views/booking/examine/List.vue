<template>
  <div>
    <group :gutter="0">
      <cell title="事由" value="时间" v-for="num of 4" :key="num"
            :link="`/examine/item?id=${num}`">
      </cell>
    </group>
  </div>
</template>

<script>
export default {
  name: "examine-list"
}
</script>

<style scoped>

</style>

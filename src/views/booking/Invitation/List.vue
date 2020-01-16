<template>
  <div>
    <group :gutter="0">
      <cell title="事由" v-for="num of 4" :key="num"
            :link="`/invitation/item?id=${num}`">
        <div>
          <p>2020-01-13</p>
          <p>待确认</p>
        </div>
      </cell>
    </group>
  </div>
</template>

<script>
export default {
  name: "invitation-list"
}
</script>

<style scoped>

</style>

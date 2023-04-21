<template>
  <div class="ml_x_10">
    <el-breadcrumb>
      <el-breadcrumb-item v-for="(item, index) in breadList" :key="item.path">
        <div v-if="index === breadList.length - 1">{{ item.meta.title }}</div>
        <router-link v-else :to="item.path">{{ item?.meta?.title }}</router-link>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
const route = useRoute()
const breadList = ref<any[]>([])
const getBreadlist = () => {
  const matched = route.matched.filter((item) => item.meta && item.meta.title && !item.meta.hideChildren);
  breadList.value = matched;
}
watch(route, () => {
  getBreadlist()
}, {
  immediate: true
})
console.log(route.matched)
</script>
<style scoped lang='scss'>
</style>

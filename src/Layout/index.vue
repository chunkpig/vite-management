<template>
  <el-container class="h_100">
    <side-bar />
    <el-container>
      <el-header class="pr_x_0 pl_x_10">
        <nav-bar />
      </el-header>
      <el-main>
        <RouterView></RouterView>
      </el-main>

    </el-container>
  </el-container>
</template>

<script setup>
import SideBar from './side-bar/index.vue'
import NavBar from './nav-bar/index.vue'

</script>
<style scoped lang='scss'>
</style>

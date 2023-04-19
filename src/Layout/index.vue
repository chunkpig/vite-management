<template>
  <el-container class="h_100">
    <side-bar />
    <el-container>
      <el-header>
        <nav-bar />
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script setup>
import SideBar from './side-bar/index.vue'
import NavBar from './nav-bar/index.vue'
</script>
<style scoped lang='scss'>
</style>

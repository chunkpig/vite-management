<template>
  <el-aside width="200px">
    <div class="side-container h_100">
      <div class="h_x_48">
      </div>
      <el-scrollbar class="side-main">
        <el-menu :collapse="getCollapse" :default-active="$route.path" :collapse-transition="false" unique-opened
          router>
          <bar-item v-for="route in permissionStore.route" :key="route.path" :item="route" />
        </el-menu>
      </el-scrollbar>
    </div>
  </el-aside>
</template>

<script lang="ts" setup>
import BarItem from './bar-item.vue'
import { usePermissionStoreWithOut } from '@/stores/modules/permission'
const getCollapse = ref(false)
const permissionStore = usePermissionStoreWithOut();
permissionStore.changeRole()
console.log(permissionStore.route)
</script>
<style scoped lang='scss'>
.el-aside {
  transition: all 0.3s;
  overflow: hidden;

  .side-container {
    background-color: var(--el-menu-bg-color);

    .side-main {
      height: calc(100% - 60px);
    }
  }
}
</style>

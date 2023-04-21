<template>
  <el-aside :width="`${sideWidth}px`">
    <div class="side-container h_100">
      <div class="h_x_58" :class="{ collapse: getCollapse }">
        <Logo />
      </div>
      <el-scrollbar class="side-main w_100">
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
import Logo from './logo.vue'
import { usePermissionStoreWithOut } from '@/stores/modules/permission'
import { useMenuSetting } from '../hook/useMenuSetting'
const { getCollapse, getSideCollapsed, getSideWidth } = useMenuSetting()
const permissionStore = usePermissionStoreWithOut();
permissionStore.changeRole()
const sideWidth = computed(() => {
  return unref(getCollapse) ? unref(getSideCollapsed) : unref(getSideWidth)
})

</script>
<style  lang='scss'>
.el-aside {
  transition: all 0.3s;
  overflow: hidden;

  .side-container {
    background-color: var(--el-menu-bg-color);

    .collapse {

      .side-logo {
        padding-left: 0;
      }

      .side-logo-title {
        display: none;
      }
    }

    .side-logo {
      height: 54px;
      line-height: 54px;
      transition: all 0.2s ease;
      box-sizing: border-box;
      padding-left: 20px;

      .side-logo-title {
        color: var(--el-menu-active-color);
        font-weight: 600;
        transition: all 0.5s;
        margin-left: 12px;
        font-size: var(--base-menu-logo);
      }
    }

    .side-main {
      height: calc(100% - 60px);
    }
  }
}
</style>

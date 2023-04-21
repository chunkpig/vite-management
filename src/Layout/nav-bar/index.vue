<template>
  <div class="nav_wrapper flex align-center justily-between hc_x_48 w_100 ">
    <div>
      <icon :svgName="getCollapse ? 'unfold' : 'fold'" class="pointer" @click="toggleCollapse(!getCollapse)" />
    </div>
    <Breadcrumb />
  </div>
</template>

<script lang="ts" setup>

import { useMenuSetting } from '../hook/useMenuSetting'
import Breadcrumb from './breadcrumb.vue'
const { getCollapse, toggleCollapse } = useMenuSetting()

</script>
<style scoped lang='scss'>
.nav_wrapper {
  border-bottom: 1px solid var(--base-tag-border);
  transition: all 0.2s;
  background-color: var(--base-main-content-bg-color);
}
</style>

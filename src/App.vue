<template>
  <router-view></router-view>
</template>

<script setup>
import Icon from '@/components/icons/icon.vue'
onMounted(() => {
  const clientWidth = document.body.clientWidth
  if (clientWidth >= 1200) {
    const fontsize = (clientWidth / 1920) * 16; // fontsize为当前屏幕的基数字体，相对于设计稿计算得到的。
    document.getElementsByTagName('html')[0].fontSize = `${fontsize}px`

  } // 当加载页面的时候设置生效
  window.onresize = () => {
    // 当页面尺寸改变的时候生效
    return (() => {
      const clientWidth = document.body.clientWidth
      if (clientWidth >= 1200) {
        const fontsize = (clientWidth / 1920) * 16;
        document.getElementsByTagName('html')[0].fontSize = `${fontsize}px`
      }
    })();
  };
})

</script>
<style scoped lang='scss'>
</style>

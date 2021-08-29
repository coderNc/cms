<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="handleFoldChange"
    ></i>
    <div class="content">
      <BreadCrumb :breadCrumbs="breadCrumbs" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import BreadCrumb, { IBreadCrumb } from '@/base-ui/BreadCrumb';
import { useStore } from '@/store';
import { useRoute } from 'vue-router';
import { pathMapBreadcrumbs } from '@/utils/map-menu';
export default defineComponent({
  components: {
    BreadCrumb
  },
  // 定义发射事件
  emits: ['foldChange'],
  setup(props, { emit }) {
    const store = useStore();
    const userMenus = store.state.login.userMenus;
    const route = useRoute();
    const path = route.path;
    // 根据路径返回面包屑数组
    const breadCrumbs = pathMapBreadcrumbs(userMenus, path);
    const isFold = ref(false);
    function handleFoldChange() {
      isFold.value = !isFold.value;
      // 发射事件到父组件
      emit('foldChange', isFold.value);
    }
    return {
      isFold,
      breadCrumbs,
      handleFoldChange
    };
  }
});
</script>

<style lang="scss" scoped>
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>

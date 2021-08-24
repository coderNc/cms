<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="handleFoldChange"
    ></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  // 定义发射事件
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false);
    function handleFoldChange() {
      isFold.value = !isFold.value;
      // 发射事件到父组件
      emit('foldChange', isFold.value);
    }
    return {
      isFold,
      handleFoldChange
    };
  }
});
</script>

<style lang="scss" scoped>
.nav-header {
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>

<template>
  <el-breadcrumb separator="/">
    <template v-for="item in breadCrumbs" :key="item.name">
      <el-breadcrumb-item :to="{ path: item.path }">{{
        item.name
      }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IBreadCrumb } from '../type';

export default defineComponent({
  props: {
    breadCrumbs: {
      type: Array as PropType<IBreadCrumb[]>,
      default: () => []
    }
  },
  setup() {
    const id = 12;

    return {
      id
    };
  }
});
</script>

<style lang="scss" scoped>
.header {
  color: black;
}
</style>

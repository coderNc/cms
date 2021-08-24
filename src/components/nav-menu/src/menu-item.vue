<template>
  <div>
    <el-submenu
      v-if="itemData && itemData.children && itemData.children.length > 0"
      :index="itemData.id + ''"
    >
      <template #title>
        <i v-if="itemData.icon" :class="itemData.icon"></i>
        <span>{{ itemData.name }}</span>
      </template>
      <menu-item
        v-for="(item, index) in itemData.children"
        :key="index"
        :itemData="item"
      />
    </el-submenu>
    <el-menu-item v-else :index="itemData.id + ''">
      <i v-if="itemData.icon" :class="itemData.icon"></i>
      <span>{{ itemData.name }}</span>
    </el-menu-item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    itemData: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped></style>

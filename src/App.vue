<template>
  <router-view :key="$route.fullPath" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  setup() {
    // 防止页面不刷新
    const keys = computed(() => String(Math.random()) + String(new Date()));
    console.log(keys.value);
    return { keys };
  }
});
</script>
<style lang="scss"></style>

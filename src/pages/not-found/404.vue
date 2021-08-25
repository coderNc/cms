<template>
  <div>
    <h2>NOT FOUND</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
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

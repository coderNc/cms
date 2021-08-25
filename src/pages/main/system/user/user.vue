<template>
  <div class="user">
    <div class="filter">
      <Form v-bind="searchFormConfig" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Form from '@/base-ui/Form';
import { searchFormConfig } from './config/filter.config';

export default defineComponent({
  name: 'user',
  components: {
    Form
  },
  setup() {
    return { searchFormConfig };
  }
});
</script>

<style scoped></style>

<template>
  <el-form
    :model="formData"
    :rules="rules"
    ref="formRef"
    label-width="67px"
    class="demo-ruleForm"
  >
    <el-form-item label="账号" prop="name">
      <el-input v-model="formData.name" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="formData.password" type="password" />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { ElForm } from 'element-plus';
import { rules } from './rule';
import localCache from '@/utils/cache';

export default defineComponent({
  setup() {
    const formData = ref({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    });
    const formRef = ref<InstanceType<typeof ElForm>>();
    const store = useStore();
    function login(iskeepPswd: boolean) {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 判断是否需要记住密码
          if (iskeepPswd) {
            // 保存到本地缓存中
            localCache.setCache('name', formData.value.name);
            localCache.setCache('password', formData.value.password);
          } else {
            localCache.deleteCache('name');
            localCache.deleteCache('password');
          }
          // 执行登录逻辑
          store.dispatch('login/accountLoginAction', { ...formData.value });
        } else {
          return false;
        }
      });
    }
    return {
      formData,
      rules,
      formRef,
      login
    };
  }
});
</script>

<style lang="scss" scoped>
.header {
  color: black;
}
</style>

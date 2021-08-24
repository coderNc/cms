<template>
  <el-form
    :model="formData"
    :rules="rules"
    ref="ruleForm"
    label-width="67px"
    class="demo-ruleForm"
  >
    <el-form-item label="手机号" prop="phone">
      <el-input v-model="formData.phone" />
    </el-form-item>
    <el-form-item label="验证码" prop="code">
      <div class="code-wrapper">
        <el-input v-model="formData.code" type="password" class="input-short" />
        <el-button type="primary" @click="getCode">获取验证码</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { rules } from './rule';
import localCache from '@/utils/cache';
import { ElForm } from 'element-plus';

export default defineComponent({
  setup() {
    const formData = ref({
      phone: '',
      code: ''
    });
    const formRef = ref<InstanceType<typeof ElForm>>();
    function getCode() {
      console.log(123);
    }
    function login() {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 执行登录逻辑
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }

    return {
      formData,
      rules,
      getCode,
      login
    };
  }
});
</script>

<style lang="scss" scoped>
.input-short {
  margin-right: 10px;
}
.code-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>

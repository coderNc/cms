<template>
  <div class="panel">
    <h2>后台管理系统</h2>
    <div class="text item">
      <el-tabs type="border-card" stretch>
        <el-tab-pane>
          <template #label>
            <span><i class="el-icon-s-custom"></i> 账号登录</span>
          </template>
          <el-form
            :model="formData"
            :rules="rules"
            ref="ruleForm"
            label-width="60px"
            class="demo-ruleForm"
          >
            <el-form-item label="账号" prop="username">
              <el-input v-model="formData.username" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="formData.password" type="password" />
            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="isKeepPswd">记住密码</el-checkbox>
              <el-link type="success">忘记密码</el-link>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login('ruleForm')"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
          </template>
          我的行程
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const isKeepPswd = ref<boolean>(true);
    const formData = ref({
      username: '',
      password: ''
    });
    const rules = {
      username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        {
          min: 6,
          max: 15,
          message: '密码长度在 6 到 15 个字符',
          trigger: 'blur'
        }
      ]
    };
    function login(formName: any) {
      console.log(formName);
    }
    return {
      isKeepPswd,
      formData,
      rules,
      login
    };
  }
});
</script>

<style lang="scss" scoped>
.item {
  margin-bottom: 18px;
  width: 380px;
}

.box-card {
  width: 380px;
}
</style>

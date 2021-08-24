<template>
  <div class="panel">
    <h2 class="panel-title">后台管理系统</h2>
    <div class="text item">
      <el-tabs type="border-card" stretch v-model="currentTab">
        <el-tab-pane name="account">
          <template #label>
            <span><i class="el-icon-s-custom"></i> 账号登录</span>
          </template>
          <login-account ref="accountRef" />
        </el-tab-pane>
        <el-tab-pane name="phone">
          <template #label>
            <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
          </template>
          <login-phone ref="phoneRef" />
        </el-tab-pane>
      </el-tabs>
      <div class="btn-group">
        <el-checkbox v-model="isKeepPswd">记住密码</el-checkbox>
        <el-link type="primary">忘记密码</el-link>
      </div>
      <el-button type="primary" @click="handleLogin" class="btn-lang"
        >登录</el-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import LoginAccount from './login-account.vue';
import LoginPhone from './login-phone.vue';

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const isKeepPswd = ref(true);
    const currentTab = ref('account');
    // 每一个组件的对象类型
    const accountRef = ref<InstanceType<typeof LoginAccount>>();
    const phoneRef = ref<InstanceType<typeof LoginPhone>>();
    function handleLogin() {
      if (currentTab.value === 'account') {
        accountRef.value?.login(isKeepPswd.value);
      } else {
        phoneRef.value?.login();
      }
    }

    return {
      isKeepPswd,
      accountRef,
      phoneRef,
      currentTab,
      handleLogin
    };
  }
});
</script>

<style lang="scss" scoped>
.item {
  margin-bottom: 18px;
  width: 380px;
}
.panel {
  .panel-title {
    text-align: center;
  }

  .btn-lang {
    width: 100%;
  }
}

.btn-group {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.box-card {
  width: 380px;
}
/* .fr {
  float: right;
} */
</style>

<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ncRuquest } from '@/api';
import { DataType } from '@/pages/login/type';
import LoginPanel from '@/pages/login/cpns/login-panel.vue';
export default defineComponent({
  components: {
    LoginPanel
  },
  setup() {
    // console.log(process.env.NODE_ENV);
    const id = 12;
    const page_cofig = ref<{
      page_index: number;
      page_size: number;
      page_total: number;
    }>({
      page_index: 1,
      page_size: 10,
      page_total: 100
    });
    const tableData: any = [];
    async function getList(isInit?: boolean) {
      if (isInit) {
        page_cofig.value.page_index = 1;
      }
      const res = await ncRuquest.get<DataType>({
        url: '/home/multidata',
        showLoading: true
      });
      console.log(res);
    }
    // getList(true);
    return {
      id,
      getList
    };
  }
});
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>

<template>
  <div class="user">
    <div class="filter">
      <Form v-bind="searchFormConfig" v-model="formData">
        <template #footer>
          <el-row type="flex" justify="end" class="btn-group">
            <el-button
              class="btn"
              type="info"
              size="small"
              @click="getList(true)"
              >重置</el-button
            >
            <el-button
              class="btn"
              type="primary"
              size="small"
              @click="getList(true)"
              >查询</el-button
            >
          </el-row>
        </template>
      </Form>
    </div>
    <div class="content">
      <Table
        :tableData="userList"
        v-bind="userTableConfig"
        @handleSelectionChange="handleSelectionChange"
      >
        <template #enable="scope">
          <el-button type="primary" plain size="mini">{{
            scope.row.enable === 1 ? '启用' : '禁用'
          }}</el-button>
        </template>
        <template #createAt="scope">
          {{ $filters.formatTime(scope.row.createAt) }}
        </template>
        <template #updateAt="scope">
          {{ $filters.formatTime(scope.row.updateAt) }}
        </template>
        <template #operation="scope">
          <el-row justify="center">
            <el-button
              type="warning"
              size="mini"
              plain
              @click="handleEdit(scope.row)"
              >编辑</el-button
            >
            <el-button type="primary" size="mini" plain>查看</el-button>
            <el-button type="danger" size="mini" plain>删除</el-button>
          </el-row>
        </template>
      </Table>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import Form from '@/base-ui/Form';
import Table from '@/base-ui/Table';
import { searchFormConfig } from './config/userFilter.config';
import { userTableConfig } from './config/userTable.config';
import { useStore } from '@/store';

export default defineComponent({
  name: 'user',
  components: {
    Form,
    Table
  },
  setup() {
    const store = useStore();
    store.dispatch('getPageList', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 1,
        size: 10
      }
    });

    const userList = computed(() => store.state.system.userList);
    const userCount = computed(() => store.state.system.userCount);
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sports: '',
      createTime: '',
      desc: ''
    });
    const handleSelectionChange = (value: any) => {
      console.log(value);
    };
    return {
      formData,
      searchFormConfig,
      userList,
      userCount,
      userTableConfig,
      handleSelectionChange
    };
  }
});
</script>

<style scoped lang="scss">
.user {
  .filter {
    background-color: #fff;
  }
  .content {
    background-color: #fff;
  }
}
.btn-group {
  padding: 0 20px 20px 0;
  .btn {
    width: 76px;
    height: 28px;
    padding: 0;
  }
}
</style>

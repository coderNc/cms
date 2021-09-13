<template>
  <div class="table-wrapper">
    <div class="header">
      <slot name="header">
        <div class="title">
          <span>{{ title }}</span>
        </div>
      </slot>
    </div>
    <el-table
      :data="tableData"
      header-cell-class-name="header-cell"
      border
      stripe
      :row-style="{ height: '50px' }"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <template v-if="isSelection">
        <el-table-column
          type="selection"
          width="60"
          align="center"
        ></el-table-column>
      </template>
      <template v-if="isIndex">
        <el-table-column type="index" label="序号" align="center" width="80">
          <template #default="scope">
            <span>{{ scope.$index + 1 }}</span>
          </template>
        </el-table-column>
      </template>
      <template v-for="(item, index) in propList" :key="index">
        <el-table-column v-bind="item">
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">{{
              scope.row[item.prop]
            }}</slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    tableData: {
      type: Array
    },
    propList: {
      type: Array as PropType<any>
    },
    title: {
      type: String,
      default: ''
    },
    isIndex: {
      type: Boolean,
      default: false
    },
    isSelection: {
      type: Boolean,
      default: false
    }
  },
  emits: ['handleSelectionChange'],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      emit('handleSelectionChange', value);
    };
    return { handleSelectionChange };
  }
});
</script>

<style lang="scss" scoped>
.table-wrapper {
  padding: 20px;
  margin-top: 20px;
  .title {
    font-size: 14px;
    font-weight: bold;
    color: #333333ff;
    height: 50px;
    border: 1px solid #eff0f4;
    display: flex;
    align-items: center;

    span {
      border-left: 3px solid #3265dfff;
      display: inline-block;
      padding-left: 15px;
    }
  }
  &::v-deep .header-cell {
    background: #f9f9f9;
  }
  &::v-deep .el-table--striped .el-table__body .el-table__row--striped > td {
    background: #f6f9ff;
  }
}
</style>

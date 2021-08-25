<template>
  <div class="hy-form">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <template v-if="item.type === 'Input'">
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.inputConfig"
                  v-model="formData.password"
                />
              </template>
              <template v-else-if="item.type === 'Select'">
                <el-select v-bind="item.selectConfig" style="width: 100%">
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'DatePicker'">
                <el-date-picker
                  v-model="formData.date"
                  style="width: 100%"
                  v-bind="item.datePickerConfig"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { IFormItem } from '../type';

export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // >1920px 4个
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  setup() {
    const formData = ref({
      id: 1,
      name: 'coderwhy',
      password: '123456',
      date: ''
    });
    return { formData };
  }
});
</script>

<style scoped lang="scss">
.hy-form {
  padding-top: 22px;
}
</style>

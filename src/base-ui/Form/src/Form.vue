<template>
  <div class="form">
    <div class="header">
      <slot name="header">
        <div class="title">
          <span>{{ title }}</span>
        </div>
      </slot>
    </div>
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
                  v-model="formData[`${item.filed}`]"
                />
              </template>
              <template v-else-if="item.type === 'Select'">
                <el-select
                  v-bind="item.selectConfig"
                  style="width: 100%"
                  v-model="formData[`${item.filed}`]"
                >
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
                  v-model="formData[`${item.filed}`]"
                  style="width: 100%"
                  v-bind="item.datePickerConfig"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"> </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue';
import { IFormItem } from '../type';

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
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
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const formData = ref({ ...props.modelValue });
    watch(
      formData,
      (newValue) => {
        emit('update:modelValue', newValue);
      },
      { deep: true }
    );
    return { formData };
  }
});
</script>

<style scoped lang="scss">
.form {
  /* padding-top: 22px; */
  .header {
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
    margin-bottom: 20px;
  }
}
</style>

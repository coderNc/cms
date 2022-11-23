<template>
  <div>
    <ElButton type="danger" @click="throwError">抛出错误</ElButton>
    <el-upload class="upload-demo" action="" :on-change="handleChange">
      <el-button type="primary">Click to upload</el-button>
      <template #tip>
        <div class="el-upload__tip">
          jpg/png files with a size less than 500kb
        </div>
      </template>
    </el-upload>
  </div>
</template>

<script lang="ts" setup>
import Sentry from '@/global/sentry';
import { blobToUint8Array } from '@/utils/file';
import { ref } from 'vue';

const uint8 = ref<Uint8Array>();

const handleChange = async (file: { raw: File }) => {
  // console.log(file);
  const res = await blobToUint8Array(file.raw);
  console.log(res, '===res===');
  uint8.value = res;
};

const throwError = () => {
  console.log(uint8.value);
  Sentry.configureScope((scope) => {
    if (uint8.value) {
      scope.clearAttachments();
      scope.addAttachment({ data: uint8.value, filename: 'test.log' });
    }
    return scope;
  });
  const sentryId = Sentry.captureException(
    new Error('Sentry Error 12312312323')
  );
  
  // Sentry.showReportDialog({ eventId: sentryId });
  // Sentry.captureMessage('hello world', (scope) => {
  //   scope.setContext('log', {
  //     logDay: '2022-11-16',
  //     logString: 'hahahhaaaaaaahahahhahahah'
  //   });
  //   scope.setLevel('debug');
  //   return scope;
  // });
};
</script>

<style lang="scss" scoped>
.header {
  color: black;
}
</style>

<template>
  <!-- <div>
    <iframe
      src="https://codesandbox.io/embed/sleepy-sunset-o4isn?fontsize=14&hidenavigation=1&theme=dark"
      style="
        width: 100%;
        height: 500px;
        border: 0;
        border-radius: 4px;
        overflow: hidden;
      "
      title="sleepy-sunset-o4isn"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  </div> -->
  <div>
    <ElButton type="danger" @click="throwError">抛出错误</ElButton>
    <ElButton type="success" @click="addLog">写日志到本地</ElButton>
    <ElButton type="primary" @click="reportLog">发送日志</ElButton>
  </div>
</template>

<script lang="ts" setup>
import Logan from '@/global/logan';

const throwError = (e: Event) => {
  console.log(e);
  throw new Error('Sentry Error 12312312323');
};

const addLog = () => {
  const content = '手打哒哒哒哒哒哒都是hhhhhhhhhhasdahdhadhahdahdahd';
  const type = 2;
  Logan.log(content, type);
};

const reportLog = () => {
  Logan.report({
    fromDayString: '2022-11-10',
    toDayString: '2022-11-11'
  });
};
</script>

<style lang="scss" scoped>
.header {
  color: black;
}
</style>

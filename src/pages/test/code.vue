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
  </div>
</template>

<script lang="ts" setup>
const throwError = (e: Event) => {
  console.log(e);
  throw new Error('Sentry Error 12312312323');
};
</script>

<style lang="scss" scoped>
.header {
  color: black;
}
</style>

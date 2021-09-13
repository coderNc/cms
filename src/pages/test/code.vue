<template>
  <div>
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const id = 12;

    return {
      id
    };
  }
});
</script>

<style lang="scss" scoped>
.header {
  color: black;
}
</style>

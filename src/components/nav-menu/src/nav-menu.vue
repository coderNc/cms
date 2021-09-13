<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!collapse" class="title">Vue3+Ts</span>
    </div>
    <div>
      <el-menu
        :default-active="currentIndex"
        class="el-menu-vertical-demo"
        :collapse="collapse"
        background-color="#0c2135"
        text-color="#b7bdc3"
        active-text-color="#0a60bd"
      >
        <menu-item
          v-for="(item, index) in userMenus"
          :key="index"
          :itemData="item"
        />
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useStore } from '@/store';
import { useRoute } from 'vue-router';
import MenuItem from './menu-item.vue';
import { pathMapToMenu } from '@/utils/map-menu';

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  components: {
    MenuItem
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const path = route.path;
    const userMenus = computed(() => store.state.login.userMenus);
    // 获取路由对应的菜单
    const menu = pathMapToMenu(userMenus.value, path);
    console.log(menu);

    const currentIndex = ref(menu.id + '');
    // const currentIndex = ref('1');
    return {
      userMenus,
      currentIndex,
      menu
    };
  }
});
</script>

<style lang="scss" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }
  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>

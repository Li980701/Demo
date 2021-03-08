<template id="headerMenu">
  <div class="box">
    <div class="layout">
      <a-menu v-model="current" mode="horizontal">
        <a-menu-item key="mail"> <a-icon type="mail" />Mail </a-menu-item>
        <a-menu-item key="app" disabled>
          <a-icon type="appstore" />APP
        </a-menu-item>
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper"
            ><a-icon type="setting" />Settings</span
          >
          <a-menu-item-group title="Themes">
            <a-menu-item key="setting:1"> Change Themes</a-menu-item>
            <a-menu-item key="setting:2"> Customize Themes </a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-menu-item key="alipay">
          <a href="https://antdv.com" target="_blank" rel="noopener noreferrer"
            >Ant Design Vue</a
          >
        </a-menu-item>
      </a-menu>
      <admpic></admpic>
    </div>
  </div>
</template>
<script>
import admpic from "./AdmPicture";
export default {
  data() {
    return {
      current: ["mail"],
    };
  },
  components: {
    admpic,
  },
};
</script>
<style>
.box {
  background-color: #fff;
}
.layout {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>


<template>
  <div id="app">
    <a-layout id="components-layout-demo-top-side-2">
      <!-- Header of the layout -->
      <headerMenu></headerMenu>
      <!--Body of the layout -->
      <a-layout>
        <a-layout-sider width="200" style="background: #fff">
          <a-menu
            mode="inline"
            :default-selected-keys="['1']"
            :default-open-keys="['sub1']"
            :style="{ height: '100%', borderRight: 0 }"
          >
            <a-sub-menu key="sub1">
              <span slot="title"><a-icon type="user" />PERSONAL</span>
              <a-menu-item key="1" @click="$router.push({ path: '/register' })"
                >Register</a-menu-item
              >
              <a-menu-item key="2"> Change Password</a-menu-item>
              <a-menu-item key="3"> Secruity Question </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
              <span slot="title"><a-icon type="laptop" />UI COMPONENTS</span>
              <a-menu-item key="4" @click="$router.push({ path: '/calendar' })">
                Calendar</a-menu-item
              >
              <a-menu-item key="5"> echarts </a-menu-item>
              <a-menu-item
                key="6"
                @click="$router.push({ path: '/annultable' })"
              >
                IBM-Annual-Finance
              </a-menu-item>
              <a-menu-item
                key="8"
                @click="$router.push({ path: '/quarttable' })"
              >
                IBM-Quater-Table
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub3">
              <span slot="title"><a-icon type="notification" />FEEDBACK</span>
              <a-menu-item key="7"> Send us an email </a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout style="padding: 0 24px 24px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>List</a-breadcrumb-item>
            <a-breadcrumb-item>App</a-breadcrumb-item>
          </a-breadcrumb>
          <!-- Content of layout` -->
          <a-layout-content
            :style="{
              background: '#fff',
              padding: '24px',
              margin: 0,
              minHeight: '280px',
            }"
          >
            <!-- Router Point -->
            <router-view></router-view>
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>


<script>
import headerMenu from "./headerMenu";
import register from "./register";
import admpic from "./AdmPicture";

export default {
  data() {
    return {
      collapsed: false,
      key: [1, 2, 3],
    };
  },
  components: {
    headerMenu,
    register,
    admpic,
  },
};
</script>

<style>
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>
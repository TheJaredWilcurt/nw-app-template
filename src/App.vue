<template>
  <div class="container-fluid g-0">
    <TopNav />
    <div class="container-fluid g-0">
      <SideBar />
      <RouterView />
    </div>
  </div>
</template>

<script>
import { settingsStore } from '@/stores/appSettings.js';

import SideBar from '@/components/SideBar.vue';
import TopNav from '@/components/TopNav.vue';

export default {
  name: 'App',
  components: {
    SideBar,
    TopNav
  },
  computed: {
  },
  created: function () {
    settingsStore().loadSettings();
  }
};
</script>

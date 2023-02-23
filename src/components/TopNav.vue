<template>
  <nav :class="navClasses">
    <div class="container-fluid">
      <CustomLink
        to="/"
        class="navbar-brand"
      >
        <img
          src="@/assets/logo.png"
          class="d-inline-block align-text-top"
          alt="logo"
          style="height: 1.43em"
        />
      </CustomLink>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <strong class="nav-link">
              {{ appConfig.appName }}
            </strong>
          </li>
          <li class="nav-item">
            <CustomLink to="/settings">
              Settings
            </CustomLink>
          </li>
          <li class="nav-item">
            <CustomLink to="/about">
              About
            </CustomLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'pinia';

import { settingsStore } from '@/stores/appSettings.js';

import CustomLink from '@/components/CustomLink.vue';

export default {
  name: 'TopNav',
  components: {
    CustomLink
  },
  computed: {
    navClasses: function () {
      const classes = [
        'navbar',
        'navbar-expand-sm',
        'navbar-' + this.navBarMode,
        'bg-' + this.navBarBackground
      ];
      return classes.join(' ');
    },
    ...mapState(settingsStore, [
      'navBarBackground',
      'navBarMode'
    ])
  }
};
</script>

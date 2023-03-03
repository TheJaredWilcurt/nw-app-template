<template>
  <div>
    <h2>App Settings</h2>
    <SelectOption
      v-model="selectedStyle"
      id="app-settings-style-swapper"
      label="Style Swapper"
      :list="swatches"
    />
    <SelectOption
      v-model="navBarBackground"
      id="app-settings-navigation-background"
      label="Navigation Background"
      :list="allowedColors"
    />
    <SelectOption
      v-model="navBarMode"
      id="app-settings-navigation-mode"
      label="Navigation Mode"
      :list="['light', 'dark']"
    />
    <SelectOption
      v-model="sidebarButton"
      id="app-settings-sidebar-button"
      label="Sidebar Button"
      :list="allowedColors"
    />
    <SelectOption
      v-model="sidebarButtonActive"
      id="app-settings-sidebar-button-active"
      label="Sidebar Button (active)"
      :list="allowedColors"
    />
    <SelectOption
      v-model="sidebarAdd"
      id="app-settings-sidebar-add"
      label="Sidebar Add"
      :list="allowedColors"
    />
  </div>
</template>

<script>
import { settingsStore } from '@/stores/appSettings.js';

import { dynamicallyLoadThemesList } from '@/helpers/applyTheme.js';

import SelectOption from '@/components/forms/SelectOption.vue';

export default {
  name: 'AppSettings',
  components: {
    SelectOption
  },
  computed: {
    selectedStyle: {
      get: function () {
        return settingsStore().theme;
      },
      set: function (value) {
        settingsStore().setTheme(value);
      }
    },
    swatches: function () {
      return dynamicallyLoadThemesList();
    },
    navBarBackground: {
      get: function () {
        return settingsStore().navBarBackground;
      },
      set: function (value) {
        settingsStore().setNavBarBackground(value);
      }
    },
    sidebarButton: {
      get: function () {
        return settingsStore().sidebarButton;
      },
      set: function (value) {
        settingsStore().setSidebarButton(value);
      }
    },
    sidebarButtonActive: {
      get: function () {
        return settingsStore().sidebarButtonActive;
      },
      set: function (value) {
        settingsStore().setSidebarButtonActive(value);
      }
    },
    sidebarAdd: {
      get: function () {
        return settingsStore().sidebarAdd;
      },
      set: function (value) {
        settingsStore().setSidebarAdd(value);
      }
    },
    allowedColors: function () {
      return [
        'dark',
        'light',
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info'
      ];
    },
    navBarMode: {
      get: function () {
        return settingsStore().navBarMode;
      },
      set: function (value) {
        settingsStore().setNavBarMode(value);
      }
    }
  }

};
</script>

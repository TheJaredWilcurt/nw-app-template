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
      :list="navBarBackgroundsList"
    />
    <SelectOption
      v-model="navBarMode"
      id="app-settings-navigation-mode"
      label="Navigation Mode"
      :list="['light', 'dark']"
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
    navBarBackgroundsList: function () {
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

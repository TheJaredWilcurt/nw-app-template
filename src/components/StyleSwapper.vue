<template>
  <div>
    <label for="style-swapper">
      Style Swapper:
    </label>
    <select
      v-model="selectedStyle"
      id="style-swapper"
    >
      <option
        v-for="(swatch, index) in swatches"
        :value="swatch"
        :key="swatch + index"
      >
        {{ swatch }}
      </option>
    </select>
  </div>
</template>

<script>
import { settingsStore } from '@/stores/appSettings.js';

import { dynamicallyLoadThemesList } from '@/helpers/applyTheme.js';

export default {
  name: 'StyleSwapper',
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
    }
  }
};
</script>

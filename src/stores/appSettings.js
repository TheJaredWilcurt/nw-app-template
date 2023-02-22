/* eslint-disable import/no-unused-modules */

import { defineStore } from 'pinia';

import { updateCss } from '@/helpers/applyTheme.js';

const isDesktop = !!window.nw;
const settingsFile = function () {
  if (isDesktop) {
    const path = window.require('path');
    const settingsFile = path.join(window.nw.App.dataPath, 'settings.json');
    return settingsFile;
  }
  return;
};
const localStorageId = 'AppSettings';

export const settingsStore = defineStore('settings', {
  state: function () {
    return {
      theme: 'darkly'
    };
  },
  actions: {
    loadSettings: function () {
      let data;
      if (isDesktop) {
        const fs = window.require('fs');
        const location = settingsFile();
        try {
          if (fs.existsSync(location)) {
            data = JSON.parse(fs.readFileSync(location));
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          data = window.localStorage.getItem(localStorageId);
          data = JSON.parse(data);
        } catch (err) {
          console.log(err);
        }
      }
      if (data) {
        for (let key in data) {
          this[key] = data[key];
        }
      }
      updateCss(this.theme);
    },
    saveSettings: function () {
      if (isDesktop) {
        const fs = window.require('fs');
        try {
          fs.writeFileSync(settingsFile(), this.dataToSave);
        } catch (err) {
          console.log(err);
        }
      } else {
        window.localStorage.setItem(localStorageId, this.dataToSave);
      }
    },
    setTheme: function (theme) {
      this.theme = theme;
      updateCss(theme);
      this.saveSettings();
    }
  },
  getters: {
    dataToSave: function (state) {
      try {
        const copy = {
          theme: state.theme
        };
        return JSON.stringify(copy, null, 2);
      } catch (err) {
        console.log(err);
      }
      return '';
    }
  }
});

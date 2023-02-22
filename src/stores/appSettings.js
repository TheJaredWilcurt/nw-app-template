/* eslint-disable import/no-unused-modules */

import { defineStore } from 'pinia';

const isDesktop = !!window.nw;

function settingsFile () {
  if (isDesktop) {
    const path = window.require('path');
    const settingsFile = path.join(window.nw.App.dataPath, 'settings.json');
    return settingsFile;
  }
  return;
}

export const settingsStore = defineStore('settings', {
  state: function () {
    return {
      theme: 'darkly'
    };
  },
  actions: {
    loadSettings: function () {
      if (isDesktop) {
        const fs = window.require('fs');
        const location = settingsFile();
        let data = {};
        try {
          if (fs.existsSync(location)) {
            data = JSON.parse(fs.readFileSync(location));
          }
        } catch (err) {
          console.log(err);
        }
        for (let key in data) {
          console.log(key);
        }
      }
    },
    saveSettings: function () {
      if (isDesktop) {
        const fs = window.require('fs');
        const location = settingsFile();
        const data = this.settings;
        fs.writeFileSync(location, data);
      }
    },
    setTheme: function (theme) {
      this.theme = theme;
    }
  },
  getters: {
    settings: function (state) {
      const copy = JSON.parse(JSON.stringify(state, null, 2));
      delete copy._isOptionsAPI;
      delete copy.$id;
      return JSON.stringify(copy, null, 2);
    }
  }
});

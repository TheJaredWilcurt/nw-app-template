/* eslint-disable import/no-unused-modules */

import { defineStore } from 'pinia';

import appConfig from '@/appConfig.js';

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
      theme: appConfig.theme,
      navBarBackground: appConfig.navBarBackground,
      navBarMode: appConfig.navBarMode,
      sidebarButton: appConfig.sidebarButton,
      sidebarButtonActive: appConfig.sidebarButtonActive,
      sidebarAdd: appConfig.sidebarAdd
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
    },
    setNavBarMode: function (mode) {
      this.navBarMode = mode;
      this.saveSettings();
    },
    setNavBarBackground: function (name) {
      this.navBarBackground = name;
      this.saveSettings();
    },
    setSidebarButton: function (name) {
      this.sidebarButton = name;
      this.saveSettings();
    },
    setSidebarButtonActive: function (name) {
      this.sidebarButtonActive = name;
      this.saveSettings();
    },
    setSidebarAdd: function (name) {
      this.sidebarAdd = name;
      this.saveSettings();
    }
  },
  getters: {
    dataToSave: function (state) {
      const {
        theme,
        navBarBackground,
        navBarMode,
        sidebarButton,
        sidebarButtonActive,
        sidebarAdd
      } = state;
      const copy = {
        theme,
        navBarBackground,
        navBarMode,
        sidebarButton,
        sidebarButtonActive,
        sidebarAdd
      };
      let output = '';
      try {
        output = JSON.stringify(copy, null, 2);
      } catch (err) {
        console.log(err);
      }
      return output;
    }
  }
});

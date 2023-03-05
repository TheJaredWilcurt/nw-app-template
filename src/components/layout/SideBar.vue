<template>
  <aside class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-100" style="width: 280px;">
    <div class="btn-group-vertical">
      <button
        v-for="(project, index) in projects"
        :class="buttonClasses(project.to)"
        @click="go(project.to)"
        :key="project.name + index"
      >
        {{ project.name }}
      </button>
    </div>
    <hr />
    <div class="btn-group-vertical">
      <button
        :class="'btn btn-' + sidebarAdd"
        @click="go('/project/new')"
      >
        Add
      </button>
    </div>
  </aside>
</template>

<script>
import { mapState } from 'pinia';

import { settingsStore } from '@/stores/appSettings.js';

export default {
  name: 'SideBar',
  methods: {
    buttonClasses: function (to) {
      const classes = [
        'btn'
      ];

      if (this.currentPage === to) {
        classes.push('btn-' + this.sidebarButtonActive);
      } else {
        classes.push('btn-' + this.sidebarButton);
      }

      return classes.join(' ');
    },
    go: function (to) {
      this.$router.push({ path: to });
      console.log(this.$route);
    }
  },
  computed: {
    currentPage: function () {
      return this.$route.fullPath;
    },
    projects: function () {
      return [
        {
          name: '22',
          to: '/project/22'
        },
        {
          name: '88',
          to: '/project/88'
        },
        {
          name: 'Lorem Ipsom',
          to: '/project/123456'
        }
      ];
    },
    ...mapState(settingsStore, [
      'sidebarButton',
      'sidebarButtonActive',
      'sidebarAdd'
    ])
  }
};
</script>

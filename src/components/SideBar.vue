<template>
  <aside class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-100" style="width: 280px;">
    <ul class="nav nav-pills flex-column mb-auto">
      <li
        v-for="(item, index) in sideBarItems"
        class="nav-item"
        :key="item.name + index"
      >
        <CustomLink :to="item.to">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#home" /></svg>
          {{ item.name }}
        </CustomLink>
      </li>
      <hr />
      <li
        v-for="(project, index) in projects"
        class="nav-item"
        :key="project.name + index"
      >
        <CustomLink :to="project.to">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#home" /></svg>
          {{ project.name }}
        </CustomLink>
      </li>
    </ul>
  </aside>
</template>

<script>
import CustomLink from '@/components/CustomLink.vue';

export default {
  name: 'SideBar',
  components: {
    CustomLink
  },
  computed: {
    sideBarItems: function () {
      return [
        {
          name: 'Home',
          to: '/'
        },
        {
          name: 'Settings',
          to: '/settings'
        }
      ];
    },
    projects: function () {
      return [
        {
          name: '22',
          to: '/project/22'
        }
      ];
    }
  }
};
</script>

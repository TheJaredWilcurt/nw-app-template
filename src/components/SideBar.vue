<template>
  <aside>
    <div
      v-for="(item, index) in sideBarItems"
      :key="item.name + index"
    >
      <router-link :to="item.to">{{ item.name }}</router-link>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SideBar',
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
        },
        {
          name: '22',
          to: '/project/22'
        }
      ];
    }
  }
};
</script>

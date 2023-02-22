<template>
  <router-link
    v-slot="{ isActive, href, navigate }"
    :to="to"
    custom
  >
    <a
      :href="href"
      class="nav-link"
      :class="isActive ? 'active' : 'text-white'"
      :aria-current="isActive ? page : false"
      @click="navigate"
    >
      <slot></slot>
    </a>
  </router-link>
</template>

<script>
export default {
  name: 'CustomLink',
  props: {
    to: {
      type: String,
      required: true
    }
  }
};
</script>

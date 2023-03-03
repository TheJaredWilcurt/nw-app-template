<template>
  <div>
    <h2>{{ appConfig?.project?.title }}</h2>
    {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  name: 'ProjectSettings'
};
</script>

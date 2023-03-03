<template>
  <div>
    <h2
      v-if="appConfig?.project?.title"
      v-html="appConfig?.project?.title"
    ></h2>
    {{ $route.params.id }}
    <input v-model="projectName" />
    <button
      class="btn btn-primary"
      @click="save"
    >
      Save
    </button>
  </div>
</template>

<script>
export default {
  name: 'ProjectSettings',
  data: function () {
    return {
      projectName: ''
    };
  },
  methods: {
    save: function () {

    }
  },
  computed: {
    dataToSave: function () {
      return {
        projectName: this.projectName
      };
    }
  }
};
</script>

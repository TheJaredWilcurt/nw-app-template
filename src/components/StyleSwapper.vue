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
export default {
  name: 'StyleSwapper',
  data: function () {
    return {
      selectedStyle: 'darkly',
      swatches: [],
      css: {}
    };
  },
  methods: {
    init: function () {
      const hardCoded = [
        'cerulean',
        'cosmo',
        'cyborg',
        'darkly',
        'flatly',
        'journal',
        'litera',
        'lumen',
        'lux',
        'materia',
        'minty',
        'morph',
        'pulse',
        'quartz',
        'sandstone',
        'simplex',
        'sketchy',
        'slate',
        'solar',
        'spacelab',
        'superhero',
        'united',
        'vapor',
        'yeti',
        'zephyr'
      ];
      let swatches = hardCoded;
      let dynamicallyLoaded;
      if (this.isDesktop) {
        const fs = this.require('fs');
        const path = this.require('path');
        const folder = path.join('.', 'node_modules', 'bootswatch', 'dist');
        dynamicallyLoaded = fs.readdirSync(folder);
        if (!dynamicallyLoaded.length) {
          dynamicallyLoaded = null;
        }
        swatches = dynamicallyLoaded || swatches;
        swatches.forEach((swatchName) => {
          const file = path.join(folder, swatchName, 'bootstrap.min.css');
          this.css[swatchName] = String(fs.readFileSync(file));
        });
      }
      this.swatches = swatches;
      this.updateCss();
    },
    updateCss: function () {
      if (this.isDesktop) {
        const styleEl = window.document.getElementById('desktop-styles');
        styleEl.innerHTML = this.css[this.selectedStyle];
      } else {
        const linkEl = window.document.getElementById('web-styles');
        linkEl.setAttribute('href', 'https://unpkg.com/bootswatch/dist/' + this.selectedStyle + '/bootstrap.min.css');
      }
    }
  },
  watch: {
    selectedStyle: function () {
      this.updateCss();
    }
  },
  created: function () {
    this.init();
  }
};
</script>

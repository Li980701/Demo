<template>
  <div id="app"><layout></layout></div>
</template>
<script>
// main components layout
import layout from "./components/layout/layout.vue";
export default {
  data() {
    return {
      current: ["mail"],
    };
  },
  components: {
    layout,
  },
};
</script>
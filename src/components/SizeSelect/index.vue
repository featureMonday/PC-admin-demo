<template>
  <vp-dropdown trigger="click" @command="handleSetSize">
    <div>
      <svg-icon class-name="size-icon" icon-class="size" />
    </div>
    <vp-dropdown-menu slot="dropdown">
      <vp-dropdown-item v-for="item of sizeOptions" :key="item.value" :disabled="size===item.value" :command="item.value">
        {{
          item.label }}
      </vp-dropdown-item>
    </vp-dropdown-menu>
  </vp-dropdown>
</template>

<script>
export default {
  data() {
    return {
      sizeOptions: [
        { label: "Default", value: "default" },
        { label: "Medium", value: "medium" },
        { label: "Small", value: "small" },
        { label: "Mini", value: "mini" }
      ]
    };
  },
  computed: {
    size() {
      return this.$store.getters.size;
    }
  },
  methods: {
    handleSetSize(size) {
      this.$ELEMENT.size = size;
      this.$store.dispatch("app/setSize", size);
      this.refreshView();
      this.$message({
        message: "Switch Size Success",
        type: "success"
      });
    },
    refreshView() {
      // In order to make the cached page re-rendered
      this.$store.dispatch("tagsView/delAllCachedViews", this.$route);

      const { fullPath } = this.$route;

      this.$nextTick(() => {
        this.$router.replace({
          path: "/redirect" + fullPath
        });
      });
    }
  }
};
</script>

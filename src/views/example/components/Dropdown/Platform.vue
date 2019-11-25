<template>
  <vp-dropdown :hide-on-click="false" :show-timeout="100" trigger="click">
    <vp-button plain>
      Platfroms({{ platforms.length }})
      <i class="vp-icon-caret-bottom vp-icon--right" />
    </vp-button>
    <vp-dropdown-menu slot="dropdown" class="no-border">
      <vp-checkbox-group v-model="platforms" style="padding: 5px 15px;">
        <vp-checkbox v-for="item in platformsOptions" :key="item.key" :label="item.key">
          {{ item.name }}
        </vp-checkbox>
      </vp-checkbox-group>
    </vp-dropdown-menu>
  </vp-dropdown>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
      default: () => [],
      type: Array
    }
  },
  data() {
    return {
      platformsOptions: [
        { key: "a-platform", name: "a-platform" },
        { key: "b-platform", name: "b-platform" },
        { key: "c-platform", name: "c-platform" }
      ]
    };
  },
  computed: {
    platforms: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  }
};
</script>

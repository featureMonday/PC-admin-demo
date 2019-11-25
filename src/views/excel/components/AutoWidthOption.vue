<template>
  <div style="display:inline-block;">
    <label class="radio-label">Cell Auto-Width: </label>
    <vp-radio-group v-model="autoWidth">
      <vp-radio :label="true" border>
        True
      </vp-radio>
      <vp-radio :label="false" border>
        False
      </vp-radio>
    </vp-radio-group>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    autoWidth: {
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

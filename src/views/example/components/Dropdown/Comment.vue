<template>
  <vp-dropdown :show-timeout="100" trigger="click">
    <vp-button plain>
      {{ !comment_disabled?'Comment: opened':'Comment: closed' }}
      <i class="vp-icon-caret-bottom vp-icon--right" />
    </vp-button>
    <vp-dropdown-menu slot="dropdown" class="no-padding">
      <vp-dropdown-item>
        <vp-radio-group v-model="comment_disabled" style="padding: 10px;">
          <vp-radio :label="true">
            Close comment
          </vp-radio>
          <vp-radio :label="false">
            Open comment
          </vp-radio>
        </vp-radio-group>
      </vp-dropdown-item>
    </vp-dropdown-menu>
  </vp-dropdown>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    comment_disabled: {
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

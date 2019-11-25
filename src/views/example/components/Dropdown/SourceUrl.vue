<template>
  <vp-dropdown :show-timeout="100" trigger="click">
    <vp-button plain>
      Link
      <i class="vp-icon-caret-bottom vp-icon--right" />
    </vp-button>
    <vp-dropdown-menu slot="dropdown" class="no-padding no-border" style="width:400px">
      <vp-form-item label-width="0px" style="margin-bottom: 0px" prop="source_uri">
        <vp-input v-model="source_uri" placeholder="Please enter the content">
          <template slot="prepend">
            URL
          </template>
        </vp-input>
      </vp-form-item>
    </vp-dropdown-menu>
  </vp-dropdown>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  computed: {
    source_uri: {
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

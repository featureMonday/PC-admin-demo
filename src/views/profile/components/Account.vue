<template>
  <vp-form>
    <vp-form-item label="Name">
      <vp-input v-model.trim="user.name" />
    </vp-form-item>
    <vp-form-item label="Email">
      <vp-input v-model.trim="user.email" />
    </vp-form-item>
    <vp-form-item>
      <vp-button type="primary" @click="submit">Update</vp-button>
    </vp-form-item>
  </vp-form>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: "",
          email: ""
        };
      }
    }
  },
  methods: {
    submit() {
      this.$message({
        message: "User information has been updated successfully",
        type: "success",
        duration: 5 * 1000
      });
    }
  }
};
</script>

<template>
  <div>
    <div style="margin-bottom:15px;">
      Your roles: {{ roles }}
    </div>
    Switch roles:
    <vp-radio-group v-model="switchRoles">
      <vp-radio-button label="editor" />
      <vp-radio-button label="admin" />
    </vp-radio-group>
  </div>
</template>

<script>
export default {
  computed: {
    roles() {
      return this.$store.getters.roles;
    },
    switchRoles: {
      get() {
        return this.roles[0];
      },
      set(val) {
        this.$store.dispatch("user/changeRoles", val).then(() => {
          this.$emit("change");
        });
      }
    }
  }
};
</script>

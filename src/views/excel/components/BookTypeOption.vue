<template>
  <div style="display:inline-block;">
    <label class="radio-label">Book Type: </label>
    <vp-select v-model="bookType" style="width:120px;">
      <vp-option
        v-for="item in options"
        :key="item"
        :label="item"
        :value="item"
      />
    </vp-select>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "xlsx"
    }
  },
  data() {
    return {
      options: ["xlsx", "csv", "txt"]
    };
  },
  computed: {
    bookType: {
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

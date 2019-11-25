<template>
  <div class="app-container">
    <vp-tabs v-model="activeName">
      <vp-tab-pane label="use clipboard  directly" name="directly">
        <vp-input v-model="inputData" placeholder="Please input" style="width:400px;max-width:100%;" />
        <vp-button type="primary" icon="document" @click="handleCopy(inputData,$event)">
          copy
        </vp-button>
      </vp-tab-pane>
      <vp-tab-pane label="use clipboard by v-directive" name="v-directive">
        <vp-input v-model="inputData" placeholder="Please input" style="width:400px;max-width:100%;" />
        <vp-button v-clipboard:copy="inputData" v-clipboard:success="clipboardSuccess" type="primary" icon="document">
          copy
        </vp-button>
      </vp-tab-pane>
    </vp-tabs>
  </div>
</template>

<script>
import clip from "@/utils/clipboard"; // use clipboard directly
import clipboard from "@/directive/clipboard/index.js"; // use clipboard by v-directive

export default {
  name: "ClipboardDemo",
  directives: {
    clipboard
  },
  data() {
    return {
      activeName: "directly",
      inputData: "https://github.com/PanJiaChen/vue-element-admin"
    };
  },
  methods: {
    handleCopy(text, event) {
      clip(text, event);
    },
    clipboardSuccess() {
      this.$message({
        message: "Copy successfully",
        type: "success",
        duration: 1500
      });
    }
  }
};
</script>

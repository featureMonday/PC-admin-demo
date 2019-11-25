<template>
  <div class="app-container">
    <vp-card class="box-card">
      <div slot="header">
        <a class="link-type link-title" target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/guide/advanced/theme.html">
          Theme documentation
        </a>
      </div>
      <div class="box-item">
        <span class="field-label">Change Theme : </span>
        <vp-switch v-model="theme" />
        <aside style="margin-top:15px;">
          Tips: It is different from the theme-pick on the navbar is two different skinning methods, each with different application scenarios. Refer to the documentation for details.
        </aside>
      </div>
    </vp-card>

    <div class="block">
      <vp-button type="primary">
        Primary
      </vp-button>
      <vp-button type="success">
        Success
      </vp-button>
      <vp-button type="info">
        Info
      </vp-button>
      <vp-button type="warning">
        Warning
      </vp-button>
      <vp-button type="danger">
        Danger
      </vp-button>
    </div>

    <div class="block">
      <vp-button type="primary" icon="vp-icon-edit" />
      <vp-button type="primary" icon="vp-icon-share" />
      <vp-button type="primary" icon="vp-icon-delete" />
      <vp-button type="primary" icon="vp-icon-search">
        Search
      </vp-button>
      <vp-button type="primary">
        Upload
        <i class="vp-icon-upload vp-icon-right" />
      </vp-button>
    </div>

    <div class="block">
      <vp-tag v-for="tag in tags" :key="tag.type" :type="tag.type" class="tag-item">
        {{ tag.name }}
      </vp-tag>
    </div>

    <div class="block">
      <vp-radio-group v-model="radio">
        <vp-radio :label="3">
          Option A
        </vp-radio>
        <vp-radio :label="6">
          Option B
        </vp-radio>
        <vp-radio :label="9">
          Option C
        </vp-radio>
      </vp-radio-group>
    </div>

    <div class="block">
      <vp-slider v-model="slideValue" />
    </div>
  </div>
</template>

<script>
import { toggleClass } from "@/utils";
import "@/assets/custom-theme/index.css"; // the theme changed version vortex-pc css

export default {
  name: "Theme",
  data() {
    return {
      theme: false,
      tags: [
        { name: "Tag One", type: "" },
        { name: "Tag Two", type: "info" },
        { name: "Tag Three", type: "success" },
        { name: "Tag Four", type: "warning" },
        { name: "Tag Five", type: "danger" }
      ],
      slideValue: 50,
      radio: 3
    };
  },
  watch: {
    theme() {
      toggleClass(document.body, "custom-theme");
    }
  }
};
</script>

<style scoped>
.field-label {
  vertical-align: middle;
}
.box-card {
  width: 400px;
  max-width: 100%;
  margin: 20px auto;
}

.block {
  padding: 30px 24px;
}

.tag-item {
  margin-right: 15px;
}
</style>

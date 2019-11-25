<template>
  <div class="app-container">
    <switch-roles @change="handleRolesChange" />
    <div :key="key" style="margin-top:30px;">
      <div>
        <span v-permission="['admin']" class="permission-alert">
          Only
          <vp-tag class="permission-tag" size="small">admin</vp-tag> can see this
        </span>
        <vp-tag v-permission="['admin']" class="permission-sourceCode" type="info">
          v-permission="['admin']"
        </vp-tag>
      </div>

      <div>
        <span v-permission="['editor']" class="permission-alert">
          Only
          <vp-tag class="permission-tag" size="small">editor</vp-tag> can see this
        </span>
        <vp-tag v-permission="['editor']" class="permission-sourceCode" type="info">
          v-permission="['editor']"
        </vp-tag>
      </div>

      <div>
        <span v-permission="['admin','editor']" class="permission-alert">
          Both
          <vp-tag class="permission-tag" size="small">admin</vp-tag> and
          <vp-tag class="permission-tag" size="small">editor</vp-tag> can see this
        </span>
        <vp-tag v-permission="['admin','editor']" class="permission-sourceCode" type="info">
          v-permission="['admin','editor']"
        </vp-tag>
      </div>
    </div>

    <div :key="'checkPermission'+key" style="margin-top:60px;">
      <aside>
        In some cases, using v-permission will have no effect. For example: Vortex-Pc's Tab component or el-table-column and other scenes that dynamically render dom. You can only do this with v-if.
        <br> e.g.
      </aside>

      <vp-tabs type="border-card" style="width:550px;">
        <vp-tab-pane v-if="checkPermission(['admin'])" label="Admin">
          Admin can see this
          <vp-tag class="permission-sourceCode" type="info">
            v-if="checkPermission(['admin'])"
          </vp-tag>
        </vp-tab-pane>

        <vp-tab-pane v-if="checkPermission(['editor'])" label="Editor">
          Editor can see this
          <vp-tag class="permission-sourceCode" type="info">
            v-if="checkPermission(['editor'])"
          </vp-tag>
        </vp-tab-pane>

        <vp-tab-pane v-if="checkPermission(['admin','editor'])" label="Admin-OR-Editor">
          Both admin or editor can see this
          <vp-tag class="permission-sourceCode" type="info">
            v-if="checkPermission(['admin','editor'])"
          </vp-tag>
        </vp-tab-pane>
      </vp-tabs>
    </div>
  </div>
</template>

<script>
import permission from "@/directive/permission/index.js"; // 权限判断指令
import checkPermission from "@/utils/permission"; // 权限判断函数
import SwitchRoles from "./components/SwitchRoles";

export default {
  name: "DirectivePermission",
  components: { SwitchRoles },
  directives: { permission },
  data() {
    return {
      key: 1 // 为了能每次切换权限的时候重新初始化指令
    };
  },
  methods: {
    checkPermission,
    handleRolesChange() {
      this.key++;
    }
  }
};
</script>

<style lang="scss" scoped>
.app-container {
  /deep/ .permission-alert {
    width: 320px;
    margin-top: 15px;
    background-color: #f0f9eb;
    color: #67c23a;
    padding: 8px 16px;
    border-radius: 4px;
    display: inline-block;
  }
  /deep/ .permission-sourceCode {
    margin-left: 15px;
  }
  /deep/ .permission-tag {
    background-color: #ecf5ff;
  }
}
</style>

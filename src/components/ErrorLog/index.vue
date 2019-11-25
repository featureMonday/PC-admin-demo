<template>
  <div v-if="errorLogs.length>0">
    <vp-badge :is-dot="true" style="line-height: 25px;margin-top: -5px;" @click.native="dialogTableVisible=true">
      <vp-button style="padding: 8px 10px;" size="small" type="danger">
        <svg-icon icon-class="bug" />
      </vp-button>
    </vp-badge>

    <vp-dialog :visible.sync="dialogTableVisible" width="80%" append-to-body>
      <div slot="title">
        <span style="padding-right: 10px;">Error Log</span>
        <vp-button size="mini" type="primary" icon="vp-icon-delete" @click="clearAll">Clear All</vp-button>
      </div>
      <vp-table :data="errorLogs" border>
        <vp-table-column label="Message">
          <template slot-scope="{row}">
            <div>
              <span class="message-title">Msg:</span>
              <vp-tag type="danger">
                {{ row.err.message }}
              </vp-tag>
            </div>
            <br>
            <div>
              <span class="message-title" style="padding-right: 10px;">Info: </span>
              <vp-tag type="warning">
                {{ row.vm.$vnode.tag }} error in {{ row.info }}
              </vp-tag>
            </div>
            <br>
            <div>
              <span class="message-title" style="padding-right: 16px;">Url: </span>
              <vp-tag type="success">
                {{ row.url }}
              </vp-tag>
            </div>
          </template>
        </vp-table-column>
        <vp-table-column label="Stack">
          <template slot-scope="scope">
            {{ scope.row.err.stack }}
          </template>
        </vp-table-column>
      </vp-table>
    </vp-dialog>
  </div>
</template>

<script>
export default {
  name: "ErrorLog",
  data() {
    return {
      dialogTableVisible: false
    };
  },
  computed: {
    errorLogs() {
      return this.$store.getters.errorLogs;
    }
  },
  methods: {
    clearAll() {
      this.dialogTableVisible = false;
      this.$store.dispatch("errorLog/clearErrorLog");
    }
  }
};
</script>

<style scoped>
.message-title {
  font-size: 16px;
  color: #333;
  font-weight: bold;
  padding-right: 8px;
}
</style>

<template>
  <div class="app-container">
    <vp-input v-model="filename" placeholder="Please enter the file name (default file)" style="width:300px;" prefix-icon="vp-icon-document" />
    <vp-button :loading="downloadLoading" style="margin-bottom:20px;" type="primary" icon="document" @click="handleDownload">
      Export Zip
    </vp-button>
    <vp-table v-loading="listLoading" :data="list" element-loading-text="拼命加载中" border fit highlight-current-row>
      <vp-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </vp-table-column>
      <vp-table-column label="Title">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </vp-table-column>
      <vp-table-column label="Author" width="95" align="center">
        <template slot-scope="scope">
          <vp-tag>{{ scope.row.author }}</vp-tag>
        </template>
      </vp-table-column>
      <vp-table-column label="Readings" width="115" align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </vp-table-column>
      <vp-table-column align="center" label="Date" width="220">
        <template slot-scope="scope">
          <i class="vp-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </vp-table-column>
    </vp-table>
  </div>
</template>

<script>
import { fetchList } from "@/api/article";

export default {
  name: "ExportZip",
  data() {
    return {
      list: null,
      listLoading: true,
      downloadLoading: false,
      filename: ""
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.listLoading = true;
      const { data } = await fetchList();
      this.list = data.items;
      this.listLoading = false;
    },
    handleDownload() {
      this.downloadLoading = true;
      import("@/vendor/Export2Zip").then(zip => {
        const tHeader = ["Id", "Title", "Author", "Readings", "Date"];
        const filterVal = [
          "id",
          "title",
          "author",
          "pageviews",
          "display_time"
        ];
        const list = this.list;
        const data = this.formatJson(filterVal, list);
        zip.export_txt_to_zip(tHeader, data, this.filename, this.filename);
        this.downloadLoading = false;
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    }
  }
};
</script>

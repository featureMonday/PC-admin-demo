<template>
  <vp-table :data="list" border fit highlight-current-row style="width: 100%">
    <vp-table-column
      v-loading="loading"
      align="center"
      label="ID"
      width="65"
      element-loading-text="请给我点时间！"
    >
      <template slot-scope="scope">
        <span>{{ scope.row.id }}</span>
      </template>
    </vp-table-column>

    <vp-table-column width="180px" align="center" label="Date">
      <template slot-scope="scope">
        <span>{{ scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
      </template>
    </vp-table-column>

    <vp-table-column min-width="300px" label="Title">
      <template slot-scope="{row}">
        <span>{{ row.title }}</span>
        <vp-tag>{{ row.type }}</vp-tag>
      </template>
    </vp-table-column>

    <vp-table-column width="110px" align="center" label="Author">
      <template slot-scope="scope">
        <span>{{ scope.row.author }}</span>
      </template>
    </vp-table-column>

    <vp-table-column width="120px" label="Importance">
      <template slot-scope="scope">
        <svg-icon v-for="n in +scope.row.importance" :key="n" icon-class="star" />
      </template>
    </vp-table-column>

    <vp-table-column align="center" label="Readings" width="95">
      <template slot-scope="scope">
        <span>{{ scope.row.pageviews }}</span>
      </template>
    </vp-table-column>

    <vp-table-column class-name="status-col" label="Status" width="110">
      <template slot-scope="{row}">
        <vp-tag :type="row.status | statusFilter">
          {{ row.status }}
        </vp-tag>
      </template>
    </vp-table-column>
  </vp-table>
</template>

<script>
import { fetchList } from "@/api/article";

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "info",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  props: {
    type: {
      type: String,
      default: "CN"
    }
  },
  data() {
    return {
      list: null,
      listQuery: {
        page: 1,
        limit: 5,
        type: this.type,
        sort: "+id"
      },
      loading: false
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.loading = true;
      this.$emit("create"); // for test
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items;
        this.loading = false;
      });
    }
  }
};
</script>

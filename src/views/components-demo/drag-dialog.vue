<template>
  <div class="components-container">
    <vp-button type="primary" @click="dialogTableVisible = true">
      open a Drag Dialog
    </vp-button>
    <vp-dialog v-el-drag-dialog :visible.sync="dialogTableVisible" title="Shipping address" @dragDialog="handleDrag">
      <vp-select ref="select" v-model="value" placeholder="请选择">
        <vp-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </vp-select>
      <vp-table :data="gridData">
        <vp-table-column property="date" label="Date" width="150" />
        <vp-table-column property="name" label="Name" width="200" />
        <vp-table-column property="address" label="Address" />
      </vp-table>
    </vp-dialog>
  </div>
</template>

<script>
import elDragDialog from "@/directive/vp-drag-dialog"; // base on vortex-pc

export default {
  name: "DragDialogDemo",
  directives: { elDragDialog },
  data() {
    return {
      dialogTableVisible: false,
      options: [
        { value: "选项1", label: "黄金糕" },
        { value: "选项2", label: "双皮奶" },
        { value: "选项3", label: "蚵仔煎" },
        { value: "选项4", label: "龙须面" }
      ],
      value: "",
      gridData: [
        {
          date: "2016-05-02",
          name: "John Smith",
          address: "No.1518,  Jinshajiang Road, Putuo District"
        },
        {
          date: "2016-05-04",
          name: "John Smith",
          address: "No.1518,  Jinshajiang Road, Putuo District"
        },
        {
          date: "2016-05-01",
          name: "John Smith",
          address: "No.1518,  Jinshajiang Road, Putuo District"
        },
        {
          date: "2016-05-03",
          name: "John Smith",
          address: "No.1518,  Jinshajiang Road, Putuo District"
        }
      ]
    };
  },
  methods: {
    // v-vp-drag-dialog onDrag callback function
    handleDrag() {
      this.$refs.select.blur();
    }
  }
};
</script>

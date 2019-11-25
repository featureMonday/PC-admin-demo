<template>
  <div class="components-container">
    <vp-drag-select v-model="value" style="width:500px;" multiple placeholder="请选择">
      <vp-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </vp-drag-select>

    <div style="margin-top:30px;">
      <vp-tag v-for="item of value" :key="item" style="margin-right:15px;">
        {{ item }}
      </vp-tag>
    </div>
  </div>
</template>

<script>
import ElDragSelect from "@/components/DragSelect"; // base on vortex-pc

export default {
  name: "DragSelectDemo",
  components: { ElDragSelect },
  data() {
    return {
      value: ["Apple", "Banana", "Orange"],
      options: [
        {
          value: "Apple",
          label: "Apple"
        },
        {
          value: "Banana",
          label: "Banana"
        },
        {
          value: "Orange",
          label: "Orange"
        },
        {
          value: "Pear",
          label: "Pear"
        },
        {
          value: "Strawberry",
          label: "Strawberry"
        }
      ]
    };
  }
};
</script>

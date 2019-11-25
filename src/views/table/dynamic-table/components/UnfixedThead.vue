<template>
  <div class="app-container">
    <div class="filter-container">
      <vp-checkbox-group v-model="formThead">
        <vp-checkbox label="apple">
          apple
        </vp-checkbox>
        <vp-checkbox label="banana">
          banana
        </vp-checkbox>
        <vp-checkbox label="orange">
          orange
        </vp-checkbox>
      </vp-checkbox-group>
    </div>

    <vp-table :data="tableData" border fit highlight-current-row style="width: 100%">
      <vp-table-column prop="name" label="fruitName" width="180" />
      <vp-table-column v-for="fruit in formThead" :key="fruit" :label="fruit">
        <template slot-scope="scope">
          {{ scope.row[fruit] }}
        </template>
      </vp-table-column>
    </vp-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "fruit-1",
          apple: "apple-10",
          banana: "banana-10",
          orange: "orange-10"
        },
        {
          name: "fruit-2",
          apple: "apple-20",
          banana: "banana-20",
          orange: "orange-20"
        }
      ],
      formThead: ["apple", "banana"]
    };
  }
};
</script>

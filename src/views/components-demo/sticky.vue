<template>
  <div>
    <sticky :z-index="10" class-name="sub-navbar">
      <vp-dropdown trigger="click">
        <vp-button plain>
          Platform<i class="vp-icon-caret-bottom vp-icon--right" />
        </vp-button>
        <vp-dropdown-menu slot="dropdown" class="no-border">
          <vp-checkbox-group v-model="platforms" style="padding: 5px 15px;">
            <vp-checkbox v-for="item in platformsOptions" :key="item.key" :label="item.key">
              {{ item.name }}
            </vp-checkbox>
          </vp-checkbox-group>
        </vp-dropdown-menu>
      </vp-dropdown>

      <vp-dropdown trigger="click">
        <vp-button plain>
          Link<i class="vp-icon-caret-bottom vp-icon--right" />
        </vp-button>
        <vp-dropdown-menu slot="dropdown" class="no-padding no-border" style="width:300px">
          <vp-input v-model="url" placeholder="Please enter the content">
            <template slot="prepend">
              Url
            </template>
          </vp-input>
        </vp-dropdown-menu>
      </vp-dropdown>

      <div class="time-container">
        <vp-date-picker v-model="time" type="datetime" format="yyyy-MM-dd HH:mm:ss" placeholder="Release time" />
      </div>

      <vp-button style="margin-left: 10px;" type="success">
        publish
      </vp-button>
    </sticky>

    <div class="components-container">
      <aside>
        Sticky header, When the page is scrolled to the preset position will be sticky on the top.
      </aside>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <sticky :sticky-top="200">
        <vp-button type="primary"> placeholder</vp-button>
      </sticky>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
    </div>
  </div>
</template>

<script>
import Sticky from "@/components/Sticky";

export default {
  name: "StickyDemo",
  components: { Sticky },
  data() {
    return {
      time: "",
      url: "",
      platforms: ["a-platform"],
      platformsOptions: [
        { key: "a-platform", name: "platformA" },
        { key: "b-platform", name: "platformB" },
        { key: "c-platform", name: "platformC" }
      ],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      }
    };
  }
};
</script>

<style scoped>
.components-container div {
  margin: 10px;
}

.time-container {
  display: inline-block;
}
</style>

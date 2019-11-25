<template>
  <div class="block">
    <vp-timeline>
      <vp-timeline-item v-for="(item,index) of timeline" :key="index" :timestamp="item.timestamp" placement="top">
        <vp-card>
          <h4>{{ item.title }}</h4>
          <p>{{ item.content }}</p>
        </vp-card>
      </vp-timeline-item>
    </vp-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeline: [
        {
          timestamp: "2019/4/20",
          title: "Update Github template",
          content: "PanJiaChen committed 2019/4/20 20:46"
        },
        {
          timestamp: "2019/4/21",
          title: "Update Github template",
          content: "PanJiaChen committed 2019/4/21 20:46"
        },
        {
          timestamp: "2019/4/22",
          title: "Build Template",
          content: "PanJiaChen committed 2019/4/22 20:46"
        },
        {
          timestamp: "2019/4/23",
          title: "Release New Version",
          content: "PanJiaChen committed 2019/4/23 20:46"
        }
      ]
    };
  }
};
</script>

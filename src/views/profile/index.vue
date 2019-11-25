<template>
  <div class="app-container">
    <div v-if="user">
      <vp-row :gutter="20">

        <vp-col :span="6" :xs="24">
          <user-card :user="user" />
        </vp-col>

        <vp-col :span="18" :xs="24">
          <vp-card>
            <vp-tabs v-model="activeTab">
              <vp-tab-pane label="Activity" name="activity">
                <activity />
              </vp-tab-pane>
              <vp-tab-pane label="Timeline" name="timeline">
                <timeline />
              </vp-tab-pane>
              <vp-tab-pane label="Account" name="account">
                <account :user="user" />
              </vp-tab-pane>
            </vp-tabs>
          </vp-card>
        </vp-col>

      </vp-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserCard from "./components/UserCard";
import Activity from "./components/Activity";
import Timeline from "./components/Timeline";
import Account from "./components/Account";

export default {
  name: "Profile",
  components: { UserCard, Activity, Timeline, Account },
  data() {
    return {
      user: {},
      activeTab: "activity"
    };
  },
  computed: {
    ...mapGetters(["name", "avatar", "roles"])
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.user = {
        name: this.name,
        role: this.roles.join(" | "),
        email: "admin@test.com",
        avatar: this.avatar
      };
    }
  }
};
</script>

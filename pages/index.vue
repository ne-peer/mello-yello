<template>
    <div>

      <div class="uk-container-expand slope-bgc">
        <div class="slope-bgc-inner">
          <div class="uk-flex-center" uk-grid>
            <div style="padding-right:20px">
              <header>
                <my-navbar></my-navbar>
              </header>

              <div>
                <welcome></welcome>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="uk-container-expand">
          <div class="uk-container-expand uk-flex-center" uk-grid>
            <div class="members-head uk-text-center uk-margin-bottom">
              <span class="icon" uk-icon="icon: quote-right; ratio: 1.8"></span>DASHBOARD
            </div>
          </div>
          <clan-summary :membersCount="membersCount"></clan-summary>
      </div>

      <div class="uk-container-expand uk-margin-large-top">
          <div class="uk-container-expand uk-flex-center" uk-grid>
            <div class="uk-width-2-3@s members-head uk-text-center">
              <span class="icon" uk-icon="icon: users; ratio: 2"></span>MEMBERS
            </div>
          </div>
          <member-list :members="members" :membersCount="membersCount"></member-list>
      </div>

      <div class="uk-container-expand uk-flex-center uk-padding-small" uk-grid>
        <div class="uk-width-1-2@s uk-margin-large-top">
            <div class="members-head uk-text-center">
              <span class="icon" uk-icon="icon: bookmark; ratio: 1.6"></span>CLAN RANK
            </div>
            <clan-rank></clan-rank>
        </div>
        <div class="uk-width-1-2@s uk-margin-large-top">
          <div class="members-head uk-text-center" style="margin-bottom:28px;">
            <span class="icon" uk-icon="icon: history; ratio: 1.6"></span>HISTORY
          </div>
          <clan-history></clan-history>
        </div>
      </div>

    </div>
</template>

<script>
import MyNavbar from "~/components/MyNavbar.vue";
import Welcome from "~/components/Welcome.vue";
import MemberList from "~/components/MemberList.vue";
import ClanRank from "~/components/ClanRank.vue";
import ClanHistory from "~/components/ClanHistory.vue";
import InformationLog from "~/components/InformationLog.vue";
import ClanSummary from "~/components/ClanSummary.vue";

export default {
  components: {
    MyNavbar,
    Welcome,
    MemberList,
    ClanRank,
    ClanHistory,
    InformationLog,
    ClanSummary
  },
  data() {
    return { members: [], membersCount: 0 }
  },
  async asyncData ({ app }) {
    const version = new Date().getTime();
    const memberListUrl = `https://gist.githubusercontent.com/ne-peer/b00023de73a1c4c6789eb06231b60439/raw?{$version}`;
    const list = await app.$axios.$get(memberListUrl).then(res => res.members);
    return { members: list, membersCount: list.length };
  }
};
</script>

<style scoped>
.members-head {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  font-size: 16px;
  font-weight: lighter;
  padding-right: 10px;
}

.members-head .icon {
  padding-right: 14px;
}
</style>

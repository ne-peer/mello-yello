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
            <div class="uk-width-2-3@s members-head uk-text-center">
              <span class="icon" uk-icon="icon: users; ratio: 2"></span>MEMBERS
            </div>
          </div>
          <member-list></member-list>
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
          <!-- <information-log></information-log> -->
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

export default {
  components: {
    MyNavbar,
    Welcome,
    MemberList,
    ClanRank,
    ClanHistory,
    InformationLog
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

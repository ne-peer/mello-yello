<template>
    <div>

      <div class="uk-container-expand slope-bgc">
        <div class="slope-bgc-inner">
          <div class="uk-flex-center" uk-grid>
            <div class="uk-width-1-2@s" style="padding-right:20px">
              <header>
                <my-navbar></my-navbar>
              </header>

              <div>
                <welcome></welcome>
              </div>

              <div class="uk-margin-large-top">
                <member-list></member-list>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="uk-container-expand uk-flex-center uk-padding-small" uk-grid>
        <div class="uk-width-1-2@s">
          <div>
            <clan-rank></clan-rank>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
import MyNavbar from "~/components/MyNavbar.vue";
import Welcome from "~/components/Welcome.vue";
import MemberList from "~/components/MemberList.vue";
import ClanRank from "~/components/ClanRank.vue";

export default {
  components: {
    MyNavbar,
    Welcome,
    MemberList,
    ClanRank
  }
};
</script>

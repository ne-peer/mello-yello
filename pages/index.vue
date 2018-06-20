<template>
    <div class="uk-container">
        <div class="uk-margin-top uk-flex-center" uk-grid>
            <div class="uk-width-1-2@s" style="padding-right:20px">

                <div>
                  <welcome></welcome>
                </div>

                <div class="uk-margin-large-top">
                  <member-list></member-list>
                </div>

                <div class="uk-margin-small">
                  <clan-rank></clan-rank>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import Welcome from "~/components/Welcome.vue";
import MemberList from "~/components/MemberList.vue";
import ClanRank from "~/components/ClanRank.vue";

export default {
  components: {
    Welcome, MemberList, ClanRank
  }
};
</script>

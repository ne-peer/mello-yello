<template>
    <div class="uk-container">
        <div class="uk-margin-top uk-flex-center" uk-grid>
            <div class="uk-width-1-2@s" style="padding-right:20px">

                <div>
                  <welcome></welcome>
                </div>

                <div class="uk-margin-large">
                  <member-list></member-list>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import Welcome from "~/components/Welcome.vue";
import MemberList from "~/components/MemberList.vue";

export default {
  components: {
    Welcome, MemberList
  }
};
</script>

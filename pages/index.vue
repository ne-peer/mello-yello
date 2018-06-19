<template>
    <div class="uk-container">
        <div class="uk-margin-top uk-flex-center" uk-grid>
            <div class="uk-width-1-1@s uk-width-1-2@m" style="padding-right:20px">
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="https://pbs.twimg.com/media/DebJ9t5W4Aoka9o.jpg" alt="mello-yello">
                        <!-- <img src="http://via.placeholder.com/533x533" alt="mello-yello"> -->
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">Hi Deck!</h3>
                        <p>Welcome to <a href="mello-yello.co">mello-yello.co</a>!!</p>
                    </div>
                </div>

                <!-- <div>
                  <member-list></member-list>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import MemberList from "~/components/MemberList.vue";

export default {
  components: {
    MemberList
  }
};
</script>

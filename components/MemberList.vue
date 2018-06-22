<template>
  <div class="uk-padding-small">

    <div class="uk-grid-small uk-child-width-1-3@m uk-child-width-1-2@s" uk-grid>
      <div v-for="(mem, k) in members" :key="k">
        <div class="uk-card uk-card-default my-radius">
          <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
              <div class="uk-width-auto">
                  <img class="uk-border-circle" width="40" height="40" :src="'https://avatars.io/twitter/' + mem.tw">
              </div>
              <div class="uk-width-expand">
                  <h3 class="uk-card-title uk-margin-remove-bottom">{{ mem.name }}</h3>
                  <p class="uk-margin-remove-top">
                    <span class="uk-text-meta">{{ mem.date }}</span>
                    <span class="icon-minus" uk-icon="icon: minus; ratio: 0.6"></span>
                    <a :href="'https://twitter.com/' + mem.tw" target="_blank" class="tw">@{{ mem.tw }}</a>
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [
        {
          name: "でっく",
          date: "Founder",
          tw: "DiiiSPACE"
        },
        {
          name: "くま",
          date: "Founder",
          tw: "kumama100"
        },
        {
          name: "あやねる松本",
          date: "Founder",
          tw: "ne_peer"
        }
      ]
    };
  }
};
</script>

<style scoped>
.panel-title {
  font-size: 16px;
  color: #eee;
}

.my-th {
  font-size: 6px;
}

.names {
  vertical-align: middle;
  font-size: 14px;
}

.my-text-join {
  color: #bfbfbf;
}

.icon-minus {
  padding: 0px 10px;
  color: #aaa;
}

a.tw {
  font-size: 12px;
}
</style>

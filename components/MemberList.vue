<template>
  <div class="uk-padding-small">

    <!-- for desktop -->
    <div class="uk-visible@s">
      <div class="uk-grid-small uk-child-width-1-4@l uk-child-width-1-3@m uk-child-width-1-2@s" uk-grid uk-height-match="target: > div > .uk-card; row: false">
        <div v-for="(mem, k) in members" :key="k">
          <div class="uk-card uk-card-default my-radius">
            <div class="uk-card-header">
              <div class="uk-grid-small uk-flex-middle" uk-grid>
                <div class="uk-width-auto">
                  <template v-if="mem.tw">
                    <img class="uk-border-circle" width="50" height="50" :src="'https://avatars.io/twitter/' + mem.tw">
                  </template>
                  <template v-else>
                    <img class="uk-border-circle" width="50" height="50" src="~/assets/img/person_128_gray.jpg">
                  </template>
                </div>
                <div class="uk-width-expand">
                    <h3 class="uk-card-title uk-margin-remove-bottom">{{ mem.name }}</h3>
                    <p class="uk-margin-remove-top">
                      <span class="uk-text-meta">{{ mem.date }}</span>
                      <template v-if="mem.tw !== undefined">
                        <span class="icon-minus" uk-icon="icon: minus; ratio: 0.6"></span>
                        <a :href="'https://twitter.com/' + mem.tw" target="_blank" class="tw">@{{ mem.tw }}</a>
                      </template>
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- for smartphone -->
    <div class="uk-hidden@s">
      <div class="uk-grid-small uk-child-width-1-3 uk-margin-top" uk-grid>
        <div v-for="(mem, k) in members" :key="k">
          <div>
            <div class="uk-card uk-card-hover">
              <div class="uk-card-media-top uk-flex uk-flex-center" style="height:60px;">
                <template v-if="mem.tw">
                  <img class="uk-border-circle" height="60" width="60" :src="'https://avatars.io/twitter/' + mem.tw">
                </template>
                <template v-else>
                  <img class="uk-border-circle" width="60" height="60" src="~/assets/img/person_128_gray.jpg">
                </template>
              </div>
              <div class="uk-card-body uk-text-center uk-padding-remove-horizontal uk-padding-remove-top">
                <p style="padding-top:16px">
                  <span class="uk-text-meta">{{ mem.name }}</span>
                  <template v-if="mem.tw !== undefined">
                    <br>
                    <a :href="'https://twitter.com/' + mem.tw" target="_blank" class="tw-small">@{{ mem.tw }}</a>
                  </template>
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
        },
        {
          name: "DIG",
          date: "2018.03.21",
          tw: "dig0703"
        },
        {
          name: "みんち君",
          date: "2018.03.21",
          tw: "minchi95"
        },
        {
          name: "たかしマン",
          date: "2018.03.21",
          tw: "shamo_takashi"
        },
        {
          name: "あんじゃなふ",
          date: "2018.03.25",
          tw: "dignity_sann"
        },
        {
          name: "かわい",
          date: "2018.05.10",
          tw: "kawaisou_bunjy"
        },
        {
          name: "ふらん",
          date: "2018.05.13",
          tw: "franpocky2959"
        },
        {
          name: "ともろ",
          date: "2018.05.25",
          tw: "tomolo_korsk"
        },
        {
          name: "水瀬いのり帝国",
          date: "2018.05.25",
          tw: undefined
        },
        {
          name: "たまきち",
          date: "2018.05.25",
          tw: undefined
        },
        {
          name: "らいー",
          date: "2018.05.31",
          tw: undefined
        },
        {
          name: "ほたて",
          date: "2018.05.31",
          tw: undefined
        },
        {
          name: "touboku",
          date: "2018.06.02",
          tw: "toubokueleven"
        },
        {
          name: "イエスタカス",
          date: "2018.06.03",
          tw: "tonio_yoi_p"
        },
        {
          name: "シンク",
          date: "2018.06.06",
          tw: "sync_georges"
        },
        {
          name: "ふじおか",
          date: "2018.06.16",
          tw: "fuziokasouth"
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

a.tw-small {
  font-size: 8px;
}

.uk-card-default .uk-card-header {
  border-bottom: none;
}
</style>

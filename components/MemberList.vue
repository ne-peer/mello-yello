<template>
  <div class="uk-padding-small">
    <div class="uk-flex uk-flex-right">
      <div class="uk-light uk-text-right mem-count">
        20 / 30
      </div>
    </div>

    <!-- for desktop -->
    <div class="uk-visible@s">
      <div class="uk-grid-small uk-child-width-1-4@l uk-child-width-1-3@m uk-child-width-1-2@s" uk-grid uk-height-match="target: > div > .uk-card; row: false">
        <div v-for="(mem, k) in members" :key="k">
          <div class="uk-card uk-card-default" uk-scrollspy="cls:uk-animation-slide-left-small">
            <div class="uk-card-header">
              <div class="uk-grid-small uk-flex-middle" uk-grid>
                <div class="uk-width-auto">
                  <template v-if="mem.tw">
                    <div v-lazy-container="{ selector: 'img' }">
                      <img class="uk-border-circle" height="50" width="50" alt="default member icon"
                        :data-src="'https://avatars.io/twitter/' + mem.tw"
                        :data-error="require('~/assets/img/person_128_gray.jpg')">
                    </div>
                  </template>
                  <template v-else>
                    <img class="uk-border-circle" width="50" height="50" src="~/assets/img/person_128_gray.jpg" :alt="mem.tw + ' icon'">
                  </template>
                </div>
                <div class="uk-width-expand">
                    <h3 class="uk-card-title uk-margin-remove-bottom" style="color:#888">{{ mem.name }}</h3>
                    <p class="uk-margin-remove-top">
                      <span class="uk-text-meta my-text-join">{{ mem.date }}</span>
                      <template v-if="mem.tw !== undefined">
                        <span class="icon-minus" uk-icon="icon: minus; ratio: 0.6"></span>
                        <a :href="'https://twitter.com/' + mem.tw" target="_blank" rel="noopener" class="tw">@{{ mem.tw }}</a>
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
                  <div v-lazy-container="{ selector: 'img' }">
                    <img class="uk-border-circle" height="60" width="60" alt="default member icon"
                      :data-src="'https://avatars.io/twitter/' + mem.tw"
                      :data-error="require('~/assets/img/person_128_gray.jpg')">
                  </div>
                </template>
                <template v-else>
                  <img class="uk-border-circle" width="60" height="60" src="~/assets/img/person_128_gray.jpg" :alt="mem.tw + ' icon'">
                </template>
              </div>
              <div class="uk-card-body uk-text-center uk-padding-remove-horizontal uk-padding-remove-top">
                <div style="padding-top:10px">
                  <div class="uk-text-meta">
                    {{ mem.name }}
                  </div>
                  <div class="mem-text-small s-padding-small">
                    <span class="my-text-join">{{ mem.date }}</span>
                    <template v-if="mem.tw !== undefined">
                      <br>
                      <a :href="'https://twitter.com/' + mem.tw" target="_blank">@{{ mem.tw }}</a>
                    </template>
                  </div>
                </div>
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
          tw: "MH_tomolo"
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
        },
        {
          name: "ゴイス",
          date: "2018.07.12",
          tw: "mateko_goisu"
        },
        {
          name: "ロリ巨乳",
          date: "2018.07.22",
          tw: "Nyamuz"
        },
        {
          name: "ふGこ",
          date: "2018.08.23",
          tw: "FuGKo"
        },
        {
          name: "ゆうびーん",
          date: "2018.08.25",
          tw: undefined
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
  color: #dfdfdf;
}

.icon-minus {
  padding: 0px 10px;
  color: #aaa;
}

a.tw {
  font-size: 12px;
}

.mem-text-small {
  font-size: 8px;
}

.uk-card-default .uk-card-header {
  border-bottom: none;
}

.s-padding-small {
  padding-top: 4px;
}

.mem-count {
  padding: 2px 8px;
  margin-bottom: 10px;
  border-radius: 4px;
  color: #ffffff;
  background-color: rgba(255,214,0,1);

  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  font-size: 10px;
  letter-spacing: 1px;
}
</style>

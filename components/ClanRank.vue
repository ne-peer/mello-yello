<template>
  <div style='min-height: 600px'>
    <div class="uk-panel" uk-filter="target: .js-filter" >
        <h3 class="my-heading-color uk-text-center"></h3>

        <ul class="uk-subnav uk-subnav-pill">
            <li class="uk-active" uk-filter-control="[data-type='recent']"><a href="#">Recent</a></li>
            <li uk-filter-control="[data-type='old']"><a href="#">Old</a></li>
        </ul>

        <table class="uk-table uk-table-divider uk-table-striped">
            <thead>
                <tr>
                    <th class="uk-text-center">Month</th>
                    <th class="place-th">Place</th>
                </tr>
            </thead>
            <tbody class="js-filter">
                <tr v-for="(row, k) in transitions" :key="k" class="ranks" v-bind:data-type="k < 5 ? 'recent':'old'">
                    <td data-type="recent" class="uk-table-small uk-text-center month-th">{{ row.month }}</td>
                    <td data-type="recent" class="uk-table-expand place">
                      <p>
                        <i class="material-icons">{{ row.trans }}</i>
                        <span :class="row.trans">{{ row.rank }}</span>
                        <span class="place-note">{{ row.note }}</span>
                      </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitions: [
        { month: "'19/04", rank: "2761", trans: "trending_down", note: "(↓14)" },
        { month: "'19/03", rank: "2747", trans: "trending_up", note: "(↑159)" },
        { month: "'19/02", rank: "2906", trans: "trending_up", note: "(↑172)" },
        { month: "'19/01", rank: "3078", trans: "trending_down", note: "(↓170)" },
        { month: "'18/12", rank: "2908", trans: "trending_down", note: "(↓48)" },
        { month: "'18/11", rank: "2860", trans: "trending_down", note: "(↓448)" },
        { month: "'18/10", rank: "2412", trans: "trending_down", note: "(↓354)" },
        { month: "'18/09", rank: "2058", trans: "trending_up", note: "(↑452)" },
        { month: "'18/08", rank: "2510", trans: "trending_up", note: "(↑10)" },
        { month: "'18/07", rank: "2528", trans: "trending_up", note: "(↑434)" },
        { month: "'18/06", rank: "2962", trans: "trending_up", note: "(↑1669)" },
        { month: "'18/05", rank: "4631", trans: "trending_up", note: "(↑306)" },
        { month: "'18/04", rank: "4937", trans: "trending_up", note: "(↑4300)" },
        { month: "'18/03", rank: "9237", trans: "trending_up", note: "(new)" }
      ]
    };
  }
};
</script>

<style scoped>
caption {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  font-size: 16px;
  font-weight: lighter;
  padding: 20px;
}

.ranks {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  font-size: 24px;
  font-weight: lighter;
}

i {
  margin-right: 20px;
  margin-top: 6px;
}

.place {
  padding-left: 40px;
  font-weight: normal;
  letter-spacing: 2px;
}

.place-th {
  padding-left: 80px;
}

.place-note {
  padding-left: 4px;
  font-size: 12px;
  color: #999999;
}

.month-th {
  letter-spacing: 2px;
}

span.trending_up {
  color: #69F0AE;
}

span.trending_down {
  color: #EF9A9A;
}
</style>

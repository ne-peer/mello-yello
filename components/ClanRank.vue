<template>
  <div>
    <div class="uk-panel">
        <h3 class="my-heading-color uk-text-center"></h3>
        <table class="uk-table uk-table-divider uk-table-striped">
            <thead>
                <tr>
                    <th class="uk-text-center">Month</th>
                    <th class="place-th">Place</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, k) in transitions" :key="k" class="ranks">
                    <td class="uk-table-small uk-text-center month-th">{{ row.month }}</td>
                    <td class="uk-table-expand place">
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
        { month: "'18/05", rank: "4631", trans: "trending_up", note: "(↑306)" },
        { month: "'18/04", rank: "4937", trans: "trending_up", note: "(↑4906)" },
        { month: "'18/03", rank: "9843", trans: "trending_up", note: "(new)" }
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
  color: hsl(348, 100%, 61%);
}

span.trending_down {
  color: hsl(217, 71%, 53%);
}
</style>

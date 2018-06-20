<template>
  <div>
    <div class="uk-padding uk-panel">
        <h3 class="my-heading-color uk-text-center">Ranking</h3>
        <table class="uk-table uk-table-divider uk-table-striped">
            <caption>2018</caption>
            <thead>
                <tr>
                    <th class="uk-text-center">Month</th>
                    <th>Place</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, k) in transitions" :key="k" class="ranks">
                    <td class="uk-table-small uk-text-center">{{ row.month }}</td>
                    <td class="uk-table-expand"><span :uk-icon="'icon:' + row.trans + '; ratio:1.3'" class="icon"></span>{{ row.rank }}</td>
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
        { month: "06", rank: "4000", trans: "arrow-up" },
        { month: "05", rank: "6000", trans: "arrow-up" },
        { month: "04", rank: "7000", trans: "bookmark" }
      ]
    };
  }
};
</script>

<style scoped>
caption {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  font-size: 16px;
  font-weight: lighter;
  padding: 20px;
}

.ranks {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  font-size: 24px;
  font-weight: lighter;
}

.icon {
  margin-right: 20px;
}
</style>

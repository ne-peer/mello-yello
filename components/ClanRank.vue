<template>
  <div>
    <div class="uk-panel">
        <h3 class="my-heading-color uk-text-center"></h3>
        <table class="uk-table uk-table-divider uk-table-striped">
            <caption><span uk-icon="icon: bookmark; ratio:1.3"></span> 2018</caption>
            <thead>
                <tr>
                    <th class="uk-text-center">Month</th>
                    <th class="place">Place</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, k) in transitions" :key="k" class="ranks">
                    <td class="uk-table-small uk-text-center">{{ row.month }}</td>
                    <td class="uk-table-expand place"><span :uk-icon="'icon:' + row.trans + '; ratio:1.3'" class="icon"></span>{{ row.rank }}</td>
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
        { month: "6", rank: "集計中", trans: "-" },
        { month: "5", rank: "4631", trans: "arrow-up" },
        { month: "4", rank: "????", trans: "arrow-up" },
        { month: "3", rank: "9843", trans: "arrow-up" }
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

.place {
  padding-left: 40px;
}
</style>

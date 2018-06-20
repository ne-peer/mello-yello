<template>
  <div>
    <div class="uk-padding uk-panel">
        <h3 class="my-heading-color uk-text-center">Ranking</h3>
        <table class="uk-table uk-table-divider">
            <tbody>
                <tr v-for="(row, k) in transitions" :key="k" class="ranks">
                    <td>{{ row.trans }}</td>
                    <td>{{ row.date }}</td>
                    <td>{{ row.rank }}</td>
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
        { date: "2018/06", rank: "4000", trans: "up" },
        { date: "2018/05", rank: "6000", trans: "up" },
        { date: "2018/04", rank: "7000", trans: "tie" }
      ]
    };
  }
};
</script>

<style scoped>
.ranks {
  font-size: 14px;
}
</style>

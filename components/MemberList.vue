<template>
  <div>
    <div class="uk-card uk-card-default uk-card-body my-radius">
      <table class="uk-table uk-table-small uk-table-divider">
          <thead>
              <tr>
                  <th class="uk-table-small uk-text-center">Join</th>
                  <th class="">Name</th>
                  <th class="uk-table-small" style="padding-left:32px"><span uk-icon="icon: twitter"></span></th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(mem, k) in members" :key="k" class="my-fontsize">
                  <td>{{ mem.date }}</td>
                  <td class="uk-text-meta uk-text-left">{{ mem.name }}</td>
                  <td class="uk-text-meta uk-text-left my-fontsize"><a :href="'https://twitter.com/' + mem.tw" target="_blank">@{{ mem.tw }}</a></td>
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
      members: [
        {
          name: "でっく",
          date: "Founder",
          tw: "DiiiSPACE",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          name: "くま",
          date: "Founder",
          tw: "kumama100",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          name: "あやねる松本",
          date: "Founder",
          tw: "ne_peer",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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

.my-fontsize {
  vertical-align: middle;
  font-size: 12px;
}
</style>

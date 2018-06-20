<template>
  <div>
    <div class="uk-card uk-card-default uk-card-body my-radius">
      <!-- for Smartphone -->
      <div class="uk-hidden@s">
        <table class="uk-table uk-table-small uk-table-divider">
          <thead>
              <tr>
                  <th class="my-th uk-text-center uk-table-small">Join</th>
                  <th class="my-th uk-text-center uk-table-expand">Name</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(mem, k) in members" :key="k" class="names">
                  <td class="my-text-join">{{ mem.date }}</td>
                  <td class="uk-text-left">{{ mem.name }}
                    <a :href="'https://twitter.com/' + mem.tw" target="_blank" class="tw">@{{ mem.tw }}</a>
                  </td>
              </tr>
          </tbody>
        </table>
      </div>

      <!-- for Desktop -->
      <div class="uk-visible@s">
        <table class="uk-table uk-table-small uk-table-divider">
          <thead>
              <tr>
                  <th class="my-th uk-text-center uk-table-small">Join</th>
                  <th class="my-th">Name</th>
                  <th class="my-th uk-text-center uk-table-small">
                    <span uk-icon="icon: twitter; ratio: 0.7"></span>
                  </th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(mem, k) in members" :key="k" class="names">
                  <td class="my-text-join">{{ mem.date }}</td>
                  <td class="uk-text-left">{{ mem.name }}</td>
                  <td><a :href="'https://twitter.com/' + mem.tw" target="_blank" class="tw">@{{ mem.tw }}</a></td>
              </tr>
          </tbody>
        </table>
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

a.tw {
  font-size: 7px;
}
</style>

<template>
  <v-expansion-panel popout>
    <v-expansion-panel-content v-for="mem of members" :key="mem.id" class="panel-title">
      <div slot="header">{{ mem.name }}</div>
      <v-card>
        <v-card-text class="uk-text-meta">{{ mem.desc }}</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  data() {
    return {
      members: [
        {
          id: 1,
          name: "でっく",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          id: 2,
          name: "くま",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          id: 3,
          name: "あやねる松本",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
</style>

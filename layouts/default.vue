<template>
    <div class="uk-background-cover my-background">
        <header>
            <my-navbar></my-navbar>
        </header>
        <nuxt/>
    </div>
</template>

<script>
import MyNavbar from "~/components/MyNavbar.vue";

export default {
  components: {
    MyNavbar
  }
};
</script>

<style scoped>
.my-background {
  background-image: url(https://ne-peer.ams3.digitaloceanspaces.com/resource/melloyello-unsplash-min-blur.jpg);
  height: 100vh;
}
</style>

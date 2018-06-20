<template>
    <div>
        <nuxt/>

        <footer>
            <my-footer></my-footer>
        </footer>
    </div>
</template>

<script>
import MyNavbar from "~/components/MyNavbar.vue";
import MyFooter from "~/components/MyFooter.vue";

export default {
  components: {
    MyNavbar,
    MyFooter
  }
};
</script>

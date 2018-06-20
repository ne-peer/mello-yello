<template>
    <div class="outer">
        <section class="contents">
            <div class="contents_inner">
                <header>
                    <my-navbar></my-navbar>
                </header>

                <nuxt/>

                <!-- <footer>
                    <my-footer></my-footer>
                </footer> -->
            </div>
        </section>
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

<style scoped>
.outer {
  height: 2800px;
}

.contents {
  position: relative;
  overflow: hidden;
  margin-bottom: 10%;
}

.contents:before {
  content: "";
  position: absolute;
  top: -20px;
  left: -40px;
  width: 140%;
  height: 80%;
  margin: 3% -10% 0;
  -webkit-transform-origin: left center;
  -ms-transform-origin: left center;
  transform-origin: left center;
  -webkit-transform: rotate(-10deg);
  -ms-transform: rotate(-10deg);
  transform: rotate(-10deg);
  z-index: -1;

  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
}

.contents_inner {
  box-sizing: boder-box;
  width: 100%;
  /* max-width: 640px; */
  height: 100%;
  margin: 0 auto;
  padding: 40px 10px 120px;
  color: #fff;
  text-align: center;
}
</style>

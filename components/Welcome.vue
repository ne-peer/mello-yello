<template>
  <div>
    <div class="uk-card uk-card-default my-radius img-max-width">
        <div class="uk-card-media-top">
            <img class="my-radius-top" :data-src="imageUrl" width="550" height="550" alt="mello-yello" uk-img>
        </div>
        <div class="uk-card-body welcome">
            <h3 class="uk-card-title">Hello!</h3>
            <p>Welcome to <a href="/">mello-yello.co</a>!!</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const shuffle = array => {
      let n = array.length,
        t,
        i;
      while (n) {
        i = Math.floor(Math.random() * n--);
        t = array[n];
        array[n] = array[i];
        array[i] = t;
      }
      return array;
    };

    const list = [
      require('~/assets/img/top/DebJ9t5W4Aoka9o.jpg'),
      require('~/assets/img/top/1806261414-mk-001.jpg')
    ];

    const val = shuffle(list).pop();

    return {
      imageUrl: val
    };
  }
};
</script>

<style scoped>
.img-max-width {
  max-width: 550px;
}

.welcome {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  font-weight: lighter;
  padding-right: 10px;
}
</style>

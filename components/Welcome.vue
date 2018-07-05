<template>
  <div>
    <div class="uk-card uk-card-default my-radius img-max-width">
        <div class="uk-card-media-top">
            <img src="https://pbs.twimg.com/media/DebJ9t5W4Aoka9o.jpg" alt="mello-yello" class="my-radius-top">
            <!-- <img src="http://via.placeholder.com/533x533" alt="mello-yello" class="my-radius-top"> -->
        </div>
        <div class="uk-card-body welcome">
            <h3 class="uk-card-title">Hello!</h3>
            <p>Welcome to <a href="/">mello-yello.co</a>!!</p>
        </div>
    </div>
  </div>
</template>

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

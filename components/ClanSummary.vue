<template>

  <div class="uk-width-1-3@lx uk-width-1-2@m uk-padding-small" style="margin:0 auto;">
    <div class="uk-flex uk-flex-center uk-grid uk-grid-small uk-child-width-1-2" uk-grid uk-height-match="target: > div > .uk-card; row: false">

      <div>
        <div class="uk-card uk-card-default my-radius">
          <div class="uk-card-header">
            <div class="summary uk-text-center uk-padding-small">
              <p class="title uk-margin-remove">
                <span class="size-l uk-visible@s">19</span>
                <span class="size-s uk-hidden@s">19</span>
              </p>
              <p class="desc uk-margin-remove">
                <span class="size-l uk-visible@s">Members</span>
                <span class="size-s uk-hidden@s">Members</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default my-radius">
          <div class="uk-card-header">
            <div class="summary uk-text-center uk-padding-small">
              <p class="title uk-margin-remove">
                <span class="size-l uk-visible@s">2962</span>
                <span class="size-s uk-hidden@s">2962</span>
              </p>
              <p class="desc uk-margin-remove">
                <span class="size-l uk-visible@s">Rank</span>
                <span class="size-s uk-hidden@s">Rank</span>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<style scoped>
.title {
  color: #f57f17;
}

.title .size-l {
  font-size: 54px;
}

.title .size-s {
  font-size: 34px;
}

.desc {
  color: rgba(255, 214, 0, 1);
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-weight: lighter;
  letter-spacing: 2px;
}

.desc .size-l {
  font-size: 22px;
}

.desc .size-s {
  font-size: 14px;
}
</style>

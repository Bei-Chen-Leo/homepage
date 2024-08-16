<template>
  <div class="latest-video">
    <h1 class="title">我的最新视频</h1>
    <h2 class="subtitle">b站</h2>

    <div class="video-container">
      <p class="video-title">最新视频Ⅰ</p>
      <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=112970390637987&bvid=BV1dHeMe8EDm&cid=500001651334362&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
    </div>

    <div class="video-container">
      <p class="video-title">最新视频Ⅱ</p>
      <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=112758578285013&bvid=BV1XmaBeTEBr&cid=500001610425126&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
    </div>
  </div>
</template>

<style>
.latest-video {
  text-align: center;
}

.title, .subtitle {
  font-weight: bold;
}

.video-container {
  margin-top: 20px;
}

.video-title {
  font-weight: bold;
}
</style>

<template>
  <div class="latest-video">
    <h1 class="title">我的最新视频</h1>
    <h2 class="subtitle">b站</h2>

    <div class="video-grid">
      <div class="video-container">
        <p class="video-title">最新视频Ⅰ</p>
        <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=112970390637987&bvid=BV1dHeMe8EDm&cid=500001651334362&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
      </div>

      <div class="video-container">
        <p class="video-title">最新视频Ⅱ</p>
        <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=112758578285013&bvid=BV1XmaBeTEBr&cid=500001610425126&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
      </div>
    </div>
  </div>
</template>

<style>
.latest-video {
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
}

.title {
  font-size: 2em;
  margin-bottom: 10px;
  color: #333;
}

.subtitle {
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #666;
}

.video-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.video-container {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
}

.video-title {
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 1.2em;
  color: #555;
}
</style>

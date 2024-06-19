<template>
  <section class="hero is-info is-middle">
    <div class="hero-body">
      <div class="container text-center">
        <p class="text-4xl">北尘的主页🏠</p>
      </div>
    </div>

    <div class="hero-foot flex justify-center">
      <nav class="tabs is-boxed h-full">
        <div class="container">
          <ul>
            <li :class="{ 'is-active': route.meta.isIndex }">
              <RouterLink to="/">
                <span class="icon i-ic-baseline-home" />
                <span>首页</span>
              </RouterLink>
            </li>
            <li>
              <a href="https://blog.beichen.icu">
                <span class="icon i-ic-baseline-book" />
                <span>博客</span>
              </a>
            </li>
            <li>
              <a href="https://blog2.beichen.icu">
                <span class="icon i-ic-baseline-book" />
                <span>博客 v2</span>
              </a>
            </li>
            <li :class="{ 'is-active': route.meta.isLinks }">
              <RouterLink to="/friendlinks">
                <span class="icon i-ic-baseline-link" />
                <span>友链</span>
              </RouterLink>
            </li>
            <li>
              <a href="https://kuma.beichen.icu">
                <span class="icon i-ic-baseline-cloud" />
                <span>Kuma</span>
              </a>
            </li>
            <li :class="{ 'is-active': route.meta.isSocials }">
              <RouterLink to="/socials">
                <span class="icon i-ic-twotone-connect-without-contact" />
                <span>社交平台</span>
              </RouterLink>
            </li>
            <li>
              <a href="https://alist2.beichen.icu">
                <span class="icon i-ic-baseline-cloud" />
                <span>Alist</span>
              </a>
            </li>
            <li :class="{ 'is-active': route.meta.isDonate }">
              <RouterLink to="/donate">
                <span class="icon i-ic-baseline-attach-money" />
                <span>打赏</span>
              </RouterLink>
            </li>
            <li>
              <a href="https://music.beichen.icu/">
                <span class="icon i-ic-baseline-library-music" />
                <span>音乐播放器</span>
              </a>
            </li>
            <li :class="{ 'is-active': route.meta.isLatest }">
              <RouterLink to="/latest">
                <span class="icon i-ic-baseline-book" />
                <span>最新视频</span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router"
const route = useRoute()
</script>

<style></style>

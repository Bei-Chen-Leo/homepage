<template>
  <section class="space-y-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <template v-for="link in linkList" :key="link.link">
        <button class="card w-full h-full" @click="confirmNavigation(link.link)">
          <div class="card-content space-y-4">
            <div class="flex justify-center">
              <img
                class="rounded-full"
                width="96"
                height="96"
                :src="link.avatar"
                :alt="`${link.name} 的头像`"
              />
            </div>
            <div class="text-center space-y-2">
              <div class="text-2xl font-semibold">{{ link.name }}</div>
              <div class="truncate">{{ link.description }}</div>
            </div>
          </div>
        </button>
      </template>
    </div>
    <div class="card">
      <div class="card-content content">
        <div class="text-2xl font-semibold">交换友链？</div>
        <p>请先将我的网站添加到你的友链列表~</p>
        <ul>
          <li>标题：北尘的小窝</li>
          <li>
            图标：
            <a href="https://www.beichen.icu/images/Favicon.webp"
              >https://www.beichen.icu/images/Favicon.webp</a
            >
          </li>
          <li>
            链接：
            <a href="https://www.beichen.icu">https://www.beichen.icu</a>
          </li>
          <li>
            简介：青春年少，心怀梦想，却发现越是拼命追逐，渴望的爱情却似乎越远。
          </li>
        </ul>
        <p>
          添加好了的话，就 <RouterLink to="/socials">联系我</RouterLink> 添加吧！
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const linkList = [
  {
    name: "野原新之助的 GPT 镜像站",
    description: "AI 助手，随时随地解答你的问题",
    link: "https://www.bilibili.com/video/BV1va411w7aM/",
    avatar: "/images/yeyuanxinzhizhu.jpg",
  },
  {
    name: "Neokoni's home",
    description: "Follow that star",
    link: "https://www.neokoni.moe",
    avatar: "https://avatars.githubusercontent.com/u/90206655",
  },
  {
    name: "岁月的小网站",
    description: "回家种地去",
    link: "https://suiyue.xyz",
    avatar: "/images/sy.jpeg",
  },
  {
    name: "薄荷の小屋",
    description: "越是拼命往前伸手，渴望之物越是渐行渐远",
    link: "https://www.hoshiroko.com",
    avatar: "https://api.hoshiroko.com/img/avatar.jpg",
  },
  {
    name: "新毛博客",
    description: "喵喵喵！",
    link: "https://blog.xmb505.top",
    avatar: "http://q.qlogo.cn/headimg_dl?dst_uin=530060699&spec=640&img_type=jpg",
  },
  {
    name: "ecraft 的博客",
    description: "本站使用 WordPress 强劲驱动，欢迎访问！",
    link: "https://www.ecraft2008.top",
    avatar: "/images/ecraft.jpg",
  },
  {
    name: "Restent Ou",
    description: "静寂に問う 答えを求めて",
    link: "https://www.gxres.net",
    avatar: "https://library.gxres.net/images/icons/avatar.webp",
  },
  {
    name: "whycf的小站",
    description: "whycf | 官方网站",
    link: "https://whycf.top",
    avatar: "/images/whycf.png",
  },
  {
    name: "BugCraft",
    description: "There are many bugs to play.",
    link: "https://bugcraft.org",
    avatar: "https://bugcraft.org/favicon.png",
  },
];

function confirmNavigation(url: string) {
  if (
    window.confirm(
      `您即将离开本站、访问 ${url}。\n该外部链接不由站长提供，是否继续访问？`
    )
  ) {
    window.open(url, "_blank");
  }
}
</script>

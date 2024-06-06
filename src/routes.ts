import Index from "./pages/index.vue";
import FriendLinks from "./pages/friendlinks.vue";
import Socials from "./pages/socials.vue";
import Donate from "./pages/donate.vue";
import Latest from "./pages/latest.vue";  // 新增的导入

const routes = [
  {
    path: "/",
    component: Index,
    meta: { isIndex: true },
  },
  {
    path: "/friendlinks",
    component: FriendLinks,
    meta: { isLinks: true },
  },
  {
    path: "/socials",
    component: Socials,
    meta: { isSocials: true },
  },
  {
    path: "/donate",
    component: Donate,
    meta: { isDonate: true },
  },
  {
    path: "/latest",
    component: Latest,
    meta: { isLatest: true },
  },
];

export default routes;

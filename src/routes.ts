import Index from "./pages/index.vue";
import FriendLinks from "./pages/friendlinks.vue";
import Socials from "./pages/socials.vue";
import Donate from "./pages/donate.vue";

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
];

export default routes;

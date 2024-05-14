import { ViteSSG } from "vite-ssg";
import "./style.scss";
import "virtual:uno.css";
import App from "./App.vue";
import routes from "./routes";

export const createApp = ViteSSG(App, { routes });
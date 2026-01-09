import type { UserModule } from "./types";
import { ViteSSG } from "vite-ssg";

// import "~/styles/element/index.scss";

import ElementPlus, { ElMessage } from "element-plus";
// import all element css, uncommented next line
import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

import { routes } from "vue-router/auto-routes";
import App from "./App.vue";
import { createPinia } from "pinia";
import JsonViewer from "vue3-json-viewer";

import "~/styles/index.scss";

import "uno.css";
// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss";
import "element-plus/theme-chalk/src/message-box.scss";
import "element-plus/theme-chalk/src/overlay.scss"; // the modal class for message box
import "vue3-json-viewer/dist/vue3-json-viewer.css";

import { setRouter } from "./composables/route";
import { isLogin, isMenuPathAccessable } from "./composables/auth";
import "~/rpc/axios-interceptor";

// if you do not need ssg:
// import { createApp } from "vue";

// const app = createApp(App);
// app.use(createRouter({
//   history: createWebHistory(),
//   routes,
// }))
// // app.use(ElementPlus);
// app.mount("#app");

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  {
    routes,
    base: import.meta.env.BASE_URL,
  },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(
      import.meta.glob<{ install: UserModule }>("./modules/*.ts", {
        eager: true,
      })
    ).forEach((i) => i.install?.(ctx));

    setRouter(ctx.router);

    ctx.router.beforeEach((to, from, next) => {
      const finLogin = isLogin(); // TODO: 判断登录状态
      if (to.path !== "/login" && !finLogin) {
        next({ path: "/login", query: { redirect: to.fullPath } });
      } else {
        if (finLogin && to.path !== "/" && !isMenuPathAccessable(to.path)) {
          ElMessage.error("没有访问权限");
          next({ path: "/" });
          return;
        }
        next();
      }
    });

    ctx.app.use(createPinia());
    ctx.app.use(JsonViewer);
    ctx.app.use(ElementPlus);

    // ctx.app.use(Previewer)
  }
);

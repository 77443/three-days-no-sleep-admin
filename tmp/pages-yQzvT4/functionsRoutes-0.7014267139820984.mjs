import { onRequestGet as __api_admin_js_onRequestGet } from "C:\\Users\\1\\Desktop\\three-days-no-sleep-main\\3daysnosleep\\admin\\functions\\api\\admin.js"
import { onRequestOptions as __api_admin_js_onRequestOptions } from "C:\\Users\\1\\Desktop\\three-days-no-sleep-main\\3daysnosleep\\admin\\functions\\api\\admin.js"
import { onRequestPost as __api_admin_js_onRequestPost } from "C:\\Users\\1\\Desktop\\three-days-no-sleep-main\\3daysnosleep\\admin\\functions\\api\\admin.js"

export const routes = [
    {
      routePath: "/api/admin",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_admin_js_onRequestGet],
    },
  {
      routePath: "/api/admin",
      mountPath: "/api",
      method: "OPTIONS",
      middlewares: [],
      modules: [__api_admin_js_onRequestOptions],
    },
  {
      routePath: "/api/admin",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_admin_js_onRequestPost],
    },
  ]
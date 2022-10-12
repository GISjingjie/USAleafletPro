import axios from "axios";
import { message } from "ant-design-vue";

axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASE_API,
  // 超时
  timeout: 20000,
});
// request拦截器
service.interceptors.request.use(
  (config) => {
    // 是否需要设置 token
    return config;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (success) => {
    if (success.status && success.status == 200 && success.data.status == 500) {
      message.error({ message: success.data.msg });
      return;
    }
    if (success.data.msg) {
      message.success({ message: success.data.msg });
    }
    return success.data;
  },
  (error) => {
    if (error.response.status == 504 || error.response.status == 404) {
      message.error({ message: "服务器被吃了( ╯□╰ )" });
    } else if (error.response.status == 403) {
      message.error({ message: "权限不足，请联系管理员" });
    } else if (error.response.status == 401) {
      message.error({
        message: error.response.data.msg
          ? error.response.data.msg
          : "尚未登录，请登录",
      });
      location.href = "/";
    } else {
      if (error.response.data.msg) {
        message.error({ message: error.response.data.msg });
      } else {
        message.error({ message: "未知错误!" });
      }
    }
   return Promise.reject(error);
  }
);

export default service;

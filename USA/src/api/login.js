import request from "@/utils/request";

// 登录方法
export function login(username, password, code, uuid) {
  const paramV = {
    username,
    password,
    code,
    uuid,
  };
  
  return request({
    url:"http://106.15.226.239:8081/login",
    method:'POST',
    params:paramV
  });
  
}

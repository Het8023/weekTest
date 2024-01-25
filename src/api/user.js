import request from "@/utils/request";

// export function login(data) {
//   return request({
//     url: '/vue-admin-template/user/login',
//     method: 'post',
//     data
//   })
// }

// 登录
export function loginApi(data) {
  return request({
    url: "/sys/login",
    method: "POST",
    data,
  });
}

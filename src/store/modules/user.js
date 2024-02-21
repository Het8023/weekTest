import { loginApi } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";
import { resetRouter } from "@/router";

const getDefaultState = () => {
  return {
    token: getToken(),
    name: "",
    avatar: "",
  };
};

const state = getDefaultState();

const mutations = {
  settoken: (state, token) => {
    state.token = token;
    setToken(token);
  },
  removetoken: (state) => {
    state.token = "";
    removeToken();
  },
};

const actions = {
  // 登录
  async login({ commit }, userInfo) {
    const res = await loginApi(userInfo);
    console.log(res);
    if (res.data.success) {
      commit("settoken", res.data.data);
    }
  },

  // user logout
  logout({ commit, state }) {
    // return new Promise((resolve, reject) => {
    //   logout(state.token)
    //     .then(() => {
    //       removeToken(); // must remove  token  first
    //       resetRouter();
    //       commit("RESET_STATE");
    //       resolve();
    //     })
    //     .catch((error) => {
    //       reject(error);
    //     });
    // });
    commit("removetoken");
  },

  // remove token
  resetToken({ commit }) {
    return new Promise((resolve) => {
      removeToken(); // must remove  token  first
      commit("RESET_STATE");
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

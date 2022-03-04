import Vue from 'vue';
import { router } from '../../main';

const state = {
  userFullName: '', // برای پیغام خوش آمد گویی
  isUserAuthenticated: false,
  errorsUser: []
};


const getters = {
  getUserFullName(state) {
    return state.userFullName;
  },
  isUserAuthenticated(state) {
    return state.isUserAuthenticated;
  },
  getErrorsUser(state) {
    return state.errorsUser;
  },
};

const mutations = {
  setAuthCookie(state, api_token) {
    Vue.cookie.set(   // use from vue-cookie
      "news_auth_token",  // نام کوکی
      api_token,   // مقدار کوکی
      1    // مدت روز
    );
  },
  setUserFullName(state, userFullName) {
    state.UserFullName = userFullName;
  },
  setUserAuthenticated(state, isAuth) {
    state.isUserAuthenticated = isAuth;
  },
  deleteAuthCookie() {
    Vue.cookie.delete("news_auth_token");
  },
  setErrorsUser(state, errorsUser) {
    state.errorsUser = errorsUser;
  },
};

const actions = {
  registerUser(context, registerData) {
    Vue.axios.post('account/register', registerData)
      .then(function (response) {
        console.log(response);
        if (response.data.status == 'success') {
          router.push('/login');   // ری دایرکت
          alert(response.data.message);
        }
      })
      .catch(function (error) {
        if (error.response.status == 422) {
          context.commit("setErrorsUser", error.response.data.errors);
        }
      })
      .then(function () {
        // always executed
      });
  },
  loginUser(context, loginData) {
    Vue.axios.post('account/login', loginData)
      .then(function (response) {
        console.log(response.data.data);
        context.commit("setAuthCookie", response.data.data.api_token); // یک کوکی ست می کنیم
        context.commit("setUserFullName", response.data.data.name);
        context.commit("setUserAuthenticated", true);
        router.push('/');   // ری دایرکت
      })
      .catch(function (error) {
        if (error) {
          if (error.response.status == 403) {
            context.commit("setErrorsUser", error.response.data);
          }
          if (error.response.status == 422) {
            context.commit("setErrorsUser", error.response.data.errors);
          }
        }
      })
      .then(function () {
        // always executed
      });
  },
  // checkForLogin(context) {
  //   Vue.http.get('account/checkAuthentication').then(response => {

  //     if (response.status !== 401 && response.body.status) {
  //       context.commit("setUserFullName", response.body.user.name + " " + response.body.user.family);
  //       context.commit("setUserAuthenticated", true);
  //     }
  //   }, response => {  // برای خطا
  //     if (response.status == 401) {
  //       //console.log(response.body.data.message);
  //     }

  //   }, function (error) {    // error handle
  //     //console.log(error);
  //   });

  // },

  // signOutUser(context) {
  //   Vue.http.get('account/signOut').then(response => {

  //     if (response.status !== 401 && response.body.status == "success") {
  //       context.commit("SetUserFullName", '');
  //       context.commit("SetUserAuthenticated", false);
  //       context.commit("deleteAuthCookie");
  //       router.push('/login');
  //     }
  //   });
  // }
};

export default {
  state,
  getters,
  mutations,
  actions
};

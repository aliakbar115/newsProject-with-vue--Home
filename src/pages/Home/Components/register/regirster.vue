<template>
  <!-- main -->
  <div class="main-w3layouts wrapper">
    <h1>فرم ثبت نام</h1>
    <div class="main-agileinfo">
      <div class="agileits-top">
        <form method="post">
          <input
            class="text"
            type="text"
            placeholder="نام کاربری"
            required=""
            v-model="name"
            @input="$v.name.$touch()"
            :class="{ invalid: $v.name.$error }"
          />
          <p class="text-danger" v-if="!$v.name.required && $v.name.$dirty">
            لطفا نام کاربـری را وارد کنید
          </p>
          <p class="text-danger" v-if="!$v.name.minLength">
            نام کاربری نمیتواند کمتر از
            {{ $v.name.$params.minLength.min }} کاراکتر داشته باشد
          </p>
          <input
            class="text email"
            type="email"
            placeholder="ایمیل"
            required=""
            v-model="email"
            @blur="$v.email.$touch()"
            :class="{ invalid: $v.email.$error }"
          />
          <p class="text-danger" v-if="!$v.email.email">
            ایمیل وارد شده معتبر نمیباشد
          </p>
          <p class="text-danger" v-if="!$v.email.required && $v.email.$dirty">
            لطفا ایمیل را وارد کنید
          </p>
          <input
            class="text"
            type="password"
            placeholder="Password"
            required=""
            v-model="password"
            @blur="$v.password.$touch()"
            :class="{ invalid: $v.password.$error }"
          />
          <p
            class="text-danger"
            v-if="!$v.password.required && $v.password.$dirty"
          >
            لطفا کلمه عبور را وارد کنید
          </p>
          <p class="text-danger" v-if="!$v.password.minLength">
            کلمه عبور باید حداقل شمال
            {{ $v.password.$params.minLength.min }} کاراکتر باشد
          </p>
          <input
            class="text w3lpass"
            type="password"
            placeholder="Confirm Password"
            required=""
            v-model="rePassword"
            @input="$v.rePassword.$touch()"
            :class="{ invalid: $v.rePassword.$error }"
          />
          <p
            class="text-danger"
            v-if="!$v.rePassword.sameAs && $v.rePassword.$dirty"
          >
            کلمه عبور مغایرت دارد
          </p>
          <div v-if="errors" class="errors_user">
            <ul v-for="(error, index) in errors" :key="index">
              <li class="errors_user">{{ error }}</li>
            </ul>
          </div>
          <input
            type="submit"
            value="REGISTER"
            class="register_news"
            @click.prevent="registerUser"
            :disabled="$v.$invalid"
          />
        </form>

        <p>آیا شما یک اکانت دارید ؟ <a href="#"> فرم لاگین</a></p>
      </div>
    </div>
    <!-- //copyright -->
    <ul class="colorlib-bubbles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  <!-- //main -->
</template>

<script>
import {
  // باید ولیدیشن های استفاده شده را اضافه کنیم
  required,
  maxLength,
  email,
  minLength,
  sameAs,
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      rePassword: "",
    };
  },
  methods: {
    registerUser() {
      const register = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("registerUser", register); // به سمت سرور بفرستیم
    },
  },
  computed: {
    errors() {
      return this.$store.getters.getErrorsUser;
    },
  },
  validations: {
    //  این پراپرتی اضافه می شود vuelidate بعد از نصب
    name: {
      required,
      minLength: minLength(2),
    },
    email: {
      required,
      email,
    },
    password: {
      minLength: minLength(6),
      required,
    },
    rePassword: {
      sameAs: sameAs("password"),
    },
  },
};
</script>

<style scoped>
@import "../../../../assets/css/auth/style.css";
.invalid {
  border: 1px solid red !important;
  box-shadow: 0 0 5px red !important;
  background-color: lightpink !important;
}
.register_news {
  text-align: center;
}
.errors_user {
  color: red !important;
  font-size: 20px;
}
</style>

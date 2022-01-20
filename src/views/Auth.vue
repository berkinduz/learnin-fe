<script setup>
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Header from "../components/Header.vue";
</script>

<template >
  <Header />
  <span class="mx-80">
    <button class="ml-4" v-on:click="reverse()">
      <span class="" v-if="login">Want to Register?</span
      ><span class="" v-else>Want to Sign In?</span>
    </button></span
  >
  <div
    v:if="test=true"
    class="
      md:grid
      md:grid-cols-3
      md:content-center
      md:h-screen
      md:justify-items-center
      md:mx-20
      w-screen
    "
    id="auth"
  >
    <div class="w-full">
      <div v-if="login">
        <Login />
      </div>
      <div v-else>
        <Register />
      </div>
    </div>

    <div class="col-span-2">
      <img src="../../public/assets/run.svg" alt="" srcset="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Auth",
  data() {
    return {
      login: true,
    };
  },
  methods: {
    reverse: function () {
      this.login = !this.login;
    },
  },
};
</script>

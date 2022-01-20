<script setup>
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
</script>

<template>
  <header class="text-gray-600 body-font">
    <div
      class="
        container
        mx-auto
        flex flex-wrap
        p-5
        flex-col
        md:flex-row
        items-center
      "
    >
      <a
        class="
          flex
          title-font
          font-medium
          items-center
          text-gray-900
          mb-4
          md:mb-0
        "
      >
        <router-link to="/"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </router-link>
        <button class="ml-4" v-on:click="reverse()">
          <span class="" v-if="login">Want to Register?</span
          ><span class="" v-else>Want to Sign In?</span>
        </button>
      </a>
    </div>
  </header>

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

<template>
  <div class="p-5 text-left font-raleway">
    <h1 class="font-bold text-left font-montserrat text-4xl sm:text-6xl mb-10">
      Login
    </h1>
    <p v-show="error" class="text-sm text-red-500">{{ errorMsg }}</p>
    <form @submit="login">
      <div class="my-5">
        <h1 class="text-left font-bold mb-5 font-montserrat">Email</h1>
        <input
          type="email"
          v-model="email"
          class="
            text-sm
            outline-none
            pb-5
            w-4/5
            bg-transparent
            border-b
            hover:border-blue-700
            focus:border-blue-700
          "
        />
      </div>
      <div class="my-5">
        <h1 class="text-left font-bold mb-5 font-montserrat">Password</h1>
        <input
          type="password"
          v-model="password"
          class="
            text-sm
            outline-none
            pb-5
            w-4/5
            bg-transparent
            border-b
            hover:border-blue-700
            focus:border-blue-700
          "
        />
      </div>
      <button
        type="submit"
        :disabled="password.length < 3"
        class="bg-green-400 p-5 text-white"
      >
        Login
      </button>
    </form>
  </div>
</template>
    <script>
import axios from "axios";

export default {
  name: "Login",

  data() {
    return {
      email: "",
      password: "",
      error: false,
      errorMsg: `An error occurred, please try again`,
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();
      try {
        const res = await axios.post("http://localhost:1337/api/auth/local", {
          identifier: this.email,
          password: this.password,
        });

        const { jwt, user } = res.data;
        window.localStorage.setItem("jwt", jwt);
        window.localStorage.setItem("userData", JSON.stringify(user));
        this.$router.push("/");
      } catch (error) {
        this.error = true;
        console.log(error);
        this.password = "";
      }
    },
  },
};
</script>
    <style scoped>
</style>
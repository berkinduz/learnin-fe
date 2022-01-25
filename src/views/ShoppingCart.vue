<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div v-show="!login">
    <p>You Must Be Login First.</p>
    <button>Login / Register</button>
  </div>
  <div v-show="login" :key="reRender" class="flex justify-center mt-20">
    <div id="summary" class="w-1/3 px-8 py-10 border">
      <h1 class="font-bold text-3xl border-b pb-8 text-center">
        Order Summary
      </h1>
      <div class="flex justify-between mt-10 mb-5">
        <span class="font-bold text-xl">{{
          course.data.attributes.course_name
        }}</span>
        <span class="font-bold text-xl"
          >{{ course.data.attributes.course_price }}$</span
        >
      </div>
      <img
        :src="image + course.data.attributes.course_img.data.attributes.url"
      />
      <div class="border-t mt-8">
        <button
          class="
            bg-indigo-500
            font-semibold
            hover:bg-indigo-600
            py-3
            text-sm text-white
            uppercase
            w-full
          "
        >
          Checkout
        </button>
        <p>Your Balance: {{ balance }}$</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created() {
    this.getCourse();
    this.checkBalance();
  },
  setup() {},
  data() {
    return {
      courseId: this.$route.params.id,
      course: "",
      image: "http://localhost:1337",
      balance: "",
      login: false,
      reRender: false,
    };
  },
  methods: {
    async getCourse() {
      await axios
        .get(`http://localhost:1337/api/courses/${this.courseId}?populate=*`)
        .then((response) => {
          this.course = response.data;
          console.log(this.course);
        })
        .catch((error) => {
          this.errors.push(error);
        });
    },
    checkBalance() {
      if (!JSON.parse(localStorage.getItem("userData"))) {
        this.login = false;
        this.$router.push("/auth");
      } else {
        this.balance = JSON.parse(localStorage.getItem("userData")).user_wallet;
        this.login = true;
      }
    },
  },
};
</script>
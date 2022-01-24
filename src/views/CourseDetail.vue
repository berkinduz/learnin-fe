<script setup>
import Header from "../components/Header.vue";
</script>
<template>
  <Header />
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-col">
      <div class="lg:w-4/6 mx-auto">
        <div class="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            class="object-cover object-center h-full w-full"
            :src="
              strapiApi + post.data.attributes.course_img.data.attributes.url
            "
          />
        </div>
        <div class="flex flex-col sm:flex-row mt-10">
          <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div
              class="
                w-20
                h-20
                rounded-full
                inline-flex
                items-center
                justify-center
                bg-gray-200
                text-gray-400
              "
            >
              <img src="../../public/assets/author.png" alt="" srcset="" />
            </div>
            <div class="flex flex-col items-center text-center justify-center">
              <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                {{ post.data.attributes.course_author }}
              </h2>
              <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
              <p class="text-base">
                Raclette knausgaard hella meggs normcore williamsburg enamel pin
                sartorial venmo tbh hot chicken gentrify portland.
              </p>
            </div>
          </div>

          <div
            class="
              sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l
              border-gray-200
              sm:border-t-0
              border-t
              mt-4
              pt-4
              sm:mt-0
              text-center
              sm:text-left
            "
          >
            <h1 class="text-2xl font-black text-pink-600">
              {{ post.data.attributes.course_name }}
            </h1>
            <p class="leading-relaxed text-lg mb-4">
              {{ post.data.attributes.course_desc }}
            </p>

            <iframe
              width="620"
              height="315"
              src="https://www.youtube.com/embed/nnmFWSj8iD8?controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  created() {
    this.getPosts();
  },
  data() {
    return {
      id: this.$route.params.id,
      post: "",
      strapiApi: "http://localhost:1337",
    };
  },
  methods: {
    getPosts() {
      axios
        .get(`http://localhost:1337/api/courses/${this.id}?populate=*`)
        .then((response) => {
          this.post = response.data;
        })
        .catch((error) => {
          this.errors.push(error);
        });
    },
  },
};
</script>
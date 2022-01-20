<template>
  <!-- <ul class="grid grid-cols-3 gap-3 px-5 py-24 mx-auto justify-items-center">
    <li v-for="post of posts.data" :key="post.id">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img :src="image + post.attributes.course_img.data.attributes.url" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            {{ post.attributes.course_name }}
          </div>
          <p class="text-gray-700 text-base">
            {{ post.attributes.course_desc }}
          </p>
        </div>
      </div>
    </li>
  </ul> -->
  <div>
    <ul class="flex justify-center">
      <li v-for="category of categories.data" :key="category.id">
        <button
          class="
            bg-transparent
            hover:bg-blue-500
            text-blue-700
            font-semibold
            hover:text-white
            py-2
            px-4
            border border-blue-500
            hover:border-transparent
            rounded
          "
          @click="showPost(category.attributes.category_name)"
        >
          {{ category.attributes.category_name }}
        </button>
      </li>
    </ul>
  </div>
  <ul class="flex flex-wrap justify-center mt-10 -m-4 py-24" id="cards-section">
    <li v-for="post of posts.data" :key="post.id" class="p-20 md:w-1/3">
      <div
        class="
          h-full
          border-2 border-gray-200 border-opacity-60
          rounded-lg
          overflow-hidden
          shadow-2xl
        "
      >
        <img :src="image + post.attributes.course_img.data.attributes.url" />
        <div class="p-6">
          <h2
            class="
              tracking-widest
              text-s
              title-font
              font-medium
              text-red-500
              mb-1
            "
          >
            {{ post.attributes.course_price }}$
          </h2>
          <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
            {{ post.attributes.course_name }}
          </h1>
          <p class="leading-relaxed mb-3">
            {{ post.attributes.course_desc }}
          </p>
          <div class="flex items-center flex-wrap">
            <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
              >Learn More
              <svg
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <span
              class="
                text-gray-400
                mr-3
                inline-flex
                items-center
                lg:ml-auto
                md:ml-0
                ml-auto
                leading-none
                text-sm
                pr-3
                py-1
                border-r-2 border-gray-200
              "
            >
              {{ post.attributes.course_author }}
            </span>
            <span
              class="
                text-gray-400
                inline-flex
                items-center
                leading-none
                text-sm
              "
            >
              {{ post.attributes.course_duration }} hours
            </span>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  created() {
    this.getCategories();
    this.getPosts();
  },
  data() {
    return {
      posts: [],
      categories: [],
      errors: [],
      filtered: [],
      image: "http://localhost:1337",
    };
  },
  methods: {
    async getCategories() {
      await axios
        .get("http://localhost:1337/api/categories?populate=*")
        .then((response) => {
          this.categories = response.data;
        })
        .catch((error) => {
          this.errors.push(error);
        });
    },
    getPosts() {
      axios
        .get("http://localhost:1337/api/courses?populate=*")
        .then((response) => {
          this.posts = response.data;
        })
        .catch((error) => {
          this.errors.push(error);
        });
    },
    showPost(e) {
      console.log(e);
      this.filtered = this.posts.data.filter((post) => {
        return (
          post.attributes.categories.data[0].attributes.category_name === e
        );
      });
      console.log("Filtered: ", this.filtered);
      console.log("Posts: ", this.posts);
    },
  },
};
</script>
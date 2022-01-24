<template>
  <div class="flex gap-x-2">
    <div class="flex flex-col m-10 justify-center basis-2/3">
      <h1 class="text-6xl font-bold">Your Courses</h1>
      <ul>
        <li v-for="post of userCourses" :key="post.id" class="flex">
          <router-link :to="{ name: 'details', params: { id: post.id } }">
            <figure class="hover-img">
              <img
                :src="image + post.attributes.course_img.data.attributes.url"
              />
              <figcaption>
                <h3>{{ post.attributes.course_name }}</h3>
              </figcaption>
            </figure>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="basis-1/3 m-10">
      <h1 class="text-3xl font-bold text-center">About You</h1>
      <div class="text-center my-10 text-2xl">
        <h1 class="text-xl">Hello {{ userInfo.username }}</h1>
        <p>You Have {{ totalCourse }} Courses.</p>
      </div>
      <img src="../../public/assets/window.svg" />
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  created() {
    this.getPosts();
  },
  data() {
    return {
      userId: JSON.parse(localStorage.getItem("userData")).id,
      userInfo: JSON.parse(localStorage.getItem("userData")),
      totalCourse: 0,
      courses: [],
      userCourses: [],
      errors: [],
      image: "http://localhost:1337",
    };
  },
  methods: {
    getPosts() {
      axios
        .get("http://localhost:1337/api/courses?populate=*")
        .then((response) => {
          for (let i = 0; i < 12; i++) {
            try {
              if (
                response.data.data[i].attributes.users.data[0].id ===
                this.userId
              ) {
                this.userCourses.push(response.data.data[i]);
                this.totalCourse++;
              }
            } catch (error) {
              console.log(error);
            }
          }

          this.courses = response.data;
          console.log(response.data);
          console.log(this.userId);
        })
        .catch((error) => {
          this.errors.push(error);
        });
    },
  },
};
</script>
<style>
.hover-img {
  background-color: #000;
  color: #fff;
  display: inline-block;
  margin: 20px;
  overflow: hidden;
  position: relative;
  text-align: center;
  height: 250px;
  border-radius: 10px;
}

.hover-img * {
  box-sizing: border-box;
  transition: all 0.45s ease;
}

.hover-img:before,
.hover-img:after {
  background-color: rgba(0, 0, 0, 0.5);
  border-top: 32px solid rgba(0, 0, 0, 0.5);
  border-bottom: 32px solid rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  content: "";
  transition: all 0.3s ease;
  z-index: 1;
  opacity: 0;
  transform: scaleY(2);
}

.hover-img img {
  vertical-align: top;
  max-width: 100%;
  backface-visibility: hidden;
}

.hover-img figcaption {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.1em;
  opacity: 0;
  z-index: 2;
  transition-delay: 0.1s;
  font-size: 24px;
  font-family: sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.hover-img:hover:before,
.hover-img:hover:after {
  transform: scale(1);
  opacity: 1;
}

.hover-img:hover > img {
  opacity: 0.7;
}

.hover-img:hover figcaption {
  opacity: 1;
}
</style>
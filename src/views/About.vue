<script setup>
import Header from "../components/Header.vue";
</script>

<template>
  <Header />
  <section class="text-gray-600 body-font">
    <div class="container px-1 py-5 mx-auto">
      <div
        class="
          xl:w-1/2
          lg:w-3/4
          w-full
          mx-auto
          text-center
          flex-col
          justify-center
          items-center
        "
      >
        <div class="flex flex-row justify-center items-center m-2 gap-0 ml-20">
          <img src="../../public/assets/berkin.png" alt="berkin" />
          <img
            src="../../public/assets/emakina.png"
            alt="berkin"
            class="m-10"
          />
        </div>

        <p class="leading-relaxed text-lg">
          Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
          taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman
          taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid
          fanny pack vaporware. Man bun next level coloring book skateboard four
          loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo
          juice before they sold out gentrify plaid gastropub normcore XOXO 90's
          pickled cindigo jean shorts. Slow-carb next level shoindigoitch
          ethical authentic, yr scenester sriracha forage franzen organic
          drinking vinegar.asds
        </p>
        <span
          class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"
        ></span>
        <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
          Berkin DUZ
        </h2>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      posts: [],
      errors: [],
      image: "http://localhost:1337",
    };
  },
  methods: {},
};
</script>
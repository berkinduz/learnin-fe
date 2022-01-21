<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div
        class="
          relative
          z-10
          pb-8
          bg-white
          sm:pb-16
          md:pb-20
          lg:max-w-2xl lg:w-full lg:pb-28
          xl:pb-32
        "
      >
        <svg
          class="
            hidden
            lg:block
            absolute
            right-0
            inset-y-0
            h-full
            w-48
            text-white
            transform
            translate-x-1/2
          "
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <Popover>
          <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav
              class="
                relative
                flex
                items-center
                justify-between
                sm:h-10
                lg:justify-start
              "
              aria-label="Global"
            >
              <div
                class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
              >
                <div class="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <img
                      class="h-8 w-auto sm:h-10"
                      src="../../public/assets/mortarboard.png"
                    />
                  </a>
                  <div class="-mr-2 flex items-center md:hidden">
                    <PopoverButton
                      class="
                        bg-white
                        rounded-md
                        p-2
                        inline-flex
                        items-center
                        justify-center
                        text-gray-400
                        hover:text-gray-500 hover:bg-gray-100
                        focus:outline-none
                        focus:ring-2
                        focus:ring-inset
                        focus:ring-indigo-500
                      "
                    >
                      <span class="sr-only">Open main menu</span>
                      <MenuIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
              </div>
              <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                <router-link
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.href"
                  class="font-medium text-gray-500 hover:text-gray-900"
                  >{{ item.name }}</router-link
                >
                <a
                  href="/auth"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                  >Log in</a
                >
              </div>
            </nav>
          </div>

          <transition
            enter-active-class="duration-150 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="duration-100 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <PopoverPanel
              focus
              class="
                absolute
                z-10
                top-0
                inset-x-0
                p-2
                transition
                transform
                origin-top-right
                md:hidden
              "
            >
              <div
                class="
                  rounded-lg
                  shadow-md
                  bg-white
                  ring-1 ring-black ring-opacity-5
                  overflow-hidden
                "
              >
                <div class="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      class="h-8 w-auto"
                      src="../../public/assets/mortarboard.png"
                      alt=""
                    />
                  </div>
                  <div class="-mr-2">
                    <PopoverButton
                      class="
                        bg-white
                        rounded-md
                        p-2
                        inline-flex
                        items-center
                        justify-center
                        text-gray-400
                        hover:text-gray-500 hover:bg-gray-100
                        focus:outline-none
                        focus:ring-2
                        focus:ring-inset
                        focus:ring-indigo-500
                      "
                    >
                      <span class="sr-only">Close main menu</span>
                      <XIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="px-2 pt-2 pb-3 space-y-1">
                  <router-link
                    v-for="item in navigation"
                    :key="item.name"
                    :to="item.href"
                    class="
                      block
                      px-3
                      py-2
                      rounded-md
                      text-base
                      font-medium
                      text-gray-700
                      hover:text-gray-900 hover:bg-gray-50
                    "
                    >{{ item.name }}</router-link
                  >
                </div>
                <a
                  href="/auth"
                  class="
                    block
                    w-full
                    px-5
                    py-3
                    text-center
                    font-medium
                    text-indigo-600
                    bg-gray-50
                    hover:bg-gray-100
                  "
                >
                  Log in
                </a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <main
          class="
            mt-10
            mx-auto
            max-w-7xl
            px-4
            sm:mt-12 sm:px-6
            md:mt-16
            lg:mt-20 lg:px-8
            xl:mt-28
          "
        >
          <div class="sm:text-center lg:text-left">
            <h1
              class="
                text-4xl
                tracking-tight
                font-extrabold
                text-gray-900
                sm:text-5xl
                md:text-6xl
              "
            >
              <span class="block xl:inline"
                >Learn<span class="text-orange-600">IN</span> </span
              ><br />
              {{ " " }}
              <span class="block text-indigo-600 xl:inline"
                >Coding Academy</span
              >
            </h1>
            <p
              class="
                mt-3
                text-base text-gray-500
                sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto
                md:mt-5 md:text-xl
                lg:mx-0
              "
            >
              Join the millions learning to code with LearnIN for free. LearnIN
              is an online learning and teaching marketplace with over 10
              courses and 40 students. Learn programming, design, data science
              and mores.
            </p>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="rounded-md shadow">
                <a
                  href="#cards-section"
                  class="
                    w-full
                    flex
                    items-center
                    justify-center
                    px-8
                    py-3
                    border border-transparent
                    text-base
                    font-medium
                    rounded-md
                    text-white
                    bg-orange-600
                    hover:bg-orange-700
                    md:py-4 md:text-lg md:px-10
                  "
                >
                  Explore Courses
                </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  class="
                    w-full
                    flex
                    items-center
                    justify-center
                    px-8
                    py-3
                    border border-transparent
                    text-base
                    font-medium
                    rounded-md
                    text-orange-700
                    bg-orange-100
                    hover:bg-orange-200
                    md:py-4 md:text-lg md:px-10
                  "
                >
                  Roadmaps
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        alt=""
      />
    </div>
  </div>
  <div
    class="
      bg-orange-100
      border-l-4 border-orange-500
      text-orange-700
      p-4
      m-20
      flex
      items-center
    "
    role="alert"
  >
    <div>
      <svg
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
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
    </div>
    <div class="ml-4">
      <p class="font-bold">Be Warned</p>
      <p>
        LearnIN Project v1 has not released yet. Get more information from
        Contact page.
      </p>
    </div>
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";

const navigation = [
  { name: "Courses", href: "#" },
  { name: "Categories", href: "#category-section" },
  { name: "Contact", href: "#" },
  { name: "About Us", href: "/about" },
];

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      navigation,
    };
  },
};
</script>
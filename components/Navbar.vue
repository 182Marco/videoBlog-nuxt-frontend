<template>
  <div>
    <nav>
      <nuxt-img
        src="mrk.png"
        alt="Fasoli brand logo"
        format="webp"
        sizes="xl:300px xs:100px"
      />
      <ul class="internal-links">
        <li>
          <NuxtLink to="/"><i>WORKS</i></NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about"><i>ABOUT</i></NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contacts"><i>CONTACTS</i></NuxtLink>
        </li>
      </ul>
      <section>
        <section
          class="icon-menu-mobile"
          @click="IsMenuMobileOpen = !IsMenuMobileOpen"
        >
          <IconMenuMobileClose
            class="IconMenuMobileClose"
            :class="{ visible: !IsMenuMobileOpen }"
          />
          <IconMenuMobileOpen
            class="IconMenuMobileOpen"
            :class="{ visible: IsMenuMobileOpen }"
          />
        </section>
        <ul class="social-links">
          <li>
            <a
              href="https://www.instagram.com/mirko_fasoli/?hl=it"
              target="_blank"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://vimeo.com/search?q=mirko%20fasoli" target="_blank">
              <i class="fa-brands fa-vimeo-square"></i>
            </a>
          </li>
        </ul>
      </section>
    </nav>
    <div class="menu-mobile" :class="{ visible: IsMenuMobileOpen }">
      <ul>
        <li><NuxtLink to="/"></NuxtLink></li>
        <li><NuxtLink to="/about"></NuxtLink></li>
        <li><NuxtLink to="/contacts"></NuxtLink></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Navbar",
  data: () => ({
    IsMenuMobileOpen: false,
  }),
  watch: {
    $route() {
      this.IsMenuMobileOpen = false;
    },
  },
  methods: {},
});
</script>

<style scoped lang="scss">
@import "~assets/scss/vars.scss";
@import "~assets/scss/utility.scss";

nav {
  z-index: 2;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  padding: 30px 50px 15px;
  @include flex(row, space-between, flex-start);
}
img {
  width: 120px;
  height: 50px;
  object-fit: contain;
}
section {
  @include flex(row, flex-start);
  .IconMenuMobile {
    margin-right: 60px;
  }
}
.icon-menu-mobile {
  margin-right: 54px;
  position: relative;
  width: 24px;
  height: 24px;
  .IconMenuMobileClose,
  .IconMenuMobileOpen {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .IconMenuMobileClose {
    display: none;
    &.visible {
      display: flex;
    }
  }
}
ul {
  @include flex(row, flex-start);
  list-style: none;
  &.internal-links {
    @media screen and (max-width: 875px) {
      display: none;
    }
    li {
      overflow: hidden;
    }
    li,
    a {
      height: 18.5px;
    }
    li {
      position: relative;
      width: 50px;
      &:first-child {
        i::after {
          content: "WORKS";
        }
      }
      &:nth-child(2) {
        i::after {
          content: "ABOUT";
        }
      }
      &:last-child {
        width: 74px;
        i::after {
          content: "CONTACTS";
        }
      }
      i {
        font-style: normal;
        font-size: 14px;
        height: 35px;
        position: absolute;
        top: 0;
        left: 0;
        @include flex(column, space-between);
        transition: transform 0.3s;
        &:hover {
          transform: translateY(-50%);
        }
      }
      &:not(:last-child) {
        margin-right: 70px;
      }
    }
  }
  &.social-links {
    margin-bottom: 1px;
    li {
      &:not(:last-child) {
        margin-right: 32px;
        a {
          padding: 7px;
        }
      }
      &:hover {
        animation: mouve 3s;
      }
    }
  }
  &:last-child {
    @include flex(row, space-between);
  }
}
a {
  @include font(14px, 300, $white);
}

@media screen and (max-width: 492px) {
  nav {
    padding: 20px;
    align-items: center;
  }
  .icon-menu-mobile {
    margin-right: 20px;
  }
  ul.social-links {
    flex-direction: column;
    li:not(:last-child) {
      margin-right: 0;
    }
  }
}
.menu-mobile {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: $background;
  display: none;
  &.visible {
    @include flex();
  }
  ul {
    @include flex(column, space-between);
    width: calc(100% - 40px);
    margin: 0 auto;
    height: 200px;
    li {
      position: relative;
      height: 60px;
      overflow: hidden;
      &:first-child {
        width: 127px;
        a::after {
          animation: slideUp 0.25s ease-out forwards,
            fadeIn 0.5s ease-out forwards;
          content: "WORKS";
        }
      }
      &:nth-child(2) {
        width: 127px;
        a::after {
          animation: slideUp 0.25s 0.2s ease-out forwards,
            fadeIn 0.5s 0.15s ease-out forwards;
          content: "ABOUT";
        }
      }
      &:last-child {
        width: 184px;
        a::after {
          animation: slideUp 0.25s 0.4s ease-out forwards,
            fadeIn 0.5s 0.25s ease-out forwards;
          content: "CONTACTS";
        }
      }
      a,
      a::after {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
      }
      a {
        width: 100%;
        height: 82px;
        font-size: 35px;
        &::after {
          height: 41px;
          top: 100%;
        }
      }
    }
  }
}

i {
  color: $white;
  font-size: 12px;
  cursor: pointer;
}

@keyframes tremble {
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(10px);
  }
  40% {
    transform: rotate(-10px);
  }
  60% {
    transform: rotate(9deg);
  }
  80% {
    transform: rotate(-9deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes mouve {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(5px, 5px);
  }
  40% {
    transform: translate(-5px, -5px);
  }
  60% {
    transform: translate(5px, 5px);
  }
  80% {
    transform: translate(-5px, 5px);
  }
  100% {
    transform: translate(0);
  }
}

@keyframes slideUp {
  0% {
    top: 100%;
  }
  100% {
    top: 0;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  70% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}
</style>

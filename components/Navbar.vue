<template>
  <div :class="{ colorReverse: isColorReverse }">
    <nav>
      <nuxt-img
        :src="`${
          isColorReverse && !isMenuMobileOpen
            ? `/mrk-black.png`
            : `/mrk-white.png`
        }`"
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
          @click="
            isMenuMobileOpen ? delayRouteToOrClose() : (isMenuMobileOpen = true)
          "
        >
          <IconMenuMobileClose
            class="IconMenuMobileClose"
            :class="{ visible: !isMenuMobileOpen }"
          />
          <IconMenuMobileOpen
            class="IconMenuMobileOpen"
            :class="{ visible: isMenuMobileOpen }"
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
    <div class="menu-mobile" :class="{ visible: isMenuMobileOpen }">
      <ul :class="{ slideUpMore: exitMobileMenuAnimate }">
        <li>
          <span><i @click="delayRouteToOrClose('/')">WORKS</i></span>
        </li>
        <li>
          <span><i @click="delayRouteToOrClose('/about')">ABOUT</i></span>
        </li>
        <li>
          <span><i @click="delayRouteToOrClose('/contacts')">CONTACT</i></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Navbar",
  data: () => ({
    isMenuMobileOpen: false,
    exitMobileMenuAnimate: false,
    isColorReverse: false,
  }),
  watch: {
    $route() {
      this.$route.name == "contacts"
        ? (this.isColorReverse = true)
        : (this.isColorReverse = false);
    },
  },
  created() {
    this.$route.name == "contacts"
      ? (this.isColorReverse = true)
      : (this.isColorReverse = false);
  },
  methods: {
    //
    waitFor: (time: number) =>
      new Promise(resolve => setTimeout(resolve, time)),
    //
    async delayRouteToOrClose(route?: string) {
      this.exitMobileMenuAnimate = true;
      route ? this.$router.push({ path: route }) : null;
      await this.coloseMobile(500);
      this.exitMobileMenuAnimate = false;
    },
    async coloseMobile(time: number = 0) {
      await this.waitFor(time);
      this.isMenuMobileOpen = false;
    },
  },
});
</script>

<style scoped lang="scss">
@import "~assets/scss/vars.scss";
@import "~assets/scss/mixins.scss";
@import "~assets/scss/utility.scss";
@import "~assets/scss/animations.scss";

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
    @media screen and (max-width: 875px) {
      &.visible {
        display: flex;
      }
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
  font-size: 14px;
  font-weight: 300;
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
  cursor: pointer;
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
    &.slideUpMore {
      li:first-child {
        animation: slideUpMore 0.2s ease-out forwards,
          fadeOut 0.2s ease-out forwards;
      }
      li:nth-child(2) {
        animation: slideUpMore 0.2s 0.15s ease-out forwards,
          fadeOut 0.2s 0.15s ease-out forwards;
      }
      li:last-child {
        animation: slideUpMore 0.2s 0.3s ease-out forwards,
          fadeOut 0.2s 0.3s ease-out forwards;
      }
    }
    li {
      position: relative;
      height: 60px;
      overflow: hidden;
      &:first-child {
        width: 131px;
        i {
          animation: slideUp 0.2s ease-out forwards,
            fadeIn 0.5s ease-out forwards;
        }
      }
      &:nth-child(2) {
        width: 121px;
        i {
          animation: slideUp 0.25s 0.2s ease-out forwards,
            fadeIn 0.5s 0.15s ease-out forwards;
        }
      }
      &:last-child {
        width: 166px;
        i {
          animation: slideUp 0.25s 0.4s ease-out forwards,
            fadeIn 0.5s 0.25s ease-out forwards;
        }
      }
      span,
      i {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        font-size: 35px;
      }
      span {
        width: 100%;
        height: 164px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 35px;
      }
    }
  }
}

i {
  font-size: 12px;
  cursor: pointer;
}

.colorReverse {
  a,
  i {
    color: $background;
  }
  .menu-mobile.visible i {
    color: $white;
  }
}
</style>

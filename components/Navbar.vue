<template>
  <nav>
    <nuxt-img
      src="mrk.png"
      alt="Fasoli brand logo"
      format="webp"
      sizes="xl:300px xs:100px"
    />
    <ul class="internal-links">
      <li><NuxtLink to="/"><i>WORKS</i></NuxtLink></li>
      <li><NuxtLink to="/about"><i>ABOUT</i></NuxtLink></li>
      <li><NuxtLink to="/contacts"><i>CONTACTS</i></NuxtLink></li>
    </ul>
    <ul class="social-links">
      <li>
        <a href="https://www.instagram.com/mirko_fasoli/?hl=it" target="_blank">
          <i class="fa-brands fa-instagram"></i>
        </a>
        </li>
      <li>
        <a href="https://vimeo.com/search?q=mirko%20fasoli" target="_blank">
          <i class="fa-brands fa-vimeo-square"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">

 @import "~assets/scss/vars.scss";
 @import "~assets/scss/utility.scss";

nav {
  padding: 30px 50px 15px;
  @include flex(row, space-between, flex-start);
}
img {
  width: 120px;
  height: 50px;
  object-fit: contain;
}
ul {
  @include flex(row, flex-start);
  list-style: none;
  &.internal-links {
    li {
      overflow: hidden;
    }
    li, a {
      height: 18.5px;
    }
    li {
      position: relative;
      width: 50px;
      &:first-child {
        i::after {
           content: 'WORKS';
        }
      }
      &:nth-child(2) {
        i::after {
           content: 'ABOUT';
        }
      }
      &:last-child {
        width: 74px;
        i::after {
           content: 'CONTACTS';
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
         transition: transform 0.2s;
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
    @include flex(row, space-between)
  }
}
a {
  @include font(14px, 300, $white);
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
</style>



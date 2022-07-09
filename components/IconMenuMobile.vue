<template>
  <section>
    <i></i>
    <i></i>
    <i></i>
  </section>
</template>

<style scoped lang="scss">

 @import "~assets/scss/vars.scss";
 @import "~assets/scss/utility.scss";

.IconMenuMobile {
    width: 24px;
    height: 15px;
    position: relative;
    cursor: pointer;
    &:hover {
      i:first-child {
        animation: left-to-center 0.3s forwards;
      }
      i:last-child {
        animation: right-to-center 0.3s forwards;
      }
    }
    @media screen and (min-width: 876px) {
      display: none;
    }
}

 i {
     display: block;
     width: 5px;
     height: 5px;
     background-color: $white;
     border-radius: 50%;
     position: absolute;
     top: 50%;
        transform: translate(0, -50%);
     &:first-child {
        left: 0;
     }
     &:nth-child(2) {
        left: 50%;
        transform: translate(-50%, -50%);
     }
     &:last-child {
        right: 0;
     }
 }

   @keyframes left-to-center {
    0% {
      transform: translate(0, -50%);
      left: 0;
    }
    100% {
      transform: translate(-50%, -50%);
      left: 50%;
    }
  }

   @keyframes right-to-center {
    0% {
      transform: translate(0, -50%);
      right: 0;
    }
    100% {
      transform: translate(50%, -50%);
      right: 50%;
    }
  }


</style>



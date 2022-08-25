<template>
  <div>
    <section>
      <div class="line">
        <div class="line cros"></div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">

 @import "~assets/scss/vars.scss";
 @import "~assets/scss/mixins.scss";
 @import "~assets/scss/utility.scss";

 section {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%) rotate(45deg);
   display: none;
   height: 24px;
   width: 24px;
   cursor: pointer;
 }

 .visible section {
   display: block;
 }

 .line {
   position: absolute;
   top: 50%;
   left: 50%;
   height: 2px;
   width: 2px;
   border-radius: 8px;
   background-color: $white;
   &:not(.cros){
     transform: translate(-50%, -50%);
   }
   .line.cros{
     transform: translate(-50%, -50%) rotate(90deg);
   }
 }

 .visible .line,
 .visible .line.cros{
   animation: lenghten 0.4s forwards;
    width: 24px;
 }

 @keyframes lenghten {
  0% {
    width: 5px;
  }
  100% {
    width: 18px;
  }
}


</style>



<template>
  <div class="container">
    <h1>About</h1>
    <i @click="en = true">🇬🇧</i><i @click="en = false">🇮🇹</i>
    <p v-if="en">
      I'm a filmmaker skilled in Digital Contents and short docus for
      advertising and fashion industry.<br />
      Born in Milan in 1990, since I was a kid I developed a more and more
      consistent interest and passion in cinema movies and production.<br />
      After I graduated in Business Communication in IULM - Milan, I decided to
      move to Los Angeles following my passion and I achieved a Master Degree in
      Film Direction at UCLA. After studying and working in LA as a filmmaker, I
      went back to Milan, where I started working as Digital Creator for fashion
      and commercial brands like PMI, Stone Island, Marieclaire, Pandora,
      Grazia, Versace, Philosophy, Alberta Ferretti and others.<br />I have a
      positive, fresh and refined style. My skills in filming makes me agile and
      able to face and work well on any kind of project and production team.<br />On
      the post production side, I can fully manage offline and online progress.
    </p>
    <p v-else>
      Sono un filmmaker esperto in Contenuti digitali e short docus per
      pubblicità e industria della moda.<br />
      Nato a Milano nel 1990, fin da ragazzino ho sviluppato una cultura sempre
      più grande interesse e passione costanti per i film e la produzione
      cinematografica.<br />
      Dopo essermi laureata in Comunicazione d'Impresa presso IULM - Milano, ho
      deciso di farlo mi sono trasferito a Los Angeles seguendo la mia passione
      e ho conseguito un Master in Regia cinematografica all'UCLA. Dopo aver
      studiato e lavorato a Los Angeles come regista, sono tornato a Milano,
      dove ho iniziato a lavorare come Digital Creator per la moda e marchi
      commerciali come PMI, Stone Island, Marieclaire, Pandora, Grazia, Versace,
      Philosophy, Alberta Ferretti e altri.<br />Ho uno stile positivo, attuale
      e raffinato. Le mie abilità nel filmare mi rendono agile e in grado di
      affrontare e lavorare bene su qualsiasi tipo di progetto e team di
      produzione.<br />Sul lato post produzione, posso gestire completamente i
      progressi offline e online.
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AboutPage",
  data() {
    return {
      en: true,
    };
  },
});
</script>

<style scoped lang="scss">
.container {
  min-height: 100vh;
}
i {
  font-size: 30px;
  margin-right: 10px;
  font-style: normal;
  display: inline-block;
  cursor: pointer;
  &:hover {
    animation: bounce 0.8s;
    animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
  }
}

@keyframes bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(1.1, 0.9) translateY(0);
  }
  30% {
    transform: scale(0.9, 1.1) translateY(-4px);
  }
  50% {
    transform: scale(1.1, 0.95) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
p {
  margin-top: 20px;
  font-size: 20px;
  line-height: 136%;
  column-count: 2;
  column-gap: 50px;
  @media screen and (max-width: 750px) {
    column-count: 1;
  }
  @media screen and (max-width: 500px) {
    font-size: 18px;
    line-height: 146%;
  }
}
</style>

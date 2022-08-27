<template>
  <main>
    <div class="container">
      <h1>Contacts</h1>
      <form @submit.prevent="postForm">
        <label for="name">NOME</label>
        <input type="text" v-model="name" required />
        <p>
          <span v-for="er in errors.name" :key="`er: ${er}`">{{ er }}</span>
        </p>
        <label for="name">LA TUA EMAIL</label>
        <input type="email" v-model="email" required />
        <p>
          <span v-for="er in errors.email" :key="`er: ${er}`">{{ er }}</span>
        </p>
        <label for="msg">MESSAGGIO</label>
        <textarea
          v-model="msg"
          id="msg"
          placeholder="Ciao Mirko..."
        ></textarea>
        <p>
          <span v-for="er in errors.msg" :key="`er: ${er}`">{{ er.replace('msg', '"messaggio"') }}</span>
        </p>
        <button type="submit" :disabled="sending">
          {{ sending ? "INVIANDO..." : "INVIA" }}
        </button>
        <h4 v-show="success">messaggio inviato correttamente</h4>
      </form>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "ContactsPage",
  data: () => {
    return {
      name: "",
      email: "",
      msg: "",
      errors: {},
      success: false,
      sending: false,
    };
  },
  methods: {
    async postForm() {
      try {
        this.sending = true;
        const res = await axios.post(`${process.env.BASE_URL}/api/contacts`, {
          name: this.name,
          email: this.email,
          msg: this.msg,
        });
        this.sending = false;
        if (res.data.errors) {
          this.errors = res.data.errors;
          this.success = false;
        } else {
          this.errors = {};
          this.name = "";
          this.email = "";
          this.msg = "";
          this.success = true;
        }
      } catch (er) {
        console.log("this is the error calling contacts", er);
      }
    },
  },
});
</script>

<style scoped lang="scss">
@import "~assets/scss/vars.scss";
@import "~assets/scss/mixins.scss";
@import "~assets/scss/utility.scss";
@import "~assets/scss/animations.scss";

main {
  background-color: $white;
  min-height: calc(100vh - 60px); // - footer mesure
  label,
  input,
  textarea,
  h1 {
    color: $background;
  }
  input,
  textarea {
    padding-left: 20px;
  }
}

p {
  margin: 4px 0 20px;
  height: 15px;
  span {
    color: $error;
  }
}

form {
  padding-bottom: 60px;
}
label,
button {
  font-size: 16px;
}
label {
  font-weight: 500;
}

input,
textarea {
  min-width: 100%;
  margin-top: 5px;
  padding: 15px 20px;
  font-size: 20px;
}

textarea {
  height: 150px;
  @include font(20px, 300, $background);
}

textarea:focus {
  outline: none;
  border-radius: 10px;
}

button {
  color: $white;
  font-weight: 600;
  &:hover {
    animation: tremble 0.4s;
  }
}
</style>

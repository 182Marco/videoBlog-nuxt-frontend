<template>
  <div class="container">
    <h1>Contacts user view</h1>
    <form @submit.prevent="postForm">
      <input type="text" v-model="name" placeholder="nome" />
      <div v-for="er in errors.name" :key="`er: ${er}`">{{ er }}</div>
      <input type="email" v-model="email" placeholder="email" />
      <div v-for="er in errors.email" :key="`er: ${er}`">{{ er }}</div>
      <label for="msg">messaggio</label>
      <textarea v-model="msg" id="msg" cols="30" rows="10"></textarea>
      <div v-for="er in errors.email" :key="`er: ${er}`">{{ er }}</div>
      <button type="submit" :disabled="sending">
        {{ sending ? "inviando..." : "invia" }}
      </button>
      <h4 v-show="success">messaggio inviato correttamente</h4>
    </form>
  </div>
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

<style scoped lang="scss"></style>

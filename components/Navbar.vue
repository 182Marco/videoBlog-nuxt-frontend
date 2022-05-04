<template>
  <nav class="container">
    <img
      src="https://i.vimeocdn.com/portrait/9154044_360x360.webp"
      alt="Fasoli brand logo"
    />
    <ul>
      <li><NuxtLink to="/">Works</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/contacts">Contacts</NuxtLink></li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
nav {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
img {
  width: 200px;
  height: 60px;
  object-fit: cover;
}
ul {
  list-style: none;
}
li {
  display: inline-block;
  &:not(:last-child) {
    margin-right: 10px;
  }
}
a {
  font-weight: 700;
  color: blue;
  transition: all 0.3;
  &:hover {
    color: dodgerblue;
  }
}
</style>

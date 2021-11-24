<template>
  <h1 class="notFound__title">Page Not Found</h1>
  <div class="intro__img roundify">
    <img src="@/assets/svg/logo-back.svg" alt="" class="intro__img-back" />
    <img src="@/assets/svg/logo-front.svg" alt="" class="intro__img-front" />
  </div>
  <p class="notFound__content">
    Congratulations!!
  </p>
  <p class="notFound__content">
    You have somehow managed to reach a page that I have not even created yet
  </p>
  <p class="notFound__content">
    Try from the <router-link to="/">Home</router-link> page now
  </p>
</template>

<script>
export default {
  name: '404'
}
</script>

<style>
  .notFound__title {
    text-align: center;
    font-family: var(--ff-secondary);
    margin-bottom: 2rem;
  }
  .notFound__content {
    text-align: center;
    font-size: 2rem;
  }
</style>

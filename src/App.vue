<template>
  <header :class="{ 'nav-open': nav_open }">
    <div class="logo">
      <img src="@/assets/svg/logo.svg" alt="" class="logo__img" />
      <p class="logo__title">
        <span class="logo__part1">fal</span><span class="logo__part2">len</span
        ><span class="logo__part3">vy</span>
      </p>
    </div>
    <button
      class="nav-toggle"
      @click="nav_open = !nav_open"
      aria-label="toggle navigation"
    >
      <span class="hamburger"></span>
    </button>
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <router-link
            :to="{ path: '/', hash: '#home' }"
            class="nav__link"
            @click="scrollFix('#home')"
            >Home</router-link
          >
        </li>
        <li class="nav__item">
          <router-link
            :to="{ path: '/', hash: '#about' }"
            class="nav__link"
            @click="scrollFix('#about')"
            >About</router-link
          >
        </li>
        <li class="nav__item">
          <router-link
            :to="{ path: '/', hash: '#work' }"
            class="nav__link"
            @click="scrollFix('#work')"
            >My Work</router-link
          >
        </li>
      </ul>
    </nav>
  </header>

  <router-view />

  <!-- Footer -->
  <footer>
    <a href="mailto:fallenlevy@gmail.com" class="footer__link" tabindex="0"
      >fallenlenvy@gmail.com</a
    >
    <ul class="social-list">
      <li class="social-list__item">
        <a
          class="social-list__link"
          href="https://codepen.io"
          tabindex="0"
          target="_blank"
        >
          <i class="fab fa-codepen"></i>
        </a>
      </li>
      <li class="social-list__item">
        <a
          class="social-list__link"
          href="https://dribbble.com"
          tabindex="0"
          target="_blank"
        >
          <i class="fab fa-dribbble"></i>
        </a>
      </li>
      <li class="social-list__item">
        <a
          class="social-list__link"
          href="https://twitter.com"
          tabindex="0"
          target="_blank"
        >
          <i class="fab fa-twitter"></i>
        </a>
      </li>
      <li class="social-list__item">
        <a
          class="social-list__link"
          href="https://github.com"
          tabindex="0"
          target="_blank"
        >
          <i class="fab fa-github"></i>
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      nav_open: false
    }
  },
  methods: {
    scrollFix (hashString) {
      location.hash = hashString
      this.nav_open = false
    }
  }
}
</script>

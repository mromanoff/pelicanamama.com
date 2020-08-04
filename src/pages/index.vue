<template>
  <div class="container">
      <h1 class="Title">
        Pelicana Mama
      </h1>
      <Logo />

      <a class="Button" href="https://www.etsy.com/shop/PelicanaMaMa" title="shop at Pelicanamama">Shop</a>

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.Title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #e56022;
  letter-spacing: 1px;
  margin: 2rem 0;
}

.Button {
  padding: 1rem 4rem;
  color: #e56022;
  background-color: #ffffe9;
  border: 2px solid #e56022;
  border-radius: 10rem;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 3rem;
}
a.Button:any-link {
  text-decoration: none;
}
</style>

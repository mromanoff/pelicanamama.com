<template>
  <div class="Page">
      <h1 class="Page-title">
        Pelicana Mama
      </h1>
      <Logo class="Page-logo" />
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
.Page {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.Page-title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 80px;
  color: #e56022;
  letter-spacing: 1px;
  margin: 2rem 0;
}

@media only screen and (max-width: 600px) {
  .Page-title {
    font-size: 52px;
  }
}

.Page-logo {
}

.Button {
  padding: 1rem 4rem;
  color: #e56022;
  background-color: #ffffe9;
  border: 2px solid #e56022;
  border-radius: 10rem;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
a.Button:any-link {
  text-decoration: none;
}
</style>

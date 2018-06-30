Object.defineProperty(Vue.prototype, '$faker', { value: faker });

const Home = Vue.component('Home', {
  template: '#Home',
  data() {
    return {
      
    };
  },
  mounted() {
    window.sr = ScrollReveal();
    sr.reveal('.image-Container');
  },
});

const Product = {
  template: '#Product',
  computed: {
    product() {
      return this.$store.getters.getProductById(this.$route.params.id);
    },
  },
};

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product,
  },
];

const router = new VueRouter({
  routes,
});

const app = new Vue({
  el: '#app',
  router,
  store,
});

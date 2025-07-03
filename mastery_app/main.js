const app = Vue.createApp({
  data() {
    return {
        product: 'Socks', // In this place we will store our data
        description: 'A pair of warm, fuzzy socks.', // Adding a description property
        image: './assets/images/socks_green.jpg', // Adding an image property
        url: 'https://www.vuemastery.com/'
    }
}
});

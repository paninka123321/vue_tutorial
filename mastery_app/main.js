const app = Vue.createApp({
  data() {
    return {
        cart: 0,
        product: 'Socks', // In this place we will store our data
        description: 'A pair of warm, fuzzy socks.', // Adding a description property
        image: './assets/images/socks_green.jpg', // Adding an image property
        url: 'https://www.vuemastery.com/',
        onStock: false, // Adding an onStock property
        inventory: 8, // Adding an inventory property
        details: ['50% cotton', '30% wool', '20% polyester'],
        sizes: ['35-38', '39-42', '43-46'], // Adding a sizes property
        variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
    }
},
methods: {
  addToCart() {
    this.cart += 1 // Incrementing the cart count
  },
  removeFromCart() {
    if (this.cart > 0) {
      this.cart -= 1 // Decrementing the cart count
    }
  },
  displayColor(variantImage) {
    this.image = variantImage // Changing the image based on the variant
  },
}
});

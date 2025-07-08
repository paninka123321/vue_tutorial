const app = Vue.createApp({
  data() {
    return {
        product: 'Socks', // In this place we will store our data
        description: 'A pair of warm, fuzzy socks.', // Adding a description property
        image: './assets/images/socks_green.jpg', // Adding an image property
        url: 'https://www.vuemastery.com/',
        onStock: true, // Adding an onStock property
        inventory: 8, // Adding an inventory property
        details: ['50% cotton', '30% wool', '20% polyester'],
        sizes: ['35-38', '39-42', '43-46'], // Adding a sizes property
        variants: [
            {
                id: 2234,
                color: 'green',
            },
            {
                id: 2235,
                color: 'blue',
            }
        ],
    }
}
});

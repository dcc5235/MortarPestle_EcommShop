// VARIABLES

// Declare the following variables, where each variable points at different IDs in the HTML
const bagButton = document.querySelector('#bag-btn'); // shopping bag icon in nav
const closeBag = document.querySelector('#close-bag'); // span element with shopping bag icon in shopping bag section
const emptyBag = document.querySelector('#empty-bag'); // button element to empty shopping bag in shopping bag section
const basket = document.querySelector('#basket'); // basket div container in shopping bag section
const basketContainer = document.querySelector('#basket-container'); // basket container that holds entire shopping bag in shopping bag section
const bagContent = document.querySelector('.bag-content'); // shopping bag contents in shopping bag section
const bagTotalItems = document.querySelector('#bag-total'); // total item count in nav
const totalCosts = document.querySelector('#total-costs'); // total product costs in shopping bag section
const products = document.querySelector('#products'); // products div container holding newly arrived products in products section

// Main shopping bag
let cart = [];

// Retrieves Products Data
class Products {
  async getProducts() { // retrieves data from local server (products.json)
    try {
      let result = await fetch('products.json');
      let data = await result.json();

      let products = data.items;
      products = products.map(item => {
        // destructuring to organize the data on return
        const { id } = item.sys;
        const { company, title, price } = item.fields;
        const image = item.fields.image.fields.file.url;
        return { id, company, title, price, image }
      })
      return products
    } catch (error) {
      console.log(error);
    }
  }
}

// Event Listeners

document.addEventListener("DOMContentLoaded", () => { // Once content loads in DOM, then run the following...
  const products = new Products();
  // get all products and then, display data (products) in the console
  products.getProducts().then(products => console.log(products));
});
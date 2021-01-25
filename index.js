// VARIABLES
const bagButton = document.querySelector('#bag-btn'); // shopping bag icon in nav
const closeBag = document.querySelector('#close-bag'); // span element with shopping bag icon in shopping bag section
const emptyBag = document.querySelector('#empty-bag'); // button element to empty shopping bag in shopping bag section
const basket = document.querySelector('#basket'); // basket div container in shopping bag section
const basketContainer = document.querySelector('#basket-container'); // basket container that holds entire shopping bag in shopping bag section
const bagContent = document.querySelector('.bag-content'); // shopping bag contents in shopping bag section
const bagTotalItems = document.querySelector('#bag-total'); // total item count in nav
const totalCosts = document.querySelector('#total-costs'); // total product costs in shopping bag section
const productsDiv = document.querySelector('#products'); // products div container holding newly arrived products in products section

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

// Display Products Client-Side
class Display {
  displayProducts(products) {
    let result = '';
    // forEach loops over product array & for each product, gets props from each object & places it in the ${}
    products.forEach(product => {
      result += `
      <article class="text-2xl text-center">
          <div id="img-container" class="relative overflow-hidden hover:opacity-50 h-4/5">
            <img src=${product.image} alt="product"
              class="container block w-full min-h-full transition duration-300 ease-in">
            <button
              class="absolute px-3 py-2 font-bold tracking-widest uppercase transition duration-300 ease-in transform translate-x-full bg-gray-100 border-none cursor-pointer hover:bg-yellow-500 bg-opacity-80 top-3/4 -right-0"
              data-id=${product.id}>
              <i class="fas fa-shopping-basket"></i>
              add to basket
            </button>
          </div>
          <h3 class="mt-4 text-base tracking-widest text-center uppercase">${product.company}</h3>
          <h3 class="text-base tracking-widest text-center normal-case">${product.title}</h3>
          <h4 class="mt-3 tracking-widest text-center text-bold">$${product.price}</h4>
        </article>
      `
    });
    productsDiv.innerHTML = result;
  }
}

// Application: Local Storage
class Storage {
  static storeProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }
}

// Event Listeners

document.addEventListener("DOMContentLoaded", () => { // Once content loads in DOM, then run the following...
  const display = new Display();
  const products = new Products();
  // Chaining: get all products and then, 
  // display data (products) in the user interface
  products.getProducts().then(products => {
    display.displayProducts(products);
    Storage.storeProducts(products);
  });
});
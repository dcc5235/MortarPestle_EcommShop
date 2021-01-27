// VARIABLES
const bagButton = document.querySelector('#bag-btn'); // shopping bag icon in nav
const closeBag = document.querySelector('#close-bag'); // span element with shopping bag icon in shopping bag section
const emptyBag = document.querySelector('#empty-bag'); // button element to empty shopping bag in shopping bag section
const basketDiv = document.querySelector('#basket'); // basket div container in shopping bag section
const basketContainer = document.getElementById('basket-container'); // basket container that holds entire shopping bag in shopping bag section
const bagContent = document.querySelector('.bag-content'); // shopping bag contents in shopping bag section
const bagTotalItems = document.querySelector('#bag-total'); // total item count in nav
const totalCosts = document.querySelector('#total-costs'); // total product costs in shopping bag section
const productsDiv = document.querySelector('#products'); // products div container holding newly arrived products in products section

// MAIN SHOPPING BAG
let basket = [];
// ALL BUTTONS
let allButtons = [];

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
            <button id="basket-btn"
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
  // Select the Add to Basket Buttons 
  selectBasketButtons() {
    const buttons = [...document.querySelectorAll("#basket-btn")];
    allButtons = buttons;

    buttons.forEach(button => {
      let id = button.dataset.id;
      let insideBasket = basket.find(item => item.id === id);
      if (insideBasket) {
        button.innerText = "TEST";
        button.disabled = true;
      }
      button.addEventListener('click', (event) => {
        event.target.innerText = "TEST";
        event.target.disabled = true;
        // get product data and correct ID from dataset attribute
        let basketItem = { ...Storage.getProduct(id), amount: 1 };
        // add products to basket array (shopping basket/bag)
        basket = [...basket, basketItem];
      });
    });
  }
}

// Application: Local Storage
class Storage {
  static storeProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }
  static getProduct(id) {
    let products = JSON.parse(localStorage.getItem('products'));
    return products.find(product => product.id === id)
  }
  static saveBasket(basket) {
    localStorage.setItem("basket", JSON.stringify(basket));
  }
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => { // Once content loads in DOM, then run the following...
  const display = new Display();
  const products = new Products();
  // Chaining: get all products and then, 
  products.getProducts().then(products => {
    // display products in the user interface
    display.displayProducts(products);
    // load products in local storage
    Storage.storeProducts(products);
  }).then(() => {
    // display inner text when basket is selected
    display.selectBasketButtons();
  });
});
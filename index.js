// VARIABLES
const bagButton = document.querySelector('#bag-btn'); // shopping bag icon in nav
const closeBag = document.querySelector('#close-bag'); // span element with shopping bag icon in shopping bag section
const checkoutBag = document.querySelector('#checkout-bag'); // button element to send users to checkout
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
        button.innerText = "ADDED";
        button.disabled = true;
      }
      button.addEventListener('click', (event) => {
        event.target.innerText = "ADDED";
        event.target.disabled = true;
        // get product data and correct ID from dataset attribute
        let basketItem = { ...Storage.getProduct(id), amount: 1 };
        // add products to basket array (shopping basket/bag)
        basket = [...basket, basketItem];
        // save entire shopping bag/basket to local storage
        Storage.saveBasket(basket);
        // set all shopping bag values
        this.setBasketValues(basket);
        // display shopping bag items in the user interface
        this.addBasketItem(basketItem);
        // show the shopping basket
        this.showBasket();
      });
    });
  }
  // Set values of shopping basket price and total items
  setBasketValues(basket) {
    let totalCost = 0;
    let itemsTotal = 0;

    basket.map(item => {
      totalCost += item.price * item.amount;
      itemsTotal += item.amount;
    });

    totalCosts.innerText = totalCost.toFixed(2);
    bagTotalItems.innerText = itemsTotal;
  }
  // Adds shopping bag items to the basket for checkout
  addBasketItem(item) {
    const div = document.createElement('div');
    div.classList.add('basket-item');
    div.innerHTML =
      `
      <img src=${item.image} alt="product sample" class="w-16 h-16" />
      <div class="text-sm tracking-widest text-left">
        <h3 class="mt-4 uppercase">${item.company}</h3>
        <h4 class="text-yellow-500 normal-case">${item.title}</h4>
        <h5 class="mx-0 my-2">$${item.price}</h5>
        <span class="remove-item text-xs text-gray-600 cursor-pointer" data-id=${item.id}>remove</span>
      </div>
      <div>
        <i class="text-yellow-500 cursor-pointer far fa-plus-square" data-id=${item.id}></i>
        <p class="text-center">${item.amount}</p>
        <i class="text-yellow-500 cursor-pointer far fa-minus-square" data-id=${item.id}></i>
      </div>
      `;
    bagContent.appendChild(div);
  }
  // Shows the shopping basket once a user clicks on the item
  showBasket() {
    basketContainer.classList.add("visibility");
    basketDiv.classList.add("showBasket");
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
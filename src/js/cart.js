import { getExsistingCart } from './utils/cartFunctions.js';
import { creatMenu } from './ui/createMenu.js';

creatMenu();

const cartItems = getExsistingCart();
const cartContainer = document.querySelector('#cart-container');
cartContainer.innerHTML = '';

if (cartItems.length === 0) {
  cartContainer.innerHTML = 'There are no items on the cart';
}

const total = document.querySelector('#cart-total');
let cartTotal = 0;

cartItems.map((data) => {
  cartTotal += parseFloat(data.price);
});

total.innerHTML += `<span class="font-mont border-b-4 border-yellow text-lg">Cart total ${cartTotal}$</span>`;

cartItems.forEach((item) => {
  cartContainer.innerHTML += `
  <div class="mb-10">
    <h3 class="font-mont text-lg font-bold mb-2">${item.title}</h3>
    <img src="${item.image}" class="h-40 mb-5" alt="">
    <span>Price: ${item.price}$</span>
    <a href="productpage.html" class="block underline">Product page</a>
    <button class="bg-yellow px-3 py-2 rounded-sm font-merri block mt-5" id="delete-item">Remove from cart
    </button>
  </div>
  `;
});

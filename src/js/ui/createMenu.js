import { getUserName } from '../utils/loginStorage.js';
import { deleteButton } from '../utils/deleteButton.js';
import { logoutButton } from '../utils/logoutButton.js';

export const creatMenu = () => {
  const { pathname } = document.location;

  const username = getUserName();

  let authLink = `<li class="py-1"><a href="login.html" class="${pathname === '/login.html' ? 'font-bold' : ''}   hover:opacity-75">Login</a></li>`;

  if (username) {
    authLink = `
    <li class="pb-1"><a href="add.html" class="${pathname === 'add.html' ? 'font-bold' : ''} hover:opacity-75">Add Product</a></li>
    <button id="logout" class="font-mont rounded bg-red-500 py-2 px-4 font-bold mb-5">Logout ${username}</button>`;
  }

  const container = document.querySelector('.menu');

  container.innerHTML = `
  <li class="pb-1"><a href="/" class="${pathname === '/' || pathname === 'index.html' ? 'font-bold' : ''} hover:opacity-75">Home</a></li>
  <li class="py-1"><a href="productpage.html" class="${pathname === '/productpage.html' ? 'font-bold' : ''} hover:opacity-75">Products</a></li>
  <li class="py-1"><a href="cart.html" class="${pathname === '/cart.html' ? 'font-bold' : ''} hover:opacity-75">Cart</a></li>
  ${authLink}
  `;
  logoutButton();
};

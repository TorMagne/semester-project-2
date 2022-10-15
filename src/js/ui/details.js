import { baseUrl } from '../settings.js';
import { getExsistingCart } from '../utils/cartFunctions.js';
import { saveCart } from '../utils/cartFunctions.js';
import { displayMessage } from './components/displayMessage.js';

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get('id');

if (!id) {
  document.location.href = '/';
}

const productUrl = baseUrl + '/products/' + id;

const detailCall = async () => {
  try {
    const response = await fetch(productUrl);
    const detail = await response.json();

    document.title = detail.title;

    const container = document.querySelector('#detail-container');

    const cartItems = getExsistingCart();

    let cartText = 'Add to cart';

    const doesObjectExist = cartItems.find(function (item) {
      return parseInt(item.id) === detail.id;
    });

    if (doesObjectExist) {
      cartText = 'Remove from cart';
    }

    let imageCheck = '';
    if (detail.image) {
      imageCheck = baseUrl + detail.image.url;
    }
    if (detail.image_url) {
      imageCheck = detail.image_url;
    }

    container.innerHTML += `
    <h1 class="font-mont mt-10 text-xl font-bold">${detail.title}</h1>
      <div class="md:flex">
        <img class="object-scale-down h-96 w-96 pt-6" src="${imageCheck}" alt="${imageCheck.alternativeText}" />
        <div class="md:flex md:flex-col md:mt-auto md:ml-5">

          <span class="font-merri mr-2 inline rounded-full text-base  font-semibold text-gray-700">Price: ${detail.price}$</span>
          <button class="bg-[#FEC303] px-3 py-2 rounded-sm font-merri block mt-5" id="cart-button" data-id="${detail.id}" data-title="${detail.title}" data-price="${detail.price}" 
          data-image="${imageCheck}">${cartText}
          <i class="fa-solid fa-cart-shopping"></i>
          </button>
          
        </div>
      </div>
    <p class="mt-5 text-base font-merri max-w-2xl">
    <span class="border-b-4 border-[#FEC303]">Description:</span>
    ${detail.description}</p>
    `;

    const cartButton = document.querySelector('#cart-button');

    const handleClick = (e) => {
      e.target.innerText = 'Add to cart';
      e.target.innerText = 'Remove from cart';

      const id = e.target.dataset.id;
      const title = e.target.dataset.title;
      const price = e.target.dataset.price;
      const image = e.target.dataset.image;

      const currentCart = getExsistingCart();
      const productExists = currentCart.find(function (cart) {
        return cart.id === id;
      });
      if (productExists === undefined) {
        const product = { id: id, title: title, price: price, image: image };
        currentCart.push(product);
        saveCart(currentCart);
      } else {
        const newCart = currentCart.filter((cart) => cart.id !== id);
        saveCart(newCart);
      }
    };

    cartButton.addEventListener('click', handleClick);
  } catch (error) {
    displayMessage('warning', 'An error occured', '.message-container');
  }
};

detailCall();

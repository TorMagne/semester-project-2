import { baseUrl } from '../settings.js';
import { getUserName } from '../utils/loginStorage.js';

export const renderProducts = (products) => {
  const featuredContainer = document.querySelector('#featured-prod');
  featuredContainer.innerHTML = '';

  products.forEach((product) => {
    let imageCheck = '';
    if (product.image) {
      imageCheck = baseUrl + product.image.url;
    }
    if (product.image_url) {
      imageCheck = product.image_url;
    }

    const userName = getUserName();

    featuredContainer.innerHTML += `
    <div class="max-w-sm overflow-hidden bg-white shadow-md">
      <img class="h-48 w-96 object-scale-down pt-6" src="${imageCheck}" alt="${imageCheck.alternativeText}" />
      <div class="bg-white px-6 py-6">
        <div class="mb-2">
          <h3 class="font-mont text-xl font-bold">${product.title}</h3>
        </div>
        <span class="font-merri mr-2 rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">Price: ${product.price}$</span>
        <a href="details.html?id=${product.id}" class="font-merri mt-4 block bg-yellow px-2 py-2 text-center">View product</a>
        <a href="edit.html?id=${product.id}" class="font-merri mt-4 block bg-yellow px-2 py-2 text-center ${userName ? 'block' : 'hidden'}">Edit product</a>
      </div>
    </div>
      `;
  });
};

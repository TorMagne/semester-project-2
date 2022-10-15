import { baseUrl } from '../settings.js';
import { creatMenu } from './createMenu.js';

creatMenu();

export const renderFeaturedProducts = (products) => {
  const featuredContainer = document.querySelector('#featured-prod');
  featuredContainer.innerHTML = '';
  products.forEach((products) => {
    if (products.featured) {
      let imageCheck = '';
      if (products.image) {
        imageCheck = baseUrl + products.image.url;
      }
      if (products.image_url) {
        imageCheck = products.image_url;
      }
      featuredContainer.innerHTML += `
      <a href="productpage.html" class="shadow-md z-20 overflow-hidden max-w-sm bg-white">
        <img class="object-scale-down h-48 w-96 pt-6" src="${imageCheck}" alt="${imageCheck.alternativeText}" />
        <div class="px-6 bg-white py-6">
           <div class="mb-2 font-mont">
           <h3 class="text-xl font-bold">${products.title}
           </h3>
           </div>
           <span class="font-merri mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm  font-semibold text-gray-700">Price: ${products.price}$</span>
        </div>
      </a>
      `;
    }
  });
};

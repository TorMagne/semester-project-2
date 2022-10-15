import { renderProducts } from './renderProducts.js';

export function searchProducts(products) {
  const search = document.querySelector('#search');

  search.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredProducts = products.filter(function (products) {
      if (products.title.toLowerCase().includes(searchValue)) {
        return true;
      }
    });

    if (filteredProducts.length === 0) {
      renderProducts(products);
    } else {
      renderProducts(filteredProducts);
    }
  };
}

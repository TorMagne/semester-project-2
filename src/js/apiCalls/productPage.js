import { baseUrl } from '../settings.js';
import { productsAppend } from '../settings.js';
import { renderProducts } from '../ui/renderProducts.js';
import { searchProducts } from '../ui/searchProduct.js';
import { creatMenu } from '../ui/createMenu.js';
import { displayMessage } from '../ui/components/displayMessage.js';
creatMenu();

const url = baseUrl + productsAppend;

const productCall = async () => {
  try {
    const response = await fetch(url);
    const products = await response.json();

    renderProducts(products);
    searchProducts(products);
  } catch (error) {
    displayMessage('error', 'An error occured', '.message-container');
  }
};

productCall();

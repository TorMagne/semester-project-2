import { baseUrl } from '../settings.js';
import { productsAppend } from '../settings.js';
import { renderFeaturedProducts } from '../ui/renderFeaturesProducts.js';
import { displayMessage } from '../ui/components/displayMessage.js';

const url = baseUrl + productsAppend;

const featuredProdCall = async () => {
  try {
    const response = await fetch(url);
    const products = await response.json();

    renderFeaturedProducts(products);
  } catch (error) {
    displayMessage('error', 'An error occured', '.message-container');
  }
};

featuredProdCall();

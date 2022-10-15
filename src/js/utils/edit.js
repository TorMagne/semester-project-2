import { baseUrl } from '../settings.js';
import { displayMessage } from '../ui/components/displayMessage.js';
import { creatMenu } from '../ui/createMenu.js';
import { getToken, getUserName } from './loginStorage.js';
import { deleteButton } from '../utils/deleteButton.js';

const token = getToken();

const userName = getUserName();

if (!userName) {
  location.href = '/';
}

creatMenu();

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get('id');

if (!id) {
  document.location.href = '/';
}

const productUrl = baseUrl + '/products/' + id;

const form = document.querySelector('.form');
const message = document.querySelector('.message-container');
const name = document.querySelector('#name');
const price = document.querySelector('#price');
const description = document.querySelector('#description');
const image = document.querySelector('#image');
const idInput = document.querySelector('#id');
const checkbox = document.querySelector('#toogleA');

(async function () {
  try {
    const response = await fetch(productUrl);
    const details = await response.json();

    let imageCheck = '';
    if (details.image) {
      imageCheck = baseUrl + details.image.url;
    }
    if (details.image_url) {
      imageCheck = details.image_url;
    }

    name.value = details.title;
    price.value = details.price;
    image.value = imageCheck;
    description.value = details.description;
    idInput.value = details.id;

    deleteButton(details.id);
  } catch (error) {
    displayMessage('warning', 'An error occured', '.message-container');
  } finally {
    // remove loading
    form.style.display = 'block';
  }
})();

const updateProduct = async (title, price, description, image, id, featured) => {
  const url = baseUrl + '/products/' + id;
  const data = JSON.stringify({ title, price, description, image, id, featured });

  const options = {
    method: 'PUT',
    body: data,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.updated_at) {
      displayMessage('success', 'Product updated', '.message-container');
    }
    if (json.error) {
      displayMessage('error', json.message, '.message-container');
    }
  } catch (error) {
    displayMessage('warning', 'An error occured', '.message-container');
  }
};

const submitForm = (e) => {
  e.preventDefault();

  message.innerHTML = '';

  const nameValue = name.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();
  const imageValue = image.value;
  const idValue = idInput.value;
  const checkedValue = checkbox.checked;

  if (nameValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue === 0) {
    displayMessage('warning', 'Please provide proper values', '.message-container');
  }

  updateProduct(nameValue, priceValue, descriptionValue, imageValue, idValue, checkedValue);
};

form.addEventListener('submit', submitForm);

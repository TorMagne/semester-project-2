import { displayMessage } from '../ui/components/displayMessage.js';
import { creatMenu } from '../ui/createMenu.js';
import { baseUrl } from '../settings.js';
import { getUserName, getToken } from './loginStorage.js';

const token = getToken();

const userName = getUserName();

if (!userName) {
  location.href = '/';
}

creatMenu();

const form = document.querySelector('.form');
const message = document.querySelector('.message-container');
const name = document.querySelector('#name');
const price = document.querySelector('#price');
const description = document.querySelector('#description');
const image = document.querySelector('#image');
const checkbox = document.querySelector('#toogleA');

const addProduct = async (title, price, description, image, featured) => {
  const url = baseUrl + '/products';

  const data = JSON.stringify({ title: title, price: price, description: description, image_url: image, featured: featured });

  const options = {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.created_at) {
      displayMessage('success', 'Product created', '.message-container');
      form.reset();
    }

    if (json.error) {
      displayMessage('error', json.message, '.message-container');
    }
  } catch (error) {
    displayMessage('error', 'An error occured', '.message-container');
  }
};

const submitForm = (e) => {
  e.preventDefault();

  message.innerHTML = '';

  const nameValue = name.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();
  const imageValue = image.value;
  const checkedValue = checkbox.checked;

  if (nameValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue === 0) {
    displayMessage('warning', 'Please provide proper values', '.message-container');
  }

  addProduct(nameValue, priceValue, descriptionValue, imageValue, checkedValue);
};

form.addEventListener('submit', submitForm);

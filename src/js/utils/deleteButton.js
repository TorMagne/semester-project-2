import { baseUrl } from '../settings.js';
import { getToken } from './loginStorage.js';
import { displayMessage } from '../ui/components/displayMessage.js';

export const deleteButton = (id) => {
  const container = document.querySelector('.delete-container');

  container.innerHTML = `<button class="font-mont mt-5 rounded bg-red-500 py-2 px-4 font-bold delete" type="button">Delete</button>`;

  const button = document.querySelector('.delete');

  button.onclick = async function () {
    const doDelete = confirm('Are you sure you want to delete this?');

    if (doDelete) {
      const url = baseUrl + '/products/' + id;

      const token = getToken();

      const options = {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch(url, options);
        const json = response.json();

        location.href = '/';

        console.log(json);
      } catch (error) {
        displayMessage('warning', 'An error occured', '.message-container');
      }
    }
  };
};

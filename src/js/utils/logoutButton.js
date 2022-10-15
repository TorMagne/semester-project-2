import { clearLogoutInfo } from './loginStorage.js';

export const logoutButton = () => {
  const button = document.querySelector('#logout');

  if (button) {
    button.onclick = function () {
      const doLogout = confirm('Are you sure you want to logout');

      if (doLogout) {
        clearLogoutInfo();
        location.href = '/';
      }
    };
  }
};

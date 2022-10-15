import { baseUrl } from '../settings.js';

export const renderBanner = (herroBanner) => {
  const container = document.querySelector('.hero-banner-div');
  container.style.backgroundImage = `url('${baseUrl + herroBanner}')`;
  container.style.backgroundRepeat = 'no-repeat';
  container.style.backgroundSize = 'cover';
};

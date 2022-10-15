import { heroBannerUrl } from '../settings.js';
import { renderBanner } from '../ui/renderBanner.js';
import { displayMessage } from '../ui/components/displayMessage.js';

const bannerCall = async () => {
  try {
    const response = await fetch(heroBannerUrl);
    const json = await response.json();

    const herroBanner = json.hero_banner.url;

    renderBanner(herroBanner);
  } catch (error) {
    displayMessage('warning', 'An error occured', '.message-container');
  }
};

bannerCall();

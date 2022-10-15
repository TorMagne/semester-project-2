export const getExsistingCart = () => {
  const cartItems = localStorage.getItem('cartItems');
  if (!cartItems) {
    return [];
  } else {
    return JSON.parse(cartItems);
  }
};

export const saveCart = (items) => {
  localStorage.setItem('cartItems', JSON.stringify(items));
};

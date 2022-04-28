import { checkCartItemAtrributes } from '../../../utils/checkCartAttribute';
export const addItemToCart = (
  cartItems,
  cartItemToAdd
) => {
  const existingCartItem = cartItems.find(
    (cartItem) =>
      cartItem.id === cartItemToAdd.id &&
      checkCartItemAtrributes(
        cartItem.selectedAttributes,
        cartItemToAdd.selectedAttributes
      )
  );
  console.log(existingCartItem);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id &&
      checkCartItemAtrributes(
        cartItem.selectedAttributes,
        cartItemToAdd.selectedAttributes
      )
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }

  return [
    ...cartItems,
    { ...cartItemToAdd, quantity: 1 },
  ];
};

export const removeItemFromCart = (
  cartItems,
  cartItemToRemove
) => {
  const existingCartItem = cartItems.find(
    (cartItem) =>
      cartItem.id === cartItemToRemove.id &&
      checkCartItemAtrributes(
        cartItem.selectedAttributes,
        cartItemToRemove.selectedAttributes
      )
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem) =>
        !checkCartItemAtrributes(
          cartItem.selectedAttributes,
          cartItemToRemove.selectedAttributes
        )
    );
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id &&
    checkCartItemAtrributes(
      cartItem.selectedAttributes,
      cartItemToRemove.selectedAttributes
    )
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};

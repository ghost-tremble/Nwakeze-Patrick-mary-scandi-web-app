import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;
const selectCurrency = (state) => state.currency;

export const selectCurrentCurrency =
  createSelector(
    [selectCurrency],
    (currency) => currency.currentCurrency
  );

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount =
  createSelector([selectCartItems], (cartItems) =>
    cartItems.reduce(
      (accumaledQuantity, cartItem) =>
        accumaledQuantity + cartItem.quantity,
      0
    )
  );

export const selectCartTotal = createSelector(
  [selectCartItems, selectCurrency],
  (cartItems, currency) =>
    cartItems.reduce(
      (accumaledQuantity, cartItem) =>
        accumaledQuantity +
        cartItem.quantity *
          Number(
            cartItem.prices
              .filter(
                (item) =>
                  item.currency.symbol ===
                  currency.currentCurrency
              )
              .map((item) => item.amount)[0]
          ),
      0
    )
);

//reducer
const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'DELETE_ITEM':
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;

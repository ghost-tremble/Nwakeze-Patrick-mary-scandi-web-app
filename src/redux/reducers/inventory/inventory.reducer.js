//reducer
import { InventoryActionTypes } from './inventory.type';
const initialState = {
  isLoading: true,
  catalog: [],

  categories: [],
};

const inventoryReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case InventoryActionTypes.GET_INVENTORY_DATA:
      return {
        ...state,
        catalog: action.payload,
      };
    case InventoryActionTypes.GET_CATEGORIES_DATA: {
      return {
        ...state,

        categories: action.payload,
      };
    }
    case InventoryActionTypes.IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default inventoryReducer;

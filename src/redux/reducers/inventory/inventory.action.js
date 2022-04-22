import { InventoryActionTypes } from './inventory.type';
export const fetchCatalog = (data) => ({
  type: InventoryActionTypes.GET_INVENTORY_DATA,
  payload: data,
});

export const fetchCategories = (data) => ({
  type: InventoryActionTypes.GET_CATEGORIES_DATA,
  payload: data,
});

export const updateLoadingState = (data) => ({
  type: InventoryActionTypes.IS_LOADING,
  payload: data,
});

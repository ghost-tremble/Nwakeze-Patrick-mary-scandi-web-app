import { CurrencyActionTypes } from './currency.action.type';

export const fetchCurrecies = (data) => ({
  type: CurrencyActionTypes.GET_CURENCIES,
  payload: data,
});
export const changeCurrecies = (data) => ({
  type: CurrencyActionTypes.CHANGE_CURENCIES,
  payload: data,
});
export const toggleOpenCurrecies = () => ({
  type: CurrencyActionTypes.TOGGLE_OPEN_CURRECIES,
});

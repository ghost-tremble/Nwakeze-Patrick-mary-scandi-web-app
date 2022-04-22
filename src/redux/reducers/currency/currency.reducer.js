import { CurrencyActionTypes } from './currency.action.type';

const initialState = {
  hidden: true,
  currentCurrency: '$',
  currencyList: [],
};

const currencyReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CurrencyActionTypes.GET_CURENCIES:
      return {
        ...state,
        currencyList: action.payload,
      };
    case CurrencyActionTypes.CHANGE_CURENCIES:
      return {
        ...state,
        currentCurrency: action.payload,
      };
    case CurrencyActionTypes.TOGGLE_OPEN_CURRECIES:
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return {
        ...state,
      };
  }
};
export default currencyReducer;

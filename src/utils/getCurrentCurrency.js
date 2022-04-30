export const getCurrentCurrency = (
  pricesArray,
  currentSymbol
) => {
  const value = pricesArray
    ?.filter(
      (item) =>
        item.currency.symbol === currentSymbol
    )
    .map((item, index) => {
      return `${item.currency.symbol}${item.amount}`;
    });
  return value[0];
};

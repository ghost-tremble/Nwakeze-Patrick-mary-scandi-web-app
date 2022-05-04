export const getPredefinedAttributes = (item) => {
  let selectedAttributesArray =
    item.attributes.map((item) => {
      return {
        [item.name]: item.items[0].value,
      };
    });
  const selectedAttributes = Object.assign(
    {},
    ...selectedAttributesArray
  );
  return selectedAttributes;
};

/*
@params currentCartAttribute  
@params cartItemToAddAttribute

function to check if selected attributes exist
 */

export const checkCartItemAtrributes = (
  currentCartAttribute,
  cartItemToAddAttribute
) => {
  const currentCartKeys = Object.keys(
    currentCartAttribute
  );
  const cartItemKeys = Object.keys(
    cartItemToAddAttribute
  );

  let checkIfAttributeMatch;
  let matchArray = [];
  // loop through the attribute keys and check if they match
  for (
    let i = 0;
    i < currentCartKeys.length;
    i++
  ) {
    if (currentCartKeys[i] === cartItemKeys[i]) {
      // if match check if their values match
      checkIfAttributeMatch =
        currentCartAttribute[
          currentCartKeys[i]
        ] ===
        cartItemToAddAttribute[
          currentCartKeys[i]
        ];
      // append the boolean values the array
      matchArray.push(checkIfAttributeMatch);
    } else {
      return false;
    }
  }

  return !matchArray.includes(false);
};

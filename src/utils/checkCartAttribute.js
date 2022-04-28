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

      return checkIfAttributeMatch;
    }

    return false;
  }
};

import { gql } from '@apollo/client';

// graphql queries

export const currencies = gql`
  query {
    currencies {
      symbol
      label
    }
  }
`;
const category = gql`
  query GetProduct($category: String!) {
    category(input: { title: $category }) {
      products {
        id
        name
        brand
        gallery
        inStock
        description
        attributes {
          type
          name
          items {
            value
          }
        }
        prices {
          currency {
            symbol
            label
          }
          amount
        }
      }
    }
  }
`;

export const categories = gql`
  {
    categories {
      name
    }
  }
`;

// singleProduct query

export const singleProduct = gql`
  query GetSingleProduct($productId: String!) {
    product(id: $productId) {
      id
      name
      brand
      gallery
      inStock
      description
      attributes {
        type
        name
        items {
          value
        }
      }
      prices {
        currency {
          symbol
          label
        }
        amount
      }
    }
  }
`;

export default category;

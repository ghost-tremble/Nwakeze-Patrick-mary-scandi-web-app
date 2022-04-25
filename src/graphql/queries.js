import { gql } from '@apollo/client';

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

export default category;

import { Component } from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';
class Category extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Container>
          <H1>Category</H1>
          <ProductList>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </ProductList>
        </Container>
      </>
    );
  }
}

export default Category;
const Container = styled.div`
  padding: 5.5em 6.375em 12.3em 6.25em;
  display: flex;
  border: 1px solid;

  align-items: center;
  flex-direction: column;
`;

const H1 = styled.h1`
font-family: 'Raleway';
font-weight: 400;
font-size: 42px,
line-height: 160%;
/* identical to box height, or 67px */
display: flex;
align-items: center;
margin-top:80px;
margin-bottom:2.2em;
width:100%

`;
const ProductList = styled.div`
display:grid;
grid-auto-flow:row;
column-gap:2.44rem;
row-gap:6.44rem;
grid-template-columns :repeat(3,24.125rem);
grid-template-rows ; repeat(2,1fr);


`;

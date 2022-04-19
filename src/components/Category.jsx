import { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ProductItem from './ProductItem';
import category from '../graphql/queries';
import { fetchCatalog } from '../redux/reducers/inventory/inventory.action';
import client from '../graphql/client';
import { withRouter } from 'react-router-dom';

class Category extends Component {
  componentDidMount() {
    const currentPath =
      this.props.location.pathname.split('/')[1];
    client
      .query({
        query: category,

        variables: { category: currentPath },
      })
      .then((result) =>
        this.props.fetchCatalog(result.data)
      );
  }
  render() {
    const { products } =
      this.props.productItems.category;
    const { location } = this.props;
    return (
      <>
        <Container>
          <H1>{this.props.name}</H1>
          <ProductList>
            {products.map(
              ({
                name,
                gallery,
                inStock,
                id,
              }) => {
                return (
                  <ProductItem
                    key={id}
                    id={id}
                    productLink={`${location.pathname}/${id}`}
                    name={name}
                    image={gallery[0]}
                    stock={inStock}
                  />
                );
              }
            )}
          </ProductList>
        </Container>
      </>
    );
  }
}
// assign state to props
const mapStateToProps = (state) => {
  return {
    productItems: state.inventory.catalog,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCatalog: (data) =>
      dispatch(fetchCatalog(data)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Category)
);

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
text-transform:capitalize;
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

import { Component } from 'react';
import styled from 'styled-components';
import ErrorBar from '../components/ErrorBar';
import parse from 'html-react-parser';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addItem } from '../redux/reducers/cart/cart.actions';
import { getCurrentCurrency } from '../utils/getCurrentCurrency';
import client from '../graphql/client';
import { fetchSingleProduct } from '../redux/reducers/inventory/inventory.action';
import { singleProduct } from '../graphql/queries';
import {
  Box,
  Div,
} from '../components/styledComponents/components';
import Loader from '../components/Loader';
class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      errorString: '',
      selectedAttributes: {},
      isLoading: true,
    };
  }
  componentDidMount() {
    client
      .query({
        query: singleProduct,
        variables: {
          productId: this.props.match.params.id,
        },
      })
      .then((result) => {
        this.props.fetchSingleProduct(
          result.data
        );
        this.setState((prevState) => ({
          ...prevState,
          isLoading: false,
        }));
      });
  }
  render() {
    // product
    const { product } = this.props.product;
    const { isLoading } = this.state;
    console.log(product);
    const { addItemToCart } = this.props;

    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <Container>
            {this.state.errorString ? (
              <ErrorBar
                errorString={
                  this.state.errorString
                }
              />
            ) : (
              ''
            )}
            <Section
              marginRight={'20px'}
              width={''}
              scroll="auto"
              overflow="hidden"
              height="31rem">
              {product.gallery.map(
                (item, index) => {
                  return (
                    <SelectImage
                      key={index}
                      onClick={() =>
                        this.setState({
                          ...this.state,
                          index: index,
                        })
                      }>
                      <img
                        src={item}
                        className="image"
                        alt="product"
                      />
                    </SelectImage>
                  );
                }
              )}
            </Section>
            <Section
              marginRight={'100px'}
              width={'610px'}
              background="#fff">
              <Image
                src={
                  product.gallery[
                    this.state.index
                  ]
                }
              />
            </Section>
            <Section
              marginRight={'20px'}
              width={'292px'}>
              <div className="productName">
                <h2>{product.brand}</h2>
                <p>{product.name}</p>
              </div>

              {/*
          product attributes selection */}
              {product.attributes.map(
                (attr, index) => {
                  return (
                    <div
                      key={index}
                      className="attribute-selection">
                      <h3>{attr.name}</h3>

                      <div className="box-container">
                        {attr.items.map(
                          (attribute, index) => {
                            return (
                              <div key={index}>
                                {attr.type ===
                                'swatch' ? (
                                  <Div
                                    key={index}
                                    $highlight={
                                      this.state
                                        .selectedAttributes[
                                        attr.name
                                      ] ===
                                      attribute.value
                                        ? true
                                        : false
                                    }>
                                    <Box
                                      cursor="pointer"
                                      border="none"
                                      background={
                                        attribute.value
                                      }
                                      height="32px"
                                      width="32px"
                                      marginRight="0px"
                                      onClick={() => {
                                        this.setState(
                                          {
                                            ...this
                                              .state,
                                            selectedAttributes:
                                              {
                                                ...this
                                                  .state
                                                  .selectedAttributes,

                                                [attr.name]:
                                                  attribute.value,
                                              },
                                          }
                                        );
                                      }}></Box>
                                  </Div>
                                ) : (
                                  <Box
                                    cursor="pointer"
                                    onClick={() =>
                                      this.setState(
                                        {
                                          ...this
                                            .state,
                                          selectedAttributes:
                                            {
                                              ...this
                                                .state
                                                .selectedAttributes,

                                              [attr.name]:
                                                attribute.value,
                                            },
                                        }
                                      )
                                    }
                                    key={index}
                                    $selected={
                                      this.state
                                        .selectedAttributes[
                                        attr.name
                                      ] ===
                                      attribute.value
                                        ? true
                                        : false
                                    }>
                                    {
                                      attribute.value
                                    }
                                  </Box>
                                )}
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  );
                }
              )}

              <div className="price">
                <h3>PRICE:</h3>

                <h4>
                  {getCurrentCurrency(
                    product.prices,
                    this.props.currentCurrency
                  )}
                </h4>
              </div>
              <Button
                color="#ffffff"
                background="#5ECE7B"
                width="292px"
                height="52px"
                onClick={() => {
                  if (product.inStock === false) {
                    return this.setState({
                      ...this.state,
                      errorString:
                        'this product is out of stock',
                    });
                  }
                  if (
                    Object.keys(
                      this.state
                        .selectedAttributes
                    ).length !==
                    product.attributes.length
                  ) {
                    return this.setState({
                      ...this.state,
                      errorString:
                        'please select Attributes',
                    });
                  }
                  this.setState({
                    ...this.state,
                    errorString: '',
                  });
                  addItemToCart({
                    ...product,
                    selectedAttributes:
                      this.state
                        .selectedAttributes,
                  });
                }}>
                ADD TO CART
              </Button>
              <div className="description">
                {parse(product.description)}
              </div>
            </Section>
          </Container>
        )}
      </>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    product: state.inventory.singleProduct,
    currentCurrency:
      state.currency.currentCurrency,
  };
};
const MapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item) =>
      dispatch(addItem(item)),
    fetchSingleProduct: (data) =>
      dispatch(fetchSingleProduct(data)),
  };
};
export default withRouter(
  connect(
    MapStateToProps,
    MapDispatchToProps
  )(ProductPage)
);

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  margin: 100px 0 0 0;
  padding: 20px;
  justify-content: center;
`;

const Section = styled.div`
  background-color:${(props) => props.background};
height: ${(props) => props.height || '32rem'};
  overflow:${(props) => props.overflow};
  width: ${(props) => props.width || '200px'};
  margin-right: ${(props) => props.marginRight};
  &:hover{
    overflow-y:${(props) => props.scroll};
  }
  .productName {
    margin-bottom: 43px;
  }
  .productName > h2 {
    font-weight: 600;
    font-size: 30px;
    line-height: 27px;
    margin-bottom:16px;
  }
  .productName > p {
    font-weight: 400;
    font-size: 30px;
    line-height: 27px;
  }
  .attribute-selection {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    .box-container {
      display: flex;

      width: 280px;
    }
    h3 {
      font-family: 'Roboto Condensed', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
    }
  }
  .price {
    margin-bottom: 20px;
    h3 {
      font-family: 'Roboto Condensed', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
    }
    h4{
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 18px;
      height: 46px;
      display flex;
      align-items:center;
    }
  }

  .description {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 159.96%;
  }
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 0px ${(props) => props.margin || '0'}px
    40px 0px;
  border: ${(props) =>
    props.background
      ? '1px solid transparent'
      : '1px solid #1D1F22'};
  background-color: ${(props) =>
    props.background};
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  /* identical to box height, or 19px */

  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
`;

const SelectImage = styled.div`
  cursor: pointer;
  width: 176.65px;
  height: 87.61px;

  margin: 0px 0px 32.39px 0px;

  .image {
    width: 7.9375rem;
    height: 7rem;
    object-fit: contain;
  }
`;

const Image = styled.img`
  width: 610px;
  object-fit: contain;
  height: 32rem;
`;

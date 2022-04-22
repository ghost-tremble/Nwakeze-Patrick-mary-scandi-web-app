import { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as CartIcon } from '../assets/add-cart.svg';
// single Product Item
class ProductItem extends Component {
  // constructor(props) {
  //     super(props)
  // }

  render() {
    const {
      name,
      image,
      stock,
      productLink,
      prices,
    } = this.props;
    return (
      <>
        <Container
          to={productLink}
          opacity={stock ? '1' : '0.5'}>
          <div className="imageCard">
            <ImageContainer>
              <Image src={image} />

              <OutofStock
                displayType={
                  stock ? 'none' : 'flex'
                }>
                OUT OF STOCK
              </OutofStock>
            </ImageContainer>
          </div>

          <div className="addToCart">
            <AddCart>
              <CartIcon />
            </AddCart>
          </div>
          <Details>
            <H1>{name}</H1>
            <P>
              {' '}
              {prices
                .filter(
                  (item) =>
                    item.currency.symbol ===
                    this.props.currentCurrency
                )
                .map((item) => (
                  <h4>
                    {item.currency.symbol}
                    {item.amount}
                  </h4>
                ))}
            </P>
          </Details>
        </Container>
      </>
    );
  }
}
const MapStateToProps = (state) => {
  return {
    currentCurrency:
      state.currency.currentCurrency,
  };
};

export default connect(MapStateToProps)(
  ProductItem
);

const Container = styled(Link)`
  padding: 16px;
  width: 24.125rem;
  height: 27.75rem;
  flex-grow: 1 1 30%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-decoration: none;
  opacity: ${(props) => props.opacity};
  transition: opacity 0.3s;
  &:hover {
    box-shadow: 0px 4px 35px
      rgba(168, 172, 176, 0.19);
  }
  &:hover .addToCart {
    display: flex;
  }
  .addToCart {
    display: none;
    justify-content: end;
    width: 100%;
    position: relative;
    padding-right: 31px;
    top: 30px;
  }
  .imageCard {
    display: flex;
    flex-direction: column;
  }
`;
const ImageContainer = styled.div`
  padding: 1rem;
  width: 22.25em;
  height: 21.125em;
  margin: 0px 0px 1.31rem;
  justify-content: center;
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 22.25em;
  height: 21.125em;
`;
const Details = styled.div``;
const H1 = styled.h1`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.8em;
`;
const P = styled.div`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.8em;
`;

const OutofStock = styled.h1`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 160%;

  /* identical to box height, or 38px */
  position: absolute;

  align-items: center;
  display: ${(props) => props.displayType};
`;

const AddCart = styled.div`
  height: 52px;
  width: 52px;
  background-color: #5ece7b;
  border-radius: 100%;
  justify-self: end;
  align-self: flex-end;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

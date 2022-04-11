import { Component } from 'react';
import styled from 'styled-components';
class ProductPage extends Component {
  render() {
    return (
      <Container>
        <Section marginRight={'20px'} width={''}>
          <div className="select-image"></div>
          <div className="select-image"></div>
          <div className="select-image" />
        </Section>
        <Section
          marginRight={'100px'}
          width={'610px'}
          background="#000"></Section>
        <Section
          marginRight={'20px'}
          width={'292px'}>
          <div className="productName">
            <h2>Apollo</h2>
            <p>Running Shorts</p>
          </div>
          <div className="size-selection">
            <h3>SIZE:</h3>
            <div className="box-container">
              <Box>xs</Box>
              <Box>S</Box>
              <Box>M</Box>
              <Box>L</Box>
            </div>
          </div>

          <div className="price">
            <h3>PRICE:</h3>
            <h4>$50.00</h4>
          </div>
          <Button
            color="#ffffff"
            background="#5ECE7B"
            width="292px"
            height="52px">
            ADD TO CART
          </Button>
          <div className="description">
            <p>
              Find stunning women's cocktail
              dresses and party dresses. Stand out
              in lace and metallic cocktail
              dresses and party dresses from all
              your favorite brands.
            </p>
          </div>
        </Section>
      </Container>
    );
  }
}

export default ProductPage;

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
  height: 32em;
  width: ${(props) => props.width || '200px'};
  margin-right: ${(props) => props.marginRight};
  .select-image {
    border: 1px solid red;
    background-color:#eef;
    width: 176.65px;
    height: 87.61px;
    margin: 0px 0px 32px 0px;
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
  .size-selection {
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

const Box = styled.div`
  border: 1px solid;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 63px;
  margin-right: ${(props) =>
    props.marginRight || '10px'};
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 112%;
  letter-spacing: 0.05em;
  cursor: pointer;
  background: ${(props) =>
    props.background || props.selected};
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

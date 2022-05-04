import { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { ReactComponent as ShopLogo } from '../assets/headerIcons/shop-logo.svg';
class Loader extends Component {
  render() {
    const { errorString, errorFromState } =
      this.props;
    return (
      <Container>
        <ShopLogo />
        <ErrorString>
          {errorString || errorFromState}
        </ErrorString>
      </Container>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    errorString: state.inventory.errorString,
  };
};

export default connect(MapStateToProps)(Loader);

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorString = styled.div``;

import { Component, createRef } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import {
  changeCurrecies,
  toggleOpenCurrecies,
  closeCurrenciesOnClickOut,
} from '../redux/reducers/currency/currency.action';
class Currency extends Component {
  wrapperRef = createRef(null);
  handleClickOutside = (event) => {
    if (
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(
        event.target
      )
    ) {
      this.props.closeCurrencyOnClickOut();
    }
  };
  componentDidMount() {
    document.addEventListener(
      'mousedown',
      this.handleClickOutside
    );
  }
  componentWillUnmount() {
    document.removeEventListener(
      'mousedown',
      this.handleClickOutside
    );
  }
  render() {
    const {
      currency,
      hidden,
      changeCurrency,
      currentCurrency,
      showCurrency,
    } = this.props;

    return (
      <Container
        hidden={hidden}
        ref={this.wrapperRef}>
        <ul>
          {currency.map((item, i) => {
            return (
              <Li
                key={i}
                onClick={() => {
                  changeCurrency(item.symbol);
                  showCurrency();
                }}
                $active={
                  item.symbol === currentCurrency
                    ? true
                    : false
                }>
                <span>{item.symbol}</span>
                <span>{item.label}</span>
              </Li>
            );
          })}
        </ul>
      </Container>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    currency:
      state.currency.currencyList.currencies,
    hidden: state.currency.hidden,
    currentCurrency:
      state.currency.currentCurrency,
  };
};
const MapDispatchToProps = (dispatch) => {
  return {
    changeCurrency: (currencyToChange) =>
      dispatch(changeCurrecies(currencyToChange)),
    showCurrency: () =>
      dispatch(toggleOpenCurrecies()),
    closeCurrencyOnClickOut: (data) =>
      dispatch(closeCurrenciesOnClickOut(data)),
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Currency);

// styled components
const Container = styled.div`
  position: absolute;
  transform: ${(props) =>
    props.showCurrency ? 'scale(0)' : 'scale(1)'};
  height: max-height;
  width: 114px;
  background-color: #fff;
  top: 63px;
  right: 78px;

  box-shadow: 0px 4px 35px 0px #a8acb030;
  ul {
    list-style-type: none;
    dislay: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Li = styled.li`
  
    font-family: Raleway;
    font-size: 18px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    cursor: pointer;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 114px;
    background-color: ${(props) =>
      props.$active ? '#eef' : 'fff'};
    span {
      margin-right: 10px;
    }
    &:hover {
      background-color: #eef;
    }
  }
`;

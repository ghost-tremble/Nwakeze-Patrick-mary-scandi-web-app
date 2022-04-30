import { Component, createRef } from 'react';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { ReactComponent as LogoImage } from '../assets/headerIcons/shop-logo.svg';
import { ReactComponent as Currency } from '../assets/headerIcons/currency.svg';
import { ReactComponent as Currency2 } from '../assets/headerIcons/currency2.svg';
import { ReactComponent as CartIcon } from '../assets/headerIcons/cart.svg';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleOpenCurrecies } from '../redux/reducers/currency/currency.action';
import {
  toggleCartHidden,
  closeCartOnClickOut,
} from '../redux/reducers/cart/cart.actions';
import { selectCartItemsCount } from '../redux/reducers/cart/cart.selector';
import Cart from './cart/Cart';

class Header extends Component {
  wrapperRef = createRef(null);
  handleClickOutside = (event) => {
    if (
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(
        event.target
      )
    ) {
      this.props.closeCartOnClickOut();
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
      categories,
      location,
      cartSize,
      hidden,
    } = this.props;

    return (
      <Container>
        <div>
          <Ul>
            {categories.categories.map(
              (item, index) => {
                const isActive = location.pathname
                  .toLowerCase()
                  .includes(item.name);
                return (
                  <LI
                    to={`/${item.name}`}
                    $active={isActive}
                    key={index}>
                    <Button $active={isActive}>
                      {item.name}
                    </Button>
                  </LI>
                );
              }
            )}
          </Ul>
        </div>
        <LogoContainer>
          <IconButton>
            <LogoImage />
          </IconButton>
        </LogoContainer>

        <IconGroup>
          <IconButton
            onClick={() =>
              this.props.showCurrency()
            }>
            {hidden ? (
              <Currency />
            ) : (
              <Currency2 />
            )}
          </IconButton>
          <div ref={this.wrapperRef}>
            <IconButton
              className="cartIcon"
              onClick={(e) => {
                this.props.showCart();
              }}>
              <CartIcon />
              {cartSize.number > 0 && (
                <ItemCount>
                  {cartSize.number}
                </ItemCount>
              )}
            </IconButton>
            <Cart />
          </div>
        </IconGroup>
      </Container>
    );
  }
}
const MapStateToProps = (state) => {
  return {
    categories: state.inventory.categories,
    hidden: state.currency.hidden,
    currentCurrency:
      state.currency.currentCurrency,
    cartSize: createStructuredSelector({
      number: selectCartItemsCount,
    })(state),
  };
};
const MapDispatchToProps = (dispatch) => {
  return {
    showCurrency: () =>
      dispatch(toggleOpenCurrecies()),
    showCart: () => dispatch(toggleCartHidden()),
    closeCartOnClickOut: () =>
      dispatch(closeCartOnClickOut()),
  };
};
export default withRouter(
  connect(
    MapStateToProps,
    MapDispatchToProps
  )(Header)
);

const Container = styled.div`
  display: flex;
  background-color: #ffffff;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 28px 117px 32px 119px;
`;
const Ul = styled.ul`
  list-style: none;
  display: flex;
`;
const LI = styled(Link)`
  text-decoration: none;
`;
const Button = styled.button`background:transparent; outline:none;border:none;
 border 1px solid transparent;
 padding:32px;
 cursor:pointer;
 margin-right:10px;
 font-family: 'Raleway';
font-style: normal;
font-weight: ${(props) =>
  props.$active
    ? props.theme.semiBold
    : props.theme.regular};
font-size: 16px;
line-height: 120%;
/* identical to box height, or 19px */

display: flex;
align-items: center;
text-align: center;
text-transform: uppercase;
flex: none;
order: 0;
flex-grow: 0;
margin: 30px 0px;

    
 border-bottom : 2px solid ${(props) =>
   props.$active
     ? props.theme.primary
     : 'transparent'};

color : ${(props) =>
  props.$active
    ? props.theme.primary
    : props.theme.secondary} ;
 &:hover {
     cursor:pointer;
       border-bottom : 2px solid ${(props) =>
         props.active
           ? props.theme.primary
           : props.theme.primary};
    color :${(props) =>
      props.active
        ? props.theme.primary
        : props.theme.primary};
 }
`;

const IconGroup = styled.div`
  display: flex;
  align-items: center;
`;
const IconButton = styled.div`
  padding: 0px 10px 0px 10px;
  cursor: pointer;
  display: flex;

  width: max-content;
  justify-content: center;
  align-items: center;
`;

const ItemCount = styled.div`
  position: absolute;
  right: 112.5px;
  top: 31.25%;
  bottom: 43.75%;
  width: 20px;
  height: 20px;
  background: #1d1f22;
  border-radius: 60px;
  font-family: 'Roboto';
  font-style: normal;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
`;

const LogoContainer = styled.div`
  flex: 0.5;
  text-align: 'center';
`;

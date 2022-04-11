import { Component } from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoImage } from '../assets/headerIcons/shop-logo.svg';
import { ReactComponent as Currency } from '../assets/headerIcons/currency.svg';
import { ReactComponent as CartIcon } from '../assets/headerIcons/cart.svg';
class Header extends Component {
  render() {
    return (
      <Container>
        <div>
          <Ul>
            <LI active={true}>
              <Button active={true}>WOMEN</Button>
            </LI>
            <LI>
              <Button>MEN</Button>
            </LI>
            <LI>
              <Button>KIDS</Button>
            </LI>
          </Ul>
        </div>
        <div
          style={{
            flex: 0.5,
            textAlign: 'center',
          }}>
          <IconButton>
            <LogoImage />
          </IconButton>
        </div>
        <IconGroup>
          <IconButton>
            <Currency />
          </IconButton>
          <IconButton>
            <CartIcon />
            <ItemCount>3</ItemCount>
          </IconButton>
        </IconGroup>
      </Container>
    );
  }
}
export default Header;

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
const LI = styled.li``;
const Button = styled.button`background:transparent; outline:none;border:none;
 border 1px solid transparent;
 padding:32px;
 cursor:pointer;
 margin-right:10px;
 font-family: 'Raleway';
font-style: normal;
font-weight: ${(props) =>
  props.active
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
   props.active
     ? props.theme.primary
     : 'transparent'};

color : ${(props) =>
  props.active
    ? props.theme.primary
    : props.theme.secondary} ;
 &:hover {
     cursor:pointer;
       border-bottom : 1px solid ${(props) =>
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

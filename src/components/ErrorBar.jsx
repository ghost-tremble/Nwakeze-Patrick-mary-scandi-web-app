import { Component } from 'react';
import styled from 'styled-components';
class ErrorBar extends Component {
  render() {
    const { errorString } = this.props;
    return (
      <Container>
        <h3>{errorString}</h3>
      </Container>
    );
  }
}
export default ErrorBar;

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  display: flex;
  top: 82px;
  align-items: center;
  justify-content: center;
  background-color: red;

  h3 {
    font-family: Raleway;
    font-size: 24px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0em;
    color: #fff;
  }
`;

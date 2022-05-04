import { Component, createRef } from 'react';
import styled from 'styled-components';
class ErrorBar extends Component {
  errorBar = createRef(null);
  hide = () => {
    this.errorBar.current.style.display = 'none';
  };
  showBar = () => {
    this.errorBar.current.style.display = 'flex';
    this.timeOut = setTimeout(() => {
      this.hide();
    }, 2000);
  };
  timeOut;
  componentDidMount() {
    this.showBar();
  }
  componentWillUnmount() {
    clearTimeout(this.timeOut);
  }
  render() {
    const { errorString } = this.props;
    return (
      <Container ref={this.errorBar}>
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
  display: none;
  top: 82px;
  left: 0;
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

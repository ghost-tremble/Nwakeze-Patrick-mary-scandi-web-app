import styled from 'styled-components';
export const Div = styled.div`
  border: ${(props) =>
    props.$highlight
      ? '1px solid #5ECE7B'
      : '1px solid transparent'};
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || '36px'};
  height: ${(props) => props.height || '36px'};
`;

export const Box = styled.div`
  border: ${(props) =>
    props.border || '1px solid'};
  height: ${(props) => props.height || '45px'};
  padding: ${(props) => props.padding};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || '63px'};
  margin-right: ${(props) =>
    props.marginRight || '10px'};
  font-family: 'Source Sans Pro', sans-serif;
  min-width: ${(props) => props.minWidth};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 112%;
  letter-spacing: 0.05em;
  cursor: pointer;
  font-size: ${(props) =>
    props.fontSize || '16px'};
  color: ${(props) =>
    props.$selected ? '#FFFFFF' : '#000000'};
  background: ${(props) =>
    props.$selected
      ? '#000000'
      : props.background};
`;

export const Attributes = styled.div`
  flex-direction: column;
  h3 {
    font-family: Raleway;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
    margin-bottom: 8px;
  }
  .attribute-selection {
    display: flex;
    margin-bottom: 8px;
    flex-direction: column;
  }
  .box-container {
    display: flex;
    flex-direction: row;
  }
`;

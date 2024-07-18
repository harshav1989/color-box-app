import styled from 'styled-components';

export const BoxContainer = styled.div`
  width: 100px;
  height: 100px;
  margin: 5px;
  display: inline-block;
  cursor: pointer;
  border: 1px solid #ccc;
  &:focus {
    outline: none;
    border-color: #000;
  }
`;

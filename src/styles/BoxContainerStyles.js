import styled from 'styled-components';

export const BoxContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export const BoxStyled = styled.div`
  width: 100px;
  height: 100px;
  border: 2px solid black; /* Black and bold border */
  cursor: pointer;
  &:focus {
    outline: none;
    border-color: #000;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 2em;
  text-transform: uppercase;
  margin-bottom: 20px;
`;
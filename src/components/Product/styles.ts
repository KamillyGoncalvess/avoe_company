import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 1rem 11.5rem;
  gap: 10px;
  border-radius: 20px;
  background: var(--background);
  box-shadow: 0px 0px 60px #bebebe;
`

export const Title = styled.h1`
  font-weight: bold;
  display: flex;
  justify-content: center;
`

export const Products = styled.div`
  display: flex;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  svg {
    font-size: 3rem; 
  }
`

export const StepText = styled.div`
  margin-left: 10px;
`;

export const StepContainer = styled.div`
  display: flex;
  margin: 10px 50px;
  align-items: center;
  text-align: justify;
`;
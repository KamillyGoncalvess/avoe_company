import styled from "styled-components";

export const Container = styled.header`
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }
`

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px; 
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--background); 
  padding: 10px 20px;

  img {
    height: 100%;
    width: auto;
  }

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
  }
`

export const Button = styled.button`
  border-radius: 20px;
  background-color: var(--orange);
  color: var(--white);
  border: none;
  padding: 10px;
  font-size: 0.9rem;
  margin: 10px;
`

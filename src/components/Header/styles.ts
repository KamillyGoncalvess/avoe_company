import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
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
  z-index: 10; 

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

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 20px;
  
  img {
    width: 100%;
    height: auto;
  }
`

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 99.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`

export const OverlayText = styled.p`
  color: white;
  font-size: 1.5em;
  text-align: center;
  margin: 0 20px;

    @media (max-width: 430px) {
    font-size: 87.5%;
  }
`

export const OverlayTitle = styled.p`
  color: white;
  font-size: 2.5em;
  font-weight: bold;
  text-align: center;
  margin: 0 20px;
`

export const OverlayButton = styled(Button)`
  margin-top: 10px;
  background-color: var(--purple);
  font-size: 1em;
`

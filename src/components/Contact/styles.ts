import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  background-color: #a8a8a8;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 20px;
  width: 100%;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`

export const LogoAvoe = styled.img`
  width: 8rem;
  height: auto;
  display: flex;
  margin-bottom: 5px;
  align-items: center;
`

export const Card = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 10px;
`;

export const SocialContainer = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: #a8a8a8;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition-duration: .3s;

  &:active {
    transform: scale(0.9);
    transition-duration: .3s;
  }

  &:hover {
    .socialSvg {
      animation: ${keyframes`
        0% {
          transform: translateY(-50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      `} 0.3s both;
    }
  }
`;

export const InstagramContainer = styled(SocialContainer)`
  &:hover {
    background-color: #d62976;
    transition-duration: .3s;
  }
`;

export const WhatsappContainer = styled(SocialContainer)`
  &:hover {
    background-color: #128C7E;
    transition-duration: .3s;
  }
`;

export const SocialSvg = styled.svg`
  width: 30px;

  path {
    fill: rgb(255, 255, 255);
  }
`;
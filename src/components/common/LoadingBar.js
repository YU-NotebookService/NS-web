import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

export const LoadingBar = styled.div`
  width: 50%;
  height: 4px;
  background-color: #e0e0e0;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background-color: var(--main-color);
    animation: ${loadingAnimation} 0.6s ease-in-out infinite;
  }
`;

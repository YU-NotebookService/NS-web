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
  width: 50%; /* 로딩 바의 너비를 50%로 설정하여 중앙에 위치하도록 */
  height: 4px;
  background-color: #e0e0e0;
  position: fixed; /* 화면 중앙에 고정 */
  top: 50%;
  left: 50%;
  transform: translate(
    -50%,
    -50%
  ); /* 화면 정중앙에 위치시키기 위한 transform */
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

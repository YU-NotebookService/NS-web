import React from 'react';
import { ErrorDescription, ErrorText, ErrorWrapper } from 'styles/Error-styled';

const Error = () => {
  return (
    <ErrorWrapper>
      <ErrorText>ERROR 404</ErrorText>
      <ErrorDescription>페이지를 찾을 수 없습니다.</ErrorDescription>
    </ErrorWrapper>
  );
};

export default Error;

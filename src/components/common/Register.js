import React from 'react';
import {
  InputTitle,
  InputWrapper,
  RegisterWrapper,
} from 'styles/common/Register-styled';
import Button from './Button';
import Input from './Input';

const Register = () => {
  return (
    <RegisterWrapper>
      <InputWrapper>
        <InputTitle>
          제목<span style={{ color: 'var(--gray-color)' }}>(30자 이하)</span>
        </InputTitle>
        <Input placeholder="제목을 입력해 주세요." style={{ width: '100%' }} />
      </InputWrapper>
      <InputWrapper>
        <InputTitle>
          OS<span style={{ color: 'var(--gray-color)' }}>(30자 이하)</span>
        </InputTitle>
        <Input placeholder="OS를 입력해 주세요." style={{ width: '100%' }} />
      </InputWrapper>
      <InputWrapper>
        <InputTitle>
          내용<span style={{ color: 'var(--gray-color)' }}>(500자 이하)</span>
        </InputTitle>
        <Input placeholder="내용을 입력해 주세요." style={{ width: '100%' }} />
      </InputWrapper>
      <InputWrapper>
        <InputTitle>사진 첨부</InputTitle>
        <Input placeholder="사진을 선택해주세요." style={{ width: '100%' }} />
      </InputWrapper>
      <Button style={{ width: '200px', margin: 'auto' }}>등록하기</Button>
    </RegisterWrapper>
  );
};

export default Register;

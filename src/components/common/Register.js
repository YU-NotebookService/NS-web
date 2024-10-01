import React from 'react';
import {
  ContentInput,
  ContentInputTitle,
  ContentInputWrapper,
  Count,
  Error,
  ErrorWrapper,
  FormWrapper,
  InputTitle,
  InputWrapper,
  PicBtn,
  PicTitle,
  PicWrapper,
  PostInput,
  RegBtn,
  RegisterWrapper,
} from 'styles/common/Register-styled';
import { useForm } from 'react-hook-form';

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const title = watch('title', '');
  const os = watch('os', '');
  const content = watch('content', '');

  const onSubmit = (data) => {
    console.log('제출된 데이터: ', data);
  };

  return (
    <RegisterWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormWrapper>
        <InputWrapper>
          <InputTitle>
            제목<span style={{ color: 'var(--gray-color)' }}>(30자 이하)</span>
          </InputTitle>
          <ErrorWrapper>
            <Count isError={!!errors.title}>{title.length}/30</Count>
            <PostInput
              placeholder="제목을 입력해 주세요."
              isError={!!errors.title}
              {...register('title', {
                required: '제목은 필수 항목입니다.',
                maxLength: {
                  value: 30,
                  message: '제목은 30자 이하로 입력해주세요.',
                },
              })}
            />
            {errors.title && <Error>{errors.title.message}</Error>}
          </ErrorWrapper>
        </InputWrapper>

        {/* 현재 URL 에 'notebook'이 포함될 시에만 출력 */}
        {window.location.pathname.includes('notebook') && (
          <InputWrapper>
            <InputTitle>
              OS<span style={{ color: 'var(--gray-color)' }}>(30자 이하)</span>
            </InputTitle>
            <ErrorWrapper>
              <Count isError={!!errors.os}>{os.length}/30</Count>
              <PostInput
                placeholder="운영체제를 입력해 주세요."
                isError={!!errors.os}
                {...register('os', {
                  required: '운영체제는 필수 항목입니다.',
                  maxLength: {
                    value: 30,
                    message: '운영체제는 30자 이하로 입력해주세요.',
                  },
                })}
              />
              {errors.os && <Error>{errors.os.message}</Error>}
            </ErrorWrapper>
          </InputWrapper>
        )}
        <ContentInputWrapper>
          <ContentInputTitle>
            내용<span style={{ color: 'var(--gray-color)' }}>(500자 이하)</span>
          </ContentInputTitle>
          <ErrorWrapper>
            <Count isError={!!errors.content}>{content.length}/500</Count>
            <ContentInput
              placeholder="내용을 입력해 주세요."
              isError={!!errors.content}
              {...register('content', {
                required: '내용은 필수 항목입니다.',
                maxLength: {
                  value: 500,
                  message: '내용은 500자 이하로 입력해주세요.',
                },
              })}
            />
            {errors.content && <Error>{errors.content.message}</Error>}
          </ErrorWrapper>
        </ContentInputWrapper>
        <InputWrapper>
          <PicTitle>사진 첨부</PicTitle>
          <PicWrapper>
            <PostInput placeholder="사진을 선택해주세요." />
            <PicBtn>찾아보기</PicBtn>
          </PicWrapper>
        </InputWrapper>
      </FormWrapper>
      <RegBtn>등록하기</RegBtn>
    </RegisterWrapper>
  );
};

export default Register;

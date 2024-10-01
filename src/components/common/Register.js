import React, { useState } from 'react';
import {
  ContentInput,
  ContentInputTitle,
  ContentInputWrapper,
  Count,
  DeleteBtn,
  DeleteWrapper,
  Error,
  ErrorWrapper,
  FileWrapper,
  FormWrapper,
  InputTitle,
  InputWrapper,
  PicBtn,
  PicInput,
  PicNotice,
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

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleDeleteFile = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleFileClick = () => {
    document.getElementById('fileInput').click();
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
            {selectedFiles.length === 0 && (
              <PicNotice>파일을 선택해주세요.</PicNotice>
            )}
            <FileWrapper>
              {selectedFiles.map((file, index) => (
                <DeleteWrapper>
                  <PostInput
                    key={index}
                    value={file.name} // 파일 이름 출력
                    readOnly
                  />
                  <DeleteBtn onClick={() => handleDeleteFile(index)}>
                    삭제
                  </DeleteBtn>
                </DeleteWrapper>
              ))}
            </FileWrapper>
            <PicInput
              id="fileInput"
              type="file"
              style={{ display: 'none' }}
              {...register('photos')} // 파일 배열 전달
              onChange={handleFileChange}
              multiple // 여러 개 파일 선택 가능
            />
            <PicBtn onClick={handleFileClick}>찾아보기</PicBtn>
          </PicWrapper>
        </InputWrapper>
      </FormWrapper>
      <RegBtn>등록하기</RegBtn>
    </RegisterWrapper>
  );
};

export default Register;

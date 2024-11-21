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

const Register = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const title = watch('title', '');
  const os = watch('os', '');
  const content = watch('content', '');

  // 파일 상태 관리
  const [selectedFiles, setSelectedFiles] = useState([]);

  // 파일 선택 처리
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  // 파일 삭제 처리
  const handleDeleteFile = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  // 파일 첨부 버튼 클릭 처리
  const handleFileClick = () => {
    document.getElementById('fileInput').click();
  };

  const onFormSubmit = (formData) => {
    const data = new FormData();

    // 노트북일 경우, 공지사항, 1:1 문의는 이 부분 별도로 구현하시면 됩니다.
    if (window.location.pathname.includes('notebook')) {
      data.append('model', formData.title);
      data.append('manufactureDate', formData.manufactureDate);
      data.append('os', formData.os);
      data.append('size', formData.size);
    }

    selectedFiles.forEach((file) => {
      data.append('image', file);
    });

    // FormData 디버깅 출력
    console.log('입력받은 FormData 내용:');
    data.forEach((value, key) => {
      console.log(`${key}:`, value);
    });

    // FormData 전달
    onSubmit(data);
  };

  return (
    <RegisterWrapper onSubmit={handleSubmit(onFormSubmit)}>
      <FormWrapper>
        <InputWrapper>
          <InputTitle>
            제목<span style={{ color: 'var(--gray-color)' }}>(30자 이하)</span>
          </InputTitle>
          <ErrorWrapper>
            <Count $isError={!!errors.title}>{title.length}/30</Count>
            <PostInput
              placeholder="제목을 입력해 주세요."
              $isError={!!errors.title}
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

        {window.location.pathname.includes('notebook') && (
          <>
            <InputWrapper>
              <InputTitle>
                OS
                <span style={{ color: 'var(--gray-color)' }}>(30자 이하)</span>
              </InputTitle>
              <ErrorWrapper>
                <Count $isError={!!errors.os}>{os.length}/30</Count>
                <PostInput
                  placeholder="운영체제를 입력해 주세요."
                  $isError={!!errors.os}
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
            <InputWrapper>
              <InputTitle style={{ paddingTop: '16px' }}>제조년월</InputTitle>
              <ErrorWrapper>
                <PostInput
                  placeholder="제조년월을 입력해 주세요. (YYYY-MM)"
                  $isError={!!errors.manufactureDate}
                  {...register('manufactureDate', {
                    required: '제조년월은 필수 항목입니다.',
                  })}
                />
                {errors.manufactureDate && (
                  <Error>{errors.manufactureDate.message}</Error>
                )}
              </ErrorWrapper>
            </InputWrapper>
            <InputWrapper>
              <InputTitle style={{ paddingTop: '16px' }}>화면 크기</InputTitle>
              <ErrorWrapper>
                <PostInput
                  placeholder="화면 크기를 입력해 주세요. ex) 17"
                  $isError={!!errors.size}
                  {...register('size', {
                    required: '화면 크기는 필수 항목입니다.',
                  })}
                />
                {errors.size && <Error>{errors.size.message}</Error>}
              </ErrorWrapper>
            </InputWrapper>
          </>
        )}
        <ContentInputWrapper>
          <ContentInputTitle>
            내용<span style={{ color: 'var(--gray-color)' }}>(500자 이하)</span>
          </ContentInputTitle>
          <ErrorWrapper>
            <Count $isError={!!errors.content}>{content.length}/500</Count>
            <ContentInput
              placeholder="내용을 입력해 주세요."
              $isError={!!errors.content}
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
                <DeleteWrapper key={index}>
                  <PostInput value={file.name} readOnly />
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
              onChange={handleFileChange}
              multiple
            />
            <PicBtn type="button" onClick={handleFileClick}>
              찾아보기
            </PicBtn>
          </PicWrapper>
        </InputWrapper>
      </FormWrapper>
      <RegBtn type="submit">등록하기</RegBtn>
    </RegisterWrapper>
  );
};

export default Register;

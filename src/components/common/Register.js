import React, { useEffect, useState } from 'react';
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
import { useLocation } from 'react-router-dom';

const Register = ({ onSubmit }) => {
  const location = useLocation();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    const data = location.state || {};

    const initialFiles = Array.isArray(data.imgUrl)
      ? data.imgUrl.map((url) => ({
          name: url.split('/').pop(),
          type: 'url',
          value: url,
        }))
      : data.imgUrl
        ? [
            {
              name: data.imgUrl.split('/').pop(),
              type: 'url',
              value: data.imgUrl,
            },
          ]
        : [];

    setSelectedFiles(initialFiles);

    setValue('title', data.model || data.title || '');
    setValue('os', data.os || '');
    setValue('manufactureDate', data.manufactureDate || '');
    setValue('size', data.size || '');
    setValue('content', data.content || '');
    setId(data.id);
  }, [location.state, setValue]);

  const title = watch('title', '');
  const os = watch('os', '');
  const content = watch('content', '');

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files).map((file) => ({
      name: file.name,
      type: 'file',
      value: file,
    }));

    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleDeleteFile = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleFileClick = () => {
    document.getElementById('fileInput').click();
  };

  const onFormSubmit = (formData) => {
    const data = new FormData();

    if (window.location.pathname.includes('notebook')) {
      data.append('model', formData.title);
      data.append('manufactureDate', formData.manufactureDate);
      data.append('os', formData.os);
      data.append('size', formData.size);
      data.append('content', formData.content);
    } else if (window.location.pathname.includes('question')) {
      data.append('title', formData.title);
      data.append('content', formData.content);
    } else if (window.location.pathname.includes('notice')) {
      data.append('title', formData.title);
      data.append('content', formData.content);
    }

    selectedFiles.forEach((file) => {
      if (file.type === 'file') {
        if (window.location.pathname.includes('notice')) {
          data.append('newImages', file.value);
        } else {
          data.append('images', file.value);
        }
      }
    });

    selectedFiles.forEach((file) => {
      if (file.type === 'url') {
        data.append('imageUrls', file.value);
      }
    });

    console.log('전송되는 FormData:');
    data.forEach((value, key) => {
      console.log(`${key}:, value`);
    });

    onSubmit(data, id);
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

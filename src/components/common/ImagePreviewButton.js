import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

export const ImagePreviewButton = () => {
  const [loadedImageSrc, setLoadedImageSrc] = useState('');
  const inputValue = useRef(null);

  const onLoadImage = (e) => {
    const file = e.target.files[0];
    if (!file.type.match('image.*')) {
      alert('이미지 파일이 아닙니다.');
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise((resolve) => {
      reader.onload = () => {
        setLoadedImageSrc(reader.result);
        resolve();
      };
    });
  };
  const onClickRemoveButton = () => {
    inputValue.current.value = '';
    setLoadedImageSrc('');
  };
  return (
    <Container>
      <ImageAttachButton htmlFor="img">+ 이미지 첨부</ImageAttachButton>
      <Input ref={inputValue} type="file" id="img" onChange={onLoadImage} />
      {loadedImageSrc && (
        <>
          <ImagePreview src={loadedImageSrc} alt="preview" />
          <RemoveButton onClick={onClickRemoveButton}>X</RemoveButton>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 250px;
  display: flex;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.lightPurple};
`;

const ImageAttachButton = styled.label`
  padding: 10px 0;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid ${theme.colors.mainColor};
  width: 150px;
  color: transparent;
  text-shadow: 0 0 0 black;
  text-align: center;
`;

const Input = styled.input`
  display: none;
`;

const ImagePreview = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 100;
`;

const RemoveButton = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid ${theme.colors.mainColor};
  color: transparent;
  text-shadow: 0 0 0 black;
  z-index: 1000;
  position: absolute;
  top: 10px;
  right: 10px;
`;

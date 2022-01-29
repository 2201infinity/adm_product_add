import { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import theme from "styles/theme";

export const ImageNameButton = ({
  inputId,
  isMultiple,
  onChangeProductImage,
}) => {
  const [imageFileNames, setImageFileNames] = useState([]);
  const [isAttached, setIsAttached] = useState(false);
  const [isShow, setIsShow] = useState(true);
  const inputValue = useRef(null);

  const onLoadImage = useCallback(
    (e) => {
      const attachedImageFileName = e.target.files[0].name;
      setIsAttached(true);
      setIsShow(true);
      if (isMultiple) {
        setImageFileNames([...imageFileNames, attachedImageFileName]);
        onChangeProductImage([...imageFileNames, attachedImageFileName]);
      } else {
        setImageFileNames(attachedImageFileName);
        onChangeProductImage(attachedImageFileName);
      }
    },
    [imageFileNames, isMultiple, onChangeProductImage]
  );

  const onClickRemoveButton = (e) => {
    inputValue.current.value = "";
    setIsShow(false);
    if (isMultiple) {
      setImageFileNames(
        imageFileNames.filter((name) => name !== e.target.value)
      );
      onChangeProductImage(
        imageFileNames.filter((name) => name !== e.target.value)
      );
    }
  };

  // useEffect(() => {
  //   console.log(imageFileNames);
  // }, [imageFileNames]);

  return (
    <Container>
      <ImageAttachButton htmlFor={inputId}>+ 이미지 첨부</ImageAttachButton>
      <Input
        ref={inputValue}
        type="file"
        id={inputId}
        onChange={onLoadImage}
        multiple={isMultiple}
      />
      {isAttached && (
        <ImageFileNameContainer>
          {isMultiple ? (
            imageFileNames.map((e, index) => (
              <div key={`${e}_${index}`}>
                <FileName>{e}</FileName>
                <RemoveButton onClick={onClickRemoveButton} value={e}>
                  X
                </RemoveButton>
              </div>
            ))
          ) : (
            // {isShow}
            <div>
              {isShow && (
                <>
                  <FileName>{imageFileNames}</FileName>
                  <RemoveButton
                    value={imageFileNames}
                    onClick={onClickRemoveButton}
                  >
                    X
                  </RemoveButton>
                </>
              )}
            </div>
          )}
        </ImageFileNameContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: flex-start;
`;

const ImageAttachButton = styled.label`
  padding: 10px 0;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid ${theme.colors.mainColor};
  width: 150px;
  color: transparent;
  text-shadow: 0 0 0 black;
  text-align: center;
  margin 8px 0;
`;

const Input = styled.input`
  display: none;
`;

const RemoveButton = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid ${theme.colors.mainColor};
  color: transparent;
  text-shadow: 0 0 0 black;
`;

const FileName = styled.span`
  margin: 15px 20px;
  color: transparent;
  text-shadow: 0 0 0 black;
  display: inline-block;
`;

const ImageFileNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

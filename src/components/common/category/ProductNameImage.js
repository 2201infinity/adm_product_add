import { useState } from "react";
import styled from "styled-components";
import Input from "components/common/Input";
import { ImageNameButton } from "components/common/ImageNameButton";

function ProductNameImage() {
  const [productName, setProductName] = useState("");
  return (
    <>
      <InputBox>
        <label>상품명</label>
        <Input width="600" placeholder="상품명을 입력해 주세요." />
        <span>{"{ 상품코드 }"}</span>
      </InputBox>
      <InputBox>
        <label>상품 구성 소개 정보</label>
        <Input width="600" placeholder="상품 구성 소개 정보를 입력해 주세요." />
      </InputBox>
      <ImageBox>
        <span>상품 썸네일</span>
        <ImageNameButton isMultiple={false} inputId="thumbnailImg" />
      </ImageBox>
      <ImageBox>
        <span>상품 대표 이미지</span>
        <ImageNameButton isMultiple={true} inputId="representImg" />
      </ImageBox>
      <TextBox>
        <span>상품 총 재고</span>
        <span> 41 개</span>
      </TextBox>
    </>
  );
}

export default ProductNameImage;

const InputBox = styled.div`
  margin: 10px;
  width: 100;
`;
const ImageBox = styled.div`
  margin: 10px;
  width: 100;
  display: flex;
`;
const TextBox = styled.div`
  margin: 10px;
  width: 100;
`;

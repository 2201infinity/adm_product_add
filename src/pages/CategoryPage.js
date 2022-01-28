import styled from "styled-components";
import Input from "components/common/Input";
import Category from "components/common/Category";
import { ImageNameButton } from "components/common/ImageNameButton";
import { ImagePreviewButton } from "components/common/ImagePreviewButton";

function CategoryPage() {
  return (
    <>
      <Category />

      <InputBox>
        <Input placeholder="상품명을 입력해 주세요." />
        <span>{"{ 상품코드 }"}</span>
      </InputBox>
      <InputBox>
        <Input placeholder="상품 구성 소개 정보를 입력해 주세요." />
      </InputBox>
      <ImageBox>
        <span>상품 썸네일</span>
        <ImageNameButton isMultiple={false} />
      </ImageBox>
      <ImageBox>
        <span>상품 대표 이미지</span>
        <ImageNameButton isMultiple={true} />
        {/* <ImagePreviewButton /> */}
      </ImageBox>
      <TextBox>
        <span>상품 총 재고</span>
        <span>{"{ NN 개 }"}</span>
      </TextBox>
    </>
  );
}

export default CategoryPage;

const InputBox = styled.div`
  margin: 10px;
`;
const ImageBox = styled.div`
  margin: 10px;
`;
const TextBox = styled.div`
  margin: 10px;
`;

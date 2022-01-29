/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "components/common/Input";
import { ImageNameButton } from "components/common/ImageNameButton";
import theme from "styles/theme";
import { useSetRecoilState } from "recoil";
import { productRequiredInfoState } from "atoms/productRequiredInfo";

function ProductNameImage() {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [thumbnailImage, setThumbnailImage] = useState([]);
  const [mainImages, setMainImages] = useState([]);
  const setProductRequried = useSetRecoilState(productRequiredInfoState);

  const onChangeThumbImage = (imgArr) => setThumbnailImage(imgArr);
  const onChangeMainImage = (imgArr) => setMainImages(imgArr);

  useEffect(() => {
    if (name.length === 0 || info.length === 0) {
      setProductRequried((prev) => ({ ...prev, productInfo: false }));
    } else {
      setProductRequried((prev) => ({ ...prev, productInfo: true }));
    }
  }, [info, name, setProductRequried]);

  return (
    <>
      <InputBox>
        <ProductNameBox>
          <LabelInputBlock>
            <Label>상품명*</Label>
            <Input
              onChange={(e) => setName(e.target.value)}
              width="600"
              placeholder="상품명을 입력해 주세요."
            />
          </LabelInputBlock>
          <LabelInputBlock>
            <Label>상품코드*</Label>
            <span>1904858</span>
          </LabelInputBlock>
        </ProductNameBox>
      </InputBox>
      <LabelInputBlock>
        <Label>상품 구성 소개 정보*</Label>
        <Input
          onChange={(e) => setInfo(e.target.value)}
          width="600"
          placeholder="상품 구성 소개 정보를 입력해 주세요."
        />
      </LabelInputBlock>
      <LabelInputBlock>
        <Label>상품 썸네일</Label>
        <ImageNameButton
          isMultiple={false}
          inputId="thumbnailImg"
          onChangeProductImage={onChangeThumbImage}
        />
      </LabelInputBlock>
      <LabelInputBlock>
        <Label>상품 대표 이미지</Label>
        <ImageNameButton
          isMultiple={true}
          inputId="representImg"
          onChangeProductImage={onChangeMainImage}
        />
      </LabelInputBlock>
      <LabelInputBlock>
        <Label>상품 총 재고</Label>
        <span> 41 개</span>
      </LabelInputBlock>
    </>
  );
}

export default ProductNameImage;

const LabelInputBlock = styled.div`
  display: flex;
  align-items: center;
  min-height: 80px;
  border-bottom: 1px solid ${theme.colors.border1};
`;

const ProductNameBox = styled.div`
  display: flex;
`;

const Label = styled.div`
  height: 100%;
  width: 130px;
  display: flex;
  align-items: center;
  padding: 0px 8px;
  background-color: ${theme.colors.lightGray};
`;

const InputBox = styled.div`
  width: 100;
`;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ImageNameButton } from "components/common/ImageNameButton";
import theme from "styles/theme";
import { productRegisterFormState } from "atoms/productRegisterForm";
import { useSetRecoilState } from "recoil";

function ProductImage() {
  const [productIntroductionImg, setProductIntroductionImg] = useState([]);
  const [recommendationImg, setRecommendationImg] = useState([]);
  const setProductForm = useSetRecoilState(productRegisterFormState);

  const onChangeProductIntroductionImg = (imgArr) =>
    setProductIntroductionImg(imgArr);
  const onChangeRecommendationImg = (imgArr) => setRecommendationImg(imgArr);

  useEffect(() => {
    setProductForm((prev) => ({
      ...prev,
      상품소개이미지: productIntroductionImg,
      구매자추천이미지: recommendationImg,
    }));
  }, [productIntroductionImg, recommendationImg, setProductForm]);

  return (
    <>
      <ImageBox>
        <ImageBoxHeader>
          <p>상품 소개 이미지</p>
        </ImageBoxHeader>
        <ImageNameButton
          isMultiple={true}
          inputId={"represent" + 1}
          onChangeProductImage={onChangeProductIntroductionImg}
        />
      </ImageBox>
      <ImageBox>
        <ImageBoxHeader>
          <p>구매자 추천 이미지</p>
        </ImageBoxHeader>
        <ImageNameButton
          isMultiple={true}
          inputId={"represent" + 2}
          onChangeProductImage={onChangeRecommendationImg}
        />
      </ImageBox>
    </>
  );
}

export default ProductImage;

const ImageBox = styled.div`
  border: 1px solid ${theme.colors.border1};
  margin: 5px;
`;
const ImageBoxHeader = styled.div`
  height: 100px;
`;

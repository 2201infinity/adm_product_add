import React from "react";
import styled from "styled-components";
import { ImageNameButton } from "components/common/ImageNameButton";

function ProductImage({ header, id }) {
  return (
    <>
      <ImageBox>
        <ImageBoxHeader>
          <p>{header}</p>
        </ImageBoxHeader>
        <ImageNameButton isMultiple={true} inputId={"represent" + id} />
      </ImageBox>
    </>
  );
}

export default ProductImage;

const ImageBox = styled.div`
  border: 1px solid gray;
  margin: 5px;
`;
const ImageBoxHeader = styled.div`
  height: 100px;
`;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "components/common/Input";
import Button from "./common/Button";
import useForm from "hooks/useForm";

const noticeDocs = [
  {
    id: 1,
    title: "제품명 / 중량",
    category: "productName",
    placeholder: "제품명 / 중량을 입력해주세요.",
  },
  {
    id: 2,
    title: "원산지 / 원재료 함량",
    category: "origin",
    placeholder: "원산지 / 원재 함량을 입력해주세요.",
  },
  {
    id: 3,
    title: "등급",
    category: "grade",
    placeholder: "등급(근내지방도 수치)를 입력해주세요.",
  },
  {
    id: 4,
    title: "보관",
    category: "storage",
    placeholder: "보관 방식을 입력해주세요.",
  },
  {
    id: 5,
    title: "식품 유형",
    category: "foodType",
    placeholder: "식품 유형을 입력해주세요. (ex) 포장육",
  },
];

function ProductInfo() {
  const { values, handleChange, handleSubmit } = useForm({
    initialValues: {
      productName: "",
      origin: "",
      grade: "",
      storage: "",
      foodType: "",
    },
  });

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <div>
      <h1> 정보고시</h1>
      <form className="forms" onSubmit={handleSubmit}>
        {noticeDocs.map((notice) => {
          const { id, title, category, placeholder } = notice;
          return (
            <NoticeFormWrapper key={id}>
              <p>{title}</p>
              <Input
                onChange={handleChange}
                name={category}
                width="300"
                placeholder={placeholder}
              />
            </NoticeFormWrapper>
          );
        })}
      </form>
    </div>
  );
}

export default ProductInfo;

const NoticeFormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 550px;
  margin-bottom: 10px;

  p {
    font-size: 14px;
  }
`;

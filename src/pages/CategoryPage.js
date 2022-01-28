import { useState } from "react";
import Input from "components/common/Input";
import styled from "styled-components";

function CategoryPage() {
  const [choice, setChoice] = useState([]);
  const data = [
    "category0",
    "category1",
    "category2",
    "category3",
    "category4",
    "category5",
    "category6",
    "category7",
    "category8",
    "category9",
    "category10",
  ];
  const onChange = (e) => {
    const category = { index: e.target.id, name: data[e.target.id] };
    setChoice([...choice, category]);
  };

  return (
    <Box>
      <CategoryList>
        {data.map((item, index) => (
          <CategoryItem key={index}>
            <Input
              onChange={onChange}
              height="10"
              type="checkbox"
              id={index}
            ></Input>
            {item}
          </CategoryItem>
        ))}
      </CategoryList>
      <ChoicedCategoryList>
        {choice.map((item) => (
          <ChoicedCategory key={item.index}>{item.name}</ChoicedCategory>
        ))}
      </ChoicedCategoryList>
    </Box>
  );
}
const Box = styled.div`
  display: flex;
`;

const CategoryList = styled.div`
  border: 2px solid red;
  width: 200px;
  background-color: #f5d682;
`;
const CategoryItem = styled.div`
  border: 2px solid green;
`;
const ChoicedCategoryList = styled.div`
  border: 2px solid blue;
  width: 200px;
  background-color: #f5d682;
`;
const ChoicedCategory = styled.div`
  border: 2px solid purple;
`;

export default CategoryPage;

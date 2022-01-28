import React, { useState } from "react";
import Input from "components/common/Input";
import styled from "styled-components";
import Button from "components/common/Button";

const data = [
  { id: "0", name: "category0", checked: false },
  { id: "1", name: "category1", checked: false },
  { id: "2", name: "category2", checked: false },
  { id: "3", name: "category3", checked: false },
  { id: "4", name: "category4", checked: false },
  { id: "5", name: "category5", checked: false },
  { id: "6", name: "category6", checked: false },
  { id: "7", name: "category7", checked: false },
  { id: "8", name: "category8", checked: false },
  { id: "9", name: "category9", checked: false },
  { id: "10", name: "category10", checked: false },
];

function CategoryPage() {
  const [categoryList, setCategoryList] = useState(data);

  const onToggleChecked = (id) => {
    setCategoryList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const onChange = (id) => onToggleChecked(id);
  const onDelete = (clickedId) => onToggleChecked(clickedId);

  return (
    <Box>
      <CategoryList>
        {categoryList.map((item) => (
          <CategoryItem key={`category_list${item.id}`}>
            <Input
              onChange={() => onChange(item.id)}
              height="10"
              type="checkbox"
              value={item.name}
              checked={item.checked}
            ></Input>
            {item.name}
          </CategoryItem>
        ))}
      </CategoryList>
      <ChoicedCategoryList>
        {categoryList.map((item) => (
          <React.Fragment key={`selected_category_list${item.id}`}>
            {item.checked && (
              <ChoicedCategory>
                {item.name}
                <Button size="sm" onClick={() => onDelete(item.id)}>
                  x
                </Button>
              </ChoicedCategory>
            )}
          </React.Fragment>
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

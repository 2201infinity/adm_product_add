import React, { useEffect, useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import Input from "components/common/Input";
import Button from "components/common/Button";

const tags = [
  { id: "0", name: "베스트", checked: false },
  { id: "1", name: "베나라", checked: false },
  { id: "2", name: "베베", checked: false },
  { id: "3", name: "한우", checked: false },
  { id: "4", name: "tag4", checked: false },
  { id: "5", name: "tag5", checked: false },
  { id: "6", name: "tag6", checked: false },
  { id: "7", name: "tag7", checked: false },
  { id: "8", name: "tag8", checked: false },
  { id: "9", name: "tag9", checked: false },
  { id: "10", name: "tag10", checked: false },
];

function FilterTag() {
  const [tagList, setTagList] = useState(tags);
  const [focusOn, setFocusOn] = useState(false);
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const divRef = useRef();
  const onToggleChecked = (id) => {
    setTagList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
    setQuery("");
  };

  const onClick = (id) => {
    onToggleChecked(id);
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    filterItems(tags, query);
  }, [query]);

  const filterItems = (items, query) => {
    query = query.toLowerCase();
    setSearchResult(
      items.filter((item) =>
        item.name
          .split(" ")
          .some((word) => word.toLowerCase().startsWith(query))
      )
    );
  };

  useEffect(() => {
    function hco(e) {
      if (divRef.current && !divRef.current.contains(e.target)) {
        console.log("나갔다");
        setFocusOn(false);
      }
    }
    document.addEventListener("mousedown", hco);
    return () => {
      document.removeEventListener("mousedown", hco);
    };
  }, [divRef]);

  return (
    <>
      <FilterBox>
        <div ref={divRef}>
          <span>필터 태그</span>
          <Input
            type="text"
            value={query}
            onChange={onChange}
            onFocus={() => setFocusOn(true)}
            placeholder="검색어를 입력하세요."
          />

          {focusOn && <p>지정된 필터 태그</p>}
          <SelectedTagList>
            {tagList.map((item) => (
              <React.Fragment key={`tag_list${item.id}`}>
                {item.checked && (
                  <SelectedTag>
                    {item.name}
                    <Button size="xm" onClick={() => onClick(item.id)}>
                      x
                    </Button>
                  </SelectedTag>
                )}
              </React.Fragment>
            ))}
          </SelectedTagList>

          {focusOn && (
            <TagList>
              {searchResult.length !== 0 ? (
                searchResult.map((item) => (
                  <React.Fragment key={`search_tag_list${item.id}`}>
                    {!item.checked && (
                      <Tag onMouseDown={() => onClick(item.id)}>
                        {item.name}
                      </Tag>
                    )}
                  </React.Fragment>
                ))
              ) : (
                <p> 검색 결과가 존재하지 않습니다.</p>
              )}
            </TagList>
          )}
        </div>
      </FilterBox>
    </>
  );
}

export default FilterTag;

const FilterBox = styled.div`
  width: 100%;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const TagList = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  overflow-y: scroll;
  height: 100px;
`;

const Tag = styled.div`
  display: inline;
  margin: 2px;
  border: 1px solid;
  height: 30px;
  width: 60px;
  border-radius: 5px;
  cursor: pointer;
`;

const SelectedTagList = styled.div`
  display: flex;
  height: 20px;
  margin: 10px;
  width: 100%;
  z-index: 9999;
  position: relative;
`;

const SelectedTag = styled.div`
  border: 1px solid;
  border-radius: 5px;
  margin: 2px;
`;

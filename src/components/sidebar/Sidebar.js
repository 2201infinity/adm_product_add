import React from "react";
import styled from "styled-components";

// 기초 레이아웃만 잡아놨습니다!

function Sidebar() {
  return <SidebarContainer>기영님이 만들어주 시는 곳!</SidebarContainer>;
}

const SidebarContainer = styled.aside`
  background: #999;
  width: 180px;
`;

export default Sidebar;

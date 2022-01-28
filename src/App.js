import GlobalStyles from "styles/GlobalStyles";
import ProductRegisterPage from "pages/ProductRegisterPage";
import styled from "styled-components";
import Sidebar from "components/sidebar/Sidebar";

function App() {
  return (
    <AppContainter>
      <GlobalStyles />
      <AppLayout>
        <Sidebar />
        <ProductRegisterPage />
      </AppLayout>
    </AppContainter>
  );
}

const AppContainter = styled.div`
  height: 100%;
`;

const AppLayout = styled.div`
  display: flex;
  height: 100%;
`;

export default App;

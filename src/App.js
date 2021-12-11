import styled from 'styled-components';
import { colors } from './assets/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./containers/Navbar";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import PlusPlan from "./containers/PlusPlan";
import DiamondPlan from "./containers/DiamondPlan";
import Pay from "./containers/Pay";
import We from "./containers/We";

const AppWrapper = styled.div`
  position: relative;
  width: 99vw;
  min-height: 100vh;
  height: auto;
  background-color: ${colors.back}
`;

function App() {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuenta/" element={<Signin />} />
          <Route path="/plus/" element={<PlusPlan />} />
          <Route path="/diamante/" element={<DiamondPlan />} />
          <Route path="/pagar/" element={<Pay />} />
          <Route path="/nosotros/" element={<We />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;

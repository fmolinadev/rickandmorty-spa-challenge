import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage.jsx";
import Header from "./components/Header/Index.jsx";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route
          exact
          path="rickandmorty-spa-challenge"
          element={<LandingPage />}
        />
        <Route exact path="/home" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

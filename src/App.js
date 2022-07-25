import Landing from "./components/Landing";
import Error404 from "./components/Error404.jsx";
import Header from "./components/Header/Index.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;

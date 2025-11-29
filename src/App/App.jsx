import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import NotFound from "../pages/NotFound/NotFound";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;

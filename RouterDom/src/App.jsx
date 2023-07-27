import { Routes, Route } from "react-router-dom/cjs/react-router-dom.min.js";
import  Home  from "./pages/Home";
// import { Book } from "./pages/Book";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/books" element={<Book />} /> */}
      <Route />
    </Routes>
  );
}

export default App;

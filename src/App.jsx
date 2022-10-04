import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import AllTodos from "./pages/MainPage";
import NotFound from "./pages/NotFound/NotFound";
import Done from "./pages/Done";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<AllTodos />} />
        <Route exact path="/done" element={<Done />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

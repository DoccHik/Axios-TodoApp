import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import AllTodos from "./pages/MainPage";
import NotFound from "./pages/NotFound/NotFound";
import Done from "./pages/Done";
import TodoInfo from "./pages/TodoInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/task" element={<AllTodos />} />
        <Route exact path="/done" element={<Done />} />
        <Route exact path="/task/:id" element={<TodoInfo />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

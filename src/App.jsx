import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import EditNote from "./pages/EditNote";
import Form from "./components/Form";
import Note from "./pages/Note";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="/note/:id" element={<Note />} />
      <Route path="/update/:id" element={<EditNote />} />
    </Routes>
  );
}

export default App;

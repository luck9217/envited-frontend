import "./App.css";
import { Main } from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EventMenu } from "./components/EventMenu";
import CreateMenu from "./components/CreateMenu";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />}>
            {" "}
          </Route>
          <Route exact path="/create" element={<CreateMenu />}></Route>
          <Route exact path="/event" element={<EventMenu />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

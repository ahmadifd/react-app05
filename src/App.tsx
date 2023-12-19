import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      123
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </>
  );
}

export default App;

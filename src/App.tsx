import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./Pages/Home";
function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

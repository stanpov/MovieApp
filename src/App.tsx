import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./Pages/Home";
import MovieInfo from "./Pages/MovieInfo";
function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieInfo />} />
      </Route>
    </Routes>
  );
}

export default App;

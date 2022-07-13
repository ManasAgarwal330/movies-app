import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Favourites from "./components/Favourites";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/index"
            exact
            element={
              <>
                <Navbar />
                <Banner />
                <Movies />
              </>
            }
          />
          <Route
            path="/favourites"
            exact
            element={
              <>
                <Navbar />
                <Favourites />
              </>
            }
          />
          <Route path="/" exact element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

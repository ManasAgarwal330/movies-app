import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Favourites from "./components/Favourites";
// import Favourites from "./components/Favourites";
function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <Banner />
                <Movies />
              </>
            }
          />
          <Route path="/favourites" exact element={<Favourites />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import react, { Component } from "react";
import {Link} from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          marginTop: "1rem",
          marginLeft: "1rem",
          alignItems: "center",
          color: "darkblue",
          width: "100vw",
          justifyContent: "space-around",
          marginBottom:"2rem"
        }}
      >
        <Link to="/index">
        <button type="button" class="btn btn-primary" style={{height:"4rem",width:"8rem"}}>Movies</button>
        </Link>
        <Link to="/favourites">
        <button type="button" class="btn btn-primary" style={{height:"4rem",width:"8rem",marginRight:"4rem"}}>Favourites</button>
        </Link>
      </div>
    );
  }
}

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Navigation from "./components/Navigation";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import SearchProducts from "./pages/SearchProducts";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" Component={Home} />

          <Route path="/cart" Component={Cart} />
          <Route path="/product/:id" Component={SingleProduct} />
          <Route path="/search/:name" Component={SearchProducts} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

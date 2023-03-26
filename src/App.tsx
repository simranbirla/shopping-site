import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" Component={Home} />

          <Route path="/cart" element={<div>Cart</div>} />
          <Route path="/product/:id" Component={SingleProduct} />
          <Route path="/search/:name" element={<div>Search Products</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

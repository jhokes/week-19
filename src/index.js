import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./Pages/HomePage.js";
import ContactPage from "./Pages/ContactPage";
import ProductsPage from "./Pages/ProductsPage.js";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import Footer from "./Components/Footer.js";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/" exact component={HomePage} />
          <Route path="/Products" exact component={ProductsPage} />
          <Route path="/Contact" exact component={ContactPage} />
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);



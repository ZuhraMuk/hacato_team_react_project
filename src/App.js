import React from "react";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import ProductCard from "./Components/Products/ProductCard/ProductCard";
import ProductDetails from "./Components/Products/ProductDetails/ProductDetails";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <>
      <NavBar />
      <MainRoutes />
      {/* <ProductCard /> */}
      <ProductDetails />
      <Footer />
    </>
  );
};

export default App;

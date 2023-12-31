import React from "react";
import PRODUCTS from "./PRODUCTS";
import FilterableProductTable from "./FilterableProductTable";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function App() {
  <FilterableProductTable />,
  <ProductCategoryRow />,
  <ProductRow />,
  <ProductTable />,
  <SearchBar />
  return (
    <div>
      <FilterableProductTable products={PRODUCTS} />
      <p className="tk1">Thinking</p>
      <p className="tk2">in</p>
      <p className="tk3">React</p>
    </div>
  );
}

export default App;
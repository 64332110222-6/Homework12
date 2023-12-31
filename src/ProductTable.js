import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable({ products, filterText, inStockOnly }) {
  const { rows, lastCategory } = products.reduce(
    (acc, product) => {
      if (
        product.name.toLowerCase().indexOf(
          filterText.toLowerCase()
        ) === -1
      ) {
        return acc;
      }
      if (inStockOnly && !product.stocked) {
        return acc;
      }
      if (product.category !== acc.lastCategory) {
        acc.rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      acc.rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );
      acc.lastCategory = product.category;
      return acc;
    },
    { rows: [], lastCategory: null }
  );

  return (
    <table>
      <thead>
        <tr>
          <th className="name">Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;

import React from "react";


function ProductCategoryRow({ category }) {
    return (
      <tr>
        <th className="pro-cat-row" colSpan="2">
          {category}
        </th>
      </tr>
    );
  }

  export default ProductCategoryRow;
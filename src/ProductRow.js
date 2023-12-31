import React from "react";

function ProductRow({ product }) {
    const name = product.stocked ? product.name :
      <span style={{ color: 'red' }}>
        {product.name}
      </span>;
  
    return (
      <tr>
        <td className="pro-row">{name}</td>
        <td className="pro-row">{product.price}</td>
      </tr>
    );
  }

  export default ProductRow;
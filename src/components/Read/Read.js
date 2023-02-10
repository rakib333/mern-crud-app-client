import React, { useEffect, useState } from "react";
import { readProduct } from "../../backend-APIservices/crudServices";

const Read = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    readProduct().then((result) => {
      setProducts(result);
    });
  }, []);
  return (
    <>
      <div className="container mt-5">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Quantity</th>
              <th>Image</th>
              <th>Unit Price</th>
              <th>Total Price</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </>
  );
};

export default Read;

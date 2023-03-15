import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { readProduct, deleteProduct } from "../../backend-APIservices/crudServices";
import { errorToast, successToast } from "../../Helper/ValidationHelper";

const Read = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    readProduct().then((result) => {
      setProducts(result);
    });
  }, []);
    
    const navigate = useNavigate();
    
    const deleteItem = (id) => {
        deleteProduct(id).then((result) => {
            if (result === true) {
                successToast('Item deleted')
            }
            else {
                errorToast('Failed to delete')
            }
        })
    }

    const updateItem = (id) => {
        navigate(`/update/${id}`)
    }
  return (
    <>
      <div className="container mt-5">
        <table className="table table-dark table-striped table-bordered">
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
          <tbody>
            {products.map((product, i) => {
              return (
                <tr key={product._id}>
                  <td>{product.productName}</td>
                  <td>{product.productPrice}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <img src={product.img} className="product-image" alt="" />
                  </td>
                  <td>{product.unitPrice}</td>
                  <td>{product.totalPrice}</td>
                  <td>
                    <button onClick={deleteItem.bind(this, product._id)} className="btn btn-danger">Delete</button>
                  </td>
                  <td>
                    <button onClick={updateItem.bind(this, product._id)} className="btn btn-primary">Update</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Read;

import React, { useRef } from "react";
import { ToastContainer } from "react-toastify";
import {
  errorToast,
  isEmpty,
  successToast,
} from "../../Helper/ValidationHelper";
import "react-toastify/dist/ReactToastify.css";
import "./Create.css";
import { createProduct } from "../../backend-APIservices/crudServices";
import FullScreenLoader from "../../Layout/FullScreenLoader";
import { useNavigate } from "react-router-dom";

const Create = () => {
  let navigate = useNavigate();
  let productName,
    productPrice,
    quantity,
    img,
    unitPrice,
    totalPrice,
    loader = useRef();

  const saveData = () => {
    const pName = productName.value;
    const pPrice = productPrice.value;
    const qty = quantity.value;
    const image = img.value;
    const uPrice = unitPrice.value;
    const total = totalPrice.value;

    if (isEmpty(pName)) {
      errorToast("Please input a product name");
    } else if (isEmpty(pPrice)) {
      errorToast("please input price");
    } else if (isEmpty(qty)) {
      errorToast("please input qty");
    } else if (isEmpty(image)) {
      errorToast("please give an images");
    } else if (isEmpty(uPrice)) {
      errorToast("please input unit price");
    } else if (isEmpty(total)) {
      errorToast("please input total price");
    } else {
      loader.classList.remove("d-none");
      createProduct(pName, pPrice, qty, image, uPrice, total).then((result) => {
        loader.classList.add("d-none");
        if (result === true) {
          successToast("Data saved successfully");
          navigate('/read')
          productName.value = "";
          productPrice.value = "";
          quantity.value = "";
          img.value = "";
          unitPrice.value = "";
          totalPrice.value = "";
        } else {
          errorToast("Something went wrong");
        }
      });
    }
  };
  return (
    <div className="create-main pt-5 pb-5">
      <div className="container">
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Product Name</label>
            <input
              ref={(input) => (productName = input)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Product Price</label>
            <input
              ref={(input) => (productPrice = input)}
              type="number"
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Product Quantity</label>
            <input
              ref={(input) => (quantity = input)}
              type="email"
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Product Image</label>
            <input
              ref={(input) => (img = input)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Unit Price</label>
            <input
              ref={(input) => (unitPrice = input)}
              type="number"
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Total Price</label>
            <input
              ref={(input) => (totalPrice = input)}
              type="number"
              className="form-control"
            />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col">
            <button
              onClick={saveData}
              className="btn btn-outline-primary w-100 fw-bold fs-4"
            >
              Save
            </button>
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </div>
      <div ref={(div) => (loader = div)} className="d-none">
        <FullScreenLoader></FullScreenLoader>
      </div>
    </div>
  );
};

export default Create;

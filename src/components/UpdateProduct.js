import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  const params=useParams();

  useEffect(()=>{
    getProductDetails();
  },[])

  const getProductDetails=async()=>{
    let result=await fetch(`http://localhost:5000/product/${params.id}`);
    result=await result.json();
    console.log(result);
    setName(result.name);
    setPrice(result.price)
    setCategory(result.category)
    setCompany(result.company);

  }
  const updateProduct = async () => {
    // if (!name || !price || !category || !company) {
    //   setError(true);
    //   return false;
    // }
    // const userId = JSON.parse(localStorage.getItem("user")).user._id;
    // console.log(userId);
    // let response = await fetch("http://localhost:5000/add-product", {
    //   method: "post",
    //   body: JSON.stringify({ name, price, category, company, userId }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // response = await response.json();
    console.log(name,price,category,company);
  };

  return (
    <div className="product">
      <h1>Update Product Details</h1>
      <input
        type="text"
        placeholder="Enter product name"
        className="inputBox"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
       
      <input
        type="text"
        placeholder="Enter product price"
        className="inputBox"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      ></input>
     

      <input
        type="text"
        placeholder="Enter product category"
        className="inputBox"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      ></input>
 
      <input
        type="text"
        placeholder="Enter product company"
        className="inputBox"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      ></input>
    

      <button className="appButton" onClick={updateProduct}>
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;

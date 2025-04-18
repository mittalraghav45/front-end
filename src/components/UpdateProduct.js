import React, { useEffect, useState } from "react";
import {useParams,useNavigate} from 'react-router-dom'

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  const params=useParams();
  const navigate=useNavigate();

  useEffect(()=>{
    getProductDetails();
  },[])

  const getProductDetails=async()=>{
    let result=await fetch(`http://localhost:5000/product/${params.id}`,{
      headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    result=await result.json(); 
    setName(result.name);
    setPrice(result.price)
    setCategory(result.category)
    setCompany(result.company);

  }
  const updateProduct = async () => {
      
    let response = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "application/json",      
          authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
        
      },
    });
    response = await response.json();
    // console.log(name,price,category,company);
    console.log(response);
    navigate('/');
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

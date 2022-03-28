import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useEffect } from 'react';

const AddProduct = () => {
    // const[products,setProducts]=useState({});
    // const { register, handleSubmit } = useForm();
    // const onSubmit = data => console.log(data);


    // useEffect(()=>{
    //     const url= "http://localhost:5000/products"
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data=>{

    //     })
    // },[])

    return (
        <div>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name" )} placeholder="name" />
            <input type="text" {...register("seller")} placeholder="seller"/>
            <input type="number" {...register("price")} placeholder="price" />
            <input {...register("price")} placeholder="image url" />
            <input type="submit" value="submit" />
            </form> */}
        </div>
    );
};

export default AddProduct;
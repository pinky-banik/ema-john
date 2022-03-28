import userEvent from '@testing-library/user-event';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/localStorage';

const Shipping = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {user} =useAuth();
  const onSubmit = data => {
    const savedCart = getStoredCart();
    data.order = savedCart;
    console.log(data);

    fetch('http://localhost:5000/orders',{
      method :'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(result =>{
      if(result.insertedId){
        alert('order processed successfully');
        clearTheCart();
        reset();
      }
    })
  };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

            <input placeholder="name" defaultValue={user.displayName}  {...register("name")} />
            
            <input placeholder='Email' defaultValue={user.email} {...register("email", { required: true })} />
            {errors.email && <span className='text-danger'><br />This field is required</span>}
            <br />
            <input placeholder="address" defaultValue="" {...register("address")} />
            <input placeholder="phone number" defaultValue="" {...register("phone number")} />
            <input placeholder="city" defaultValue="" {...register("city")} />
      <input type="submit" />
    </form>
        </div>
    );
};

export default Shipping;
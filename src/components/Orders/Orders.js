import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';

const Orders = () => {
    const [orders,setOrders] = useState([]);
    const {user} =useAuth();
    const history = useHistory();
     useEffect(()=>{
      fetch(`https://limitless-everglades-38697.herokuapp.com/orders?email=${user.email}`,{
          headers :{
              'authorization' :`Bearer ${localStorage.getItem('idToken')}`
          }
      })
      .then(res=>{
          if(res.status===200){
              return res.json();
          }
          else if (res.status===401){
              history.push('/login');
          }
      })
      .then(data=>setOrders(data))
    },[]);
      
    return (
        <div>
            <h2>This is order page: orders {orders.length}</h2>
            <ul>
                {
                    orders.map(order=> <li key={order._id}>
                        {order.name} : {order.email}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Orders;
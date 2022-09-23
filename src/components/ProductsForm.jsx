import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';


const ProductsForm = ({getProducts,selectFormt,deselectFormt}) => {
    
    const {register,handleSubmit,reset}=useForm();
   useEffect(()=>{
        if(selectFormt !==null){
            reset(selectFormt)
        }
    },[selectFormt])
    const submit=(data)=>{
        if(selectFormt){
            alert("actualizando")
            axios.put(`https://users-crud1.herokuapp.com/users/${selectFormt.id}/`,data)
            .then(()=>getProducts())
        }else{
            axios.post('https://users-crud1.herokuapp.com/users/',data)
       .then(()=>getProducts())
       .catch(error=>console.log(error.response));
        }  
        clear()
        
    }
    const clear=()=>{
        reset({
            first_name:"",
            last_name:"",
            email:"",
            password:"",
            birthday:"",
            
        }) 
        deselectFormt()
    }
    return (
        <div className='form1'>
            
            <div className="form">
                <form className='forminter' onSubmit={handleSubmit(submit)}>
                <div>
                    <label htmlFor="name"><i class="fa-solid fa-user"></i></label>
                    <input type="text" id='name'  placeholder='firs name' {...register("first_name")} />
                    <input type="text" id=""  placeholder='last name' {...register("last_name")}/>
                </div>
                <div>
                    <label htmlFor="email"><i class="fa-solid fa-envelope"></i></label>
                    <input type="text" id="email"  placeholder='email' {...register("email")}/>
                </div>
                <div>
                    <label htmlFor="password"><i class="fa-solid fa-lock"></i></label>
                    <input type="password" id='password'  placeholder='password' {...register("password")}/>
                </div>
                <div>
                    <label htmlFor="date"><i class="fa-solid fa-calendar-days"></i></label>
                    <input type="date" id='date'   {...register("birthday")}/>
                </div>
                <button>{selectFormt?<i class="fa-regular fa-paper-plane"></i>:<i class="fa-regular fa-folder-open"></i>}</button>
                <button onClick={clear} type="button"><i class="fa-solid fa-rotate-right"></i></button>
                
            </form></div>
            
        </div>
    );
};

export default ProductsForm;
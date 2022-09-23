import axios from 'axios';
import React from 'react';

const ProductsList = ({formt,selectProduct,getProducts}) => {

    const deletForm=(form)=>{
        alert("eleimiando")
        axios.delete(`https://users-crud1.herokuapp.com/users/${form}/`)
        .then(()=>getProducts());
    }
    return (
        <div >
            
            <ul >
                {
                    formt.map(form=>(
                        <li className='list' key={form.id}>
                            <h2>{form.first_name} {form.last_name}</h2>
                            <h3>{form.email}</h3>
                            <h3>{form.birthday}</h3> 
                            <button onClick={()=>selectProduct(form)}><i class="fa-solid fa-pen-to-square"></i></button>
                            <button onClick={()=>deletForm(form.id)}><i class="fa-solid fa-trash"></i></button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default ProductsList;ProductsList
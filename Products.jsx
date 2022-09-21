import React, {useState,useEffect} from 'react';
import Shops from "./Shop";
import Skeleton from "react-loading-skeleton";


const Product = () => {
    const [data,setData]=useState([]);
    const [filter,setFilter]=useState(data);
    const[loading,setLoading]=useState(false);
    let componentMounted=true;

    useEffect(() => {
        const getProducts=async () =>{
            setLoading(true);
            const response=await fetch("https://fakestoreapi.com/products");
            if(componentMounted)
            {
                setData(await response.clone.json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () =>{
                componentMounted=false;
            }
        }
        getProducts();
    }, []);
    const Loading = () => {
        return(
            <>
               <div className="col-md-3">
                   <Skeleton height={350}/>
                   
               </div>
               <div className="col-md-3">
                   <Skeleton height={350}/>
                   
               </div>
               <div className="col-md-3">
                   <Skeleton height={350}/>
                   
               </div>
            </>
        );
    };
    const ShowProducts = () => {
        return(
            <>
              <div className="buttons d-flex justify-content-center mb-5 pb-5">
                <button  className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>ALL</button>
                <button  className="btn btn-outline-dark me-2 ">Fruits</button>
                <button  className="btn btn-outline-dark me-2">Beauty Products</button>
                <button  className="btn btn-outline-dark me-2">Kitchen Herbs</button>
              </div>
                <Shops/>
              </>
           
        )
    }
    
    return(
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">LATEST PRODUCTS</h1>
                        <hr />
                        <h1 className="display-10 fw-bolder text-center">BROWSE BY CATEGORIES</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    { <ShowProducts/>}
                </div>
            </div>
        </div>

    )
}
export default Product;


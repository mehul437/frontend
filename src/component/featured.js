
import React,{ useContext, useEffect, useState,useRef } from "react";
import { ContextData } from "./data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Rating from "@material-ui/lab/Rating";

export default function Featured(){
    const responsive = {
        superLargeDesktop: {
            
            breakpoint: { max: 4000, min: 3000 },
            items: 5
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
      };

    const state=useContext(ContextData)
    const {detail}=state.DataState
    const [data,setData]=useState([])
    const temp=useRef()
    temp.current=fil
    useEffect(()=>{
        temp.current()
    },[])

    function fil(){
        
        const temp=detail.filter((item,index)=>index<9)
        setData(temp)
        
        

    }
     
    return(
        <>
         <h3 className="featured_product">FEATURED PRODUCT</h3>
         <Carousel responsive={responsive}>
             {data.map((item)=>(
         <div className="featured_item" key={item.id}>
             
             <div className="featured_image">
                    <img src={item.image}></img>
                </div>
                <div className="featured_detail">
                    <p className="title">{item.model}</p>
                    <p><Rating
                     name="read-only"
                      value= {item.rating}
                      size={"small"}/></p>
                    <p><span className="discount">${item.discount_price} </span> <span className="actual"> ${item.actual_price}</span></p>
                </div>
            </div>
             ))}
          
            </Carousel>
            
        
        </>
    )

}
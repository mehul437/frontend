import React,{useState} from "react";
import { useParams } from "react-router";
import Left from "./left";
import Right from "./right";


export default function StoreTop(){

const params=useParams()


 return(
     <>
     <div className="store_main">
         <div className="store_left">
             <Left />
         </div>
         <div className="store_right">
             <Right selector={params.type}/>
         </div> 

     </div>
     </>
 )
}
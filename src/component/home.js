import React,{useContext,useState,useEffect,useRef} from "react";
import Customer from "./Customer";
import Featured from "./featured";
import { ContextData } from "./data";
import ItemCard from "./itemCard";
export default function Home(){
    const state=useContext(ContextData)
    const {detail}=state.DataState
    const[category,setCategory]=useState("all")
    const[data,setData]=useState([])
    const[flag,setFlag]=useState(true)
    const temp=useRef()
    const temp2=useRef()
    temp.current=filtering
    temp2.current=categoryFilter
   
    useEffect(()=>{
        temp.current()
    },[])
    useEffect(()=>{
        temp2.current()
    },[category,flag])
    function categoryFilter(){
      if(flag===true){
        if(category!=="all"){
            const temp_data=detail.filter((item)=>item.category===category)
            const actual_data=temp_data.filter((item,index)=>index<12)
            setData(actual_data)
           }
           else{
               filtering()
           }
      }
      else{
          if(category!="all"){
            const temp_data=detail.filter((item)=>item.category===category)
            setData(temp_data)
          }
          else{
              setData(detail)
          }
      }
    }
    function filtering(){
        const temp_data=detail.filter((item,index)=>index<12)
        setData(temp_data)

    }
    

    const handle=(e)=>{
        setCategory(e.target.value)
    }
    
    console.log(detail)
    return(
        <>
        <div className="home_image">
            
       <div className="image"> <img src='/images/2_corousel@2x.png'></img></div>
        </div>
        <h3 className="best">BEST SELLER</h3>
        <div className="best_nav">
            <ul>
                <li onClick={()=>setCategory("all")}>All</li>
                <li onClick={()=>setCategory("mobile")}>mobile</li>
                <li  onClick={()=>setCategory("laptop")}>laptop</li>
                <li  onClick={()=>setCategory("tv")}>tv</li>
                <li  onClick={()=>setCategory("headset")}>headset</li>
            </ul>
        </div>
        <select className="select" onChange={handle} >
            <option value="all">all</option>
            <option value="mobile">mobile</option>
            <option value="laptop">laptop</option>
            <option value="tv">tv</option>
            <option value="headset">headset</option>
        </select>

        <div className="main_container">
            {
                data.map((item)=> <ItemCard key={item.id} id={item.id} quantity={item.quantity} rating={item.rating} image={item.image} model={item.model} price={item.actual_price} discount={item.discount_price} />
                )
            }
        </div>
       {flag? <h3 className='view'><button onClick={()=>setFlag(false)}>View all</button></h3>:null}
     
        <div className="advertisement">
            <div className="left">
                <h2>iphone 10 Plus</h2>
                <p>Performance and design. Taken right to edge </p>
                <p>Shop now</p>
            </div>
            <div className="right">
                <img src="/images/2_corousel@2x.png"></img>
            </div>
        </div>
        <Customer/>
         <Featured/>
        </>
    )
}
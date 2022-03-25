import ItemCards from "./itemCards";
import React, {useEffect,useContext,useState,useRef} from "react";
import { ContextData } from "../data";

export default function Right(props){
    
    const state=useContext(ContextData)
    const {detail}=state.DataSet

    const[pagedata,setpagedata]=useState([])
    const[data,setData]=useState([])
    const[togle,setTogle]=useState(1)
    const[pageNo,setPageNo]=useState(1)
    const temp=useRef()
    const temp2=useRef()
    temp2.current=fillpageData
    temp.current=fill
    
    useEffect(()=>{
         temp.current()
    },[props])
    
    useEffect(()=>{
     temp2.current()
    },[pageNo,data])
    
    function fill(){
       if(props.selector!=='all'){
        const temp_data=detail.filter((item,index)=>item.brand===props.selector || item.category===props.selector )
        setData(temp_data)
       }
       else{
           
           setData(detail)

       }
      setPageNo(1)
      setTogle(1)
    }
    function fillpageData(){
        let end=pageNo*12
        let start=end-12
        const temp_data=data.filter((item,index)=>index>=start & index<end)
        setpagedata(temp_data)
    }
    const changeHandler=(e)=>{
        const temp_data=data.filter((item)=>item.price<=e.target.value)
        setData(temp_data)
    }
    const handlePagination=(data)=>{
        setPageNo(data)
        setTogle(data)

    }
    let loop=data.length/12
    loop=Math.floor(loop)
        
    return(
        <>
        <div className="right_image">
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
        <div className="sort_section">
            <span className="items_count">{data.length} items</span>
            
            <span className="sortby">sort by</span>
            <select className="sort_select" >
            <option value="name" defaultValue="name" onChange={()=>changeHandler}>price</option>
            <option value="300"> under 300 </option>
            <option value="300"> under 400 </option>
            <option value="300"> under 500 </option>
            <option value="300"> under 200 </option>
            <option value="300"> under 700 </option>
            
            </select>
            
            </div>
        </div>
        <div className="main_container">
            {
                pagedata.map((item)=> <ItemCards key={item.id} rating={item.rating} image={item.image} model={item.model} price={item.actual_price} discount={item.discount_price} />
                )
            }
        </div>
        <div className="page_count">
            {
                Array.from(Array(loop+1),(e,i)=>{
                    return  <p className={togle===i+1?"boxx":"box"} key={i} onClick={()=>handlePagination(i+1)}>{i+1}</p>
                })
            }
           
        </div>
        </>
    )
}
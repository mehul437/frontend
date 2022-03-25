import react,{useState,useContext,useRef,useEffect} from "react"
import { ContextData } from "../data"
import { useParams } from "react-router"
import ItemCards from "../itemCard"
export default function Mobile(){
    const[togle,setTogle]=useState(1)
    const state=useContext(ContextData)
    const {detail}=state.DataSet
    const[pagedata,setpagedata]=useState([])
    const[data,setData]=useState([])
    const[pageNo,setPageNo]=useState(1)
    const temp=useRef()
    const temp2=useRef()
    const params=useParams()
    temp2.current=fillpageData
    temp.current=fill
    
    useEffect(()=>{
         temp.current()
    },[params.type])
    
    useEffect(()=>{
     temp2.current()
    },[pageNo,data])
    
    function fill(){
        const temp_data=detail.filter((item,index)=> item.category===params.type )
        setData(temp_data)

      setPageNo(1)
      setTogle(1)
    }
    function fillpageData(){
        let end=pageNo*12
        let start=end-12
        const temp_data=data.filter((item,index)=>index>=start & index<end)
        setpagedata(temp_data)
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
        <div className="main_container">
            {
                pagedata.map((item)=> <ItemCards key={item.id} rating={item.rating} image={item.image} model={item.model} price={item.actual_price} discount={item.discount_price} />
                )
            }
        </div>
        <div className="page_count">
            {
                Array.from(Array(loop+1),(e,i)=>{
                    return   <p className={togle===i+1?"boxx":"box"} key={i} onClick={()=>handlePagination(i+1)}>{i+1}</p>
                })
            }
           
        </div>
        </div>
        </>
    )
}
import React,{useContext} from "react"
import Rating from "@material-ui/lab/Rating";
import { ContextData } from "./data";
export default function ItemCard(props){
     const state=useContext(ContextData)
     const {DataDispatch}=state
     const disp=(data)=>{
        DataDispatch({type:'add_cart' ,payload:data})

     }
    return(
        <>
        <div className="card_container">
            <div className="blurr">
                <div className="fav"><i className="fa fa-heart fa-2x" aria-hidden="true"></i></div>
                <div className="cartt" onClick={()=>disp({props})}><i className="fa-solid fa-cart-arrow-down fa-2x"></i></div>
            </div>
            <div className="img_section">
                <img src={props.image}></img>
            </div>
            <div className="card_detail">
                <p className="title">{props.model}</p>
                <p><Rating
                     name="read-only"
                      value= {props.rating}
                      size={"small"}/></p>
                <p><span className="discount">${props.discount} </span><span className="actual"> ${props.price}</span></p>
            </div>
        </div>
        </>
    )
}
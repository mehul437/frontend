import React from "react"
import Rating from "@material-ui/lab/Rating";
export default function ItemCards(props){
    return(
        <>
        <div className="card_containers">
        <div className="blurr">
                <div className="fav"><i className="fa fa-heart fa-2x" aria-hidden="true"></i></div>
                <div className="cartt"><i className="fa-solid fa-cart-arrow-down fa-2x"></i></div>
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
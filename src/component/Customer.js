import React from "react";

export default function Customer(){
    return(
        <>
        <div className="customer_container">
            <div className="shipping">
                <div className="ship_header">
                    <img src="\images\shipping.svg"></img>
                </div>
                <div className="ship_details">
                    <p className="title">FREE SHIPPING</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
                </div>
                <div className="shipping">
                <div className="ship_header">
                    <img src="\images\refund.svg"></img>
                </div>
                <div className="ship_details">
                    <p className="title">100% REFUND</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
                </div>
                <div className="shipping">
                <div className="ship_header">
                    <img src="\images\support.svg"></img>
                </div>
                <div className="ship_details">
                    <p className="title">SUPPORT 24/7</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
            </div>
        </div>

        </>
    )
}
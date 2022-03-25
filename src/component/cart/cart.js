import react,{useContext} from "react"
import { ContextData } from "../data"
export default function Cart(){
    const state=useContext(ContextData)
    const {cart}=state.DataState
    const{amount}=state.DataState
   
    
    return(
        <>
        <div className="cart_top">CART</div>
        <div className="cart_product">
            <p className="product_c">PRODUCT</p>
            <p className="price">
                <span>PRICE</span>
                <span>QTY</span>
                <span>UNIT PRICE</span>    
            </p>
            </div>
        {
            cart.map((item)=> <div className="cart_products" key={item.id}>
            <div className="product_container">
                <div className="product_img">
                    <img src={item.image}></img>
                </div>
                <div className="product_name">{item.model}</div>
            </div>
            <p className="price_list">
                <span className="list_price_">${item.price}</span>
                <span className="qty"><i className="fa fa-plus" aria-hidden="true"></i> <span> {item.quantity} </span> <i class="fa fa-minus" aria-hidden="true"></i></span>
                <span className="list_discount">${item.discount}</span>    
            </p>
        </div>)
        }
       
       
      <div className="checkout_section">
      <div className="reedem">
            <input type="text" placeholder="Voucher code"></input>
            <button >REEDEM</button>

            
        </div>
        <div className="total_price">
            <p className="amount"><span className="total_left">subtotal</span><span className="total_right">${amount}</span></p>
            <p className="amount" ><span className="total_left">shipping</span><span className="total_right">$20</span></p>
            <p className="amount"><span className="total_left">voucher</span><span className="total_right">$ 0</span></p>
            <p className="final_total"><span className="total_left">TOTAL</span><span className="total_right">${amount+20}</span></p>
            <p className="check_out">check out</p>
        </div>
      </div>
        </>
    )
}
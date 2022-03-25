import React,{useContext } from 'react'
import { ContextData, } from '../data'
import { NavLink } from 'react-router-dom'
export default function Left() {
    const state=useContext(ContextData)
    const{detail}=state.DataSet
    
    let apple_mobile=0
    let realme_mobile=0
    let redmi_mobile=0
    let lg_tv=0
    let asus_laptop=0
    let logitech_headset=0
    let thomson_tv=0
    let dizo_headset=0
    let dell=0
    
    function filtercount(){
        for(var i in detail){
            if(detail[i].category==='mobile'){
                if(detail[i].brand==="iphone"){
                    apple_mobile++
                }
                else if(detail[i].brand==="realme"){
                    realme_mobile++
                }
                else if(detail[i].brand==="redmi"){
                    redmi_mobile++
                    
                }
        }
        else if(detail[i].category==='laptop'){
            if(detail[i].brand==="asus"){
                asus_laptop++
            }
            else if(detail[i].brand==='dell'){
                dell++
            }
            
    }
    else if(detail[i].category==='tv'){
        if(detail[i].brand==="lg"){
            lg_tv++
        }
        else if(detail[i].brand==="thomson"){
            thomson_tv++
        }

    }
    else if(detail[i].category==='headset'){
        if(detail[i].brand==="logitech"){
            logitech_headset++
        }
        else if(detail[i].brand==="dizo"){
            dizo_headset++
        }
    }
        }
    }
    filtercount()
    
  return (
    <>
    <div className='accessories'>
        <p><span className='accessories_title'>ACCESSORIES</span></p>
        <p><span className='accesspries_name'><NavLink to={`/store/${"iphone"}`}>apple mobile</NavLink></span><span className='accessories_count'>{apple_mobile}</span></p>
        <p><span className='accesspries_name'><NavLink to={`/store/${"realme"}`}>realme mobile</NavLink></span><span className='accessories_count'>{realme_mobile}</span></p>
        <p><span className='accesspries_name'><NavLink to={`/store/${"redmi"}`}>redmi mobile</NavLink></span><span className='accessories_count'>{redmi_mobile}</span></p>
        <p><span className='accesspries_name'><NavLink to={`/store/${"asus"}`}>asus laptop</NavLink></span><span className='accessories_count'>{asus_laptop}</span></p>
        <p><span className='accesspries_name'><NavLink to={`/store/${"logitech"}`}>logitech headset</NavLink></span><span className='accessories_count'>{logitech_headset}</span></p>
        <p><span className='accesspries_name'><NavLink to={`/store/${"lg"}`}>lg tv</NavLink></span><span className='accessories_count'>{lg_tv}</span></p>
        <p><span className='accesspries_name'><NavLink to={`/store/${"dizo"}`}>dizo_headset</NavLink></span><span className='accessories_count'>{dizo_headset}</span></p>
        <p><span className='accesspries_name'><NavLink to={`/store/${"thomson"}`}>thomson tv</NavLink></span><span className='accessories_count'>{thomson_tv}</span></p>
        
    </div>
    <div className="color">
        <p><span className='color_title'>COLOR</span></p>
        <div className='color_main'>
            <div className='red'></div>
            <div className='green'></div>
            <div className='pink'></div>
            <div className='blue'></div>
        </div>
        
     </div>
    <div className='accessories'>
        <p ><span className='accessories_title'>BRAND</span></p>
        <p ><span className='accesspries_name'><NavLink to={`/store/${"iphone"}`}>apple</NavLink></span><span className='accessories_count'>{apple_mobile}</span></p>
        <p ><span className='accesspries_name'><NavLink to={`/store/${"redmi"}`}>redmi</NavLink></span><span className='accessories_count'>{redmi_mobile}</span></p>
        <p ><span className='accesspries_name'><NavLink to={`/store/${"dell"}`}>dell</NavLink></span><span className='accessories_count'>{dell}</span></p>
        <p ><span className='accesspries_name'><NavLink to={`/store/${"asus"}`}>asus</NavLink></span><span className='accessories_count'>{asus_laptop}</span></p>
        <p><span className='accesspries_name'><NavLink to={`/store/${"logitech"}`}>logitech</NavLink></span><span className='accessories_count'>{logitech_headset}</span></p>
        <p><span className='accesspries_name'><NavLink to={`/store/${"lg"}`}>lg</NavLink></span><span className='accessories_count'>{lg_tv}</span></p>
        
        
    </div>

    </>
  )
}

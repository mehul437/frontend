import React,{useState,useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { ContextData } from './data'
export default function Header() {
  const state=useContext(ContextData)
  const {cart}=state.DataState
  const[bar,setBar]=useState(true)
  const changer=()=>{
    setBar(!bar)
  }
  return (
    <>

<div className='top_nav'>  
      
      <div className='top'>
        <span className='profile'><i className="fa-solid fa-user"></i>My profile</span> 
        <span className='cart'><NavLink to="/cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i><h3>{cart.length}</h3> items</NavLink></span>
          
          
        <span className='search'>
        <input type="search"></input><i className="fa fa-search " aria-hidden="true"></i>
        </span></div>
      
     
      </div>
  

      <div className='navigation'>
 
        <span className='title'>Online ishop</span>
        <span onClick={changer} className='bar'><i className="fa fa-bars fa-2x" aria-hidden="true"></i></span>  
    

      </div>
   
  <div className={bar?'nav-items':'nav-resp'}>
  <span className='cros' onClick={changer}><i className="fa fa-times fa-2x" aria-hidden="true"></i></span>
    <ul className='category'>
    
    <div className='topp'>
        <span className='profilee'><i className="fa-solid fa-user"></i>My profile </span> 
        <span className='cartts'><i className="fa fa-shopping-cart" aria-hidden="true"></i> items</span>
          </div>
    <span className='searcher'> <input type="search"></input><i className="fa fa-search" aria-hidden="true"></i></span>
      <li className='home'><NavLink to="/">Home</NavLink></li>
      <li className='store'>Store  <div className='store_down'>
        <div className='store_down_2'>
       <div className='list_1'>
         <header>category</header>
       <ul className='inner_lis'>
       <NavLink to={`/store/${"all"}`} activestyle={{
                color:"blue"
              }}><li>All</li></NavLink>
              <NavLink to={`/store/${"mobile"}`} activestyle={{
                color:"blue"
              }}><li>mobile</li></NavLink>
               <NavLink to={`/store/${"laptop"}`} activestyle={{
                color:"blue"
              }}><li>laptop</li></NavLink>
               <NavLink to={`/store/${"tv"}`} activestyle={{
                color:"blue"
              }}><li>tv</li></NavLink>
              
              
            </ul>
       </div>
       <div className='list_1'>
         <header>Mobile</header>
       <ul className='inner_lis'>
       <NavLink to={`/store/${"realme"}`} activestyle={{
                color:"blue"
              }}><li>realme</li></NavLink>
                <NavLink to={`/store/${"redmi"}`} activestyle={{
                color:"blue"
              }}><li>redmi</li></NavLink>
                <NavLink to={`/store/${"iphone"}`} activestyle={{
                color:"blue"
              }}><li>iphone</li></NavLink>
              
            </ul>
       </div>
       <div className='list_1'>
         <header>tv</header>
       <ul className='inner_lis'>
       <NavLink to={`/store/${"samsung"}`} activestyle={{
                color:"blue"
              }}><li>samsung</li></NavLink>
                <NavLink to={`/store/${"redmi"}`} activestyle={{
                color:"blue"
              }}><li>redmi</li></NavLink>
                <NavLink to={`/store/${"lg"}`} activestyle={{
                color:"blue"
              }}><li>lg</li></NavLink>
              
              
            </ul>
       </div>
       <div className='list_1'>
         <header>laptop</header>
       <ul className='inner_lis'>
       <NavLink  to={`/store/${"asus"}`} activestyle={{
                color:"blue"
              }}><li>asus</li></NavLink>

                <NavLink to={`/store/${"lenovo"}`} activestyle={{
                color:"blue"
              }}><li>lenovo</li></NavLink>
                <NavLink to={`/store/${"dell"}`} activestyle={{
                color:"blue"
              }}><li>dell</li></NavLink>
              
              
            </ul>
       </div>
     </div>
     </div>
        
      </li>
      <li><NavLink to={`/${"mobile"}`}>Mobile</NavLink></li>
      <li><NavLink to={`/${"laptop"}`}>Laptop</NavLink></li>
      <li><NavLink to={`/${"tv"}`}>Tv</NavLink> </li>
      <li><NavLink to={`/${"headset"}`}>Headset</NavLink></li>
      
    </ul>

  </div>

   
  
  </>
  )
}

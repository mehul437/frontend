import React,{createContext,useReducer,useState} from "react";

export const ContextData=createContext()

export const DataProvider=(props)=>{
    const reducer=(state,action)=>{
        switch(action.type){
            case "add_cart":
                console.log(action.payload.props.discount)
                let exist=undefined
                 exist=state.cart.filter((item)=>item.id===action.payload.props.id)
                 console.log(exist)
                if(exist.length<1){
                return{...state,
                    amount:state.amount+action.payload.props.discount,
                    cart:[...state.cart,action.payload.props]
                }
            }
                else{
                    return state
                }
            default:
                return state

        

    }
}


   
    const dataset=({
        amount:0,
        cart:[],
        detail:[
        {
            image:"https://th.bing.com/th/id/OIP.QNO9_Tw4rLDNkk5VfzSuSwHaHF?w=174&h=180&c=7&r=0&o=5&pid=1.7",
            rating:4,  
            quantity:1,
            id:1,
            brand:"realme",
            category:"mobile",
            model:"realme 8pro",
           actual_price:400,
            discount_price:300,
            product_detail:" Realme 8 (4G) , Realme 8 Pro (4G) Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers Product Name : Realme 8 (4G) , Realme 8 Pro (4G) Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers"
        },
        {    
            image:"https://rukminim1.flixcart.com/image/416/416/ksyz8280/computer/f/9/9/x515ea-ej302ts-thin-and-light-laptop-asus-original-imag6fc9kxzc6rrh.jpeg?q=70",
            id:16,
            rating:4,  
            quantity:1,
            category:"laptop",
            model:"ASUS VivoBook 15 Core i3 10th Gen ",
            brand:"asus",
           actual_price:400,
            discount_price:300,
            product_detail:"ASUS VivoBook 15 (2021) Core i3 10th Gen - (8 GB/512 GB SSD/Windows 11 Home) X515JA-EJ362WS Thin and Light Laptop  (15.6 inch, Transparent Silver, 1.80 kg, With MS Office)"
        },
        {
            image:"https://th.bing.com/th/id/OIP.cWFdiLLdNTs32FYm6XMP2QHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7",
            rating:4,  
            quantity:1,
            id:2,

           brand:"realme",
            category:"mobile",
            model:"iphone 12",
           actual_price:400,
            discount_price:300,
            product_detail:" iphone 12 (4G) , iphone 8 Pro (4G) Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers Product Name : iphone 12 (4G) , Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers"
        },
        {    
            image:"https://rukminim1.flixcart.com/image/416/416/ku4ezrk0/television/a/i/z/l43m6-inc-mi-original-imag7bgpgcrfh2ns.jpeg?q=70",
            id:33,
            rating:4,  
            quantity:1,
            category:"tv",
            model:"Mi 4C 108 cm (43 inch)",
            brand:"mi",
           actual_price:400,
            discount_price:300,
            product_detail:"Mi 4C 108 cm (43 inch) Full HD LED Smart Android TV Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube Operating System: WebOS"
        },
        {
            image:"https://th.bing.com/th/id/OIP.yTzLjjx_cjYvXrj_G2Bj4QHaHa?w=220&h=220&c=7&r=0&o=5&pid=1.7",
            rating:4,  
            quantity:1,
            id:3,

         brand:"iphone",
            category:"mobile",
            model:"iphone 10",
           actual_price:400,
            discount_price:300,
            product_detail:" iphone 10 (4G) , iphone 10 Pro (4G) Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers Product Name : iphone 10 (4G) , Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers"
        },
        
{    
    image:"https://rukminim1.flixcart.com/image/416/416/kpr8k280/headphone/v/q/a/da2003-dizo-original-imag3xhynvawvdzs.jpeg?q=70",
    id:43,
    rating:4,  
    quantity:1,
    category:"headset",
    model:" DIZO by realme TechLife Wireless",
    brand:"dizo",
   actual_price:400,
    discount_price:300,
    product_detail:"DIZO by realme TechLife Wireless Bluetooth Headset ,Wireless range: 10 m,Charging time: 2 hrs,11.2mm Dynamic Bass Boost Driver, 10mins Charge for 120 mins Playback "
},
        {
            image:"https://th.bing.com/th/id/OIP.x-D_aTzJ32vw9i-bKL-bdAHaE8?w=236&h=180&c=7&r=0&o=5&pid=1.7",
            rating:4,  
            quantity:1,
            id:4,
         brand:"realme",
            category:"mobile",
            model:"realme gt neo 2",
           actual_price:400,
            discount_price:300,
            product_detail:" realme gt neo 2 (4G)  Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers Product Name : iphone 10 (4G) , Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers"
        },
        
  {    
    image:"https://rukminim1.flixcart.com/image/416/416/kirr24w0/computer/z/r/b/dell-na-laptop-original-imafyhm5nzfum7jj.jpeg?q=70",
    id:18,
    rating:4,  
    quantity:1,
    category:"laptop",
    model:"DELL Inspiron Ryzen 5 Quad Core 3450U",
    brand:"dell",
   actual_price:400,
    discount_price:300,
    product_detail:"Dell 15 (2021) Ryzen 5-3450U, 8GB, 512GB SSD, Win 11 + MS Office'21, AMD Vega Graphics, 15.6 (39.62 cms) FHD Display, Platinum Silver Color, Backlit KB (Inspiron 3515, D560704WIN9S)"
     },
        {
            image:"https://th.bing.com/th/id/OIP.Zp7EhtZRmA03T8StMdHMIAHaHa?w=205&h=205&c=7&r=0&o=5&pid=1.7",
            rating:4,  
            quantity:1,
            id:5,

            brand:"redmi",
            category:"mobile",
            model:"redmi 9a",
           actual_price:400,
            discount_price:300,
            product_detail:" redmi 9a (4G)  Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers Product Name : iphone 10 (4G) , Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers"
        },
        {
            image:"https://th.bing.com/th/id/OIP.PxNADFuECPii0APvvZZdowHaHa?w=159&h=180&c=7&r=0&o=5&pid=1.7",
            rating:4,  
            quantity:1,
            id:6,

           brand:"redmi",
            category:"mobile",
            model:"redmi note 10",
           actual_price:400,
            discount_price:300,
            product_detail:" redmi note 10 (4G)  Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers Product Name : iphone 10 (4G) , Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers"
        },
        {
            image:"https://th.bing.com/th/id/OIP.QNO9_Tw4rLDNkk5VfzSuSwHaHF?w=174&h=180&c=7&r=0&o=5&pid=1.7",
            rating:4,  
            quantity:1,
            id:7,
            brand:"realme",
            category:"mobile",
            model:"realme 8pro",
           actual_price:400,
            discount_price:300,
            product_detail:" Realme 8 (4G) , Realme 8 Pro (4G) Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers Product Name : Realme 8 (4G) , Realme 8 Pro (4G) Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers"
        },
        {
            image:"https://th.bing.com/th/id/OIP.cWFdiLLdNTs32FYm6XMP2QHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7",
            rating:4,  
            quantity:1,
            id:8,

           brand:"iphone",
            category:"mobile",
            model:"iphone 12",
           actual_price:400,
            discount_price:300,
            product_detail:" iphone 12 (4G) , iphone 8 Pro (4G) Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers Product Name : iphone 12 (4G) , Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers"
        },
        {
            image:"https://th.bing.com/th/id/OIP.yTzLjjx_cjYvXrj_G2Bj4QHaHa?w=220&h=220&c=7&r=0&o=5&pid=1.7",
            rating:4,  
            quantity:1,
            id:9,

            brand:"iphone",
            category:"mobile",
            model:"iphone 10",
           actual_price:400,
            discount_price:300,
            product_detail:" iphone 10 (4G) , iphone 10 Pro (4G) Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers Product Name : iphone 10 (4G) , Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers"
        },
        {
            image:"https://th.bing.com/th/id/OIP.x-D_aTzJ32vw9i-bKL-bdAHaE8?w=236&h=180&c=7&r=0&o=5&pid=1.7",
            rating:4,  
            quantity:1,
            id:10,
            brand:"realme",
            category:"mobile",
            model:"realme gt neo 2",
           actual_price:400,
            discount_price:300,
            product_detail:" realme gt neo 2 (4G)  Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers Product Name : iphone 10 (4G) , Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers"
        },
        {
            image:"https://th.bing.com/th/id/OIP.Zp7EhtZRmA03T8StMdHMIAHaHa?w=205&h=205&c=7&r=0&o=5&pid=1.7",
            rating:4,  
            quantity:1,
            id:11,
            brand:"redmi",
            category:"mobile",
            model:"redmi 9a",
           actual_price:400,
            discount_price:300,
            product_detail:" redmi 9a (4G)  Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers Product Name : iphone 10 (4G) , Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers"
        },
        {
            image:"https://th.bing.com/th/id/OIP.PxNADFuECPii0APvvZZdowHaHa?w=159&h=180&c=7&r=0&o=5&pid=1.7",
            rating:4,  
            quantity:1,
            id:12,
            brand:"redmi",
            category:"mobile",
            model:"redmi note 10",
           actual_price:400,
            discount_price:300,
            product_detail:" redmi note 10 (4G)  Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers Product Name : iphone 10 (4G) , Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers"
        },
        {    
        image:"https://rukminim1.flixcart.com/image/416/416/kqb8pzk0/computer/d/j/c/na-2-in-1-laptop-dell-original-imag4dy68bwtg8j9.jpeg?q=70",
        id:13,
        rating:4,  
        quantity:1,
        category:"laptop",
        model:"DELL Inspiron Core i5 11th Gen",
        brand:"dell",
       actual_price:400,
        discount_price:300,
        product_detail:"DELL Inspiron Core i5 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) Inspiron 5410 2 in 1 Laptop  (14 Inch, Platinum Silver, 1.5 Kgs, With MS Office"
    },
    {    
        image:"https://rukminim1.flixcart.com/image/416/416/kirr24w0/computer/z/r/b/dell-na-laptop-original-imafyhm5nzfum7jj.jpeg?q=70",
        id:14,
        rating:4,  
        quantity:1,
        category:"laptop",
        model:"DELL Inspiron Ryzen 5 Quad Core 3450U",
       actual_price:400,
      
      brand:"dell",
       discount_price:300,
        product_detail:"Dell 15 (2021) Ryzen 5-3450U, 8GB, 512GB SSD, Win 11 + MS Office'21, AMD Vega Graphics, 15.6 (39.62 cms) FHD Display, Platinum Silver Color, Backlit KB (Inspiron 3515, D560704WIN9S)"
    },
    {    
        image:"https://m.media-amazon.com/images/I/6177wJ0CIrL._SX569_.jpg",
        id:15,
        rating:4,  
        quantity:1,
        category:"laptop",
        model:"Lenovo Slim 5 11th Gen Intel Core i5 ",
        brand:"lenovo",
       actual_price:400,
        discount_price:300,
        product_detail:"Lenovo IdeaPad Slim 5 11th Gen Intel Core i5 14 (35.56cm) FHD Thin & Light Laptop (16GB/512GB SSD/Windows 11/MS Office/Backlit Keyboard/Fingerprint Reader/Graphite Grey/1.65Kg), 82FE016HIN"
    },
  
  
    {    
    image:"https://rukminim1.flixcart.com/image/416/416/kqb8pzk0/computer/d/j/c/na-2-in-1-laptop-dell-original-imag4dy68bwtg8j9.jpeg?q=70",
    id:17,
    rating:4,  
    quantity:1,
    category:"laptop",
    model:"DELL Inspiron Core i5 11th Gen",
    brand:"dell",
   actual_price:400,
    discount_price:300,
    product_detail:"DELL Inspiron Core i5 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) Inspiron 5410 2 in 1 Laptop  (14 Inch, Platinum Silver, 1.5 Kgs, With MS Office"
},
{    
    image:"https://m.media-amazon.com/images/I/6177wJ0CIrL._SX569_.jpg",
    id:19,
    rating:4,  
    quantity:1,
    category:"laptop",
    model:"Lenovo Slim 5 11th Gen Intel Core i5 ",
    brand:"lenovo",
   actual_price:400,
    discount_price:300,
    product_detail:"Lenovo IdeaPad Slim 5 11th Gen Intel Core i5 14 (35.56cm) FHD Thin & Light Laptop (16GB/512GB SSD/Windows 11/MS Office/Backlit Keyboard/Fingerprint Reader/Graphite Grey/1.65Kg), 82FE016HIN"
},
{    
    image:"https://rukminim1.flixcart.com/image/416/416/ksyz8280/computer/f/9/9/x515ea-ej302ts-thin-and-light-laptop-asus-original-imag6fc9kxzc6rrh.jpeg?q=70",
    id:20,
    rating:4,  
    quantity:1,
    category:"laptop",
    model:"ASUS VivoBook 15 Core i3 10th Gen ",
    brand:"asus",
   actual_price:400,
    discount_price:300,
    product_detail:"ASUS VivoBook 15 (2021) Core i3 10th Gen - (8 GB/512 GB SSD/Windows 11 Home) X515JA-EJ362WS Thin and Light Laptop  (15.6 inch, Transparent Silver, 1.80 kg, With MS Office)"
},
{    
    image:"https://rukminim1.flixcart.com/image/416/416/kqb8pzk0/computer/d/j/c/na-2-in-1-laptop-dell-original-imag4dy68bwtg8j9.jpeg?q=70",
    id:21,
    rating:4,  
    quantity:1,
    category:"laptop",
    model:"DELL Inspiron Core i5 11th Gen",
    brand:"dell",
   actual_price:400,
    discount_price:300,
    product_detail:"DELL Inspiron Core i5 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) Inspiron 5410 2 in 1 Laptop  (14 Inch, Platinum Silver, 1.5 Kgs, With MS Office"
},
{    
    image:"https://rukminim1.flixcart.com/image/416/416/kirr24w0/computer/z/r/b/dell-na-laptop-original-imafyhm5nzfum7jj.jpeg?q=70",
    id:22,
    rating:4,  
    quantity:1,
    category:"laptop",
    model:"DELL Inspiron Ryzen 5 Quad Core 3450U",
    brand:"dell",
   actual_price:400,
    discount_price:300,
    product_detail:"Dell 15 (2021) Ryzen 5-3450U, 8GB, 512GB SSD, Win 11 + MS Office'21, AMD Vega Graphics, 15.6 (39.62 cms) FHD Display, Platinum Silver Color, Backlit KB (Inspiron 3515, D560704WIN9S)"
},
{    
    image:"https://m.media-amazon.com/images/I/6177wJ0CIrL._SX569_.jpg",
    id:23,
    rating:4,  
    quantity:1,
    category:"laptop",
    model:"Lenovo Slim 5 11th Gen Intel Core i5 ",
    brand:"lenovo",
   actual_price:400,
    discount_price:300,
    product_detail:"Lenovo IdeaPad Slim 5 11th Gen Intel Core i5 14 (35.56cm) FHD Thin & Light Laptop (16GB/512GB SSD/Windows 11/MS Office/Backlit Keyboard/Fingerprint Reader/Graphite Grey/1.65Kg), 82FE016HIN"
},
{    
    image:"https://rukminim1.flixcart.com/image/416/416/ksyz8280/computer/f/9/9/x515ea-ej302ts-thin-and-light-laptop-asus-original-imag6fc9kxzc6rrh.jpeg?q=70",
    id:24,
    rating:4,  
    quantity:1,
    category:"laptop",
    model:"ASUS VivoBook 15 Core i3 10th Gen ",
    brand:"asus",
   actual_price:400,
    discount_price:300,
    product_detail:"ASUS VivoBook 15 (2021) Core i3 10th Gen - (8 GB/512 GB SSD/Windows 11 Home) X515JA-EJ362WS Thin and Light Laptop  (15.6 inch, Transparent Silver, 1.80 kg, With MS Office)"
},
{    
    image:"https://rukminim1.flixcart.com/image/416/416/ku4ezrk0/television/a/i/z/l43m6-inc-mi-original-imag7bgpgcrfh2ns.jpeg?q=70",
    id:25,
    rating:4,  
    quantity:1,
    category:"tv",
    model:"Mi 4C 108 cm (43 inch)",
    brand:"mi",
   actual_price:400,
    discount_price:300,
    product_detail:"Mi 4C 108 cm (43 inch) Full HD LED Smart Android TV Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube Operating System: WebOS"
},
{    
    image:"https://rukminim1.flixcart.com/image/416/416/kdyus280/television/g/d/q/lg-32lm565bpta-32lm565bpta-original-imafurgkdrjfggbw.jpeg?q=70",
    id:26,
    rating:4,  
    quantity:1,
    category:"tv",
    model:"LG 80 cm (32 inch) HD",
    brand:"lg",
   actual_price:400,
    discount_price:300,
    product_detail:"LG 80 cm (32 inch) HD Ready LED Smart TV  (32LM565BPTA) Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube Operating System: WebOS"
},
{    
    image:"https://rukminim1.flixcart.com/image/416/416/kikluvk0/television/h/8/t/thomson-24tm2490-original-imafybphgnhfwuvp.jpeg?q=70",
    id:27,
    rating:4,  
    quantity:1,
    category:"tv",
    model:"Thomson R9 60 cm (24 inch)",
    brand:"thomson",
   actual_price:400,
    discount_price:300,
    product_detail:" Thomson R9 60 cm (24 inch) HD Ready LED TV  (24TM2490) Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube Operating System: WebOS"
},

{    
    image:"https://rukminim1.flixcart.com/image/416/416/kf5pzm80/television/7/c/f/samsung-ua43t5350akxxl-original-imafvz8zyuatg8ev.jpeg?q=70",
    id:28,
    rating:4,  
    quantity:1,
    category:"tv",
    model:"SAMSUNG 108 cm (43 inch) ",
    brand:"samsung",
   actual_price:400,
    discount_price:300,
    product_detail:" SAMSUNG 108 cm (43 inch) Full HD LED Smart TV  (UA43T5350AKXXL) Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube Operating System: WebOS"
},

{    
    image:"https://rukminim1.flixcart.com/image/416/416/ku4ezrk0/television/a/i/z/l43m6-inc-mi-original-imag7bgpgcrfh2ns.jpeg?q=70",
    id:29,
    rating:4,  
    quantity:1,
    category:"tv",
    model:"Mi 4C 108 cm (43 inch)",
    brand:"mi",
   actual_price:400,
    discount_price:300,
    product_detail:"Mi 4C 108 cm (43 inch) Full HD LED Smart Android TV Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube Operating System: WebOS"
},
{    
    image:"https://rukminim1.flixcart.com/image/416/416/kdyus280/television/g/d/q/lg-32lm565bpta-32lm565bpta-original-imafurgkdrjfggbw.jpeg?q=70",
    id:30,
    rating:4,  
    quantity:1,
    category:"tv",
    model:"LG 80 cm (32 inch) HD",
    brand:"lg",
   actual_price:400,
    discount_price:300,
    product_detail:"LG 80 cm (32 inch) HD Ready LED Smart TV  (32LM565BPTA) Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube Operating System: WebOS"
},
{    
    image:"https://rukminim1.flixcart.com/image/416/416/kikluvk0/television/h/8/t/thomson-24tm2490-original-imafybphgnhfwuvp.jpeg?q=70",
    id:31,
    rating:4,  
    quantity:1,
    category:"tv",
    model:"Thomson R9 60 cm (24 inch)",
    brand:"thomson",
   actual_price:400,
    discount_price:300,
    product_detail:" Thomson R9 60 cm (24 inch) HD Ready LED TV  (24TM2490) Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube Operating System: WebOS"
},

{    
    image:"https://rukminim1.flixcart.com/image/416/416/kf5pzm80/television/7/c/f/samsung-ua43t5350akxxl-original-imafvz8zyuatg8ev.jpeg?q=70",
    id:32,
    rating:4,  
    quantity:1,
    category:"tv",
    model:"SAMSUNG 108 cm (43 inch) ",
    brand:"samsung",
   actual_price:400,
    discount_price:300,
    product_detail:" SAMSUNG 108 cm (43 inch) Full HD LED Smart TV  (UA43T5350AKXXL) Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube Operating System: WebOS"
},


{    
    image:"https://rukminim1.flixcart.com/image/416/416/kdyus280/television/g/d/q/lg-32lm565bpta-32lm565bpta-original-imafurgkdrjfggbw.jpeg?q=70",
    id:34,
    rating:4,  
    quantity:1,
    category:"tv",
    model:"LG 80 cm (32 inch) HD",
    brand:"lg",
   actual_price:400,
    discount_price:300,
    product_detail:"LG 80 cm (32 inch) HD Ready LED Smart TV  (32LM565BPTA) Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube Operating System: WebOS"
},
{    
    image:"https://rukminim1.flixcart.com/image/416/416/kikluvk0/television/h/8/t/thomson-24tm2490-original-imafybphgnhfwuvp.jpeg?q=70",
    id:35,
    rating:4,  
    quantity:1,
    category:"tv",
    model:"Thomson R9 60 cm (24 inch)",
    brand:"thompson",
   actual_price:400,
    discount_price:300,
    product_detail:" Thomson R9 60 cm (24 inch) HD Ready LED TV  (24TM2490) Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube Operating System: WebOS"
},

{    
    image:"https://rukminim1.flixcart.com/image/416/416/kf5pzm80/television/7/c/f/samsung-ua43t5350akxxl-original-imafvz8zyuatg8ev.jpeg?q=70",
    id:36,
    rating:4,  
    quantity:1,
    category:"tv",
    model:"SAMSUNG 108 cm (43 inch) ",
    brand:"samsung",
   actual_price:400,
    discount_price:300,
    product_detail:" SAMSUNG 108 cm (43 inch) Full HD LED Smart TV  (UA43T5350AKXXL) Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube Operating System: WebOS"
},
{    
    image:"https://rukminim1.flixcart.com/image/416/416/k4hcjgw0pkrrdj/headphone-refurbished/n/j/4/u-cosmo-7-1-rgb-redgear-original-imafn7ywg2rnygmy.jpeg?q=70",
    id:37,
    rating:4,  
    quantity:1,
    category:"headset",
    model:"Redgear Cosmo 7.1 RGB ",
    brand:"redgear",
   actual_price:400,
    discount_price:300,
    product_detail:" Redgear Cosmo 7.1 RGB Wired Gaming Headset  (Black, On the Ear) With Mic:Yes Connector type: 3.5 mm"
},

{    
    image:"https://rukminim1.flixcart.com/image/416/416/krf91u80/headphone/j/i/h/h-110-logitech-original-imag582qfngypaqj.jpeg?q=70",
    id:38,
    rating:4,  
    quantity:1,
    category:"headset",
    model:"Logitech H-110  ",
   brand:"logitech",
    actual_price:400,
    discount_price:300,
        product_detail:"Logitech H-110 Wired Headset  (Black, On the Ear) With Mic:Yes Connector type: 3.5 mm"
},

{    
    image:"https://rukminim1.flixcart.com/image/416/416/kpr8k280/headphone/v/q/a/da2003-dizo-original-imag3xhynvawvdzs.jpeg?q=70",
    id:39,
    rating:4,  
    quantity:1,
    category:"headset",
    model:" DIZO by realme TechLife Wireless",
    brand:"dizo",
   actual_price:400,
    discount_price:300,
    product_detail:"DIZO by realme TechLife Wireless Bluetooth Headset ,Wireless range: 10 m,Charging time: 2 hrs,11.2mm Dynamic Bass Boost Driver, 10mins Charge for 120 mins Playback "
},

{    
    image:"https://rukminim1.flixcart.com/image/416/416/kvjuufk0/headphone/t/s/t/-original-imag8f6ghnarscht.jpeg?q=70",
    id:40,
    rating:4,  
    quantity:1,
    category:"headset",
    model:" boAt Airdopes 402 Bluetooth ",
    brand:"boat",
   actual_price:400,
    discount_price:300,
    product_detail:"boAt Airdopes 402 Bluetooth Headset  (Bold Blue, True Wireless),Wireless range: 10 m,Charging time: 2 hrs,11.2mm Dynamic Bass Boost Driver, 10mins Charge for 120 mins Playback "
},

{    
    image:"https://rukminim1.flixcart.com/image/416/416/k4hcjgw0pkrrdj/headphone-refurbished/n/j/4/u-cosmo-7-1-rgb-redgear-original-imafn7ywg2rnygmy.jpeg?q=70",
    id:41,
    rating:4,  
    quantity:1,
    category:"headset",
    model:"Redgear Cosmo 7.1 RGB ",
    brand:"redgear",
   actual_price:400,
    discount_price:300,
    product_detail:" Redgear Cosmo 7.1 RGB Wired Gaming Headset  (Black, On the Ear) With Mic:Yes Connector type: 3.5 mm"
},

{    
    image:"https://rukminim1.flixcart.com/image/416/416/krf91u80/headphone/j/i/h/h-110-logitech-original-imag582qfngypaqj.jpeg?q=70",
    id:42,
    rating:4,  
    quantity:1,
    category:"headset",
    model:"Logitech H-110  ",
   brand:"logitech",
    actual_price:400, 
      discount_price:300, 
         product_detail:"Logitech H-110 Wired Headset  (Black, On the Ear) With Mic:Yes Connector type: 3.5 mm"
},


{    
    image:"https://rukminim1.flixcart.com/image/416/416/kvjuufk0/headphone/t/s/t/-original-imag8f6ghnarscht.jpeg?q=70",
    id:44,
    rating:4,  
    quantity:1,
    category:"headset",
    model:" boAt Airdopes 402 Bluetooth ",
    brand:"boat",
   actual_price:400,
    discount_price:300,
    product_detail:"boAt Airdopes 402 Bluetooth Headset  (Bold Blue, True Wireless),Wireless range: 10 m,Charging time: 2 hrs,11.2mm Dynamic Bass Boost Driver, 10mins Charge for 120 mins Playback "
},

{    
    image:"https://rukminim1.flixcart.com/image/416/416/k4hcjgw0pkrrdj/headphone-refurbished/n/j/4/u-cosmo-7-1-rgb-redgear-original-imafn7ywg2rnygmy.jpeg?q=70",
    id:45,
    rating:4,  
    quantity:1,
    category:"headset",
    model:"Redgear Cosmo 7.1 RGB ",
    brand:"redgear",
   actual_price:400,
    discount_price:300,
    product_detail:" Redgear Cosmo 7.1 RGB Wired Gaming Headset  (Black, On the Ear) With Mic:Yes Connector type: 3.5 mm"
},

{    
    image:"https://rukminim1.flixcart.com/image/416/416/krf91u80/headphone/j/i/h/h-110-logitech-original-imag582qfngypaqj.jpeg?q=70",
    id:46,
    rating:4,  
    quantity:1,
    category:"headset",
    model:"Logitech H-110  ",
   brand:"logitech",
    actual_price:400,
       discount_price:300,
           product_detail:"Logitech H-110 Wired Headset  (Black, On the Ear) With Mic:Yes Connector type: 3.5 mm"
},

{    
    image:"https://rukminim1.flixcart.com/image/416/416/kpr8k280/headphone/v/q/a/da2003-dizo-original-imag3xhynvawvdzs.jpeg?q=70",
    id:47,
    rating:4,  
    quantity:1,
    category:"headset",
    model:" DIZO by realme TechLife Wireless",
    brand:"dizo",
   actual_price:400,
    discount_price:300,
    product_detail:"DIZO by realme TechLife Wireless Bluetooth Headset ,Wireless range: 10 m,Charging time: 2 hrs,11.2mm Dynamic Bass Boost Driver, 10mins Charge for 120 mins Playback "
},

{    
    image:"https://rukminim1.flixcart.com/image/416/416/kvjuufk0/headphone/t/s/t/-original-imag8f6ghnarscht.jpeg?q=70",
    id:48,
    rating:4,  
    quantity:1,
    category:"headset",
    model:" boAt Airdopes 402 Bluetooth ",
    brand:"boat",
   actual_price:400,
    discount_price:300,
    product_detail:"boAt Airdopes 402 Bluetooth Headset  (Bold Blue, True Wireless),Wireless range: 10 m,Charging time: 2 hrs,11.2mm Dynamic Bass Boost Driver, 10mins Charge for 120 mins Playback "
},
{    
    image:"https://rukminim1.flixcart.com/image/416/416/krf91u80/headphone/j/i/h/h-110-logitech-original-imag582qfngypaqj.jpeg?q=70",
    id:49,
    rating:4,  
    quantity:1,
    category:"headset",
    model:"Logitech H-110  ",
   brand:"logitech",
    actual_price:400,
       discount_price:300,
           product_detail:"Logitech H-110 Wired Headset  (Black, On the Ear) With Mic:Yes Connector type: 3.5 mm"
},
{    
    image:"https://rukminim1.flixcart.com/image/416/416/krf91u80/headphone/j/i/h/h-110-logitech-original-imag582qfngypaqj.jpeg?q=70",
    id:50,
    rating:4,  
    quantity:1,
    category:"headset",
    model:"Logitech H-110  ",
   brand:"logitech",
    actual_price:400,
       discount_price:300,
           product_detail:"Logitech H-110 Wired Headset  (Black, On the Ear) With Mic:Yes Connector type: 3.5 mm"
},
{    
    image:"https://rukminim1.flixcart.com/image/416/416/krf91u80/headphone/j/i/h/h-110-logitech-original-imag582qfngypaqj.jpeg?q=70",
    id:51,
    rating:4,  
    quantity:1,
    category:"headset",
    model:"Logitech H-110  ",
   brand:"logitech",
    actual_price:400,
       discount_price:300,
           product_detail:"Logitech H-110 Wired Headset  (Black, On the Ear) With Mic:Yes Connector type: 3.5 mm"
},
{    
    image:"https://rukminim1.flixcart.com/image/416/416/krf91u80/headphone/j/i/h/h-110-logitech-original-imag582qfngypaqj.jpeg?q=70",
    id:52,
    rating:4,  
    quantity:1,
    category:"headset",
    model:"Logitech H-110  ",
   brand:"logitech",
    actual_price:400,
       discount_price:300,
           product_detail:"Logitech H-110 Wired Headset  (Black, On the Ear) With Mic:Yes Connector type: 3.5 mm"
},

{    
    image:"https://rukminim1.flixcart.com/image/416/416/kikluvk0/television/h/8/t/thomson-24tm2490-original-imafybphgnhfwuvp.jpeg?q=70",
    id:53,
    rating:4,  
    quantity:1,
    category:"tv",
    model:"Thomson R9 60 cm (24 inch)",
    brand:"thompson",
   actual_price:400,
    discount_price:300,
    product_detail:" Thomson R9 60 cm (24 inch) HD Ready LED TV  (24TM2490) Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube Operating System: WebOS"
},
{    
    image:"https://rukminim1.flixcart.com/image/416/416/kikluvk0/television/h/8/t/thomson-24tm2490-original-imafybphgnhfwuvp.jpeg?q=70",
    id:54,
    rating:4,  
    quantity:1,
    category:"tv",
    model:"Thomson R9 60 cm (24 inch)",
    brand:"thompson",
   actual_price:400,
    discount_price:300,
    product_detail:" Thomson R9 60 cm (24 inch) HD Ready LED TV  (24TM2490) Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube Operating System: WebOS"
},
{    
    image:"https://rukminim1.flixcart.com/image/416/416/kikluvk0/television/h/8/t/thomson-24tm2490-original-imafybphgnhfwuvp.jpeg?q=70",
    id:55,
    rating:4,  
    quantity:1,
    category:"tv",
    model:"Thomson R9 60 cm (24 inch)",
    brand:"thompson",
   actual_price:400,
    discount_price:300,
    product_detail:" Thomson R9 60 cm (24 inch) HD Ready LED TV  (24TM2490) Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube Operating System: WebOS"
},
{    
    image:"https://rukminim1.flixcart.com/image/416/416/kikluvk0/television/h/8/t/thomson-24tm2490-original-imafybphgnhfwuvp.jpeg?q=70",
    id:56,
    rating:4,  
    quantity:1,
    category:"tv",
    model:"Thomson R9 60 cm (24 inch)",
    brand:"thompson",
   actual_price:400,
    discount_price:300,
    product_detail:" Thomson R9 60 cm (24 inch) HD Ready LED TV  (24TM2490) Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube Operating System: WebOS"
},
{
    image:"https://th.bing.com/th/id/OIP.yTzLjjx_cjYvXrj_G2Bj4QHaHa?w=220&h=220&c=7&r=0&o=5&pid=1.7",
    rating:4,  
    quantity:1,
    id:57,

    brand:"iphone",
    category:"mobile",
    model:"iphone 10",
   actual_price:400,
    discount_price:300,
    product_detail:" iphone 10 (4G) , iphone 10 Pro (4G) Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers Product Name : iphone 10 (4G) , Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers"
},   {
    image:"https://th.bing.com/th/id/OIP.yTzLjjx_cjYvXrj_G2Bj4QHaHa?w=220&h=220&c=7&r=0&o=5&pid=1.7",
    rating:4,  
    quantity:1,
    id:58,

    brand:"iphone",
    category:"mobile",
    model:"iphone 10",
   actual_price:400,
    discount_price:300,
    product_detail:" iphone 10 (4G) , iphone 10 Pro (4G) Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers Product Name : iphone 10 (4G) , Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers"
},   {
    image:"https://th.bing.com/th/id/OIP.yTzLjjx_cjYvXrj_G2Bj4QHaHa?w=220&h=220&c=7&r=0&o=5&pid=1.7",
    rating:4,  
    quantity:1,
    id:59,

    brand:"iphone",
    category:"mobile",
    model:"iphone 10",
   actual_price:400,
    discount_price:300,
    product_detail:" iphone 10 (4G) , iphone 10 Pro (4G) Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers Product Name : iphone 10 (4G) , Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers"
},   {
    image:"https://th.bing.com/th/id/OIP.yTzLjjx_cjYvXrj_G2Bj4QHaHa?w=220&h=220&c=7&r=0&o=5&pid=1.7",
    rating:4,  
    quantity:1,
    id:60,

    brand:"iphone",
    category:"mobile",
    model:"iphone 10",
   actual_price:400,
    discount_price:300,
    product_detail:" iphone 10 (4G) , iphone 10 Pro (4G) Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers Product Name : iphone 10 (4G) , Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers"
},
{
    image:"https://th.bing.com/th/id/OIP.PxNADFuECPii0APvvZZdowHaHa?w=159&h=180&c=7&r=0&o=5&pid=1.7",
    rating:4,  
    quantity:1,
    id:61,

   brand:"redmi",
    category:"mobile",
    model:"redmi note 10",
   actual_price:400,
    discount_price:300,
    product_detail:" redmi note 10 (4G)  Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers Product Name : iphone 10 (4G) , Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers"
},
{
    image:"https://th.bing.com/th/id/OIP.PxNADFuECPii0APvvZZdowHaHa?w=159&h=180&c=7&r=0&o=5&pid=1.7",
    rating:4,  
    quantity:1,
    id:62,

   brand:"redmi",
    category:"mobile",
    model:"redmi note 10",
   actual_price:400,
    discount_price:300,
    product_detail:" redmi note 10 (4G)  Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers Product Name : iphone 10 (4G) , Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers"
}, {
    image:"https://th.bing.com/th/id/OIP.PxNADFuECPii0APvvZZdowHaHa?w=159&h=180&c=7&r=0&o=5&pid=1.7",
    rating:4,  
    quantity:1,
    id:63,

   brand:"redmi",
    category:"mobile",
    model:"redmi note 10",
   actual_price:400,
    discount_price:300,
    product_detail:" redmi note 10 (4G)  Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers Product Name : iphone 10 (4G) , Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers"
}, {
    image:"https://th.bing.com/th/id/OIP.PxNADFuECPii0APvvZZdowHaHa?w=159&h=180&c=7&r=0&o=5&pid=1.7",
    rating:4,  
    quantity:1,
    id:64,

   brand:"redmi",
    category:"mobile",
    model:"redmi note 10",
   actual_price:400,
    discount_price:300,
    product_detail:" redmi note 10 (4G)  Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers Product Name : iphone 10 (4G) , Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers"
},
{
    image:"https://th.bing.com/th/id/OIP.QNO9_Tw4rLDNkk5VfzSuSwHaHF?w=174&h=180&c=7&r=0&o=5&pid=1.7",
    rating:4,  
    quantity:1,
    id:65,
    brand:"realme",
    category:"mobile",
    model:"realme 8pro",
   actual_price:400,
    discount_price:300,
    product_detail:" Realme 8 (4G) , Realme 8 Pro (4G) Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers Product Name : Realme 8 (4G) , Realme 8 Pro (4G) Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers"
},
{
    image:"https://th.bing.com/th/id/OIP.QNO9_Tw4rLDNkk5VfzSuSwHaHF?w=174&h=180&c=7&r=0&o=5&pid=1.7",
    rating:4,  
    quantity:1,
    id:66,
    brand:"realme",
    category:"mobile",
    model:"realme 8pro",
   actual_price:400,
    discount_price:300,
    product_detail:" Realme 8 (4G) , Realme 8 Pro (4G) Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers Product Name : Realme 8 (4G) , Realme 8 Pro (4G) Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers"
},
{
    image:"https://th.bing.com/th/id/OIP.QNO9_Tw4rLDNkk5VfzSuSwHaHF?w=174&h=180&c=7&r=0&o=5&pid=1.7",
    rating:4,  
    quantity:1,
    id:67,
    brand:"realme",
    category:"mobile",
    model:"realme 8pro",
   actual_price:400,
    discount_price:300,
    product_detail:" Realme 8 (4G) , Realme 8 Pro (4G) Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers Product Name : Realme 8 (4G) , Realme 8 Pro (4G) Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers"
},
{
    image:"https://th.bing.com/th/id/OIP.QNO9_Tw4rLDNkk5VfzSuSwHaHF?w=174&h=180&c=7&r=0&o=5&pid=1.7",
    rating:4,  
    quantity:1,
    id:68,
    brand:"realme",
    category:"mobile",
    model:"realme 8pro",
   actual_price:400,
    discount_price:300,
    product_detail:" Realme 8 (4G) , Realme 8 Pro (4G) Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers Product Name : Realme 8 (4G) , Realme 8 Pro (4G) Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers"
},
{    
    image:"https://rukminim1.flixcart.com/image/416/416/kirr24w0/computer/z/r/b/dell-na-laptop-original-imafyhm5nzfum7jj.jpeg?q=70",
    id:69,
    rating:4,  
    quantity:1,
    category:"laptop",
    model:"DELL Inspiron Ryzen 5 Quad Core 3450U",
    brand:"dell",
   actual_price:400,
    discount_price:300,
    product_detail:"Dell 15 (2021) Ryzen 5-3450U, 8GB, 512GB SSD, Win 11 + MS Office'21, AMD Vega Graphics, 15.6 (39.62 cms) FHD Display, Platinum Silver Color, Backlit KB (Inspiron 3515, D560704WIN9S)"
},
{    
    image:"https://rukminim1.flixcart.com/image/416/416/kirr24w0/computer/z/r/b/dell-na-laptop-original-imafyhm5nzfum7jj.jpeg?q=70",
    id:70,
    rating:4,  
    quantity:1,
    category:"laptop",
    model:"DELL Inspiron Ryzen 5 Quad Core 3450U",
    brand:"dell",
   actual_price:400,
    discount_price:300,
    product_detail:"Dell 15 (2021) Ryzen 5-3450U, 8GB, 512GB SSD, Win 11 + MS Office'21, AMD Vega Graphics, 15.6 (39.62 cms) FHD Display, Platinum Silver Color, Backlit KB (Inspiron 3515, D560704WIN9S)"
},
{
image:"https://th.bing.com/th/id/OIP.QNO9_Tw4rLDNkk5VfzSuSwHaHF?w=174&h=180&c=7&r=0&o=5&pid=1.7",
rating:4,
id:71,
brand:"realme",
category:"mobile",
model:"realme 8pro",
actual_price:400,
discount_price:300,
product_detail:" Realme 8 (4G) , Realme 8 Pro (4G) Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers Product Name : Realme 8 (4G) , Realme 8 Pro (4G) Printed Mobile Phone Back Cover and Case I Love London by Maestrocovers"
},
    ]})
    const[state,dispatch]=useReducer(reducer,dataset)
    
    return(
        <>
        <ContextData.Provider value={{DataState:state,DataDispatch:dispatch}}>

        {props.children}
        </ContextData.Provider>
        </>
    )
}
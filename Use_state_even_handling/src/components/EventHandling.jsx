import React from 'react';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
const carddata = [
    {
       src: card1,
       title: "Declarative",
       description: "React makes it painless to create interactive UIs",
       instock:true
   },
    {
       src: card2,
       title: "Components",
       description: "Build encapsulated components that manage their state",
       instock:false
   }
  
];
function EventHandling() {
    return (
  
      <>
      <div className="w-full h-full  gap-20 bg-slate-50 flex align-middle justify-center items-center flex-wrap">
              {   //this bracket is must
              
               carddata.map((card,index)=>{
                     const {src,title,description}=card;
                   return ( <>
                              <div className="flex flex-col w-[11rem] justify-center items-center" key={index}>
                                <img className="w-full object-cover mix-blend-color-burn" src={src} alt={title}/>
                                <h1 className="text-3xl font-semibold">{title}</h1>
                                <p className="text-1xl text-left pl-4 text-[#343F5C]">{description}</p>
                                
                                <button onMouseOver={()=>alert(`${title}`)} className={`${card.instock?"bg-blue-500 text-blue-50":"bg-pink-600 text-blue-50"} text-2xl text-green-950 w-fit h-fit shadow-md p-1 drop-shadow-sm accent-transparent rounded-lg self-start ml-4`}>
                                  {card.instock?"instock":"out of stock"}
                                </button>
                              </div>
                              </>
                          )
           
  })
              }
               
        </div>
      </>
     
    )
  }

export default EventHandling

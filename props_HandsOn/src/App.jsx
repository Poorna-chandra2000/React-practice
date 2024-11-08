import React from 'react'
import './App.css'
import List from './components/List'
import List2withDataObject from './components/List2withDataObject'
function App() {
  
  const data=[
    {
       name:"cat",
       category:"tiger"
    },
    {
       name:"dog",
       category:"wolf"
    }
  ]

  return (
    <>
   <List text="hello"/>
   <List text="hii"/>

   {data?.map((animal,index)=>{
   return  <List2withDataObject key={index} index={index} {...animal}/>
   })

   }
    </>
  )
}

export default App

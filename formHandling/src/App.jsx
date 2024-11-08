import React, { useState } from 'react';
import Cards from './components/Cards';
import Form from './components/Form';
import UpdateForm from './components/updateForm';

const App = () => {
  const [users,setUsers]=useState([]);

  //drnf thid fuction to forms to recieve data
  const handleFormSubmitData=(data)=>{
    setUsers([...users,data])
  }

  const handleDeleteGetIndex=(index)=>{
    const UpadtedUserAfterdelete=users.filter((_,i)=>i!=index)
    setUsers(UpadtedUserAfterdelete)
  }

  
  const[updateUserIdex,setupdateUserIdex]=useState();//got the index
  const handleUpdateForm=(data)=>{//now get the data from data
    const{uname,uemail,uimage}=data; //destructure the object data that came from update form
      const updatedUsers=[...users];
      updatedUsers[updateUserIdex]={name:uname,email:uemail,image:uimage}
      setUsers(updatedUsers)

    // Hide the update form after submission
    setupdateUserIdex(null);
  }
  

  const[search,setsearch]=useState("");

 

  const [showform,setshowform]=useState(false);

  return (
    <div className='w-ful h-screen bg-slate-200 flex items-center justify-center'>
     
      <div className='container mx-auto flex flex-col justify-center items-center'>
      <button onClick={()=>setshowform(!showform)} className='font-lobster font-semibold hover:bg-cyan-200 bg-cyan-600 px-2 py-2 text-wrap text-xl rounded-lg text-cyan-200 hover:text-cyan-800 shadow-lg shadow-cyan-400/80'>
          LETS START PLAYING WITH REACT FORMS
        </button>
       
        
{/* conditional rendering */}
   

      {
      showform &&
      <> <Form handleFormSubmitData={handleFormSubmitData}/> 
      <input value={search} onChange={(e)=>setsearch(e.target.value)}
      placeholder='Search...' type="text" className='outline-offset-2 outline-green-600 outline-2 rounded-xl'/>
      </>
      }

{
   updateUserIdex!=null &&
   <UpdateForm users={users} updateUserIdex={updateUserIdex} handleUpdateForm={handleUpdateForm}/>//send and get the databack
}

        <Cards users={users} search={search} handleDeleteGetIndex={handleDeleteGetIndex} setupdateUserIdex={setupdateUserIdex}/>
      </div>
    </div>
  )
}

export default App

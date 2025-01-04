import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import Card from "./Card.jsx";


const FetchOnClick = () => {


    // Fetch posts based on the selected product
    const fetchPosts = async () => {
        const url = 'http://localhost:4000/posts';                  // All products URL
        const response = await axios.get(url);
        return response.data;
    };

    // Fetch data using React Query
    const { data, isLoading, isError, error,refetch} = useQuery({
        queryKey: ["posts"],//if you are trying to fetch product then also mention that state
        queryFn: fetchPosts,
        // enabled:false  //this is important and also use isFetching flag if you wanna verify,destrcture it from useQuery
    });


//what if i wanna toggle display on click and not display on click
 const [display, setDisplay] = useState(false);
 const handleToggle=()=>{
     setDisplay(!display); //this isnt good way
     // refetch(); use this
 }

 //when you use state here outside of return statement it wont work
    //use the below logic state for set button in return statement..
    //use state get updated in return statement

    //for deletion
    const deletePost=async(prductId)=>{
     const url='http://localhost:4000/posts/'+prductId;
     return await axios.delete(url);
    }
    const queryClient=useQueryClient();//this is to invalidate and trigure the change on success after del to auto fetch

    const {mutate:deldata,isSuccess:success,data:deleteddata,isError:dataerror,error:message}=useMutation({
        mutationFn:deletePost,
        onSuccess:()=>{
            queryClient.invalidateQueries("posts")
        }
    })

    const handleDelete=(id)=>{
      deldata(id);
      console.log(deleteddata)
        if(success){
            alert("deleted: "+id+" sucesfully deleted")
        }else if(dataerror){
            alert("error: "+dataerror)
        }
    }

    return (

        <div className="flex flex-wrap w-screen h-screen justify-center pt-[4em] bg-slate-800 overflow-y-auto">
          <button className="bg-slate-800 p-3 w-fit h-fit font-poppins font-[900] text-slate-300 fixed top-3 z-30 shadow-slate-600 shadow-md border-2  rounded-md" onClick={handleToggle}>{display?"hide data":"fetch data"}</button> {/*//directly call the reftech reference*/}
            {isLoading ? (
                <h1>Loading...</h1>
            ) : isError ? (
                <h1>{error.message}</h1>
            ) : (
                display &&
                data?.map((post) => (
                    // <NavLink key={post.id} to={`/productDetails/${post.id}`}>
                    //
                    // </NavLink>
                    //here use button to get product id
                    <div className="flex w-fit flex-col bg-slate-800 m-1 rounded-md" key={post.id}>
                      <Card {...post}  handleDelete={handleDelete} postId={post.id}/>  {/*//now get the id from the card*/}
                      <button className="bg-slate-700 rounded-sm w-fit self-center px-4 shadow-red-500 shadow-sm inset-4 drop-shadow-md" onClick={()=>handleDelete(post.id)}>🗑️</button>
                    </div>

                ))
            )}
        </div>
    );
}
export default FetchOnClick
//update included
// const updatePost = async ({ id, updatedData }) => {
//     const url = `http://localhost:4000/posts/${id}`;
//     return await axios.put(url, updatedData);
//   };

//   const queryClient = useQueryClient();



//   const { mutate: updateData } = useMutation(updatePost, {
//     onSuccess: () => {
//       queryClient.invalidateQueries("posts");
//     },
//   });



//   // Update Modal Logic
//   const [editPost, setEditPost] = useState(null); // Stores the post being edited
//   const [updatedContent, setUpdatedContent] = useState("");

//   const handleEditClick = (post) => {
//     setEditPost(post);
//     setUpdatedContent(post.content); // Assuming posts have a `content` field
//   };

//   const handleUpdate = () => {
//     if (editPost) {
//       updateData({ id: editPost.id, updatedData: { ...editPost, content: updatedContent } });
//       setEditPost(null); // Close modal
//     }
//   };
//////////////////////logic/////////////////////////////////////////////////////////////////
// return (
//     <div className="flex flex-wrap w-screen h-screen justify-center pt-[4em] bg-slate-800 overflow-y-auto">
//       <button
//         className="bg-slate-800 p-3 w-fit h-fit font-poppins font-[900] text-slate-300 fixed top-3 z-30 shadow-slate-600 shadow-md border-2 rounded-md"
//         onClick={handleToggle}
//       >
//         {display ? "Hide Data" : "Fetch Data"}
//       </button>

//       {isLoading ? (
//         <h1>Loading...</h1>
//       ) : isError ? (
//         <h1>{error.message}</h1>
//       ) : (
//         display &&
//         data?.map((post) => (
//           <div className="flex w-fit flex-col bg-slate-800 m-1 rounded-md" key={post.id}>
//             <Card {...post} handleDelete={handleDelete} postId={post.id} />
//             <button
//               className="bg-slate-700 rounded-sm w-fit self-center px-4 shadow-red-500 shadow-sm inset-4 drop-shadow-md"
//               onClick={() => handleDelete(post.id)}
//             >
//               🗑️
//             </button>
//             <button
//               className="bg-slate-600 rounded-sm w-fit self-center px-4 shadow-blue-500 shadow-sm inset-4 drop-shadow-md"
//               onClick={() => handleEditClick(post)}
//             >
//               ✏️ Edit
//             </button>
//           </div>
//         ))
//       )}
// {editPost && (
//     <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-4 rounded-md shadow-md">
//         <h2>Edit Post</h2>
//         <textarea
//           value={updatedContent}
//           onChange={(e) => setUpdatedContent(e.target.value)}
//           className="w-full p-2 border rounded-md"
//         />
//         <div className="flex justify-end mt-2">
//           <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleUpdate}>
//             Save
//           </button>
//           <button
//             className="bg-gray-500 text-white px-4 py-2 rounded-md"
//             onClick={() => setEditPost(null)}
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   )}
import React, {useState} from 'react'
import {useForm} from "react-hook-form";
import {useMutation,useQueryClient} from "@tanstack/react-query";
import axios from "axios";

const AddDetails = () => {
    //no need if on change event if you are using react hoook form
    //register is also and object which keep appending details once automatically,so use {...register()} with inputs spread operator
    const {handleSubmit,register,reset}=useForm()
    const [posts, setPosts] = useState({});
    const handleSubmitData=(productdata)=>{
        console.log(productdata)
          setPosts(prev=>prev=productdata);//this usstate works Asynchronously so might be empty
        console.log(posts) //donot use state in such scinarios
        //here call the mutate funtion mutate() or its alias name if you ahev given any ,i have given
        postdata(productdata);//this will  pic parameters,pass form data directly not with state
          reset();
    }
    //for post update del you need query client obj
    const queryClient = useQueryClient();
    //now call the api with seperate fuction to make it modular
    const addPosts=async(productdata)=>{
        const add=await axios.post("http://localhost:4000/posts",productdata)
    }
    //use mutations
    //give alias name for mutate if you want
    //next call the mutate function
    const {mutate:postdata,isSuccess,isError,error}=useMutation({
        //remeber to call mutate function in hadnle submit to trigger post api
      mutationFn:addPosts,
        onSuccess: () => {
            queryClient.invalidateQueries(["posts"]); // Matches default state in `Posts`
        },
    });

    return (
        <div className="bg-slate-800">
            <form className="flex flex-col"
                  onSubmit={handleSubmit(handleSubmitData)}> {/*//the data will be automatically passed by react hook for the fuction defined in handle submit*/}
                <input placeholder="Enter title" {...register('title')} type="text"/>
                <input placeholder="Enter price" {...register('price')} type="text"/>
                <input placeholder="Enter decription" {...register('description')} type="text"/>
                <input placeholder="Enter category" {...register('category')} type="text"/>
                <input placeholder="Enter imageUrl" {...register('image')} type="text"/>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                    Submit
                </button>
            </form>
        </div>

    )
}
export default AddDetails

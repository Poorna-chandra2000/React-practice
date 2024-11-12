import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {NavLink} from "react-router-dom";
import Card from "./Card.jsx";
import {useState} from "react";

const FetchOnClick = () => {


    // Fetch posts based on the selected product
    const fetchPosts = async () => {
        const url = 'http://localhost:4000/posts';                  // All products URL
        const response = await axios.get(url);
        return response.data;
    };

    // Fetch data using React Query
    const { data, isLoading, isError, error,refetch ,isFetching} = useQuery({
        queryKey: ["posts"],//if you are trying to fetch single product then also metion that state
        queryFn: fetchPosts,
        enabled:false
    });


//what if i wanna toggle display on click and not display on click
    const [display, setDisplay] = useState(false);
 const handleToggle=(e)=>{
     setDisplay(!display);
     refetch();
 }

 //when you use state here outside of return statement it wont work
    //use the below logic state for set button in return statement..
    //use state get updated in return statement



    return (

        <div className="flex flex-wrap w-screen h-screen justify-center">
          <button className="bg-slate-800 p-3 w-fit h-fit font-poppins font-[900] text-slate-300 fixed top-3" onClick={handleToggle}>{display?"hide data":"fetch data"}</button> {/*//directly call the reftech reference*/}
            {isLoading ? (
                <h1>Loading...</h1>
            ) : isError ? (
                <h1>{error.message}</h1>
            ) : (
                display &&
                data?.map((post) => (
                    <NavLink key={post.id} to={`/productDetails/${post.id}`}>
                        <Card {...post} />
                    </NavLink>
                ))
            )}
        </div>
    );
}
export default FetchOnClick

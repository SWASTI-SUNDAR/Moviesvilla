import axios from "axios"
const BASE_URL="https://api.themoviedb.org/3"
// const TMBD_TOKEN=import.meta.env.
// VITE_APP_TMBD_TOKEN;
const TMBD_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmQ3ODExNjhjMjNlNDU1ZGYzZGNkZDczOWI2Y2QwNiIsInN1YiI6IjY0OTM1MTVmY2ZlNDhmMDEzYWMyMzc5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ObJkeanHmlkWwRWNTrRq6ZeqdPBhIL8JMojQp_UyqBc";
const headers={
    Authorization: "Bearer " +
    TMBD_TOKEN,
};
export const fetchDataFromApi= async(url,params)=>{
    try {
        const {data}=await axios.get(
           BASE_URL + url,{
            headers,
            params
           }
        )
        return data;
    } catch (error) {
        console.log(error)
        return error;
    }
}

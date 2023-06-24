import axios from "axios"
const BASE_URL="https://api.themoviedb.org/3"
// const TMBD_TOKEN=import.meta.env.
// VITE_APP_TMBD_TOKEN;
const TMBD_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODQ5N2QzMDRkNGM2YWRlMmMwYmIzZDM1ZWI3NWZiZiIsInN1YiI6IjY0OTNlYTYzYWY2ZTk0MDEwNmY5ZWY3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.InhPaJxmapkYMQoRHiIdjLhdNcHDH9yXaOPM1MC1pqQ"; 
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

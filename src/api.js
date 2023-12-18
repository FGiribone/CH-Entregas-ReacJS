import axios from "axios";


const searchImages = async ()=>{

    const response = await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
            Authorization:"Client-ID vZpiIQ44GmSjKxHUMpTcUNlDQtGodvJeR9sUeiNUhoo"
        },
        params:{
            query:"Cats"
        }
    })

    console.log(response);
    return response

}

export default searchImages;
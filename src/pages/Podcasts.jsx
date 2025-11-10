import axios from "axios"
import { useEffect } from "react"
import { getProjectIdConfig } from "../utils/config"

export const Podcasts = () => {

    const fetchAlbums = async() => {

        try {
            const albums = await axios.get('https://academics.newtonschool.co/api/v1/music/album', getProjectIdConfig());
            console.log(albums);

        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {

        fetchAlbums();

    }, []);

    return (

        <main>
            <h3>Comming Soon</h3>
        </main>
        
    )

}
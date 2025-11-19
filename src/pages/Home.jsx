// import axios from "axios";
import { useEffect, useState } from "react"
// import { getProjectIdConfig } from "../utils/config";
import { MusicCard } from "../components/Music/MusicCard";
import { MusicProvider } from "../Provider/MusicProvider";
import { MusicPlayer } from "../components/Music/MusicPlayer";

export const Home = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [musicList, setMusicList] = useState([]);

    const fetchMusic = async() => {
        setIsLoading(true);

        try {
            // const musics = await axios.get('https://academics.newtonschool.co/api/v1/music/song', getProjectIdConfig());
            const musics = {
                data : {
                    data : [
                        {
                            _id : 1,
                            title : 'Guitar Music - 1',
                            thumbnail : 'https://e0.pxfuel.com/wallpapers/699/183/desktop-wallpaper-guitar-is-on-fire-guitar-music-thumbnail.jpg',
                            artist : [{name : 'Alex'}, {name : 'Tom'}],
                            audio_url : 'http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/win.ogg'
                        },
                        {
                            _id : 2,
                            title : 'Guitar Music - 2',
                            thumbnail : 'https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_original/bunker-music-youtube-thumbnail-template-o61mex252035a5.webp',
                            artist : [{name : 'Rock'}, {name : 'John'}],
                            audio_url : 'http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/race2.ogg'
                        },
                        {
                            _id : 3,
                            title : 'Groovy Vibe',
                            thumbnail : 'https://cdn.pixabay.com/audio/2025/11/18/08-31-33-959_200x200.png',
                            artist : [{name : 'Bransboynd'}],
                            audio_url : 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3'
                        },
                        {
                            _id : 3,
                            title : 'Mystic Dream',
                            thumbnail : 'https://cdn.pixabay.com/audio/2024/11/10/23-21-41-336_200x200.png',
                            artist : [{name : 'Restum-Anoush'}],
                            audio_url : 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3'
                        },
                        {
                            _id : 4,
                            title : 'Risk',
                            thumbnail : 'https://cdn.pixabay.com/audio/2023/01/27/10-02-46-157_200x200.jpg',
                            artist : [{name : 'StudioKolomna'}],
                            audio_url : 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3'
                        },
                        {
                            _id : 5,
                            title : 'Energetic Percussion',
                            thumbnail : 'https://cdn.pixabay.com/audio/2024/10/23/23-27-53-676_200x200.jpg',
                            artist : [{name : 'NikitaKondrashev'}],
                            audio_url : 'http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg'
                        }
                    ]
                }
            }
            // console.log(musics);

            setMusicList(musics.data.data);

        } catch (error) {
            console.error(error);
        }
        finally {
            setIsLoading(false);
        }

    }

    useEffect(() => {
        fetchMusic();
    }, []);

    return (

        isLoading ? <div>Loading...</div> : 
        (
            musicList && (
                <MusicProvider>
                    <section className="musicList-Container">
                        {musicList.map(({_id, ...music}) => <MusicCard key={_id}  {...music} />)}
                    </section>
                    <MusicPlayer />
                </MusicProvider>
            )

        )
        
    )

}
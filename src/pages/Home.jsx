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
                            title : 'Kohinoor',
                            thumbnail : 'https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_original/bunker-music-youtube-thumbnail-template-o61mex252035a5.webp',
                            artist : [{name : 'Vishal'}, {name : 'Shekhar'}, {name : 'Mahadevan'}, {name : 'Sonu Nigam'}],
                            audio_url : 'http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/win.ogg'
                        },
                        {
                            _id : 2,
                            title : 'Gulabi Ankhen',
                            thumbnail : 'https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_original/bunker-music-youtube-thumbnail-template-o61mex252035a5.webp',
                            artist : [{name : 'Vishal'}, {name : 'Shekhar'}, {name : 'Mahadevan'}, {name : 'Sonu Nigam'}],
                            audio_url : 'http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/race2.ogg'
                        }
                    ]
                }
            }
            console.log(musics);

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
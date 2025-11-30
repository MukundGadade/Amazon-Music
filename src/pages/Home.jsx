// import axios from "axios";
import { useEffect, useState } from "react"
// import { getProjectIdConfig } from "../utils/config";
import { MusicCard } from "../components/Music/MusicCard";

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
                            _id : 4,
                            title : 'Mystic Dream',
                            thumbnail : 'https://cdn.pixabay.com/audio/2024/11/10/23-21-41-336_200x200.png',
                            artist : [{name : 'Restum-Anoush'}],
                            audio_url : 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3'
                        },
                        {
                            _id : 5,
                            title : 'Risk',
                            thumbnail : 'https://cdn.pixabay.com/audio/2023/01/27/10-02-46-157_200x200.jpg',
                            artist : [{name : 'StudioKolomna'}],
                            audio_url : 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3'
                        },
                        {
                            _id : 6,
                            title : 'Energetic Percussion',
                            thumbnail : 'https://cdn.pixabay.com/audio/2024/10/23/23-27-53-676_200x200.jpg',
                            artist : [{name : 'NikitaKondrashev'}],
                            audio_url : 'http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg'
                        },
                        {
                            _id : 7,
                            title : 'Upbeat Music',
                            thumbnail : 'https://cdn.pixabay.com/audio/2025/09/02/08-47-57-557_200x200.png',
                            artist : [{name : 'DELOSound'}],
                            audio_url : 'http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/ateapill.ogg'
                        },
                        {
                            _id : 8,
                            title : 'Jazzy Frenchy',
                            thumbnail : 'https://cdn.bensound.com/image/cover/jazzyfrenchy-X2.webp',
                            artist : [{name : 'Benjamin Tissot'}],
                            audio_url : 'http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/intromusic.ogg'
                        },
                        {
                            _id : 9,
                            title : 'Sway',
                            thumbnail : 'https://cdn.bensound.com/image/cover/yuniorarronte-sway-X2.webp',
                            artist : [{name : 'Yunior Arronte'}],
                            audio_url : 'http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/lose.ogg'
                        },
                        {
                            _id : 10,
                            title : 'High Octane',
                            thumbnail : 'https://cdn.bensound.com/image/cover/highoctane-X2.webp',
                            artist : [{name : 'Benjamin Tissot'}],
                            audio_url : 'http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/start.ogg'
                        },
                        {
                            _id : 11,
                            title : 'Little Planet',
                            thumbnail : 'https://cdn.bensound.com/image/cover/littleplanet-X2.webp',
                            artist : [{name : 'Benjamin Tissot'}],
                            audio_url : 'http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/menu.ogg'
                        },
                        {
                            _id : 12,
                            title : 'Hey!',
                            thumbnail : 'https://cdn.bensound.com/image/cover/hey-X2.webp',
                            artist : [{name : 'Benjamin Tissot'}],
                            audio_url : 'http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/race1.ogg'
                        },
                        {
                            _id : 13,
                            title : 'Instinct',
                            thumbnail : 'https://cdn.bensound.com/image/cover/instinct-X2.webp',
                            artist : [{name : 'Benjamin Tissot'}],
                            audio_url : 'http://codeskulptor-demos.commondatastorage.googleapis.com/descent/background%20music.mp3'
                        },
                        {
                            _id : 14,
                            title : 'Buddy',
                            thumbnail : 'https://cdn.bensound.com/image/cover/buddy-X2.webp',
                            artist : [{name : 'Benjamin Tissot'}],
                            audio_url : 'https://universal-soundbank.com/sounds/5563.mp3'
                        },
                        {
                            _id : 15,
                            title : 'Cute',
                            thumbnail : 'https://cdn.bensound.com/image/cover/cute-X2.webp',
                            artist : [{name : 'Benjamin Tissot'}],
                            audio_url : 'http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3'
                        },
                        {
                            _id : 16,
                            title : 'E.R.F.',
                            thumbnail : 'https://cdn.bensound.com/image/cover/erf-X2.webp',
                            artist : [{name : 'Benjamin Tissot'}],
                            audio_url : 'https://universal-soundbank.com/sounds/2969.mp3'
                        },
                        {
                            _id : 17,
                            title : 'Emotional Piano',
                            thumbnail : 'https://png.pngtree.com/png-clipart/20240515/original/pngtree-play-music-promotional-video-thumbnail-post-ready-file-eps-png-image_15099137.png',
                            artist : [{name : 'pat102'}],
                            audio_url : 'https://universal-soundbank.com/sounds/2990.mp3'
                        },
                        {
                            _id : 18,
                            title : 'Vlog Hip-Hop Music',
                            thumbnail : 'https://cdn.pixabay.com/audio/2025/05/29/23-01-49-573_200x200.jpg',
                            artist : [{name : 'Tunetank'}],
                            audio_url : 'https://universal-soundbank.com/sounds/18876.mp3'
                        },
                        {
                            _id : 19,
                            title : 'Royalty Funk',
                            thumbnail : 'https://linkstorage.linkfire.com/medialinks/images/63e390e7-226e-4ba6-8d5b-61ee8e12dc14/artwork-440x440.jpg',
                            artist : [{name : 'LXNGVX'}, {name : 'Maestro Chives'}],
                            audio_url : 'https://universal-soundbank.com/sounds/14119.mp3'
                        },
                        {
                            _id : 20,
                            title : 'Wings of Hope',
                            thumbnail : 'https://cdn.pixabay.com/audio/2025/07/30/20-26-37-599_200x200.jpg',
                            artist : [{name : 'ikoliks'}],
                            audio_url : 'https://universal-soundbank.com/sounds/14247.mp3'
                        },
                        {
                            _id : 21,
                            title : 'Happy Fun',
                            thumbnail : 'https://cdn.pixabay.com/audio/2025/08/29/11-03-10-500_200x200.jpg',
                            artist : [{name : 'SoundGalleryByDmitryTaras'}],
                            audio_url : 'https://universal-soundbank.com/sounds/6562.mp3'
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
                <section className="musicList-Container">
                    {musicList.map(({_id, ...music}) => <MusicCard key={_id}  {...music} />)}
                </section>
            )

        )
        
    )

}
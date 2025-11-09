import { useEffect, useRef, useState } from "react";
import { useMusic } from "../../Provider/MusicProvider"
import { ReactComponent as PlayIcon } from '../../assets/PlayIcon.svg'
import { ReactComponent as PauseIcon } from '../../assets/PauseIcon.svg'
 
export const MusicPlayer = () => { 
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0);

    const {selectedMusic : {title, thumbnail, artist, audio_url}} = useMusic();
    const artistList = artist?.map(({name}) => name)?.join(' & ');

    const handleSongPlayPause = () => {
        setIsPlaying(!isPlaying)
    }

    const convertSecondsIntoDuration = (time) => {
        const endTime = time;
        const minutes = Math.floor(endTime/60);
        const seconds = Math.round(endTime%60);

        return `${minutes} : ${seconds<10 ? `0${seconds}` : seconds}`;
    }

    useEffect(() => {
        let timer, interval;

        if(audio_url && audioRef.current) {
            setIsPlaying(true);
            audioRef.current.play();

            timer = setTimeout(() => {
                setEnd(convertSecondsIntoDuration(audioRef.current.duration));
            }, 100);


            interval = setInterval(() => {
                setStart(convertSecondsIntoDuration(audioRef.current.currentTime));
            }, 1000);

        }

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        }

    }, [audio_url]);


    useEffect(() => {

        if (audioRef.current) {
            if(isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        } 

    }, [isPlaying])


    const handleChangeDuration = ({target : {value}}) => {
        audioRef.current.currentTime = value;
        setStart(convertSecondsIntoDuration(audioRef.current.currentTime));
    }
    

    return (

        title ? (
        <section className="music-player">
            <img src={thumbnail} alt={title} height='50' width='50' />
            <div>
                <div>{title}</div>
                <div className="artist-list" title={artistList}>{artistList}</div>
            </div>
            <button className="play-pause" onClick={handleSongPlayPause}>{isPlaying ? <PauseIcon /> : <PlayIcon />}</button>
            <div>{start}</div>
            <div>{end}</div>
            <input type="range" name="range" id="range" min="0" max={audioRef.current?.duration} value={audioRef.current?.currentTime} onChange={handleChangeDuration} />
            <audio src={audio_url} ref={audioRef}></audio>
        </section>
        ) : <></>
        
    )

}
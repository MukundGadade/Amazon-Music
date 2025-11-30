import { useEffect, useRef, useState } from "react";
import { useMusic } from "../../Provider/MusicProvider"
import { ReactComponent as PlayIcon } from '../../assets/PlayIcon.svg'
import { ReactComponent as PauseIcon } from '../../assets/PauseIcon.svg'
import { useLogin } from "../../Provider/LoginProvider";
import { useUserLoginModal } from "../../Provider/UserLoginModalProvider";
import { UserLoginModal } from "../Modal/UserLoginModal";
 
export const MusicPlayer = () => { 
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0);

    const {selectedMusic : {title, thumbnail, artist, audio_url}} = useMusic();
    const {isUsrLoggedIn} = useLogin();
    const {showUserLoginModal, setShowUserLoginModal, musicInterval, setMusicInterval} = useUserLoginModal();
    const artistList = artist?.map(({name}) => name)?.join(' & ');

    const handleSongPlayPause = () => {

        if(!isUsrLoggedIn && audioRef.current.currentTime > 2) {
            setShowUserLoginModal(true);
            return;
        }

        setIsPlaying(!isPlaying)
    }

    const convertSecondsIntoDuration = (time) => {
        const endTime = time;
        const minutes = Math.floor(endTime/60);
        const seconds = Math.round(endTime%60);

        return `${minutes ? minutes : '00'} : ${seconds ? seconds<10 ? `0${seconds}` : seconds : '00'}`;
    }


    useEffect(() => {
        let timer;
    
        if(audio_url && audioRef.current) {
            setIsPlaying(true);
            audioRef.current.play();

            timer = setTimeout(() => {
                setEnd(convertSecondsIntoDuration(audioRef.current.duration));
            }, 100);

            if(!musicInterval) {
                setMusicInterval(setInterval(() => {
                    if(!isUsrLoggedIn && audioRef.current.currentTime > 2) {
                        setShowUserLoginModal(true);
                        return;
                    }
                    
                    if(audioRef.current.currentTime === audioRef.current.duration && isPlaying) {
                        setIsPlaying(false);
                    }
    
                    setStart(convertSecondsIntoDuration(audioRef.current.currentTime));
                }, 1000));
            }

        }

        return () => {
            clearInterval(musicInterval);
            setMusicInterval(null);
            clearTimeout(timer);
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [audio_url])


    useEffect(() => {
        
        if(showUserLoginModal) {
            audioRef.current.pause();
            setIsPlaying(false);
        }

    }, [showUserLoginModal])


    useEffect(() => {

        if (audioRef.current) {
            if(isPlaying) {

                if(!musicInterval) {
                    setMusicInterval(setInterval(() => {
                        if(!isUsrLoggedIn && audioRef.current.currentTime > 2) {
                            setShowUserLoginModal(true);
                            return;
                        }
                        
                        if(audioRef.current.currentTime === audioRef.current.duration && isPlaying) {
                            setIsPlaying(false);
                            clearInterval(musicInterval);
                        }
        
                        setStart(convertSecondsIntoDuration(audioRef.current.currentTime));
                    }, 1000));
                }

                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        } 

        return () => {
            clearInterval(musicInterval);
            setMusicInterval(null);
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPlaying])


    const handleChangeDuration = ({target : {value}}) => {

        if(!isUsrLoggedIn && value > 2) {
            setShowUserLoginModal(true);
            return;
        }

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
            <input type="range" name="range" id="range" min="0" max={audioRef.current ? audioRef.current.duration.toString() : "0"} value={audioRef.current ? audioRef.current.currentTime.toString() : "0"} onChange={handleChangeDuration} />
            <audio src={audio_url} ref={audioRef}></audio>
            <UserLoginModal />
        </section>
        ) : <></>
        
    )

}
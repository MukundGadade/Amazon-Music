import { useMusic } from '../../Provider/MusicProvider';
import style from './MusicCard.module.css'

export const MusicCard = (props) => { 
    const {setSelectedMusic} = useMusic();

    const {title, thumbnail, artist, audio_url} = props;
    const artistList = artist.map(({name}) => name)?.join(' & ');
    
    return (

        <section className={style.musicCard} onClick={() => setSelectedMusic(props)}>
            <img src={thumbnail} className={style.bannerImg} alt={title} height='150' width='150' />
            <div>{title}</div>
            <div className={style.artist} title={artistList}>{artistList}</div>
            {/* <audio src={audio_url} controls></audio> */}
            <audio src={audio_url}></audio>
        </section>
        
    )

}
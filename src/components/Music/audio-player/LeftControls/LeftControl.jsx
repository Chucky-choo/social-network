import Previus from '../../../../assets/iconsAudio/Previus.png'
import play from '../../../../assets/iconsAudio/Play.png'
import pause from '../../../../assets/iconsAudio/pause.png'
import nextSong from '../../../../assets/iconsAudio/nextSong.png'
import s from './LeftControl.module.scss'
import {useDispatch} from "react-redux";
import {PrevOrNextSongIndexAC} from "../../../../redux/music-reducer";


let LeftControl = ({isPlaying, audioRef, playPause}) => {
  const dispatch = useDispatch()


  return (
    <div className={s.body}>
      <img src={Previus} alt=""
           onClick={() => {dispatch(PrevOrNextSongIndexAC(false))}}
      />
      {isPlaying ? <img onClick={() => {playPause()}}
                        src={pause} alt=""
        />
        : <img onClick={() => {playPause()}}
               src={play} alt=""
        />}
      <img src={nextSong} alt=""
           onClick={() => {dispatch(PrevOrNextSongIndexAC(true))}}
      />
      <p>{audioRef.current.currentTime.toFixed(2) + ' / ' + audioRef.current.duration.toFixed(1)}</p>
    </div>
  )


}

export default LeftControl
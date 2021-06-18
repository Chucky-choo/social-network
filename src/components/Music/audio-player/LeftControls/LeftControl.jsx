import Previus from '../../../../assets/iconsAudio/Previus.png'
import play from '../../../../assets/iconsAudio/Play.png'
import pause from '../../../../assets/iconsAudio/pause.png'
import nextSongImg from '../../../../assets/iconsAudio/nextSong.png'
import s from './LeftControl.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {PrevOrNextSongIndexAC, SetIsPLaying} from "../../../../redux/music-reducer";


let LeftControl = ({duration}) => {
  const dispatch = useDispatch()

  const currentTime = useSelector(s => s.music.audio.currentTime)
  const {audio, isPlaying} = useSelector(s => s.music)

  const setTime = (current, duration) => {
    const correctTimeFormat = time => new Date(time * 60000).toUTCString()
      .match(/(\d\d:\d\d)/)[0]

    if (!duration) {
      return '0.00 / 0.00'
    } else {
      return correctTimeFormat(current)
        + ' / ' + correctTimeFormat(duration)
    }
  }

  const nextSong = () => {
    audio.pause()
    dispatch(PrevOrNextSongIndexAC(true))
  }

  const prevSong = () => {
    audio.pause()
    dispatch(PrevOrNextSongIndexAC(false))
  }

  return (
    <div className={s.body}>
      <img src={Previus} alt=""
           onClick={() => {prevSong()}}
      />
       <img onClick={() => {dispatch(SetIsPLaying())}}
            src={isPlaying? pause: play} alt=""
        />
      <img src={nextSongImg} alt=""
           onClick={() => {nextSong()}}
      />
      <p>{setTime(currentTime, duration)}</p>
    </div>
  )
}

export default LeftControl
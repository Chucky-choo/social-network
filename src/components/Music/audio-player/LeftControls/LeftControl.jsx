import s from './LeftControl.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {PrevOrNextSongIndexAC, SetIsPLaying} from "../../../../redux/music-reducer";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import PreviousIcon from '@material-ui/icons/SkipPrevious';
import NextIcon from '@material-ui/icons/SkipNext';



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
      <PreviousIcon onClick={() => {prevSong()}} />
      {isPlaying
        ? <PlayArrowIcon fontSize='large' onClick={() => {dispatch(SetIsPLaying())}}/>
        : <PauseIcon fontSize='large' onClick={() => {dispatch(SetIsPLaying())}} />
      }
      <NextIcon onClick={() => {nextSong()}}/>
      <p className={s.time}>{setTime(currentTime, duration)}</p>
    </div>
  )
}

export default LeftControl
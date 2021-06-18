import s from './audioPlayer.module.scss'
import MiddleControls from "./MiddleControls/MiddleControls";
import LeftControl from "./LeftControls/LeftControl";
import RightControl from "./RightControls/RightControl";
import {useSelector} from "react-redux";


const AudioPlayer = ({onScrub, onScrubEnd}) => {
  const duration = useSelector(store => store.music.audio.duration)
  const trackProgress = useSelector(store => store.music.trackProgress)

  return (
    <div className={s.body}>
      <input type="range"
             value={trackProgress}
             step="1"
             min="0"
             max={duration ? duration : `${duration}`}
             className={s.paperProgres}
             onChange={(e) => onScrub(e.target.value)}
             onMouseUp={onScrubEnd}
             onKeyUp={onScrubEnd}
      />
      <div className={s.footer}>
        <LeftControl duration={duration}/>
        <MiddleControls/>
        <RightControl/>
      </div>
    </div>
  )


}

export default AudioPlayer

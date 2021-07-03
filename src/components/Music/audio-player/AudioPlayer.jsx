import s from './audioPlayer.module.scss'
import MiddleControls from "./MiddleControls/MiddleControls";
import LeftControl from "./LeftControls/LeftControl";
import RightControl from "./RightControls/RightControl";
import {useDispatch, useSelector} from "react-redux";
import {Slider} from "@material-ui/core";
import {SetTrackProgress} from "../../../redux/music-reducer";


const AudioPlayer = ({startTimer, intervalRef, audio}) => {
  const dispatch = useDispatch()

  const duration = useSelector(store => store.music.audio.duration)
  const trackProgress = useSelector(store => store.music.trackProgress)


  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef);
    audio.currentTime = value;
    dispatch(SetTrackProgress());
  };

  const getValue = (value) => Math.floor(value)

  return (
    <div className={s.body}>
      <Slider
        value={trackProgress}
        onChange={(e, n) => onScrub(n)}
        aria-label="custom thumb label"
        min={0}
        max={duration ? duration : `${duration}`}
        step={1}
        onMouseUp={startTimer}
        ValueLabelComponent='auto'
        getAriaLabel={getValue}
        className={s.paperProgress}
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

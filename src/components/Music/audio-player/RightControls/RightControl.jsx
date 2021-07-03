import s from './RightControl.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {ChangeVolume, SetIsMuted, shuffleArr} from "../../../../redux/music-reducer";
import {useEffect} from "react";
import {Slider} from "@material-ui/core";
import VolumeUp from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import RepeatIcon from '@material-ui/icons/Repeat';
import RepeatOneIcon from '@material-ui/icons/RepeatOne';
import ShuffleIcon from '@material-ui/icons/Shuffle';


let RightControl = () => {
  const dispatch = useDispatch()

  const {isMuted, volume, audio, trackIndex} = useSelector(store => store.music)

  const isLoop = () => {
    audio.loop = !audio.loop
  }

  const onChangeVolume = (e) => {
    if (isMuted && e !== 0) {
      dispatch(SetIsMuted())
    } else if (e === '0' || e === 0) {
      dispatch(SetIsMuted())
    }
    dispatch(ChangeVolume(Number(e)))
  }

  const turnOnTheSound = () => {
    if (volume === 0) {
      dispatch(ChangeVolume(0.1))
      dispatch(SetIsMuted())
    } else {
      dispatch(SetIsMuted())
    }
  }

  useEffect(() => {
    audio.volume = volume
  }, [volume])

  return (
    <div className={s.main}>
      <Slider
        value={isMuted ? 0 : volume}
        onChange={(e, newValue) => onChangeVolume(newValue)}
        aria-labelledby="continuous-slider"
        min={0}
        max={1}
        step={0.1}
        className={s.slider}
      />
      <div className={s.groupIcons}>
        {isMuted
          ? <VolumeOffIcon onClick={() => turnOnTheSound()}/>
          : <VolumeUp onClick={() => turnOnTheSound()}/>
        }
        <RepeatIcon onClick={() => {isLoop()}}/>
        <ShuffleIcon onClick={() => {dispatch(shuffleArr(trackIndex))}}/>
      </div>
    </div>)
}

export default RightControl
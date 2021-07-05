import s from './RightControl.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {ChangeVolume, SetIsMuted, SetRepeat, shuffleArr} from "../../../../redux/music-reducer";
import {useEffect} from "react";
import {Slider} from "@material-ui/core";
import VolumeUp from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import RepeatIcon from '@material-ui/icons/Repeat';
import RepeatOneIcon from '@material-ui/icons/RepeatOne';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import classNames from "classnames/bind";
import {bool} from "yup";


let RightControl = () => {
  const dispatch = useDispatch()

  const {isMuted, volume, audio, trackIndex, isRepeat} = useSelector(store => store.music)

  const changeRepeat = () => {
    // if(isRepeat === 1) {
    //   audio.pause()
    // }
    dispatch(SetRepeat(isRepeat + 1))
    //isRepeat === 1 ? audio.loop = true :audio.loop = false
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

  const cx = classNames.bind(s)

  const repeatClasses = cx({
    white_repeat: isRepeat === 1,
    gray_repeat: isRepeat === 0
  })


  useEffect(() => {audio.volume = volume}, [volume])

  const setLoop = boolean => audio.loop = boolean

  useEffect(() => {
   if(isRepeat === 0) {
     setLoop(false)
   }else if(isRepeat === 1) {
     setLoop(false)
   }else if(isRepeat === 2) {
     setLoop(true)
   }
  }, [isRepeat])





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
        {isRepeat === 2
          ? <RepeatOneIcon className={s.white_repeat}
                           onClick={() => {changeRepeat()}}/>
          : <RepeatIcon className={repeatClasses}
                        onClick={() => {changeRepeat()}}/>
        }
        <ShuffleIcon onClick={() => {
          dispatch(shuffleArr(trackIndex))
        }}/>
      </div>
    </div>)
}

export default RightControl
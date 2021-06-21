import s from './RightControl.module.scss'
import turnOn from "../../../../assets/iconsAudio/turn on.png";
import turnOff from "../../../../assets/iconsAudio/turn off the sound.png";
import repeat from "../../../../assets/iconsAudio/reapet.png";
import random from "../../../../assets/iconsAudio/random.png";
import {useDispatch, useSelector} from "react-redux";
import {ChangeVolume, SetIsMuted, shuffleArr} from "../../../../redux/music-reducer";
import {useEffect} from "react";


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
    if(volume === 0) {
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
    <div className={s.body}>
      <input type="range"
             value={isMuted? 0: volume}
             id="seek"
             min={0}
             max={1}
             step={0.1}
             onChange={(e) => onChangeVolume(e.target.value)}
        // onMouseUp={onScrubEnd}
        // onKeyUp={onScrubEnd}

      />
      <img src={isMuted ? turnOff : turnOn} alt=""
           onClick={() => turnOnTheSound()}
      />
      <img src={repeat} alt=""
           onClick={() => {
             isLoop()
           }}
      />
      <img src={random} alt="" onClick={() => {dispatch(shuffleArr(trackIndex))}}/>
      {/*<img src={random} alt=""/>*/}
    </div>
  )


}

export default RightControl
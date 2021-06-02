import s from './RightControl.module.scss'
import turnOn from "../../../../assets/iconsAudio/turn on.png";
import repieat from "../../../../assets/iconsAudio/reapet.png";
import random from "../../../../assets/iconsAudio/random.png";


let RightControl = ({isLoop}) => {



  return (
    <div className={s.body}>
      <input type="range"
             id="seek" value="0"
             max=""
      />
      <img src={turnOn} alt=""/>
      <img src={repieat} alt=""
           onClick={() => {
             isLoop()
           }}
      />
      <img src={random} alt=""/>
    </div>
  )


}

export default RightControl
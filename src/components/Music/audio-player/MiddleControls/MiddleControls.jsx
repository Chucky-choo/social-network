import {useSelector} from "react-redux";
import dislike from "../../../../assets/iconsAudio/dislike.png";
import like from "../../../../assets/iconsAudio/Like.png";
import s from './MiddleControls.module.scss'


const MiddleControls = () => {

  let trackIndex = useSelector(store => store.music.trackIndex)
  let objectAudio = useSelector(store => store.music.musicData[trackIndex])

  return (
    <div className={s.main}>
      <img src={objectAudio.img} alt=""/>
      <div className={s.description}>
        <figcaption>{objectAudio.name}</figcaption>
        <p>{objectAudio.performer}</p>
      </div>
      <img src={dislike} alt=""/>
      <img src={like} alt=""/>
    </div>
  )
}

export default MiddleControls
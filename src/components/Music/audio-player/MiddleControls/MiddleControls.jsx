import {useSelector} from "react-redux";
import dislike from "../../../../assets/iconsAudio/dislike.png";
import like from "../../../../assets/iconsAudio/Like.png";
import s from './MiddleControls.module.scss'


const MiddleControls = () => {

  let nowPlaySongIndex = useSelector(store => store.music.nowPlayingSongIndex)
  let obgectAudio = useSelector(store => store.music.musicData[nowPlaySongIndex])


  return (
    <div className={s.main}>
      <img src={obgectAudio.img} alt=""/>
      <div className={s.description}>
        <figcaption>{obgectAudio.name}</figcaption>
        <p>{obgectAudio.performer}</p>
      </div>
      <img src={dislike} alt=""/>
      <img src={like} alt=""/>
    </div>
  )
}

export default MiddleControls
import {useSelector} from "react-redux";
import s from './MiddleControls.module.scss'
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';


const MiddleControls = () => {

  let trackIndex = useSelector(store => store.music.trackIndex)
  let objectAudio = useSelector(store => store.music.musicData[trackIndex])

  return (
    <div className={s.main}>
      <img src={objectAudio.img} alt=""/>
      <div className={s.description}>
        <p className={s.nameSong}>{objectAudio.name}</p>
        <p>{objectAudio.performer}</p>
      </div>
      <div className={s.icons}>
        <ThumbDownAltIcon/>
        <ThumbUpAltIcon/>
      </div>
    </div>
  )
}

export default MiddleControls
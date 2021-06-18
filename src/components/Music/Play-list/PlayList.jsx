import s from './PlayList.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {ChangeTrackIndexAC} from "../../../redux/music-reducer";


const PlayList = ({musicData}) => {
  const dispatch = useDispatch()
  const {audio} = useSelector(s => s.music)

  const changeIndex = (id) => {
    audio.pause()
    dispatch(ChangeTrackIndexAC(id))
  }

  return (
    <div className={s.main}>
      {musicData.map(item => {
        return (
          <div onClick={() => changeIndex(item.id)}
               key={item.id}
               className={s.body}>
            <img src={item.img} alt=""/>
            <div className={s.info}>
              <figcaption>{item.name}</figcaption>
              <p>{item.performer}</p>
            </div>
            <p className={s.time}>{item.time}</p>
          </div>
        )
      })}
    </div>
  )
}

export default PlayList
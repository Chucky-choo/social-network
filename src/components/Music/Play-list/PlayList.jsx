import s from './PlayList.module.scss'
import {useDispatch} from "react-redux";
import {ChangeNowPlayingSongIndexAC} from "../../../redux/music-reducer";


const PlayList = ({musicData}) => {
  const dispatch = useDispatch()

  return (
    <div className={s.main}>
      {musicData.map(item => {
        return (
          <div onClick={() => dispatch(ChangeNowPlayingSongIndexAC(item.id))}
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
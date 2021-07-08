import s from './PlayList.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {ChangeTrackIndexAC} from "../../../redux/music-reducer";
import classNames from "classnames/bind";
import {useState} from "react";


const PlayList = ({musicData, audio, trackIndex}) => {
  const dispatch = useDispatch()
  // const {audio, trackIndex} = useSelector(s => s.music)

  const changeIndex = (id) => {
    if (id !== musicData[trackIndex].id) {
      audio.pause()
      dispatch(ChangeTrackIndexAC(id))
    }
  }

  const cx = classNames.bind(s)

  const [isMouseEnter, setMouseEnter] = useState(false)

  const ulClasses = cx({
    main: true,
    disable_scroll: !isMouseEnter,
    active_scroll: isMouseEnter
  })

  const liClasses = (id) => {
    return cx({
      body: true,
      elect: id === musicData[trackIndex].id
    })
  }

  return (
    <div className={ulClasses}
         onMouseOver={() => {setMouseEnter(true)}}
         onMouseOut={() => {setMouseEnter(false)}}>
      {musicData.map(item => {
        return (
          <div key={item.id}
               className={liClasses(item.id)}>
            <img src={item.img} alt=""
                 onClick={() => changeIndex(item.id)}/>
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
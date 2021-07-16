import s from './Popup.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setActivePopup} from "../../../redux/post-reducer";

const Popup = ({children}) => {
  const {isActivePopup} = useSelector(store => store.post)
  const dispatch = useDispatch()

  if (!isActivePopup) {
    return null
  }

  return (
    <div className={s.popup}
         onClick={() => dispatch(setActivePopup(false))}>
      <div className={s.popup__modal}
           onClick={e => e.stopPropagation()}>
        { children }
      </div>
    </div>
  )

}

export default Popup
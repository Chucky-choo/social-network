import s from './Popup.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setActivePopup} from "../../redux/post-reducer";
import ReactDom from "react-dom";

const Popup = ({children, isActive}) => {

  const dispatch = useDispatch()

  if (!isActive) {
    return null
  }

  return ReactDom.createPortal(
    <div className={s.popup}
         onClick={() => dispatch(setActivePopup(false))}>
      <div className={s.popup__modal}
           onClick={e => e.stopPropagation()}>
        { children }
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default Popup
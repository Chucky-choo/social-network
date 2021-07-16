import s from './Posts.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setActivePopup, setPopupInfo} from "../../../redux/post-reducer";
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';

const Posts = () => {
  const dispatch = useDispatch()
  const postDate = useSelector(s => s.post.postDate)

  const activePopup = (el) => {
    dispatch(setActivePopup(true));
    dispatch(setPopupInfo(el))
  }

  const postArr = array => array.map(el => {
      return (
        <div className={s.body__photo}
             onClick={() => activePopup(el)}>
          <img src={el.photo} alt=""
               className={s.photo}/>
          <div className={s.hidden_info}>
            <FavoriteIcon/>
            <p>{el.likes}</p>
            <CommentIcon/>
            <p>{el.comments}</p>
          </div>
        </div>
      )
    }
  )

  return (
    <div className={s.body}>
      {postArr(postDate)}
    </div>
  )
}

export default Posts
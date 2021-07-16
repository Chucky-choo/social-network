import {addPhotoToData, putPostPhoto} from "../../../redux/post-reducer";
import {useDispatch} from "react-redux";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import s from './NewPost.module.scss'


const NewPost = () => {
  const dispatch = useDispatch()

  const PostPhotoSelected = (e) => {
    if (e.target.files.length) {
      dispatch(addPhotoToData(e.target.files[0]))
    }
  }

  const triggerInput = () => {
    const input = document.querySelector('input')
    input.click()
  }


  return (
    <div className={s.newPost}>
      <Button
        variant="contained"
        color="default"
        onClick={triggerInput}
        className={s.button}
        startIcon={<CloudUploadIcon/>}
      >
        Upload
      </Button>
      <input type='file' onChange={PostPhotoSelected}/>
    </div>
  )
}

export default NewPost;
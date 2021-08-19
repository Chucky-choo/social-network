import {addPhotoToData, putPostPhoto} from "../../../redux/post-reducer";
import {useDispatch} from "react-redux";
import s from './NewPost.module.scss'
import React from "react";
import BtnStyled from "../../../Elements/BtnStyled/BtnStyled";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";


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
      <BtnStyled onClick={triggerInput}>
        <AddAPhotoIcon suze='small'/>
        Upload
      </ BtnStyled>
      <input type='file' onChange={PostPhotoSelected}/>
    </div>
  )
}

export default NewPost;
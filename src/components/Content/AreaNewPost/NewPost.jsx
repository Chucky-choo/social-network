import React from "react";
import s from "./NewPost.module.css"


let NewPost = (props) => {

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addpost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.PostChange(text)
  }

  return (
    <div className={s.main}>
      <p>My New post</p>
      <input type="text"
             placeholder={"новий пост"}
             ref={newPostElement}
             value={props.newPostValue}
             onChange={onPostChange}
      />
      <button onClick={onAddPost}>
        send
      </button>
    </div>
  );
}

export default NewPost;
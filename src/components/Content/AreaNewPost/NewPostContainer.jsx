import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/post-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";


let mapStoreToProps = (state) => {
  return {
    newPostValue: state.post.newPostValue
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addpost: () => dispatch(addPostActionCreator()),
    PostChange: (text) => dispatch(onPostChangeActionCreator(text))
  }
}

const AreaNewPost = connect(mapStoreToProps, mapDispatchToProps)(NewPost)

export default AreaNewPost;
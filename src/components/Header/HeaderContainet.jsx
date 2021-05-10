import {connect} from "react-redux";
import Header from "./Header";
import {deleteAuth} from "../../redux/header-reducer";


let mapStateToProps = (store) => {
  return {
    auth: store.auth,
    photoUsers: store.auth.profileUserData.photos.small,
    userId: store.auth.profileUserData.userId,
  }
}

export default connect(mapStateToProps, {deleteAuth})(Header)



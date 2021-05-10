import {putPhoto, putProfile} from "../../redux/profile-reducer";
import {compose} from "redux";
import {connect} from "react-redux";
import EditingProfile from "./EditingProfile";


let mapStateToProps = (store) => {
  return {
    profileUserData: store.auth.profileUserData
  }
}

export default compose(
  connect(mapStateToProps,
    {putPhoto, putProfile}),
)(EditingProfile)

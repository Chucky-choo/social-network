import {addMassageActionCreator, changeTextActionCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import RedirectHoc from "../../HOC/hoc";
import {compose} from "redux";


let mapStateToProps = (state) => {
  return {dialog: state.dialog}
}
export default compose(
  connect(mapStateToProps,
    {addMessage: addMassageActionCreator, observeNewValue: changeTextActionCreator}),
  RedirectHoc
)(Dialogs)


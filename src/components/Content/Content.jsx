import s from './Content.module.css';
import AreaNewPost from "./AreaNewPost/NewPostContainer";
import Posts from "./Posts/Posts";
import ProfileContainer from "./Profile/ProfileContaine";
import TitlePicture from "./Profile/titlePicture/TitlePicture";

let Content = ({pictureArr, statusValue, profileUserData, updateStatus, postDate}) => {

  return (
    <div className={s.main}>
      <TitlePicture pictureArr={pictureArr}/>
      <ProfileContainer profileUserData={profileUserData}
                        statusValue={statusValue}
                        updateStatus={updateStatus}
      />
      <AreaNewPost/>
      <Posts postDate={postDate}/>
    </div>);

}

export default Content



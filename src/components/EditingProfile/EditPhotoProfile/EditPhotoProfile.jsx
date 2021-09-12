import React from 'react';
import s from './EditPhotoProfile.module.scss'
import {putPhoto} from "../../../redux/profile-reducer";
import {useDispatch} from "react-redux";
import Popup from "../../../Elements/Popup/Popup";

const EditPhotoProfile = ({profileUserData}) => {
	const dispatch = useDispatch()

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {

      dispatch(putPhoto(e.target.files[0]))
    }
  }

	const triggerInput = () => {
		const input = document.querySelector('input')
		input.click()
	}

	return (

		<div className={s.editAva}>
			<img src={profileUserData.avatar_url} alt=''/>
			<div>
				<p>{profileUserData.fullName}</p>
				<p className={s.changePhotoBtn} onClick={triggerInput}>Chang Photo Profile</p>
				{<input type="file" onChange={onMainPhotoSelected}/>}
			</div>
			<Popup>

			</Popup>
		</div>
	);
};

export default EditPhotoProfile;

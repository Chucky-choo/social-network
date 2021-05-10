import React, {useEffect} from "react";
import Paginator from "../Paginator/Paginator";
import User from "./User/User";
import {
  getBlockFollow, getCurrentPage, getIsFetching,
  getPageSize, getTotalCount, getUsersReselect
} from "../../redux/selektor";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../Gif/Preloader/Praloder";
import {changPage, getUsersThunkCreators} from "../../redux/users-reducer";


const Users = () => {

  const totalCount = useSelector(getTotalCount)
  const usersData = useSelector(getUsersReselect)
  const pageSize = useSelector(getPageSize)
  const currentPage = useSelector(getCurrentPage)
  const isFetching = useSelector(getIsFetching)
  const blockFollow = useSelector(getBlockFollow)

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getUsersThunkCreators(pageSize, currentPage))
  }, [])

  const ChangePageNow = (newPage) => {
    dispatch(changPage(newPage))
    dispatch(getUsersThunkCreators(pageSize, newPage))
  }



  return (
    <div>
      {isFetching && <Preloader/>}
      <Paginator currentPage={currentPage}
                 ChangePageNow={ChangePageNow}
                 totalCount={totalCount}
                 pageSize={pageSize}
      />
      <User usersData={usersData}
            blockFollow={blockFollow}
      />
    </div>)
}

export default Users
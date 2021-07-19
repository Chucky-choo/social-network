import React, {useEffect} from "react";
import Paginator from "../../Elements/Paginator/Paginator";
import User from "./User/User";
import {
  getBlockFollow, getCurrentPage, getIsFetching,
  getPageSize, getTotalCount, getUsersReselect
} from "../../redux/selektor";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../Gif/Preloader/Praloder";
import {changPage, getUsersThunkCreators} from "../../redux/users-reducer";
import FilterUserData from "./FilterUserData/FilterUserData";

const Users = () => {
  const totalCount = useSelector(getTotalCount)
  const usersData = useSelector(getUsersReselect)
  const pageSize = useSelector(getPageSize)
  const currentPage = useSelector(getCurrentPage)
  const isFetching = useSelector(getIsFetching)
  const blockFollow = useSelector(getBlockFollow)
  const {term, friend} = useSelector(store => store.users)

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getUsersThunkCreators(pageSize, currentPage, term, friend))
  }, [])

  const ChangePageNow = (newPage) => {
    dispatch(changPage(newPage))
    dispatch(getUsersThunkCreators(pageSize, newPage,  term, friend))
  }


  return (
    <div>
      {isFetching && <Preloader/>}
      <Paginator currentPage={currentPage}
                 ChangePageNow={ChangePageNow}
                 totalCount={totalCount}
                 pageSize={pageSize}
      />
     <FilterUserData />
      <User usersData={usersData}
            blockFollow={blockFollow}
      />
    </div>)
}

export default Users
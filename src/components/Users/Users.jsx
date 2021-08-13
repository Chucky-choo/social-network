import React, {useEffect} from "react";
import Paginator from "./Paginator/Paginator";
import User from "./User/User";
import {
  getBlockFollow, getCurrentPage, getIsFetching,
  getPageSize, getTotalCount, getUsersReselect
} from "../../redux/selektor";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../../Elements/Preloader/Praloder";
import {changPage, getUsersThunkCreators} from "../../redux/users-reducer";
import FilterUserData from "./FilterUserData/FilterUserData";
import {NumberParam, StringParam, useQueryParams} from "use-query-params";


const Users = () => {
  const totalCount = useSelector(getTotalCount)
  const usersData = useSelector(getUsersReselect)
  const pageSize = useSelector(getPageSize)
  const currentPage = useSelector(getCurrentPage)
  const isFetching = useSelector(getIsFetching)
  const blockFollow = useSelector(getBlockFollow)
 // const {term, friend} = useSelector(store => store.users)

  const dispatch = useDispatch()


  const [query, setQuery] = useQueryParams({
    count: NumberParam,
    page: NumberParam,
    term: StringParam,
    friend: StringParam,
  });
const {count, page, term, friend } = query;



  useEffect(() => {dispatch(getUsersThunkCreators(count || 25, page || 1, term, friend))}, [])

  return (
    <div>
      <FilterUserData setQuery={setQuery}
                      query={query}
      />
      {isFetching
        ? <Preloader/>
        : <>
          {totalCount === 0 && <p>Not found</p>}
          <User usersData={usersData}
                blockFollow={blockFollow}/>
          <Paginator currentPage={currentPage}
                     totalCount={totalCount}
                     pageSize={pageSize}
                     setQuery={setQuery}
          />
        </>
      }
    </div>)
}

export default Users
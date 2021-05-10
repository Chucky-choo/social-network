import {createSelector} from "reselect";


const getUsers = (store) => store.users.usersData

export const getUsersReselect = createSelector(getUsers,
  (users) => {
    return users.filter(u => true)
  })


export const getTotalCount = (store) => store.users.totalCount
export const getPageSize = (store) => store.users.pageSize
export const getCurrentPage = (store) => store.users.currentPage
export const getIsFetching = (store) => store.users.isFetching
export const getBlockFollow = (store) => store.users.blockFollow

import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from "./../../redux/users-reducer";
import { React } from "react";

let mapStateToProps = (state) => {
  
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);

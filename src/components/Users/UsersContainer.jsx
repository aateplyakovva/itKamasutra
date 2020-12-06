import { connect } from "react-redux";
import Users from "./Users";
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from "./../../redux/users-reducer";
import  React  from "react";
import * as axios from 'axios';
import Loader from './../common/Loader/loader.component';

class UsersContainer extends React.Component {

  componentDidMount(){
    this.props.toggleIsFetching(true)
    axios.get(`http://localhost:3004/users?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`)
      .then(response => {        
        // debugger
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data)
        this.props.setTotalUsersCount(response.headers["x-total-count"])
      })        
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    axios.get(`http://localhost:3004/users?_page=${pageNumber}&_limit=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)     
        this.props.setUsers(response.data)
    })
  }

  render() {    
    return (
      <>
        {this.props.isFetching 
          ? <Loader/> 
          : <Users 
            users={this.props.users}
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
          />
        }        
      </>
    );
  }
}

let mapStateToProps = (state) => {  
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainer);

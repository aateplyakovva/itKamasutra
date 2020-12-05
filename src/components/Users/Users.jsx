import * as axios from 'axios';
import React from "react";
import styles from "./Users.module.css";

const avaurl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcdS2G0_159FyiX7C5I-ed1aw2Nj_R3t1P9g&usqp=CAU";


class Users extends React.Component {
  // constructor(props) {
  //   super(props)
    
  // }

  componentDidMount(){
    axios.get(`http://localhost:3004/users?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`)
      .then(response => {        
        debugger
        this.props.setUsers(response.data)
        this.props.setTotalUsersCount(response.headers["x-total-count"])
      })  
      
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`http://localhost:3004/users?_page=${pageNumber}&_limit=${this.props.pageSize}`)
      .then(response => {          
        this.props.setUsers(response.data)
    })
  }

  render() {
    
    let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
    // let pages = Array(pagesCount).fill(null)
    let pages = []
    for ( let i=1; i <= pagesCount; i++) {
      pages.push(i)
    }
    return (
      <div >
        <div className={styles.paginator}>
          {pages.map((p) => {
            return <span 
              onClick={(e) => this.onPageChanged(p)}
              className={this.props.currentPage === p && styles.selectedPage }> {p} </span>
          } )}
        
        
        </div>
        {this.props.users.map((u) => (
          <div key={u.id} className={styles.userCard}>
            <span>
              <div>
                <img
                  src={`https://robohash.org/${u.id}?set=set5&size=180x180` || avaurl}
                  className={styles.avatar}
                  alt="no avatar ):"
                />
              </div>
              <div>
                {u.followed
                  ? (<button onClick={() => { this.props.unfollow(u.id) }}>unfollow</button>)
                  : (<button onClick={() => { this.props.follow(u.id) }}>follow</button>)}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>u.location.country</div>
                <div>u.location.city</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

/*functional component*/

// const Users = (props) => {
//   if (props.users.length === 0){
    
//     axios.get("http://localhost:3004/users")
//     .then(response => {
        
//       props.setUsers(response.data)
//     })
    

//   }

//   return (
//     <div >
//       {props.users.map((u) => (
//         <div key={u.id} className={styles.userCard}>
//           <span>
//             <div>
//               <img
//                 src={`https://robohash.org/${u.id}?set=set5&size=180x180` || avaurl}
//                 className={styles.avatar}
//                 alt="no avatar ):"
//               />
//             </div>
//             <div>
//               {u.followed
//                 ? (<button onClick={() => { props.unfollow(u.id) }}>unfollow</button>)
//                 : (<button onClick={() => { props.follow(u.id) }}>follow</button>)}
//             </div>
//           </span>
//           <span>
//             <span>
//               <div>{u.name}</div>
//               <div>{u.status}</div>
//             </span>
//             <span>
//               <div>"u.location.country"</div>
//               <div>"u.location.city"</div>
//             </span>
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// };

export default Users;

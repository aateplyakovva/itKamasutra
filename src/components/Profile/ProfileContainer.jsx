import React, { Component } from "react";
import Profile from "./Profile";
import * as axios from 'axios'
import { setProfile } from '../../redux/profile-reducer'
import { connect } from 'react-redux';

class ProfileContainer extends Component {

	componentDidMount() {
		axios.get(`http://localhost:3004/profile/`)
   		.then(response => {
			this.props.setProfile(response.data)
    })
	}

	render() {
		return (
			<div>
				<Profile {...this.props} profile={this.props.profile}/>
			</div>
		);
	}
}

let mapStateToProps = (state) => ({  
	profile: state.profilePage.profile,
  })

export default connect( mapStateToProps, { setProfile } )(ProfileContainer)
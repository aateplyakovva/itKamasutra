import React, { Component } from "react";
import Profile from "./Profile";
import * as axios from 'axios'
import { setProfile } from '../../redux/profile-reducer'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

class ProfileContainer extends Component {

	

	componentDidMount() {
		debugger
		let userId = this.props.match.params.userId ;
		if (!userId) {
			userId = 2
		}
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)	//it-kamasutra API
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

let ProfileContainerWithRouter = withRouter(ProfileContainer)

export default connect( mapStateToProps, { setProfile } )(ProfileContainerWithRouter)
import React, { Component } from 'react';
import { withAuth } from "./../lib/Auth";
import AdminPage from "./AdminPage";
import Home from "./Home";

class CheckIfAdmin extends Component {
	state={
			user: null
	}
	componentDidMount(){
			this.setState({user: this.props.user})
	}
	render() {
		return (
			<div>
				{
					this.state.user?
							this.state.user.isAdmin?<AdminPage />:<Home/>
					:null
				}
			</div>
		)
	}
}

export default withAuth(CheckIfAdmin);
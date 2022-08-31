import React from "react";
import CountUsers from "./CountUsers";
import GetUsers from "./GetUsers";
import SaveUser from "./SaveUser";

export default function User(props) {

	return (
		<div className="user">
			<div className="user__name">Name:{props.user.name}</div>
			<div className="user__age">Age:{props.user.age}</div>
			{/* DELETE USER */}
			<span className="user__delete" onClick={(event) => {
				let detach = event.target.closest('.user')
				detach.parentNode.removeChild(detach)

				CountUsers()

				localStorage.removeItem(props.user.id) // delete user
			}}>X</span>
		</div>
	)
}
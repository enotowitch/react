import React from "react";

export default function User(props) {

	return (
		<div className="user">
			<div className="user__name">Name:{props.user.name}</div>
			<div className="user__age">Age:{props.user.age}</div>
			<span className="user__delete" onClick={(event) => {
				let detach = event.target.closest('.user')
				detach.parentNode.removeChild(detach)

				let findUsersStr = document.cookie.match(/users=\[.*?\]/)[0].replace('users=', '') // get string
				let users = JSON.parse(findUsersStr); // to array
				users.splice(props.id, 1) // array - detached id
				let usersStr = JSON.stringify(users) // back to string
				document.cookie = `users=${usersStr}` // save
			}}>X</span>
		</div>
	)
}
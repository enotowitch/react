import React from "react";

export default function User(props) {

	return (
		<div className="user">
			<div className="user__name">Name:{props.user.name}</div>
			<div className="user__age">Age:{props.user.age}</div>
			<span className="user__delete">X</span>
			<input className="user__id" type="hidden" value={props.user.id} />
		</div>
	)
}
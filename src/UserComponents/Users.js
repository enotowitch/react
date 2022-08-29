import React from "react";
import User from "./User";


export default function Users(props) {
	return (
		<div className="users">
			{props.users.map(elem => {
				return < User user={elem} key={elem.id} />
			})}
		</div>
	)
}
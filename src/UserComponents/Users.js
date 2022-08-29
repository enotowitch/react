import React from "react";
import User from "./User";


export default function Users(props) {
	return (
		<div className="users">
			{props.users.map((elem, index) => {
				return < User user={elem} id={index} key={index} />
			})}
		</div>
	)
}
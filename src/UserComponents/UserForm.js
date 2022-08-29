import React from "react";

export default function UserForm() {
	return (
		<div>
			<input className="name" type="text" placeholder="user name" />
			<input className="age" type="number" placeholder="user age" />
			<input className="add" type="submit" value="add" />
		</div>
	)
}
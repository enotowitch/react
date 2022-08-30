import { render } from "@testing-library/react";
import React, { useState } from "react";
import GetUsers from "./GetUsers";
import SaveUser from "./SaveUser";
import User from "./User"

let users = []

export default function UserForm() {

	let existingUsers = GetUsers()

	let [userCount, setUserCount] = useState(existingUsers.length)
	function incrementUsers() {
		setUserCount(userCount + 1)
	}

	return (
		<div>
			<input className="name" type="text" placeholder="user name" />
			<input className="age" type="number" placeholder="user age" />
			{/* ADD USER */}
			<input className="add" type="submit" value="add" onClick={() => {
				let name = document.querySelector('.name').value
				let age = document.querySelector('.age').value
				document.querySelector('.name').value = ""
				document.querySelector('.age').value = ""

				existingUsers.push({
					"name": name,
					"age": age,
				})
				SaveUser(existingUsers)

				render(
					<User user={{ "name": name, "age": age }} />
				)

				{ incrementUsers() }

			}} />
			<div className="counter">Users: {userCount}</div>
		</div>
	)
}
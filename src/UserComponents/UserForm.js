import { render } from "@testing-library/react";
import React, { useState } from "react";
import GetUsers from "./GetUsers";
import SaveUser from "./SaveUser";
import User from "./User"
import CountUsers from "./CountUsers"

let users = []

export default function UserForm() {

	let existingUsers = GetUsers()

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

				CountUsers()

				existingUsers.push({
					"name": name,
					"age": age,
				})
				SaveUser(existingUsers)

				render(
					<User user={{ "name": name, "age": age }} />
				)

			}} />
			<div className="counter">Users: </div>
		</div>
	)
}
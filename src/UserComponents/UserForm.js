import { render } from "@testing-library/react";
import React, { useState } from "react";
import GetUsers from "./GetUsers";
import SaveUser from "./SaveUser";
import User from "./User"
import CountUsers from "./CountUsers"



export default function UserForm() {

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
				let id = document.querySelectorAll('.user').length

				CountUsers()

				SaveUser(name, age, id)

				render(
					<User user={{ "name": name, "age": age, "id": id }} />
				)

			}} />
			{/* TEST */}
			<input className="test" type="submit" value="test" onClick={() => {
				let id = document.querySelectorAll('.user').length

				CountUsers()

				SaveUser(id, id, id)

				render(
					<User user={{ "name": id, "age": id, "id": id }} />
				)

			}} />
			<div className="counter">Users: </div>
		</div>
	)
}
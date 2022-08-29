import React from "react";

let users = []

export default function UserForm() {
	return (
		<div>
			<input className="name" type="text" placeholder="user name" />
			<input className="age" type="number" placeholder="user age" />
			<input className="add" type="submit" value="add" onClick={() => {
				let name = document.querySelector('.name').value
				let age = document.querySelector('.age').value
				document.querySelector('.name').value = ""
				document.querySelector('.age').value = ""
				
				users.push({
					"name": name,
					"age": age,
				})
				let usersStr = JSON.stringify(users)
				document.cookie = `users=${usersStr}`
			}} />
		</div>
	)
}
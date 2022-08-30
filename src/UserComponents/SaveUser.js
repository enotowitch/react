import React from "react";

export default function SaveUser(users) {
	let usersStr = JSON.stringify(users) // back to string
	document.cookie = `users=${usersStr}` // save
}
import React from "react";

export default function GetUsers() {
	var findUsersStr = document.cookie.match(/users=\[.*?\]/)[0].replace('users=', '') // get string
	var users = JSON.parse(findUsersStr); // to array

	return users
}

import React from "react";

export default function SaveUser(name, age, id) {
	localStorage.setItem(`${id}`, `"name":"${name}", "age":"${age}", "id":"${id}"`)
}
import React from "react";

export default function GetUsers() {
	let arr = []
	// todo 999
	for (let i = 0; i < 999; i++) {
		if (localStorage[i] != undefined) {
			let str = "{" + localStorage[i] + "}";
			let obj = JSON.parse(str)
			arr.push(obj)
		}

	}

	return arr
}

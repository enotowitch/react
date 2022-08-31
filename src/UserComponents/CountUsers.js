export default function CountUsers() {
	let userCount = document.querySelectorAll('.user').length
	document.querySelector('.counter').innerHTML = `Users: ${userCount}`
}
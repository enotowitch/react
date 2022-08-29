import React from 'react';
import Users from './UserComponents/Users';
import UserForm from './UserComponents/UserForm';

function App() {

	let findUsersStr = document.cookie.match(/users=\[.*?\]/)[0].replace('users=', '')
	let users = JSON.parse(findUsersStr);

	return (
		<div className='wrapper'>
			<UserForm />
			<Users users={users} />
		</div>
	)
}


export default App
import React from 'react';
import Users from './UserComponents/Users';
import UserForm from './UserComponents/UserForm';
import GetUsers from './UserComponents/GetUsers';

function App() {

	if (document.cookie == '') {
		document.cookie = `users=[]`
		var users = []
	} else {
		var users = GetUsers()
	}


	return (
		<div className='wrapper'>
			<UserForm />
			<Users users={users} />
		</div>
	)
}


export default App
import React from 'react';
import Users from './UserComponents/Users';
import UserForm from './UserComponents/UserForm';
import GetUsers from './UserComponents/GetUsers';
import CountUsers from './UserComponents/CountUsers';

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
			{setTimeout(() => CountUsers(), 1)}
		</div>
	)
}


export default App
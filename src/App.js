import React from 'react';
import Users from './UserComponents/Users';
import UserForm from './UserComponents/UserForm';

function App() {

	let users = [
		{ "id": 1, "name": "name1", "age": 18 },
		{ "id": 2, "name": "name2", "age": 19 },
		{ "id": 3, "name": "name3", "age": 21 }
	]


	return (
		<div className='wrapper'>
			<UserForm />
			<Users users={users} />
		</div>
	)
}


export default App
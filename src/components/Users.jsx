import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const users = await res.json();
    console.log(users);
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log(users);
  return (
    <div>
      <h5>Users</h5>

      {users.length === 0 && <Skeleton height={500} />}

      {users.slice(0, 4).map((user) => (
        <div className='card' key={user.id}>
          <h5>Name: {user.name}</h5>
          <h5>Username: {user.username}</h5>
          <p>Company: {user.company.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;

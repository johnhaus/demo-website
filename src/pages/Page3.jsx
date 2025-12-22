import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Page3() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {

          // throw new Error('Custom simulated error');
          
          setUsers(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setError('Failed to fetch data');
          setLoading(false);
        });
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page3;

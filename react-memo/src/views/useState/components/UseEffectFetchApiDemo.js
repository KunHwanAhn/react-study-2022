import { useState, useEffect } from 'react';

import UserListTable from './UserListTable';

export default function UseEffectFectchApiDemo() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then(setUsers)
      .catch(console.error);
  }, []);

  return (<>
    <h3>UseEffectFecthApiDemo</h3>
    <UserListTable users={users} />
  </>);
}

// pages/index.tsx

import UserList from '@/components/user-list';
import { useState } from 'react';

// Define an interface for a User
interface User {
  id: number;
  name: string;
}

// A simple functional component
const Home = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [userName, setUserName] = useState<string>('');

  // A function that has inconsistent return types
  const addUser = () => {
    if (userName) {
      const newUser: User = {
        id: users.length + 1,
        name: userName,
      };
      setUsers([...users, newUser]);
      setUserName('');
      return; // Missing return type
    }
    return 'User not added'; // Inconsistent return types
  };

  // Complex function logic that can be simplified
  const complexFunction = () => {
    let result = 0;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        result += i * j;
      }
    }
    return result; // This function is unnecessarily complex
  };

  return (
    <div>
      <h1>Next.js CodeFactor Example</h1>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter user name"
      />
      <button onClick={addUser}>Add User</button>
      <button onClick={complexFunction}>Complex Function</button>
      <UserList users={users} />
    </div>
  );
};

export default Home;

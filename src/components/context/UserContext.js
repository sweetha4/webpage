import React, { createContext, useState } from 'react';

// Create the context
const UserContext = createContext();

// Create the provider for the context
const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');  // State for the username

  // Function to set the username (login)
  const login = (newUsername) => {
    setUsername(newUsername);
  };

  // Function to clear the username (logout)
  const logout = () => {
    setUsername('');
  };

  return (
    <UserContext.Provider value={{ username, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

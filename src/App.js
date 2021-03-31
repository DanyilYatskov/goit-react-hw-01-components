import React from 'react';
import user from './components/Profile/user.json';
import Profile from './components/Profile/';
import Statistics from './components/Statistics';
function App() {
  return (
    <div className="App">
      <Profile userInfo={user} />
      <Statistics />
    </div>
  );
}

export default App;

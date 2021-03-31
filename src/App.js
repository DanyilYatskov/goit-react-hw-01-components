import React from 'react';
import user from './components/Profile/user.json';
import Profile from './components/Profile/';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import friends from './components/FriendList/friends.json';
import statsData from './components/Statistics/statistical-data.json';
import transactions from './components/TransactionHistory/transactions.json';
function App() {
  return (
    <div className="App">
      <Profile userInfo={user} />
      <Statistics statsData={statsData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export default App;

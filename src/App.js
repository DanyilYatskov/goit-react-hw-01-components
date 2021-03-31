import React from "react";
import user from "./components/Profile/user.json";
import Profile from "./components/Profile/";
console.log(user);
function App() {
  return (
    <div className="App">
      <Profile userInfo={user} />
    </div>
  );
}

export default App;
